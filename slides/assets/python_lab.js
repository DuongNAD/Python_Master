/* ═══════════════════════════════════════════════════════════════════════════
   Python Master 2026 · Interactive Lab, Code Runner & Algorithm Visualizers
   Hỗ trợ chế độ kép:
     1) CPython Backend: Kết nối tự động với `launch_hub.py` qua REST API
     2) Offline Skulpt Engine: Chạy Python 100% độc lập ngay trong trình duyệt
   ═══════════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  // Pure Python heapq implementation for Skulpt offline fallback
  const PURE_PY_HEAPQ = `
def heappush(heap, item):
    heap.append(item)
    _siftdown(heap, 0, len(heap)-1)

def heappop(heap):
    lastelt = heap.pop()
    if heap:
        returnitem = heap[0]
        heap[0] = lastelt
        _siftup(heap, 0)
        return returnitem
    return lastelt

def heapify(x):
    n = len(x)
    for i in reversed(range(n//2)):
        _siftup(x, i)

def _siftdown(heap, startpos, pos):
    newitem = heap[pos]
    while pos > startpos:
        parentpos = (pos - 1) >> 1
        parent = heap[parentpos]
        if newitem < parent:
            heap[pos] = parent
            pos = parentpos
            continue
        break
    heap[pos] = newitem

def _siftup(heap, pos):
    endpos = len(heap)
    startpos = pos
    newitem = heap[pos]
    childpos = 2*pos + 1
    while childpos < endpos:
        rightpos = childpos + 1
        if rightpos < endpos and not heap[childpos] < heap[rightpos]:
            childpos = rightpos
        heap[pos] = heap[childpos]
        pos = childpos
        childpos = 2*pos + 1
    heap[pos] = newitem
    _siftdown(heap, startpos, pos)
`;

  let serverOnline = null; // null: chưa kiểm tra, true: có server, false: offline

  async function checkServerAvailable() {
    if (serverOnline !== null) return serverOnline;
    if (!window.location.protocol.startsWith('http')) {
      serverOnline = false;
      return false;
    }
    try {
      const resp = await fetch('/api/status', { method: 'GET', signal: AbortSignal.timeout(1200) });
      if (resp.ok) {
        serverOnline = true;
        return true;
      }
    } catch (e) {
      serverOnline = false;
    }
    return false;
  }

  function initSkulptIfNeeded() {
    if (typeof window.Sk === 'undefined') return false;
    if (!window.__skulpt_ready) {
      window.Sk.configure({
        output: function (text) {
          if (window.__sk_output_target) {
            window.__sk_output_target(text);
          }
        },
        read: function (x) {
          if (window.Sk.builtinFiles === undefined || window.Sk.builtinFiles['files'][x] === undefined) {
            throw new Error('File not found: ' + x);
          }
          return window.Sk.builtinFiles['files'][x];
        },
        __future__: window.Sk.python3
      });

      if (window.Sk.builtinFiles && window.Sk.builtinFiles.files) {
        window.Sk.builtinFiles.files['src/lib/heapq.py'] = PURE_PY_HEAPQ;
      }
      window.__skulpt_ready = true;
    }
    return true;
  }

  // Chạy code Python: Thử Server CPython trước, nếu không có thì fallback sang Skulpt
  window.runPythonCode = async function (code) {
    const t0 = performance.now();
    const hasServer = await checkServerAvailable();

    if (hasServer) {
      try {
        const resp = await fetch('/api/run_code', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code: code })
        });
        const res = await resp.json();
        const t1 = performance.now();
        return {
          success: res.success,
          stdout: res.stdout || '',
          stderr: res.stderr || '',
          time_ms: res.time_ms || Math.round(t1 - t0),
          engine: 'CPython 3 (launch_hub server)'
        };
      } catch (err) {
        // Fallback sang Skulpt nếu request lỗi
        serverOnline = false;
      }
    }

    // Chạy trên Skulpt trong trình duyệt
    if (initSkulptIfNeeded()) {
      let outputBuffer = '';
      window.__sk_output_target = function (t) {
        outputBuffer += t;
      };

      try {
        await window.Sk.misceval.asyncToPromise(function () {
          return window.Sk.importMainWithBody('<stdin>', false, code, true);
        });
        const t1 = performance.now();
        return {
          success: true,
          stdout: outputBuffer || '(Chương trình thực thi thành công và không in ra gì)',
          stderr: '',
          time_ms: Math.round(t1 - t0),
          engine: 'Skulpt Python 3 (Offline Engine)'
        };
      } catch (e) {
        const t1 = performance.now();
        let errMsg = e.toString();
        if (e.traceback && e.traceback.length) {
          const tb = e.traceback.map(item => `  File "${item.filename}", line ${item.lineno}`).join('\n');
          errMsg = `${tb}\n${errMsg}`;
        }
        return {
          success: false,
          stdout: outputBuffer,
          stderr: errMsg,
          time_ms: Math.round(t1 - t0),
          engine: 'Skulpt Python 3 (Offline Engine)'
        };
      } finally {
        window.__sk_output_target = null;
      }
    }

    return {
      success: false,
      stdout: '',
      stderr: 'Không tìm thấy môi trường thực thi Python (Skulpt chưa tải & Server chưa bật).\nKhuyên dùng: Mở terminal tại thư mục dự án và chạy: `py launch_hub.py`',
      time_ms: 0,
      engine: 'None'
    };
  };

  // Khởi tạo các khung chạy code trên Slide
  function initCodeRunners() {
    document.querySelectorAll('.py-runner').forEach((runner) => {
      if (runner.dataset.wired) return;
      runner.dataset.wired = '1';

      const editor = runner.querySelector('.py-editor');
      const outBox = runner.querySelector('.py-out');
      const runBtn = runner.querySelector('.btn-run');
      const resetBtn = runner.querySelector('.btn-reset');
      const originalCode = editor ? (editor.value || editor.textContent || '').trim() : '';

      if (editor && editor.tagName.toLowerCase() !== 'textarea') {
        const ta = document.createElement('textarea');
        ta.className = 'py-editor';
        ta.value = originalCode;
        ta.spellcheck = false;
        editor.replaceWith(ta);
      }

      if (runBtn) {
        runBtn.addEventListener('click', async () => {
          const curEd = runner.querySelector('.py-editor');
          const code = curEd ? curEd.value : '';
          if (!outBox) return;

          runBtn.disabled = true;
          const origText = runBtn.textContent;
          runBtn.textContent = 'Đang chạy ⏳';
          outBox.innerHTML = '<span style="color:var(--cyan)">Đang thông dịch & thực thi mã nguồn Python...</span>';

          try {
            const res = await window.runPythonCode(code);
            let badge = `<span class="chip tiny ${res.success ? 'green' : 'rose'}" style="margin-bottom:0.4rem; font-size:0.75rem; display:inline-block;">⚡ ${res.engine} · ${res.time_ms}ms</span>`;
            
            if (res.success) {
              outBox.innerHTML = badge + `<pre style="margin:0; font-family:var(--mono); color:#e0f2fe; white-space:pre-wrap;">${escapeHtml(res.stdout)}</pre>`;
            } else {
              let outHtml = badge;
              if (res.stdout) {
                outHtml += `<pre style="margin:0 0 0.5rem 0; font-family:var(--mono); color:#e0f2fe; white-space:pre-wrap;">${escapeHtml(res.stdout)}</pre>`;
              }
              outHtml += `<div class="diff-bad" style="padding:0.6rem; border-radius:var(--r-sm);"><b class="rose">Lỗi khi thực thi:</b><pre style="margin:0.3rem 0 0 0; font-family:var(--mono); color:#fca5a5; white-space:pre-wrap;">${escapeHtml(res.stderr)}</pre></div>`;
              outBox.innerHTML = outHtml;
            }
          } catch (err) {
            outBox.innerHTML = `<div class="diff-bad" style="padding:0.6rem;"><b class="rose">Lỗi hệ thống:</b> ${escapeHtml(err.message)}</div>`;
          } finally {
            runBtn.disabled = false;
            runBtn.textContent = origText;
          }
        });
      }

      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          const curEd = runner.querySelector('.py-editor');
          if (curEd) curEd.value = originalCode;
          if (outBox) outBox.innerHTML = "Nhấn 'Chạy code ▶' để xem kết quả thực thi...";
        });
      }
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/[&<>"']/g, function (m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
    });
  }

  // ──────────────────────────────────────────────────────────────────────────
  // THUẬT TOÁN VISUALIZERS
  // ──────────────────────────────────────────────────────────────────────────

  // 1. Two Pointers Visualizer
  window.initTwoPointersVisualizer = function (containerId) {
    const root = document.getElementById(containerId);
    if (!root) return;
    const arr = [2, 5, 8, 12, 19, 23, 31, 40];
    const target = 31;
    let l = 0, r = arr.length - 1, stepCount = 0, finished = false;

    function render() {
      const curSum = arr[l] + arr[r];
      let statusHtml = '';
      if (finished && curSum === target) {
        statusHtml = `<span class="green font-bold">✓ TÌM THẤY! arr[${l}] (${arr[l]}) + arr[${r}] (${arr[r]}) = ${target}. Tìm được chỉ trong ${stepCount} bước! Độ phức tạp O(N).</span>`;
      } else if (l >= r) {
        statusHtml = `<span class="rose font-bold">Không tìm thấy cặp số nào có tổng bằng ${target}! (l >= r)</span>`;
      } else if (curSum < target) {
        statusHtml = `Tổng hiện tại: <code>arr[${l}] + arr[${r}] = ${arr[l]} + ${arr[r]} = ${curSum}</code> &lt; <b>${target}</b> → Tăng tổng: <b>L += 1</b>`;
      } else {
        statusHtml = `Tổng hiện tại: <code>arr[${l}] + arr[${r}] = ${arr[l]} + ${arr[r]} = ${curSum}</code> &gt; <b>${target}</b> → Giảm tổng: <b>R -= 1</b>`;
      }

      root.innerHTML = `
        <div class="vis-header">
          <div class="row" style="justify-content:space-between; flex-wrap:wrap; gap:0.5rem">
            <span class="chip py-blue">Two Pointers</span>
            <span class="chip">Mục tiêu Target = <b>${target}</b></span>
            <span class="chip violet">Bước ${stepCount}</span>
          </div>
        </div>
        <div class="vis-array-box" style="margin:1rem 0; overflow-x:auto;">
          <div class="vis-array" style="display:flex; gap:8px; justify-content:center; min-width:380px;">
            ${arr.map((val, idx) => {
              const isL = (idx === l);
              const isR = (idx === r);
              const isMatch = (finished && (isL || isR) && curSum === target);
              let bg = isMatch ? 'rgba(34,197,94,0.35)' : (isL ? 'rgba(56,189,248,0.3)' : (isR ? 'rgba(251,191,36,0.3)' : 'var(--surface)'));
              let border = isMatch ? 'var(--green)' : (isL ? 'var(--py-blue)' : (isR ? 'var(--py-gold)' : 'var(--line)'));
              return `
                <div style="display:flex; flex-direction:column; align-items:center; width:48px;">
                  <div style="font-size:0.72rem; color:var(--text-3); font-family:var(--mono);">[${idx}]</div>
                  <div style="width:48px; height:48px; display:grid; place-items:center; background:${bg}; border:2px solid ${border}; border-radius:8px; font-weight:700; font-family:var(--mono); font-size:1.1rem; color:var(--text); margin:4px 0;">
                    ${val}
                  </div>
                  <div style="font-size:0.75rem; font-weight:800; font-family:var(--mono); min-height:18px;">
                    ${isL ? '<span style="color:var(--py-blue)">▲ L</span>' : ''}
                    ${isR ? '<span style="color:var(--py-gold)">▲ R</span>' : ''}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
        <div class="vis-status" style="background:rgba(0,0,0,0.3); border:1px solid var(--line); border-radius:var(--r-sm); padding:0.6rem 0.9rem; font-size:0.9rem; min-height:44px; display:flex; align-items:center;">
          ${statusHtml}
        </div>
        <div class="row" style="margin-top:0.8rem; gap:0.6rem">
          <button class="btn cyan" id="${containerId}-step" ${finished || l >= r ? 'disabled' : ''}>Bước tiếp theo (Step) →</button>
          <button class="btn" id="${containerId}-reset">↺ Đặt lại</button>
        </div>
      `;

      document.getElementById(`${containerId}-step`)?.addEventListener('click', step);
      document.getElementById(`${containerId}-reset`)?.addEventListener('click', reset);
    }

    function step() {
      if (finished || l >= r) return;
      stepCount++;
      const curSum = arr[l] + arr[r];
      if (curSum === target) {
        finished = true;
      } else if (curSum < target) {
        l++;
      } else {
        r--;
      }
      if (l >= r && !finished) {
        finished = true;
      }
      render();
    }

    function reset() {
      l = 0;
      r = arr.length - 1;
      stepCount = 0;
      finished = false;
      render();
    }

    render();
  };

  // 2. Sliding Window Visualizer
  window.initSlidingWindowVisualizer = function (containerId) {
    const root = document.getElementById(containerId);
    if (!root) return;
    const arr = [2, 1, 5, 8, 3, 7, 4, 6];
    const k = 3;
    let start = 0, maxSum = -Infinity, bestStart = 0;

    function render() {
      const curSum = arr.slice(start, start + k).reduce((a, b) => a + b, 0);
      if (curSum > maxSum) {
        maxSum = curSum;
        bestStart = start;
      }

      root.innerHTML = `
        <div class="vis-header">
          <div class="row" style="justify-content:space-between; flex-wrap:wrap; gap:0.5rem">
            <span class="chip py-gold">Sliding Window (K = ${k})</span>
            <span class="chip">Cửa sổ: [${start} .. ${start + k - 1}]</span>
            <span class="chip green">Tổng Max: <b>${maxSum}</b> (tại [${bestStart}..${bestStart + k - 1}])</span>
          </div>
        </div>
        <div class="vis-array-box" style="margin:1rem 0; overflow-x:auto;">
          <div class="vis-array" style="display:flex; gap:8px; justify-content:center; min-width:380px;">
            ${arr.map((val, idx) => {
              const inWindow = (idx >= start && idx < start + k);
              let bg = inWindow ? 'rgba(251,191,36,0.25)' : 'var(--surface)';
              let border = inWindow ? 'var(--py-gold)' : 'var(--line)';
              return `
                <div style="display:flex; flex-direction:column; align-items:center; width:46px;">
                  <div style="font-size:0.72rem; color:var(--text-3); font-family:var(--mono);">[${idx}]</div>
                  <div style="width:46px; height:46px; display:grid; place-items:center; background:${bg}; border:2px solid ${border}; border-radius:8px; font-weight:700; font-family:var(--mono); font-size:1.1rem; color:var(--text); margin:4px 0;">
                    ${val}
                  </div>
                  <div style="font-size:0.75rem; font-weight:800; font-family:var(--mono); min-height:18px;">
                    ${idx === start ? '<span style="color:var(--cyan)">IN</span>' : ''}
                    ${idx === start + k - 1 ? '<span style="color:var(--rose)">OUT</span>' : ''}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
        <div class="vis-status" style="background:rgba(0,0,0,0.3); border:1px solid var(--line); border-radius:var(--r-sm); padding:0.6rem 0.9rem; font-size:0.9rem;">
          Tổng 3 phần tử trong cửa sổ <code>[${arr.slice(start, start + k).join(' + ')}]</code> = <b>${curSum}</b>.
          ${start > 0 ? `(Công thức O(1): <code>cur += arr[${start + k - 1}] - arr[${start - 1}] = +${arr[start + k - 1]} - ${arr[start - 1]}</code>)` : ' (Khởi tạo tổng K phần tử đầu)'}
        </div>
        <div class="row" style="margin-top:0.8rem; gap:0.6rem">
          <button class="btn cyan" id="${containerId}-next" ${start >= arr.length - k ? 'disabled' : ''}>Trượt sang phải (+1) →</button>
          <button class="btn" id="${containerId}-reset">↺ Đặt lại</button>
        </div>
      `;

      document.getElementById(`${containerId}-next`)?.addEventListener('click', () => {
        if (start < arr.length - k) {
          start++;
          render();
        }
      });
      document.getElementById(`${containerId}-reset`)?.addEventListener('click', () => {
        start = 0;
        maxSum = -Infinity;
        bestStart = 0;
        render();
      });
    }

    render();
  };

  // 3. Spiral Matrix Visualizer
  window.initSpiralMatrixVisualizer = function (containerId) {
    const root = document.getElementById(containerId);
    if (!root) return;
    const n = 4;
    const grid = Array.from({ length: n }, () => Array(n).fill(0));
    let top = 0, bottom = n - 1, left = 0, right = n - 1;
    let num = 1, maxNum = n * n, dir = 0, r = 0, c = 0;

    function render() {
      root.innerHTML = `
        <div class="vis-header">
          <div class="row" style="justify-content:space-between; flex-wrap:wrap; gap:0.5rem">
            <span class="chip violet">Spiral Matrix ${n}×${n}</span>
            <span class="chip py-gold">Đã điền: <b>${num - 1}/${maxNum}</b></span>
            <span class="chip">Biên: Top=${top}, Bot=${bottom}, Left=${left}, Right=${right}</span>
          </div>
        </div>
        <div style="display:grid; grid-template-columns: repeat(${n}, 54px); gap:8px; justify-content:center; margin:1.2rem 0;">
          ${grid.map((row, ri) => row.map((cell, ci) => {
            const isCurrent = (ri === r && ci === c && num <= maxNum);
            const isFilled = (cell > 0);
            return `
              <div style="width:54px; height:54px; display:grid; place-items:center; background:${isCurrent ? 'var(--py-blue)' : isFilled ? 'rgba(56,189,248,0.18)' : 'var(--surface)'}; color:${isCurrent ? '#000' : isFilled ? '#e0f2fe' : 'var(--text-3)'}; border:2px solid ${isCurrent ? 'var(--py-blue)' : isFilled ? 'rgba(56,189,248,0.45)' : 'var(--line)'}; border-radius:var(--r-sm); font-weight:800; font-family:var(--mono); font-size:1.15rem; transition:0.12s;">
                ${cell > 0 ? cell : ''}
              </div>
            `;
          }).join('')).join('')}
        </div>
        <div class="row" style="justify-content:center; gap:0.6rem">
          <button class="btn cyan" id="${containerId}-step" ${num > maxNum ? 'disabled' : ''}>Điền số tiếp theo (${num <= maxNum ? num : 'Xong'}) →</button>
          <button class="btn" id="${containerId}-reset">↺ Đặt lại</button>
        </div>
      `;

      document.getElementById(`${containerId}-step`)?.addEventListener('click', step);
      document.getElementById(`${containerId}-reset`)?.addEventListener('click', reset);
    }

    function step() {
      if (num > maxNum) return;
      grid[r][c] = num++;

      if (dir === 0) { // Sang phải
        if (c < right) c++;
        else { dir = 1; top++; r++; }
      } else if (dir === 1) { // Xuống dưới
        if (r < bottom) r++;
        else { dir = 2; right--; c--; }
      } else if (dir === 2) { // Sang trái
        if (c > left) c--;
        else { dir = 3; bottom--; r--; }
      } else if (dir === 3) { // Lên trên
        if (r > top) r--;
        else { dir = 0; left++; c++; }
      }

      render();
    }

    function reset() {
      for (let i = 0; i < n; i++) grid[i].fill(0);
      top = 0; bottom = n - 1; left = 0; right = n - 1;
      dir = 0; r = 0; c = 0; num = 1;
      render();
    }

    render();
  };

  // 4. Stack Visualizer
  window.initStackVisualizer = function (containerId) {
    const root = document.getElementById(containerId);
    if (!root) return;
    const tokens = ['{', '[', '(', ')', ']', '}'];
    let curIdx = 0, state = 'running';
    const stack = [];
    const pairs = { ')': '(', ']': '[', '}': '{' };

    function render() {
      root.innerHTML = `
        <div class="vis-header">
          <div class="row" style="justify-content:space-between; flex-wrap:wrap; gap:0.5rem">
            <span class="chip green">Stack Parentheses</span>
            <span class="chip ${state === 'valid' ? 'green' : state === 'invalid' ? 'rose' : 'violet'}">
              ${state === 'valid' ? '✓ DÃY NGOẶC HỢP LỆ!' : state === 'invalid' ? '✗ SAI DẤU NGOẶC!' : 'Đang duyệt biểu thức...'}
            </span>
          </div>
        </div>
        <div style="display:grid; grid-template-columns: 1.2fr 1fr; gap:1.2rem; margin:1rem 0;">
          <div class="card">
            <h4>Dãy ký tự ngoặc</h4>
            <div style="display:flex; gap:0.5rem; margin-top:0.7rem; flex-wrap:wrap;">
              ${tokens.map((tok, i) => `
                <span style="padding:0.45rem 0.75rem; border-radius:var(--r-sm); font-family:var(--mono); font-weight:800; font-size:1.1rem; background:${i === curIdx - 1 ? 'var(--py-blue)' : i < curIdx ? 'rgba(255,255,255,0.06)' : 'var(--surface)'}; color:${i === curIdx - 1 ? '#000' : i < curIdx ? 'var(--text-3)' : 'var(--text)'}; border:1px solid ${i === curIdx - 1 ? 'var(--py-blue)' : 'var(--line)'};">
                  ${tok}
                </span>
              `).join('')}
            </div>
            <p class="tiny" style="margin-top:0.8rem">Gặp ngoặc mở <code>( [ {</code> ➔ <b>PUSH</b> vào Stack. Gặp ngoặc đóng <code>) ] }</code> ➔ <b>POP</b> đỉnh ra và đối chiếu.</p>
          </div>
          <div class="card">
            <h4>Ngăn xếp (Stack LIFO)</h4>
            <div style="min-height:140px; border:2px dashed var(--line); border-radius:var(--r); padding:0.6rem; display:flex; flex-direction:column-reverse; gap:0.4rem; background:rgba(0,0,0,0.25);">
              ${stack.length === 0 ? '<span class="tiny" style="color:var(--text-3); margin:auto">Stack đang rỗng</span>' : ''}
              ${stack.map((item, idx) => `
                <div style="background:rgba(56,189,248,0.2); border:1px solid var(--py-blue); padding:0.35rem 0.6rem; border-radius:var(--r-sm); font-family:var(--mono); font-weight:800; color:#38bdf8; text-align:center;">
                  ${idx === stack.length - 1 ? '▲ TOP: ' : ''}${item}
                </div>
              `).join('')}
            </div>
          </div>
        </div>
        <div class="row" style="gap:0.6rem">
          <button class="btn cyan" id="${containerId}-step" ${state !== 'running' ? 'disabled' : ''}>Duyệt ký tự tiếp theo →</button>
          <button class="btn" id="${containerId}-reset">↺ Đặt lại</button>
        </div>
      `;

      document.getElementById(`${containerId}-step`)?.addEventListener('click', step);
      document.getElementById(`${containerId}-reset`)?.addEventListener('click', reset);
    }

    function step() {
      if (curIdx >= tokens.length) {
        state = (stack.length === 0) ? 'valid' : 'invalid';
        render();
        return;
      }
      const tok = tokens[curIdx++];
      if (tok === '{' || tok === '[' || tok === '(') {
        stack.push(tok);
      } else {
        const top = stack.pop();
        if (pairs[tok] !== top) {
          state = 'invalid';
          render();
          return;
        }
      }
      if (curIdx === tokens.length) {
        state = (stack.length === 0) ? 'valid' : 'invalid';
      }
      render();
    }

    function reset() {
      curIdx = 0;
      stack.length = 0;
      state = 'running';
      render();
    }

    render();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCodeRunners);
  } else {
    initCodeRunners();
  }
})();
