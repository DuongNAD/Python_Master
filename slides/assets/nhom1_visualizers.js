/* ═══════════════════════════════════════════════════════════════════════════
   Python Master 2026 · Interactive Visualizers for Nhóm 1 (Đọc Hiểu Code)
   15 Bài tập trọng tâm Đọc hiểu - 440 điểm (Bảng B COS Pro)
   Hoạt họa tương tác từng bước (Step-by-Step Animations), trực quan, mượt mà
   ═══════════════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // Dừng mọi timer khi chuyển slide để tránh memory leak và lag
  let activeTimers = new Set();
  function registerTimer(t) {
    if (t) activeTimers.add(t);
    return t;
  }
  function clearRegisteredTimer(t) {
    if (t) {
      clearInterval(t);
      clearTimeout(t);
      activeTimers.delete(t);
    }
  }
  function stopAllActiveTimers() {
    activeTimers.forEach(t => {
      clearInterval(t);
      clearTimeout(t);
    });
    activeTimers.clear();
  }
  document.addEventListener('deck:slidechange', stopAllActiveTimers);

  // ──────────────────────────────────────────────────────────────────────────
  // BÀI 1.01: Đếm nguyên âm (s.lower() & ky_tu in "aeiou")
  // ──────────────────────────────────────────────────────────────────────────
  window.initVowelVisualizer = function (containerId) {
    const root = document.getElementById(containerId);
    if (!root) return;
    if (root._cleanup) root._cleanup();

    let inputStr = "Nguyen Anh Duong";
    let curIdx = 0;
    let count = 0;
    let autoTimer = null;
    const vowels = "aeiou";

    function stopAuto() {
      if (autoTimer) {
        clearRegisteredTimer(autoTimer);
        autoTimer = null;
      }
    }

    root._cleanup = () => {
      stopAuto();
    };

    function render() {
      const chars = inputStr.split('');
      const currentChar = curIdx < chars.length ? chars[curIdx] : null;
      const currentLower = currentChar ? currentChar.toLowerCase() : null;
      const isVowel = currentLower && vowels.includes(currentLower);

      root.innerHTML = `
        <div class="vis-header" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
          <div style="display:flex; gap:0.5rem; align-items:center;">
            <span class="chip py-blue">Bài 1.01 · Đếm Nguyên Âm</span>
            <span class="chip">Độ dài: <b>${chars.length}</b></span>
          </div>
          <div style="display:flex; gap:0.5rem; align-items:center;">
            <span class="chip green" style="font-size:0.95rem;">Biến đếm <code>dem</code> = <b style="font-size:1.15rem; color:#4ade80;">${count}</b></span>
          </div>
        </div>

        <div style="margin:0.8rem 0; display:flex; align-items:center; gap:0.6rem; flex-wrap:wrap;">
          <span class="tiny" style="color:var(--text-3);">Nhập chuỗi thử nghiệm:</span>
          <input type="text" id="${containerId}-input" value="${inputStr}" 
                 style="background:var(--surface); border:1px solid var(--line); border-radius:var(--r-sm); color:var(--text); padding:0.35rem 0.7rem; font-family:var(--mono); font-size:0.88rem; width:220px;" />
          <button class="btn" id="${containerId}-apply" style="padding:0.35rem 0.75rem; font-size:0.8rem;">Áp dụng</button>
          <button class="btn" id="${containerId}-preset1" style="font-size:0.75rem; padding:0.25rem 0.5rem;">"Python Master 2026"</button>
          <button class="btn" id="${containerId}-preset2" style="font-size:0.75rem; padding:0.25rem 0.5rem;">"AEIOU aeiou"</button>
        </div>

        <div class="vis-array-box" style="margin:1rem 0; overflow-x:auto; padding:0.5rem 0;">
          <div style="display:flex; gap:6px; min-width:max-content; justify-content:flex-start;">
            ${chars.length === 0 ? '<span class="tiny" style="color:var(--text-3)">Chuỗi rỗng "" (0 nguyên âm)</span>' : chars.map((ch, i) => {
              const isCur = (i === curIdx);
              const isPast = (i < curIdx);
              const chLower = ch.toLowerCase();
              const wasVowel = vowels.includes(chLower);

              let bg = 'var(--surface)';
              let border = 'var(--line)';
              let color = 'var(--text)';

              if (isCur) {
                bg = isVowel ? 'rgba(74, 222, 128, 0.35)' : 'rgba(56, 189, 248, 0.35)';
                border = isVowel ? 'var(--green)' : 'var(--py-blue)';
                color = '#fff';
              } else if (isPast) {
                if (wasVowel) {
                  bg = 'rgba(74, 222, 128, 0.15)';
                  border = 'rgba(74, 222, 128, 0.4)';
                  color = '#4ade80';
                } else {
                  bg = 'rgba(255, 255, 255, 0.02)';
                  color = 'var(--text-3)';
                }
              }

              return `
                <div style="display:flex; flex-direction:column; align-items:center; width:38px;">
                  <span style="font-size:0.68rem; color:var(--text-3); font-family:var(--mono);">[${i}]</span>
                  <div style="width:38px; height:42px; display:grid; place-items:center; background:${bg}; border:2px solid ${border}; border-radius:6px; font-weight:700; font-family:var(--mono); font-size:1.05rem; color:${color}; margin:4px 0; transition:all 0.15s ease;">
                    ${ch === ' ' ? '␣' : ch}
                  </div>
                  <span style="font-size:0.7rem; font-family:var(--mono); min-height:16px;">
                    ${isCur ? '<b style="color:var(--py-blue)">▲</b>' : (isPast && wasVowel ? '<span style="color:#4ade80">✓</span>' : '')}
                  </span>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <div style="background:rgba(0,0,0,0.35); border:1px solid var(--line); border-radius:var(--r-sm); padding:0.65rem 0.9rem; font-size:0.88rem; min-height:46px; display:flex; align-items:center;">
          ${curIdx >= chars.length ? 
            `<span style="color:#4ade80; font-weight:700;">✓ HOÀN THÀNH QUÉT CHUỖI! Tổng cộng tìm thấy <b>${count}</b> nguyên âm trong chuỗi "${inputStr}".</span>` :
            `Ký tự hiện tại: <code>'${chars[curIdx]}'</code> ➔ Hạ thường: <code>'${currentLower}'</code> ➔ 
             Kiểm tra <code>'${currentLower}' in "aeiou"</code>: 
             ${isVowel ? `<b style="color:#4ade80;">ĐÚNG (Nguyên âm) ➔ dem += 1 (${count + 1})</b>` : `<span style="color:var(--text-3);">SAI (Phụ âm/khoảng trắng) ➔ bỏ qua</span>`}`
          }
        </div>

        <div class="row" style="margin-top:0.8rem; gap:0.6rem; flex-wrap:wrap;">
          <button class="btn cyan" id="${containerId}-step" ${curIdx >= chars.length ? 'disabled' : ''}>Bước tiếp theo (Step) →</button>
          <button class="btn" id="${containerId}-auto">${autoTimer ? '⏸ Tạm dừng' : '▶ Tự động chạy'}</button>
          <button class="btn" id="${containerId}-reset">↺ Đặt lại</button>
        </div>
      `;

      // Event listeners
      document.getElementById(`${containerId}-step`)?.addEventListener('click', () => {
        stopAuto();
        step();
      });
      document.getElementById(`${containerId}-auto`)?.addEventListener('click', toggleAuto);
      document.getElementById(`${containerId}-reset`)?.addEventListener('click', reset);
      document.getElementById(`${containerId}-apply`)?.addEventListener('click', () => {
        const val = document.getElementById(`${containerId}-input`)?.value;
        if (val !== undefined) {
          inputStr = val;
          reset();
        }
      });
      document.getElementById(`${containerId}-preset1`)?.addEventListener('click', () => {
        inputStr = "Python Master 2026"; reset();
      });
      document.getElementById(`${containerId}-preset2`)?.addEventListener('click', () => {
        inputStr = "AEIOU aeiou"; reset();
      });
    }

    function step() {
      if (curIdx >= inputStr.length) {
        stopAuto();
        return;
      }
      const ch = inputStr[curIdx].toLowerCase();
      if (vowels.includes(ch)) {
        count++;
      }
      curIdx++;
      render();
    }

    function toggleAuto() {
      if (autoTimer) {
        stopAuto();
        render();
      } else {
        if (curIdx >= inputStr.length) {
          curIdx = 0;
          count = 0;
        }
        autoTimer = registerTimer(setInterval(() => {
          if (curIdx >= inputStr.length) {
            stopAuto();
            render();
          } else {
            step();
          }
        }, 350));
        render();
      }
    }

    function reset() {
      stopAuto();
      curIdx = 0;
      count = 0;
      render();
    }

    render();
  };

  // ──────────────────────────────────────────────────────────────────────────
  // BÀI 1.02: Chuẩn hóa họ tên (split -> capitalize -> join)
  // ──────────────────────────────────────────────────────────────────────────
  window.initNormalizeNameVisualizer = function (containerId) {
    const root = document.getElementById(containerId);
    if (!root) return;
    if (root._cleanup) root._cleanup();

    let rawInput = "  nGUYEN   anh   duong ";
    let stage = 0; // 0: Raw, 1: Split, 2: Capitalized, 3: Joined

    function render() {
      const words = rawInput.trim().split(/\s+/).filter(Boolean);
      const capWords = words.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
      const finalStr = capWords.join(' ');

      root.innerHTML = `
        <div class="vis-header" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
          <span class="chip py-gold">Bài 1.02 · Nhà Máy Chuẩn Hóa Tên (3 Công Đoạn)</span>
          <span class="chip">Giai đoạn: <b>${stage}/3</b></span>
        </div>

        <div style="margin:0.8rem 0; display:flex; align-items:center; gap:0.6rem; flex-wrap:wrap;">
          <span class="tiny" style="color:var(--text-3);">Chuỗi ban đầu:</span>
          <input type="text" id="${containerId}-input" value="${rawInput}" 
                 style="background:var(--surface); border:1px solid var(--line); border-radius:var(--r-sm); color:var(--text); padding:0.35rem 0.7rem; font-family:var(--mono); font-size:0.88rem; width:260px;" />
          <button class="btn" id="${containerId}-apply" style="padding:0.35rem 0.75rem; font-size:0.8rem;">Áp dụng</button>
          <button class="btn" id="${containerId}-preset1" style="font-size:0.75rem; padding:0.25rem 0.5rem;">"  tRAN   vAn    hA  "</button>
        </div>

        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:0.9rem; margin:1rem 0;">
          <!-- Bước 1 -->
          <div class="card" style="border:2px solid ${stage >= 1 ? 'var(--py-blue)' : 'var(--line)'}; opacity:${stage >= 1 ? '1' : '0.45'}; transition:0.25s;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
              <b style="color:var(--py-blue); font-size:0.88rem;">1. s.split()</b>
              <span class="chip py-blue" style="font-size:0.7rem;">Hút sạch khoảng trắng</span>
            </div>
            <p class="tiny" style="color:var(--text-3);">Tự động nuốt sạch mọi khoảng trắng thừa ở đầu, cuối và giữa các từ:</p>
            <div style="display:flex; gap:6px; flex-wrap:wrap; margin-top:0.6rem;">
              ${stage >= 1 ? words.map(w => `
                <span style="background:rgba(56,189,248,0.2); border:1px solid var(--py-blue); padding:0.35rem 0.6rem; border-radius:4px; font-family:var(--mono); font-weight:700; color:#38bdf8; font-size:0.9rem;">
                  '${w}'
                </span>
              `).join('') : '<span class="tiny" style="color:var(--text-3)">Chờ thực hiện...</span>'}
            </div>
          </div>

          <!-- Bước 2 -->
          <div class="card" style="border:2px solid ${stage >= 2 ? 'var(--amber)' : 'var(--line)'}; opacity:${stage >= 2 ? '1' : '0.45'}; transition:0.25s;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
              <b style="color:var(--amber); font-size:0.88rem;">2. tu.capitalize()</b>
              <span class="chip py-gold" style="font-size:0.7rem;">Chữ đầu hoa, sau thường</span>
            </div>
            <p class="tiny" style="color:var(--text-3);">Áp dụng cho từng từ trong list comprehension <code>[tu.capitalize() for tu in cac_tu]</code>:</p>
            <div style="display:flex; gap:6px; flex-wrap:wrap; margin-top:0.6rem;">
              ${stage >= 2 ? capWords.map(w => `
                <span style="background:rgba(251,191,36,0.2); border:1px solid var(--amber); padding:0.35rem 0.6rem; border-radius:4px; font-family:var(--mono); font-weight:700; color:#fbbf24; font-size:0.9rem;">
                  '${w}'
                </span>
              `).join('') : '<span class="tiny" style="color:var(--text-3)">Chờ thực hiện...</span>'}
            </div>
          </div>

          <!-- Bước 3 -->
          <div class="card" style="border:2px solid ${stage >= 3 ? 'var(--green)' : 'var(--line)'}; opacity:${stage >= 3 ? '1' : '0.45'}; transition:0.25s;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
              <b style="color:var(--green); font-size:0.88rem;">3. " ".join(...)</b>
              <span class="chip green" style="font-size:0.7rem;">Nối đúng 1 dấu cách</span>
            </div>
            <p class="tiny" style="color:var(--text-3);">Ghép danh sách từ chuẩn lại thành họ tên hoàn chỉnh:</p>
            <div style="margin-top:0.6rem;">
              ${stage >= 3 ? `
                <div style="background:rgba(74,222,128,0.2); border:1px solid var(--green); padding:0.45rem 0.8rem; border-radius:4px; font-family:var(--mono); font-weight:700; color:#4ade80; font-size:1.05rem;">
                  "${finalStr}"
                </div>
              ` : '<span class="tiny" style="color:var(--text-3)">Chờ thực hiện...</span>'}
            </div>
          </div>
        </div>

        <div class="row" style="margin-top:0.8rem; gap:0.6rem;">
          <button class="btn cyan" id="${containerId}-next" ${stage >= 3 ? 'disabled' : ''}>
            ${stage === 0 ? 'Bước 1: Tách từ s.split() →' : stage === 1 ? 'Bước 2: Viết hoa tu.capitalize() →' : 'Bước 3: Ghép từ " ".join() →'}
          </button>
          <button class="btn" id="${containerId}-reset">↺ Đặt lại từ đầu</button>
        </div>
      `;

      document.getElementById(`${containerId}-next`)?.addEventListener('click', () => {
        if (stage < 3) {
          stage++;
          render();
        }
      });
      document.getElementById(`${containerId}-reset`)?.addEventListener('click', () => {
        stage = 0;
        render();
      });
      document.getElementById(`${containerId}-apply`)?.addEventListener('click', () => {
        const val = document.getElementById(`${containerId}-input`)?.value;
        if (val !== undefined) {
          rawInput = val;
          stage = 0;
          render();
        }
      });
      document.getElementById(`${containerId}-preset1`)?.addEventListener('click', () => {
        rawInput = "   tRAN   vAn    hA   ";
        stage = 0;
        render();
      });
    }

    render();
  };

  // ──────────────────────────────────────────────────────────────────────────
  // BÀI 1.03: Tổng chữ số (n = abs(n), % 10 và // 10)
  // ──────────────────────────────────────────────────────────────────────────
  window.initSumDigitsVisualizer = function (containerId) {
    const root = document.getElementById(containerId);
    if (!root) return;
    if (root._cleanup) root._cleanup();

    let initN = -4567;
    let n = Math.abs(initN);
    let sum = 0;
    let history = [];
    let isNegativeHandled = false;

    function render() {
      root.innerHTML = `
        <div class="vis-header" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
          <div style="display:flex; gap:0.5rem; align-items:center;">
            <span class="chip rose">Bài 1.03 · Bóc Tách Chữ Số (% 10 & // 10)</span>
            <span class="chip">Số ban đầu: <b>${initN}</b></span>
          </div>
          <span class="chip green" style="font-size:0.95rem;">Tổng hiện tại <code>tong</code> = <b style="font-size:1.15rem; color:#4ade80;">${sum}</b></span>
        </div>

        <div style="margin:0.8rem 0; display:flex; align-items:center; gap:0.6rem; flex-wrap:wrap;">
          <span class="tiny" style="color:var(--text-3);">Nhập số n (hỗ trợ số âm):</span>
          <input type="number" id="${containerId}-input" value="${initN}" 
                 style="background:var(--surface); border:1px solid var(--line); border-radius:var(--r-sm); color:var(--text); padding:0.35rem 0.7rem; font-family:var(--mono); font-size:0.88rem; width:130px;" />
          <button class="btn" id="${containerId}-apply" style="padding:0.35rem 0.75rem; font-size:0.8rem;">Áp dụng</button>
          <button class="btn" id="${containerId}-preset1" style="font-size:0.75rem; padding:0.25rem 0.5rem;">n = 999</button>
          <button class="btn" id="${containerId}-preset2" style="font-size:0.75rem; padding:0.25rem 0.5rem;">n = 0</button>
        </div>

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem; margin:1rem 0;">
          <div class="card" style="display:flex; flex-direction:column; justify-content:center; align-items:center; padding:1.2rem;">
            <span class="tiny" style="color:var(--text-3); margin-bottom:0.4rem;">Số n còn lại trong vòng lặp</span>
            <div style="font-size:2.2rem; font-family:var(--mono); font-weight:800; color:var(--py-blue);">
              ${n}
            </div>
            <div style="margin-top:0.6rem; font-size:0.8rem; color:var(--text-2);">
              ${initN < 0 && !isNegativeHandled ? '<span class="rose">Cần abs(n) để triệt tiêu dấu âm!</span>' : `Vòng lặp: <code>while n &gt; 0</code> (${n > 0 ? 'Đang chạy' : 'ĐÃ DỪNG'})`}
            </div>
          </div>

          <div class="card">
            <span class="tiny" style="color:var(--text-3);">Lịch sử bóc tách từng chữ số:</span>
            <div style="margin-top:0.6rem; display:flex; flex-direction:column; gap:0.35rem; max-height:140px; overflow-y:auto; font-family:var(--mono); font-size:0.84rem;">
              ${history.length === 0 ? '<span class="tiny" style="color:var(--text-3)">Chưa bóc chữ số nào</span>' : ''}
              ${history.map((h) => `
                <div style="background:rgba(255,255,255,0.04); border-left:3px solid var(--green); padding:0.25rem 0.5rem; border-radius:2px;">
                  Bóc số <b>${h.digit}</b>: <code>tong = ${h.oldSum} + ${h.digit} = ${h.newSum}</code> (n còn ${h.newN})
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <div style="background:rgba(0,0,0,0.35); border:1px solid var(--line); border-radius:var(--r-sm); padding:0.65rem 0.9rem; font-size:0.88rem; min-height:46px; display:flex; align-items:center;">
          ${n === 0 ? 
            `<span style="color:#4ade80; font-weight:700;">✓ HOÀN THÀNH! Số n đã về 0. Tổng các chữ số của ${initN} là <b>${sum}</b>.</span>` :
            `Bước tiếp theo: Lấy chữ số cuối <code>digit = n % 10 = ${n % 10}</code> ➔ Cộng dồn <code>tong += ${n % 10}</code> ➔ Chém chữ số cuối <code>n = n // 10 = ${Math.floor(n / 10)}</code>`
          }
        </div>

        <div class="row" style="margin-top:0.8rem; gap:0.6rem;">
          <button class="btn cyan" id="${containerId}-step" ${n === 0 ? 'disabled' : ''}>Bóc chữ số tiếp theo →</button>
          <button class="btn" id="${containerId}-reset">↺ Đặt lại</button>
        </div>
      `;

      document.getElementById(`${containerId}-step`)?.addEventListener('click', () => {
        if (n <= 0) return;
        isNegativeHandled = true;
        const digit = n % 10;
        const oldSum = sum;
        sum += digit;
        const newN = Math.floor(n / 10);
        history.push({ digit, oldSum, newSum: sum, newN });
        n = newN;
        render();
      });

      document.getElementById(`${containerId}-reset`)?.addEventListener('click', () => {
        n = Math.abs(initN);
        sum = 0;
        history = [];
        isNegativeHandled = false;
        render();
      });

      document.getElementById(`${containerId}-apply`)?.addEventListener('click', () => {
        const val = parseInt(document.getElementById(`${containerId}-input`)?.value, 10);
        if (!isNaN(val)) {
          initN = val;
          n = Math.abs(initN);
          sum = 0;
          history = [];
          isNegativeHandled = false;
          render();
        }
      });
      document.getElementById(`${containerId}-preset1`)?.addEventListener('click', () => {
        initN = 999; n = 999; sum = 0; history = []; isNegativeHandled = false; render();
      });
      document.getElementById(`${containerId}-preset2`)?.addEventListener('click', () => {
        initN = 0; n = 0; sum = 0; history = []; isNegativeHandled = false; render();
      });
    }

    render();
  };

  // ──────────────────────────────────────────────────────────────────────────
  // BÀI 1.04: Số lớn thứ hai (set & max elimination)
  // ──────────────────────────────────────────────────────────────────────────
  window.initSecondMaxVisualizer = function (containerId) {
    const root = document.getElementById(containerId);
    if (!root) return;
    if (root._cleanup) root._cleanup();

    let rawArr = [3, 1, 4, 1, 5, 5, 2];
    let stepState = 0; // 0: raw, 1: set applied, 2: max removed, 3: second max found

    function render() {
      const distinctSet = Array.from(new Set(rawArr));
      const firstMax = distinctSet.length > 0 ? Math.max(...distinctSet) : null;
      const setAfterRemove = distinctSet.filter(x => x !== firstMax);
      const secondMax = setAfterRemove.length > 0 ? Math.max(...setAfterRemove) : null;

      root.innerHTML = `
        <div class="vis-header" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
          <span class="chip violet">Bài 1.04 · Tìm Số Lớn Thứ Hai Phân Biệt</span>
          <span class="chip">Trạng thái: <b>${stepState === 0 ? 'Mảng ban đầu' : stepState === 1 ? 'Lọc trùng với set()' : stepState === 2 ? 'Xóa Max thứ nhất' : 'Tìm thấy Max thứ hai'}</b></span>
        </div>

        <div style="margin:0.8rem 0; display:flex; align-items:center; gap:0.6rem; flex-wrap:wrap;">
          <span class="tiny" style="color:var(--text-3);">Mẫu mảng:</span>
          <button class="btn" id="${containerId}-preset1" style="font-size:0.75rem; padding:0.25rem 0.5rem;">[3, 1, 4, 1, 5, 5, 2]</button>
          <button class="btn" id="${containerId}-preset2" style="font-size:0.75rem; padding:0.25rem 0.5rem;">[7, 7, 7] (Trùng hết)</button>
          <button class="btn" id="${containerId}-preset3" style="font-size:0.75rem; padding:0.25rem 0.5rem;">[5, 5, 4] (Bẫy trùng Max)</button>
        </div>

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem; margin:1rem 0;">
          <div class="card">
            <span class="tiny" style="color:var(--text-3);">Mảng ban đầu arr:</span>
            <div style="display:flex; gap:6px; flex-wrap:wrap; margin-top:0.6rem;">
              ${rawArr.map(x => `
                <span style="background:var(--surface); border:1px solid var(--line); padding:0.35rem 0.65rem; border-radius:6px; font-family:var(--mono); font-weight:700;">
                  ${x}
                </span>
              `).join('')}
            </div>
            <p class="tiny" style="margin-top:0.6rem; color:var(--text-3);">Có ${rawArr.length} phần tử, chứa các số lặp lại.</p>
          </div>

          <div class="card" style="border:2px solid ${stepState >= 1 ? 'var(--violet)' : 'var(--line)'};">
            <span class="tiny" style="color:var(--text-3);">Tập hợp phân biệt phan_biet = set(arr):</span>
            <div style="display:flex; gap:6px; flex-wrap:wrap; margin-top:0.6rem;">
              ${stepState >= 1 ? distinctSet.map(x => {
                const isMax = (x === firstMax);
                const isSecond = (stepState >= 3 && x === secondMax);
                let bg = 'rgba(255,255,255,0.06)';
                let border = 'var(--line)';
                let color = 'var(--text)';
                let tag = '';

                if (stepState >= 2 && isMax) {
                  bg = 'rgba(251, 113, 133, 0.15)';
                  border = 'var(--rose)';
                  color = 'var(--rose)';
                  tag = ' <s style="opacity:0.7">(Đã xóa)</s>';
                } else if (isSecond) {
                  bg = 'rgba(74, 222, 128, 0.3)';
                  border = 'var(--green)';
                  color = '#4ade80';
                  tag = ' <b>(Max 2)</b>';
                }

                return `
                  <span style="background:${bg}; border:1px solid ${border}; color:${color}; padding:0.35rem 0.65rem; border-radius:6px; font-family:var(--mono); font-weight:700;">
                    ${x}${tag}
                  </span>
                `;
              }).join('') : '<span class="tiny" style="color:var(--text-3)">Nhấn Bước tiếp theo để lọc set()...</span>'}
            </div>
            <p class="tiny" style="margin-top:0.6rem; color:var(--text-3);">
              ${stepState >= 1 ? `Số lượng phân biệt: len = ${distinctSet.length} ${distinctSet.length < 2 ? '<b class="rose">(&lt; 2 ➔ Trả về None)</b>' : '(≥ 2 ➔ Hợp lệ)'}` : ''}
            </p>
          </div>
        </div>

        <div style="background:rgba(0,0,0,0.35); border:1px solid var(--line); border-radius:var(--r-sm); padding:0.65rem 0.9rem; font-size:0.88rem; min-height:46px; display:flex; align-items:center;">
          ${distinctSet.length < 2 && stepState >= 1 ? 
            `<span class="rose font-bold">✗ len(phan_biet) &lt; 2: Không đủ 2 giá trị phân biệt ➔ return None!</span>` :
            stepState === 0 ? `Bắt đầu: Mảng có ${rawArr.length} số. Cần lọc trùng bằng <code>phan_biet = set(arr)</code>.` :
            stepState === 1 ? `Tập sau lọc trùng có ${distinctSet.length} số. Số lớn nhất hiện tại là <b>max = ${firstMax}</b>.` :
            stepState === 2 ? `Đã thực hiện <code>phan_biet.remove(${firstMax})</code>. Loại bỏ số lớn nhất ra khỏi tập!` :
            `<span style="color:#4ade80; font-weight:700;">✓ KẾT QUẢ: max(phan_biet) còn lại là <b>${secondMax}</b> (Chính là số lớn thứ hai trong mảng ban đầu).</span>`
          }
        </div>

        <div class="row" style="margin-top:0.8rem; gap:0.6rem;">
          <button class="btn cyan" id="${containerId}-step" ${stepState >= 3 || (stepState >= 1 && distinctSet.length < 2) ? 'disabled' : ''}>
            ${stepState === 0 ? 'Bước 1: phan_biet = set(arr) →' : stepState === 1 ? 'Bước 2: remove(max) →' : 'Bước 3: return max() còn lại →'}
          </button>
          <button class="btn" id="${containerId}-reset">↺ Đặt lại</button>
        </div>
      `;

      document.getElementById(`${containerId}-step`)?.addEventListener('click', () => {
        if (stepState < 3) {
          stepState++;
          render();
        }
      });
      document.getElementById(`${containerId}-reset`)?.addEventListener('click', () => {
        stepState = 0;
        render();
      });
      document.getElementById(`${containerId}-preset1`)?.addEventListener('click', () => {
        rawArr = [3, 1, 4, 1, 5, 5, 2];
        stepState = 0;
        render();
      });
      document.getElementById(`${containerId}-preset2`)?.addEventListener('click', () => {
        rawArr = [7, 7, 7];
        stepState = 0;
        render();
      });
      document.getElementById(`${containerId}-preset3`)?.addEventListener('click', () => {
        rawArr = [5, 5, 4];
        stepState = 0;
        render();
      });
    }

    render();
  };

  // ──────────────────────────────────────────────────────────────────────────
  // BÀI 1.05: Đếm tần suất dict.get(x, 0) + 1
  // ──────────────────────────────────────────────────────────────────────────
  window.initFrequencyVisualizer = function (containerId) {
    const root = document.getElementById(containerId);
    if (!root) return;
    if (root._cleanup) root._cleanup();

    let items = ['cam', 'tao', 'cam', 'le', 'cam', 'tao'];
    let curIdx = 0;
    let counts = {};

    function render() {
      const curItem = curIdx < items.length ? items[curIdx] : null;
      const prevVal = curItem ? (counts[curItem] || 0) : 0;

      root.innerHTML = `
        <div class="vis-header" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
          <span class="chip py-blue">Bài 1.05 · Sổ Cái Tần Suất 1 Dòng</span>
          <span class="chip">Phần tử: <b>${curIdx}/${items.length}</b></span>
        </div>

        <div class="vis-array-box" style="margin:1rem 0; overflow-x:auto;">
          <div style="display:flex; gap:8px; justify-content:flex-start; min-width:max-content;">
            ${items.map((it, idx) => {
              const isCur = (idx === curIdx);
              const isPast = (idx < curIdx);
              return `
                <div style="display:flex; flex-direction:column; align-items:center;">
                  <span style="font-size:0.68rem; color:var(--text-3); font-family:var(--mono);">[${idx}]</span>
                  <div style="padding:0.4rem 0.7rem; border-radius:6px; font-weight:700; font-family:var(--mono); font-size:0.95rem; margin:4px 0;
                              background:${isCur ? 'rgba(56,189,248,0.3)' : isPast ? 'rgba(255,255,255,0.03)' : 'var(--surface)'};
                              border:2px solid ${isCur ? 'var(--py-blue)' : 'var(--line)'};
                              color:${isCur ? '#fff' : isPast ? 'var(--text-3)' : 'var(--text)'};">
                    '${it}'
                  </div>
                  <span style="font-size:0.75rem; font-family:var(--mono); min-height:16px;">
                    ${isCur ? '<b style="color:var(--py-blue)">▲</b>' : ''}
                  </span>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem; margin:1rem 0;">
          <div class="card">
            <span class="tiny" style="color:var(--text-3);">Bảng từ điển bang = {}</span>
            <div style="margin-top:0.6rem; display:grid; grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); gap:6px;">
              ${Object.keys(counts).length === 0 ? '<span class="tiny" style="color:var(--text-3)">Dict đang rỗng {}</span>' : ''}
              ${Object.entries(counts).map(([k, v]) => `
                <div style="background:rgba(255,255,255,0.05); border:1px solid var(--line); border-radius:6px; padding:0.4rem 0.6rem; font-family:var(--mono);">
                  <div style="color:var(--text-3); font-size:0.72rem;">Khóa '${k}'</div>
                  <div style="font-size:1.2rem; font-weight:800; color:var(--cyan);">${v}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="card" style="display:flex; flex-direction:column; justify-content:center;">
            <span class="tiny" style="color:var(--text-3); margin-bottom:0.4rem;">Cơ chế hoạt động của bang.get(x, 0) + 1</span>
            <p class="tiny" style="line-height:1.6;">
              Nếu <code>x</code> chưa từng xuất hiện: <code>bang.get(x, 0)</code> trả về <b>0</b>. Khi đó: <code>0 + 1 = 1</code>.<br>
              Nếu <code>x</code> đã có trong bảng: <code>bang.get(x, 0)</code> trả về giá trị cũ. Khi đó: <code>giá_trị_cũ + 1</code>.
            </p>
          </div>
        </div>

        <div style="background:rgba(0,0,0,0.35); border:1px solid var(--line); border-radius:var(--r-sm); padding:0.65rem 0.9rem; font-size:0.88rem; min-height:46px; display:flex; align-items:center;">
          ${curIdx >= items.length ? 
            `<span style="color:#4ade80; font-weight:700;">✓ HOÀN TẤT ĐẾM TẦN SUẤT! Đã duyệt xong ${items.length} phần tử.</span>` :
            `Duyệt x = <code>'${curItem}'</code>: <code>bang['${curItem}'] = bang.get('${curItem}', 0) + 1 = ${prevVal} + 1 = ${prevVal + 1}</code>`
          }
        </div>

        <div class="row" style="margin-top:0.8rem; gap:0.6rem;">
          <button class="btn cyan" id="${containerId}-step" ${curIdx >= items.length ? 'disabled' : ''}>Duyệt phần tử tiếp theo →</button>
          <button class="btn" id="${containerId}-reset">↺ Đặt lại</button>
        </div>
      `;

      document.getElementById(`${containerId}-step`)?.addEventListener('click', () => {
        if (curIdx >= items.length) return;
        const x = items[curIdx];
        counts[x] = (counts[x] || 0) + 1;
        curIdx++;
        render();
      });

      document.getElementById(`${containerId}-reset`)?.addEventListener('click', () => {
        curIdx = 0;
        counts = {};
        render();
      });
    }

    render();
  };

  // ──────────────────────────────────────────────────────────────────────────
  // BÀI 1.06: Đảo thứ tự từ (split -> reverse -> join)
  // ──────────────────────────────────────────────────────────────────────────
  window.initReverseWordsVisualizer = function (containerId) {
    const root = document.getElementById(containerId);
    if (!root) return;
    if (root._cleanup) root._cleanup();

    let text = "hom nay troi dep";
    let isReversed = false;

    function render() {
      const words = text.trim().split(/\s+/).filter(Boolean);
      const displayWords = isReversed ? [...words].reverse() : words;

      root.innerHTML = `
        <div class="vis-header" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
          <span class="chip green">Bài 1.06 · Đoàn Tàu Đảo Thứ Tự Từ</span>
          <span class="chip">${isReversed ? 'Đã đảo chiều reverse()' : 'Thứ tự ban đầu'}</span>
        </div>

        <div style="margin:0.8rem 0; display:flex; align-items:center; gap:0.6rem; flex-wrap:wrap;">
          <span class="tiny" style="color:var(--text-3);">Thử câu khác:</span>
          <input type="text" id="${containerId}-input" value="${text}" 
                 style="background:var(--surface); border:1px solid var(--line); border-radius:var(--r-sm); color:var(--text); padding:0.35rem 0.7rem; font-family:var(--mono); font-size:0.88rem; width:220px;" />
          <button class="btn" id="${containerId}-apply" style="padding:0.35rem 0.75rem; font-size:0.8rem;">Áp dụng</button>
        </div>

        <div style="margin:1.2rem 0; overflow-x:auto; padding:0.5rem 0;">
          <div style="display:flex; align-items:center; gap:8px; justify-content:center; min-width:max-content;">
            <div style="font-size:1.6rem; margin-right:4px;">🚂</div>
            ${displayWords.map((w, idx) => `
              <div style="background:rgba(56,189,248,0.18); border:2px solid var(--py-blue); border-radius:8px; padding:0.6rem 1.1rem; font-family:var(--mono); font-weight:800; font-size:1.1rem; color:#e0f2fe; display:flex; flex-direction:column; align-items:center; transition:all 0.3s ease;">
                <span>'${w}'</span>
                <span style="font-size:0.68rem; color:var(--text-3); font-weight:normal; margin-top:2px;">Toa [${idx}]</span>
              </div>
              ${idx < displayWords.length - 1 ? '<span style="color:var(--text-3); font-size:1.2rem;">🔗</span>' : ''}
            `).join('')}
          </div>
        </div>

        <div style="background:rgba(0,0,0,0.35); border:1px solid var(--line); border-radius:var(--r-sm); padding:0.65rem 0.9rem; font-size:0.88rem;">
          Chuỗi kết quả nối lại bằng <code>" ".join(cac_tu)</code>: 
          <b style="color:${isReversed ? '#4ade80' : 'var(--cyan)'}; font-family:var(--mono); font-size:1.05rem;">
            "${displayWords.join(' ')}"
          </b>
        </div>

        <div class="row" style="margin-top:0.8rem; gap:0.6rem;">
          <button class="btn cyan" id="${containerId}-toggle">${isReversed ? '↺ Quay lại ban đầu' : '🔄 Đảo chiều cac_tu.reverse() →'}</button>
        </div>
      `;

      document.getElementById(`${containerId}-toggle`)?.addEventListener('click', () => {
        isReversed = !isReversed;
        render();
      });
      document.getElementById(`${containerId}-apply`)?.addEventListener('click', () => {
        const val = document.getElementById(`${containerId}-input`)?.value;
        if (val) {
          text = val;
          isReversed = false;
          render();
        }
      });
    }

    render();
  };

  // ──────────────────────────────────────────────────────────────────────────
  // BÀI 1.07: Chuỗi đối xứng (Palindrome & isalnum) - STEP-BY-STEP MIRROR MATCHING
  // ──────────────────────────────────────────────────────────────────────────
  window.initPalindromeVisualizer = function (containerId) {
    const root = document.getElementById(containerId);
    if (!root) return;
    if (root._cleanup) root._cleanup();

    let inputStr = "A man, a plan, a canal: Panama";
    let step = 0; // 0: raw, 1: filtered isalnum, 2: two-pointer mirror matching in progress, 3: completed
    let l = 0, r = 0;
    let matchHistory = [];
    let isMismatchFound = false;

    function getCleanChars() {
      return inputStr.split('').filter(c => /[a-zA-Z0-9]/.test(c)).map(c => c.toLowerCase());
    }

    function render() {
      const cleanChars = getCleanChars();
      const n = cleanChars.length;
      const isOverallMatch = cleanChars.join('') === [...cleanChars].reverse().join('');

      root.innerHTML = `
        <div class="vis-header" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
          <span class="chip py-blue">Bài 1.07 · Gương Đối Xứng Palindrome</span>
          <span class="chip">Kết quả: <b style="color:${isOverallMatch ? '#4ade80' : 'var(--rose)'};">${isOverallMatch ? 'True (Đối xứng)' : 'False (Không đối xứng)'}</b></span>
        </div>

        <div style="margin:0.8rem 0; display:flex; align-items:center; gap:0.6rem; flex-wrap:wrap;">
          <span class="tiny" style="color:var(--text-3);">Thử nghiệm:</span>
          <input type="text" id="${containerId}-input" value="${inputStr}" 
                 style="background:var(--surface); border:1px solid var(--line); border-radius:var(--r-sm); color:var(--text); padding:0.35rem 0.7rem; font-family:var(--mono); font-size:0.88rem; width:220px;" />
          <button class="btn" id="${containerId}-apply" style="padding:0.35rem 0.75rem; font-size:0.8rem;">Áp dụng</button>
          <button class="btn" id="${containerId}-p1" style="font-size:0.75rem; padding:0.25rem 0.5rem;">Panama</button>
          <button class="btn" id="${containerId}-p2" style="font-size:0.75rem; padding:0.25rem 0.5rem;">"race a car"</button>
        </div>

        <div style="display:grid; grid-template-columns: 1fr; gap:0.8rem; margin:1rem 0;">
          <div class="card">
            <span class="tiny" style="color:var(--text-3);">1. Chuỗi ban đầu (chứa dấu phẩy, hai chấm, dấu cách, chữ hoa):</span>
            <div style="margin-top:0.4rem; font-family:var(--mono); font-size:0.95rem; color:var(--text-2); word-break:break-all;">
              "${inputStr}"
            </div>
          </div>

          <div class="card" style="border:2px solid ${step >= 1 ? 'var(--cyan)' : 'var(--line)'};">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="tiny" style="color:var(--text-3);">2. Chuỗi sau khi lọc sạch <code>[c.lower() for c in s if c.isalnum()]</code>:</span>
              ${step >= 2 ? `<span class="chip tiny ${isMismatchFound ? 'rose' : 'green'}">${isMismatchFound ? 'Phát hiện lệch ký tự!' : `Cặp [${l}] & [${r}]`}</span>` : ''}
            </div>
            
            <div style="display:flex; gap:4px; flex-wrap:wrap; margin-top:0.6rem;">
              ${step >= 1 ? cleanChars.map((ch, idx) => {
                const isL = (step === 2 && idx === l);
                const isR = (step === 2 && idx === r);
                const isPastPair = (idx < l || idx > r);

                let bg = (isL || isR) ? 'rgba(56,189,248,0.45)' : isPastPair ? 'rgba(74,222,128,0.12)' : 'rgba(255,255,255,0.05)';
                let border = (isL || isR) ? 'var(--cyan)' : isPastPair ? 'rgba(74,222,128,0.4)' : 'var(--line)';
                let color = (isL || isR) ? '#fff' : isPastPair ? '#4ade80' : 'var(--text)';

                if (isMismatchFound && (isL || isR)) {
                  bg = 'rgba(244,63,94,0.35)';
                  border = 'var(--rose)';
                  color = '#fca5a5';
                }

                return `
                  <div style="width:26px; height:34px; display:flex; flex-direction:column; justify-content:center; align-items:center; background:${bg}; border:1px solid ${border}; border-radius:4px; font-family:var(--mono); font-weight:700; font-size:0.88rem; color:${color}; transition:all 0.2s ease;">
                    <span>${ch}</span>
                    <span style="font-size:0.6rem; opacity:0.75;">${isL ? 'L' : isR ? 'R' : ''}</span>
                  </div>
                `;
              }).join('') : '<span class="tiny" style="color:var(--text-3)">Nhấn để quét lọc sạch...</span>'}
            </div>

            ${step >= 1 ? `
              <div style="margin-top:0.6rem; padding-top:0.6rem; border-top:1px dashed var(--line); display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
                <span class="tiny" style="color:var(--text-3);">Đối chiếu bản lật ngược <code>sach[::-1]</code>:</span>
                <span style="font-family:var(--mono); font-weight:700; color:var(--amber);">"${[...cleanChars].reverse().join('')}"</span>
              </div>
            ` : ''}
          </div>
        </div>

        <div style="background:rgba(0,0,0,0.35); border:1px solid var(--line); border-radius:var(--r-sm); padding:0.65rem 0.9rem; font-size:0.88rem; min-height:46px; display:flex; align-items:center;">
          ${step === 0 ? 'Nhấn Bước 1 để lọc sạch ký tự không phải chữ/số.' : 
            step === 1 ? `Chuỗi sạch có <b>${cleanChars.length}</b> ký tự. Nhấn tiếp để đối chiếu từng cặp từ 2 đầu hướng vào giữa.` :
            step === 2 && !isMismatchFound ? 
              `So sánh đầu-đuôi: <code>sach[${l}] = '${cleanChars[l]}'</code> vs <code>sach[${r}] = '${cleanChars[r]}'</code> ➔ <b style="color:#4ade80;">KHỚP ✓</b>` :
            step === 2 && isMismatchFound ?
              `<b class="rose font-bold">✗ PHÁT HIỆN LỆCH: sach[${l}] = '${cleanChars[l]}' != sach[${r}] = '${cleanChars[r]}' ➔ Trả về False!</b>` :
            `<span style="color:#4ade80; font-weight:700;">✓ HOÀN THÀNH: Tất cả cặp ký tự đối xứng đều trùng khớp ➔ sach == sach[::-1] trả về True!</span>`}
        </div>

        <div class="row" style="margin-top:0.8rem; gap:0.6rem;">
          <button class="btn cyan" id="${containerId}-step" ${step >= 3 || (step === 2 && isMismatchFound) ? 'disabled' : ''}>
            ${step === 0 ? 'Bước 1: Lọc sạch isalnum() →' : step === 1 ? 'Bước 2: Bắt đầu đối chiếu 2 đầu →' : 'Đối chiếu cặp tiếp theo →'}
          </button>
          <button class="btn" id="${containerId}-reset">↺ Đặt lại</button>
        </div>
      `;

      document.getElementById(`${containerId}-step`)?.addEventListener('click', () => {
        const clean = getCleanChars();
        if (step === 0) {
          step = 1;
          render();
        } else if (step === 1) {
          step = 2;
          l = 0;
          r = clean.length - 1;
          isMismatchFound = (clean[l] !== clean[r]);
          render();
        } else if (step === 2) {
          if (l < r && !isMismatchFound) {
            l++;
            r--;
            if (l >= r) {
              step = 3;
            } else {
              if (clean[l] !== clean[r]) {
                isMismatchFound = true;
              }
            }
          } else {
            step = 3;
          }
          render();
        }
      });

      document.getElementById(`${containerId}-reset`)?.addEventListener('click', () => {
        step = 0;
        l = 0;
        r = 0;
        isMismatchFound = false;
        render();
      });

      document.getElementById(`${containerId}-apply`)?.addEventListener('click', () => {
        const val = document.getElementById(`${containerId}-input`)?.value;
        if (val !== undefined) {
          inputStr = val;
          step = 0;
          l = 0;
          r = 0;
          isMismatchFound = false;
          render();
        }
      });

      document.getElementById(`${containerId}-p1`)?.addEventListener('click', () => {
        inputStr = "A man, a plan, a canal: Panama";
        step = 0; l = 0; r = 0; isMismatchFound = false; render();
      });
      document.getElementById(`${containerId}-p2`)?.addEventListener('click', () => {
        inputStr = "race a car";
        step = 0; l = 0; r = 0; isMismatchFound = false; render();
      });
    }

    render();
  };

  // ──────────────────────────────────────────────────────────────────────────
  // BÀI 1.08: Gộp 2 Dict cộng dồn (a.copy() & b.items())
  // ──────────────────────────────────────────────────────────────────────────
  window.initMergeDictVisualizer = function (containerId) {
    const root = document.getElementById(containerId);
    if (!root) return;
    if (root._cleanup) root._cleanup();

    const dictA = { "x": 1, "y": 2 };
    const dictB = { "y": 5, "z": 3 };
    let curStep = 0; // 0: init, 1: copy a, 2: merge 'y', 3: merge 'z'

    function render() {
      let curResult = {};
      if (curStep >= 1) curResult = { ...dictA };
      if (curStep >= 2) curResult["y"] = dictA["y"] + dictB["y"];
      if (curStep >= 3) curResult["z"] = dictB["z"];

      root.innerHTML = `
        <div class="vis-header" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
          <span class="chip py-gold">Bài 1.08 · Gộp 2 Từ Điển Không Đè Gốc</span>
          <span class="chip">Bước: <b>${curStep}/3</b></span>
        </div>

        <div style="display:grid; grid-template-columns: 1fr 1fr 1.2fr; gap:0.9rem; margin:1rem 0;">
          <div class="card">
            <span class="tiny" style="color:var(--text-3);">Dict A gốc (Bất khả xâm phạm):</span>
            <div style="margin-top:0.6rem; font-family:var(--mono); font-size:1.05rem; color:var(--py-blue);">
              {"x": 1, "y": 2}
            </div>
            <p class="tiny" style="margin-top:0.4rem; color:var(--text-3);">Yêu cầu: Không được sửa A!</p>
          </div>

          <div class="card">
            <span class="tiny" style="color:var(--text-3);">Dict B:</span>
            <div style="margin-top:0.6rem; font-family:var(--mono); font-size:1.05rem; color:var(--amber);">
              {"y": 5, "z": 3}
            </div>
            <p class="tiny" style="margin-top:0.4rem; color:var(--text-3);">Khóa trùng "y", khóa mới "z".</p>
          </div>

          <div class="card" style="border:2px solid ${curStep >= 1 ? 'var(--green)' : 'var(--line)'};">
            <span class="tiny" style="color:var(--text-3);">Dict kết quả ket_qua = a.copy():</span>
            <div style="margin-top:0.6rem; font-family:var(--mono); font-size:1.1rem; color:#4ade80;">
              ${curStep === 0 ? '<span class="tiny" style="color:var(--text-3)">Chưa khởi tạo</span>' : JSON.stringify(curResult)}
            </div>
          </div>
        </div>

        <div style="background:rgba(0,0,0,0.35); border:1px solid var(--line); border-radius:var(--r-sm); padding:0.65rem 0.9rem; font-size:0.88rem; min-height:46px; display:flex; align-items:center;">
          ${curStep === 0 ? 'Bắt đầu: Cần tạo bản sao độc lập của A bằng <code>ket_qua = a.copy()</code> để không làm biến dạng A.' :
            curStep === 1 ? 'Đã tạo <code>ket_qua = {"x": 1, "y": 2}</code>. Chuẩn bị duyệt qua từng khóa trong B.' :
            curStep === 2 ? 'Duyệt khóa "y" (đã có trong A): <code>ket_qua["y"] = ket_qua.get("y", 0) + 5 = 2 + 5 = 7</code>.' :
            '<span style="color:#4ade80; font-weight:700;">✓ Hoàn tất: Duyệt khóa "z" (chưa có trong A): <code>0 + 3 = 3</code>. Ra đúng {"x": 1, "y": 7, "z": 3}.</span>'
          }
        </div>

        <div class="row" style="margin-top:0.8rem; gap:0.6rem;">
          <button class="btn cyan" id="${containerId}-step" ${curStep >= 3 ? 'disabled' : ''}>
            ${curStep === 0 ? 'Bước 1: Tạo bản sao a.copy() →' : curStep === 1 ? 'Bước 2: Cộng dồn khóa "y" →' : 'Bước 3: Thêm khóa "z" →'}
          </button>
          <button class="btn" id="${containerId}-reset">↺ Đặt lại</button>
        </div>
      `;

      document.getElementById(`${containerId}-step`)?.addEventListener('click', () => {
        if (curStep < 3) {
          curStep++;
          render();
        }
      });
      document.getElementById(`${containerId}-reset`)?.addEventListener('click', () => {
        curStep = 0;
        render();
      });
    }

    render();
  };

  // ──────────────────────────────────────────────────────────────────────────
  // BÀI 1.09: Lọc số nguyên tố (O(sqrt(n)))
  // ──────────────────────────────────────────────────────────────────────────
  window.initPrimeFilterVisualizer = function (containerId) {
    const root = document.getElementById(containerId);
    if (!root) return;
    if (root._cleanup) root._cleanup();

    let testN = 49;
    let i = 2;
    let finished = false;
    let isPrime = true;
    let reason = "";

    function render() {
      root.innerHTML = `
        <div class="vis-header" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
          <span class="chip rose">Bài 1.09 · Thước Đo Số Nguyên Tố O(√N)</span>
          <span class="chip">Số kiểm tra: <b>${testN}</b> (Căn bậc hai: <b>≈ ${Math.sqrt(Math.max(0, testN)).toFixed(2)}</b>)</span>
        </div>

        <div style="margin:0.8rem 0; display:flex; align-items:center; gap:0.6rem; flex-wrap:wrap;">
          <span class="tiny" style="color:var(--text-3);">Thử số n:</span>
          <input type="number" id="${containerId}-input" value="${testN}" 
                 style="background:var(--surface); border:1px solid var(--line); border-radius:var(--r-sm); color:var(--text); padding:0.35rem 0.7rem; font-family:var(--mono); font-size:0.88rem; width:100px;" />
          <button class="btn" id="${containerId}-apply" style="padding:0.35rem 0.75rem; font-size:0.8rem;">Áp dụng</button>
          <button class="btn" id="${containerId}-p1" style="font-size:0.75rem; padding:0.25rem 0.5rem;">n = 49</button>
          <button class="btn" id="${containerId}-p2" style="font-size:0.75rem; padding:0.25rem 0.5rem;">n = 37</button>
          <button class="btn" id="${containerId}-p3" style="font-size:0.75rem; padding:0.25rem 0.5rem;">n = 1</button>
        </div>

        <div style="display:grid; grid-template-columns: 1fr; gap:0.8rem; margin:1rem 0;">
          <div class="card">
            <span class="tiny" style="color:var(--text-3);">Điều kiện dừng vòng lặp: <code>while i * i &lt;= n</code> (tương đương <code>i &lt;= √n</code>):</span>
            <div style="display:flex; gap:6px; flex-wrap:wrap; margin-top:0.6rem;">
              ${Array.from({ length: Math.min(Math.max(1, testN), 10) }, (_, idx) => idx + 2).map(val => {
                const isUnderSqrt = (val * val <= testN);
                const isCurrent = (val === i && !finished && testN >= 2);
                const isTested = (val < i || (finished && val === i));
                let bg = isCurrent ? 'rgba(56,189,248,0.4)' : isTested ? 'rgba(255,255,255,0.06)' : 'transparent';
                let border = isCurrent ? 'var(--py-blue)' : isUnderSqrt ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.05)';
                let color = isUnderSqrt ? 'var(--text)' : 'var(--text-3)';

                return `
                  <div style="padding:0.4rem 0.6rem; border-radius:4px; font-family:var(--mono); font-size:0.88rem; background:${bg}; border:1px solid ${border}; color:${color}; text-align:center;">
                    i = ${val}
                    <div style="font-size:0.68rem; color:${val * val <= testN ? 'var(--cyan)' : 'var(--text-3)'}">
                      ${val * val} ${val * val <= testN ? '≤' : '>'} ${testN}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
            <p class="tiny" style="margin-top:0.6rem; color:var(--text-3);">
              Vòng lặp sẽ <b>NGẮT NGAY</b> khi <code>i * i &gt; n</code> mà không cần kiểm tra đến ${testN}!
            </p>
          </div>
        </div>

        <div style="background:rgba(0,0,0,0.35); border:1px solid var(--line); border-radius:var(--r-sm); padding:0.65rem 0.9rem; font-size:0.88rem; min-height:46px; display:flex; align-items:center;">
          ${finished ? 
            `<b style="color:${isPrime ? '#4ade80' : 'var(--rose)'};">${isPrime ? `✓ ${testN} LÀ SỐ NGUYÊN TỐ!` : `✗ ${testN} KHÔNG PHẢI SỐ NGUYÊN TỐ! (${reason})`}</b>` :
            testN < 2 ? `<span class="rose">n = ${testN} &lt; 2 ➔ Không phải số nguyên tố!</span>` :
            `Đang thử số chia i = <b>${i}</b>: <code>${testN} % ${i} = ${testN % i}</code> ${testN % i === 0 ? '== 0 (Chia hết ➔ Dừng ngay!)' : '!= 0 (Không chia hết, tăng i += 1)'}`
          }
        </div>

        <div class="row" style="margin-top:0.8rem; gap:0.6rem;">
          <button class="btn cyan" id="${containerId}-step" ${finished ? 'disabled' : ''}>Thử số chia i tiếp theo →</button>
          <button class="btn" id="${containerId}-reset">↺ Đặt lại</button>
        </div>
      `;

      document.getElementById(`${containerId}-step`)?.addEventListener('click', () => {
        if (finished) return;
        if (testN < 2) {
          finished = true;
          isPrime = false;
          reason = "Vì n < 2";
          render();
          return;
        }
        if (testN % i === 0) {
          finished = true;
          isPrime = false;
          reason = `Chia hết cho ${i}`;
          render();
          return;
        }
        i++;
        if (i * i > testN) {
          finished = true;
          isPrime = true;
          reason = `Đã vượt qua căn bậc 2 (${i*i} > ${testN}) mà không chia hết cho số nào`;
        }
        render();
      });

      document.getElementById(`${containerId}-reset`)?.addEventListener('click', () => {
        i = 2;
        finished = false;
        isPrime = true;
        reason = "";
        render();
      });

      document.getElementById(`${containerId}-apply`)?.addEventListener('click', () => {
        const val = parseInt(document.getElementById(`${containerId}-input`)?.value, 10);
        if (!isNaN(val)) {
          testN = val;
          i = 2;
          finished = false;
          isPrime = true;
          reason = "";
          render();
        }
      });
      document.getElementById(`${containerId}-p1`)?.addEventListener('click', () => {
        testN = 49; i = 2; finished = false; isPrime = true; render();
      });
      document.getElementById(`${containerId}-p2`)?.addEventListener('click', () => {
        testN = 37; i = 2; finished = false; isPrime = true; render();
      });
      document.getElementById(`${containerId}-p3`)?.addEventListener('click', () => {
        testN = 1; i = 2; finished = false; isPrime = true; render();
      });
    }

    render();
  };

  // ──────────────────────────────────────────────────────────────────────────
  // BÀI 1.10: Nén chuỗi Run-Length Encoding (RLE)
  // ──────────────────────────────────────────────────────────────────────────
  window.initRleVisualizer = function (containerId) {
    const root = document.getElementById(containerId);
    if (!root) return;
    if (root._cleanup) root._cleanup();

    let s = "aaabbc";
    let curIdx = 1; // start scanning from s[1:]
    let prevChar = s.length > 0 ? s[0] : "";
    let count = 1;
    let result = [];

    function render() {
      root.innerHTML = `
        <div class="vis-header" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
          <span class="chip violet">Bài 1.10 · Băng Chuyền Nén Chuỗi (Run-Length)</span>
          <span class="chip">Kết quả: <b style="color:var(--cyan); font-family:var(--mono);">${result.join('')}</b></span>
        </div>

        <div style="margin:0.8rem 0; display:flex; align-items:center; gap:0.6rem; flex-wrap:wrap;">
          <span class="tiny" style="color:var(--text-3);">Thử chuỗi khác:</span>
          <input type="text" id="${containerId}-input" value="${s}" 
                 style="background:var(--surface); border:1px solid var(--line); border-radius:var(--r-sm); color:var(--text); padding:0.35rem 0.7rem; font-family:var(--mono); font-size:0.88rem; width:180px;" />
          <button class="btn" id="${containerId}-apply" style="padding:0.35rem 0.75rem; font-size:0.8rem;">Áp dụng</button>
          <button class="btn" id="${containerId}-p1" style="font-size:0.75rem; padding:0.25rem 0.5rem;">"abc"</button>
          <button class="btn" id="${containerId}-p2" style="font-size:0.75rem; padding:0.25rem 0.5rem;">"WWWB"</button>
        </div>

        <div class="vis-array-box" style="margin:1rem 0; overflow-x:auto;">
          <div style="display:flex; gap:8px; justify-content:flex-start; min-width:max-content;">
            ${s.length === 0 ? '<span class="tiny" style="color:var(--text-3)">Chuỗi rỗng "" ➔ trả về ""</span>' : s.split('').map((ch, idx) => {
              const isCur = (idx === curIdx);
              const isPast = (idx < curIdx);
              return `
                <div style="display:flex; flex-direction:column; align-items:center; width:44px;">
                  <span style="font-size:0.68rem; color:var(--text-3); font-family:var(--mono);">[${idx}]</span>
                  <div style="width:44px; height:46px; display:grid; place-items:center; background:${isCur ? 'rgba(56,189,248,0.35)' : isPast ? 'rgba(255,255,255,0.03)' : 'var(--surface)'}; border:2px solid ${isCur ? 'var(--py-blue)' : 'var(--line)'}; border-radius:6px; font-weight:700; font-family:var(--mono); font-size:1.15rem; color:${isCur ? '#fff' : 'var(--text)'}; margin:4px 0;">
                    ${ch}
                  </div>
                  <span style="font-size:0.75rem; font-family:var(--mono); min-height:16px;">
                    ${isCur ? '<b style="color:var(--py-blue)">▲ c</b>' : ''}
                  </span>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <div style="display:grid; grid-template-columns: 1fr 1.2fr; gap:1rem; margin:1rem 0;">
          <div class="card">
            <span class="tiny" style="color:var(--text-3);">Trạng thái máy đếm:</span>
            <div style="margin-top:0.6rem; display:flex; gap:1rem;">
              <div>
                <span class="tiny" style="color:var(--text-3)">ky_tu_truoc:</span>
                <div style="font-size:1.4rem; font-weight:800; font-family:var(--mono); color:var(--amber);">'${prevChar}'</div>
              </div>
              <div>
                <span class="tiny" style="color:var(--text-3)">dem:</span>
                <div style="font-size:1.4rem; font-weight:800; font-family:var(--mono); color:var(--green);">${count}</div>
              </div>
            </div>
          </div>

          <div class="card">
            <span class="tiny" style="color:var(--text-3);">Mảng kết quả ket_qua = []:</span>
            <div style="margin-top:0.6rem; display:flex; gap:6px; flex-wrap:wrap;">
              ${result.length === 0 ? '<span class="tiny" style="color:var(--text-3)">Chưa có khối nào đóng gói</span>' : ''}
              ${result.map(block => `
                <span style="background:rgba(74,222,128,0.2); border:1px solid var(--green); padding:0.35rem 0.65rem; border-radius:4px; font-family:var(--mono); font-weight:700; color:#4ade80;">
                  "${block}"
                </span>
              `).join('')}
            </div>
          </div>
        </div>

        <div style="background:rgba(0,0,0,0.35); border:1px solid var(--line); border-radius:var(--r-sm); padding:0.65rem 0.9rem; font-size:0.88rem; min-height:46px; display:flex; align-items:center;">
          ${s.length === 0 ? '<span style="color:#4ade80; font-weight:700;">✓ Chuỗi rỗng: return "" ngay ở đầu hàm.</span>' :
            curIdx > s.length ? 
            `<span style="color:#4ade80; font-weight:700;">✓ HOÀN THÀNH NÉN CHUỖI! Chuỗi ban đầu "${s}" ➔ Chuỗi nén "${result.join('')}".</span>` :
            curIdx === s.length ?
            `<span class="rose font-bold">⚠️ BẪY TỬ THẦN: Đã hết vòng lặp! Bắt buộc phải có dòng cuối: <code>ket_qua.append(ky_tu_truoc + str(dem))</code> để không bỏ rơi nhóm cuối "${prevChar}${count}"!</span>` :
            `Ký tự c = <code>'${s[curIdx]}'</code> ${s[curIdx] === prevChar ? `== ky_tu_truoc ➔ Tăng biến dem += 1 (${count + 1})` : `!= ky_tu_truoc ➔ Đóng gói "${prevChar}${count}", reset theo dõi '${s[curIdx]}'`}`
          }
        </div>

        <div class="row" style="margin-top:0.8rem; gap:0.6rem;">
          <button class="btn cyan" id="${containerId}-step" ${s.length === 0 || curIdx > s.length ? 'disabled' : ''}>
            ${curIdx === s.length ? 'Đóng gói nhóm cuối cùng ngoài vòng for →' : 'Duyệt ký tự tiếp theo →'}
          </button>
          <button class="btn" id="${containerId}-reset">↺ Đặt lại</button>
        </div>
      `;

      document.getElementById(`${containerId}-step`)?.addEventListener('click', () => {
        if (curIdx < s.length) {
          const c = s[curIdx];
          if (c === prevChar) {
            count++;
          } else {
            result.push(prevChar + count);
            prevChar = c;
            count = 1;
          }
          curIdx++;
        } else if (curIdx === s.length) {
          result.push(prevChar + count);
          curIdx++;
        }
        render();
      });

      document.getElementById(`${containerId}-reset`)?.addEventListener('click', () => {
        resetState();
        render();
      });

      document.getElementById(`${containerId}-apply`)?.addEventListener('click', () => {
        const val = document.getElementById(`${containerId}-input`)?.value;
        if (val !== undefined) {
          s = val;
          resetState();
          render();
        }
      });
      document.getElementById(`${containerId}-p1`)?.addEventListener('click', () => {
        s = "abc"; resetState(); render();
      });
      document.getElementById(`${containerId}-p2`)?.addEventListener('click', () => {
        s = "WWWB"; resetState(); render();
      });
    }

    function resetState() {
      if (s.length === 0) {
        prevChar = "";
        count = 0;
        curIdx = 0;
        result = [];
      } else {
        prevChar = s[0];
        count = 1;
        curIdx = 1;
        result = [];
      }
    }

    render();
  };

  // ──────────────────────────────────────────────────────────────────────────
  // BÀI 1.11: Xoay phải mảng k bước (k % len) - FIX JS SLICE(-0) BUG
  // ──────────────────────────────────────────────────────────────────────────
  window.initRotateRightVisualizer = function (containerId) {
    const root = document.getElementById(containerId);
    if (!root) return;
    if (root._cleanup) root._cleanup();

    let arr = [1, 2, 3, 4, 5];
    let k = 2;
    let step = 0; // 0: raw, 1: k % len, 2: split & joined

    function render() {
      const len = arr.length;
      const effK = len > 0 ? (k % len) : 0;
      // FIX CRITICAL BUG: Trong JS, slice(-0) là slice(0) (lấy cả mảng!).
      // Khi effK === 0, tail là mảng rỗng, head là toàn bộ mảng.
      const tail = effK > 0 ? arr.slice(-effK) : [];
      const head = effK > 0 ? arr.slice(0, len - effK) : [...arr];
      const rotated = effK > 0 ? [...tail, ...head] : [...arr];

      root.innerHTML = `
        <div class="vis-header" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
          <span class="chip green">Bài 1.11 · Bánh Xe Xoay Phải Mảng</span>
          <span class="chip">Số bước k: <b>${k}</b> (Hiệu dụng: <b>k % ${len} = ${effK}</b>)</span>
        </div>

        <div style="margin:0.8rem 0; display:flex; align-items:center; gap:0.6rem; flex-wrap:wrap;">
          <span class="tiny" style="color:var(--text-3);">Thử giá trị k:</span>
          <button class="btn" id="${containerId}-k2" style="font-size:0.75rem; padding:0.25rem 0.5rem;">k = 2</button>
          <button class="btn" id="${containerId}-k7" style="font-size:0.75rem; padding:0.25rem 0.5rem;">k = 7 (k &gt; len ➔ 7 % 5 = 2)</button>
          <button class="btn" id="${containerId}-k5" style="font-size:0.75rem; padding:0.25rem 0.5rem;">k = 5 (Về chỗ cũ)</button>
          <input type="number" id="${containerId}-custom-k" value="${k}" min="0" max="100" 
                 style="background:var(--surface); border:1px solid var(--line); border-radius:var(--r-sm); color:var(--text); padding:0.25rem 0.5rem; font-family:var(--mono); font-size:0.8rem; width:70px;" />
          <button class="btn" id="${containerId}-apply-k" style="padding:0.25rem 0.6rem; font-size:0.78rem;">Đổi k</button>
        </div>

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem; margin:1rem 0;">
          <div class="card" style="border:2px solid ${step >= 2 ? 'var(--amber)' : 'var(--line)'};">
            <span class="tiny" style="color:var(--text-3);">1. Đuôi bay lên đầu: arr[-k:] (Lấy ${effK} phần tử cuối)</span>
            <div style="display:flex; gap:6px; margin-top:0.6rem; min-height:42px; align-items:center;">
              ${step >= 2 ? (tail.length > 0 ? tail.map(x => `
                <span style="background:rgba(251,191,36,0.25); border:1px solid var(--amber); padding:0.4rem 0.75rem; border-radius:6px; font-family:var(--mono); font-weight:800; font-size:1.1rem; color:#fbbf24;">
                  ${x}
                </span>
              `).join('') : '<span class="tiny" style="color:var(--text-3)">k = 0: Đuôi rỗng []</span>') : '<span class="tiny" style="color:var(--text-3)">Chờ cắt lát...</span>'}
            </div>
          </div>

          <div class="card" style="border:2px solid ${step >= 2 ? 'var(--py-blue)' : 'var(--line)'};">
            <span class="tiny" style="color:var(--text-3);">2. Đầu trượt sang phải: arr[:-k] (Lấy các phần tử còn lại)</span>
            <div style="display:flex; gap:6px; margin-top:0.6rem; min-height:42px; align-items:center;">
              ${step >= 2 ? head.map(x => `
                <span style="background:rgba(56,189,248,0.2); border:1px solid var(--py-blue); padding:0.4rem 0.75rem; border-radius:6px; font-family:var(--mono); font-weight:800; font-size:1.1rem; color:#38bdf8;">
                  ${x}
                </span>
              `).join('') : '<span class="tiny" style="color:var(--text-3)">Chờ cắt lát...</span>'}
            </div>
          </div>
        </div>

        <div style="background:rgba(0,0,0,0.35); border:1px solid var(--line); border-radius:var(--r-sm); padding:0.65rem 0.9rem; font-size:0.88rem;">
          ${step === 0 ? `Bắt đầu: Mảng [${arr.join(', ')}]. Cần rút gọn k bằng <code>k = k % len(arr)</code>.` :
            step === 1 ? `Đã tính <code>k = ${k} % ${len} = ${effK}</code>. ${effK === 0 ? 'k hiệu dụng bằng 0 ➔ mảng giữ nguyên!' : `Cắt lát đuôi <code>arr[-${effK}:]</code> và đầu <code>arr[:-${effK}]</code>.`}` :
            `<span style="color:#4ade80; font-weight:700;">✓ KẾT QUẢ GHÉP: [${tail.join(', ')}] + [${head.join(', ')}] = [${rotated.join(', ')}]!</span>`
          }
        </div>

        <div class="row" style="margin-top:0.8rem; gap:0.6rem;">
          <button class="btn cyan" id="${containerId}-step" ${step >= 2 ? 'disabled' : ''}>
            ${step === 0 ? 'Bước 1: Rút gọn k % len →' : 'Bước 2: Cắt lát & Ghép mảng →'}
          </button>
          <button class="btn" id="${containerId}-reset">↺ Đặt lại</button>
        </div>
      `;

      document.getElementById(`${containerId}-step`)?.addEventListener('click', () => {
        if (step < 2) {
          step++;
          render();
        }
      });
      document.getElementById(`${containerId}-reset`)?.addEventListener('click', () => {
        step = 0;
        render();
      });
      document.getElementById(`${containerId}-k2`)?.addEventListener('click', () => {
        k = 2; step = 0; render();
      });
      document.getElementById(`${containerId}-k7`)?.addEventListener('click', () => {
        k = 7; step = 0; render();
      });
      document.getElementById(`${containerId}-k5`)?.addEventListener('click', () => {
        k = 5; step = 0; render();
      });
      document.getElementById(`${containerId}-apply-k`)?.addEventListener('click', () => {
        const val = parseInt(document.getElementById(`${containerId}-custom-k`)?.value, 10);
        if (!isNaN(val) && val >= 0) {
          k = val;
          step = 0;
          render();
        }
      });
    }

    render();
  };

  // ──────────────────────────────────────────────────────────────────────────
  // BÀI 1.12: Two Sum O(n) Hash Map (Đi tìm mảnh ghép còn thiếu)
  // ──────────────────────────────────────────────────────────────────────────
  window.initTwoSumHashVisualizer = function (containerId) {
    const root = document.getElementById(containerId);
    if (!root) return;
    if (root._cleanup) root._cleanup();

    let arr = [2, 7, 11, 15];
    let target = 9;
    let j = 0;
    let da_gap = {}; // gia_tri -> chi_so
    let found = null;

    function render() {
      const curX = j < arr.length ? arr[j] : null;
      const need = curX !== null ? (target - curX) : null;
      const isNeedFound = need !== null && (need in da_gap);

      root.innerHTML = `
        <div class="vis-header" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
          <div style="display:flex; gap:0.5rem; align-items:center;">
            <span class="chip py-blue">Bài 1.12 · Two Sum O(N) Hash Map</span>
            <span class="chip">Mục tiêu Target = <b>${target}</b></span>
          </div>
          <span class="chip ${found ? 'green' : 'violet'}">
            ${found ? `✓ Tìm thấy cặp (${found[0]}, ${found[1]})!` : 'Đang duyệt O(N)...'}
          </span>
        </div>

        <div style="margin:0.8rem 0; display:flex; align-items:center; gap:0.6rem; flex-wrap:wrap;">
          <span class="tiny" style="color:var(--text-3);">Mẫu thử:</span>
          <button class="btn" id="${containerId}-p1" style="font-size:0.75rem; padding:0.25rem 0.5rem;">[2,7,11,15] T=9</button>
          <button class="btn" id="${containerId}-p2" style="font-size:0.75rem; padding:0.25rem 0.5rem;">[3,2,4] T=6</button>
          <button class="btn" id="${containerId}-p3" style="font-size:0.75rem; padding:0.25rem 0.5rem;">[1,5,8,10] T=13</button>
        </div>

        <div class="vis-array-box" style="margin:1rem 0; overflow-x:auto;">
          <div style="display:flex; gap:8px; justify-content:center; min-width:320px;">
            ${arr.map((val, idx) => {
              const isJ = (idx === j && !found);
              const isMatch = (found && (idx === found[0] || idx === found[1]));
              return `
                <div style="display:flex; flex-direction:column; align-items:center; width:52px;">
                  <span style="font-size:0.7rem; color:var(--text-3); font-family:var(--mono);">Chỉ số [${idx}]</span>
                  <div style="width:52px; height:52px; display:grid; place-items:center; border-radius:8px; font-weight:800; font-family:var(--mono); font-size:1.2rem; margin:4px 0;
                              background:${isMatch ? 'rgba(74,222,128,0.35)' : isJ ? 'rgba(56,189,248,0.35)' : 'var(--surface)'};
                              border:2px solid ${isMatch ? 'var(--green)' : isJ ? 'var(--py-blue)' : 'var(--line)'};
                              color:${isMatch ? '#4ade80' : isJ ? '#fff' : 'var(--text)'};">
                    ${val}
                  </div>
                  <span style="font-size:0.75rem; font-family:var(--mono); min-height:18px;">
                    ${isJ ? '<b style="color:var(--py-blue)">▲ j</b>' : (isMatch ? '<b style="color:#4ade80">✓</b>' : '')}
                  </span>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <div style="display:grid; grid-template-columns: 1.1fr 1fr; gap:1rem; margin:1rem 0;">
          <div class="card">
            <span class="tiny" style="color:var(--text-3);">Sổ tay ghi nhớ da_gap = {} (Giá trị ➔ Chỉ số):</span>
            <div style="margin-top:0.6rem; display:flex; gap:6px; flex-wrap:wrap;">
              ${Object.keys(da_gap).length === 0 ? '<span class="tiny" style="color:var(--text-3)">Chưa ghi nhận số nào</span>' : ''}
              ${Object.entries(da_gap).map(([v, idx]) => `
                <span style="background:rgba(255,255,255,0.06); border:1px solid var(--line); padding:0.35rem 0.65rem; border-radius:4px; font-family:var(--mono); font-size:0.88rem;">
                  Số <b>${v}</b>: tại vị trí <b>[${idx}]</b>
                </span>
              `).join('')}
            </div>
          </div>

          <div class="card" style="display:flex; flex-direction:column; justify-content:center;">
            <span class="tiny" style="color:var(--text-3); margin-bottom:0.3rem;">Mảnh ghép còn thiếu can = target - x:</span>
            <div style="font-family:var(--mono); font-size:0.95rem;">
              ${curX !== null && !found ? `
                can = ${target} - ${curX} = <b style="color:var(--amber); font-size:1.2rem;">${need}</b><br>
                Tra sổ da_gap: <b>${isNeedFound ? 'ĐÃ CÓ TRONG SỔ!' : 'Chưa có'}</b>
              ` : found ? `<span style="color:#4ade80; font-weight:700;">Đã khớp: arr[${found[0]}] + arr[${found[1]}] = ${arr[found[0]]} + ${arr[found[1]]} = ${target}</span>` : ''}
            </div>
          </div>
        </div>

        <div style="background:rgba(0,0,0,0.35); border:1px solid var(--line); border-radius:var(--r-sm); padding:0.65rem 0.9rem; font-size:0.88rem; min-height:46px; display:flex; align-items:center;">
          ${found ? 
            `<span style="color:#4ade80; font-weight:700;">✓ TÌM THẤY! Trả về cặp chỉ số (${found[0]}, ${found[1]}). Độ phức tạp O(N) thần tốc!</span>` :
            `Đang tại j = ${j}, x = ${curX}: Cần số <b>${need}</b>. ${isNeedFound ? `Tìm thấy ${need} ở vị trí [${da_gap[need]}]!` : `Chưa có trong sổ ➔ Lưu da_gap[${curX}] = ${j}`}`
          }
        </div>

        <div class="row" style="margin-top:0.8rem; gap:0.6rem;">
          <button class="btn cyan" id="${containerId}-step" ${found || j >= arr.length ? 'disabled' : ''}>Bước tiếp theo (Step) →</button>
          <button class="btn" id="${containerId}-reset">↺ Đặt lại</button>
        </div>
      `;

      document.getElementById(`${containerId}-step`)?.addEventListener('click', () => {
        if (found || j >= arr.length) return;
        const x = arr[j];
        const can = target - x;
        if (can in da_gap) {
          found = [da_gap[can], j];
        } else {
          da_gap[x] = j;
          j++;
        }
        render();
      });

      document.getElementById(`${containerId}-reset`)?.addEventListener('click', () => {
        j = 0;
        da_gap = {};
        found = null;
        render();
      });

      document.getElementById(`${containerId}-p1`)?.addEventListener('click', () => {
        arr = [2, 7, 11, 15]; target = 9; j = 0; da_gap = {}; found = null; render();
      });
      document.getElementById(`${containerId}-p2`)?.addEventListener('click', () => {
        arr = [3, 2, 4]; target = 6; j = 0; da_gap = {}; found = null; render();
      });
      document.getElementById(`${containerId}-p3`)?.addEventListener('click', () => {
        arr = [1, 5, 8, 10]; target = 13; j = 0; da_gap = {}; found = null; render();
      });
    }

    render();
  };

  // ──────────────────────────────────────────────────────────────────────────
  // BÀI 1.13: Sắp xếp học sinh đa tiêu chí (-diem, tuoi, ten)
  // ──────────────────────────────────────────────────────────────────────────
  window.initStudentSortVisualizer = function (containerId) {
    const root = document.getElementById(containerId);
    if (!root) return;
    if (root._cleanup) root._cleanup();

    const rawList = [
      { ten: 'An', diem: 8.0, tuoi: 20 },
      { ten: 'Binh', diem: 9.0, tuoi: 19 },
      { ten: 'Cuong', diem: 8.0, tuoi: 19 }
    ];
    let isSorted = false;

    function render() {
      const displayList = isSorted ? 
        [...rawList].sort((a, b) => {
          if (b.diem !== a.diem) return b.diem - a.diem;
          if (a.tuoi !== b.tuoi) return a.tuoi - b.tuoi;
          return a.ten.localeCompare(b.ten);
        }) : rawList;

      root.innerHTML = `
        <div class="vis-header" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
          <span class="chip py-gold">Bài 1.13 · Cân Tiểu Ly Xếp Hạng Học Sinh</span>
          <span class="chip">${isSorted ? '✓ Đã xếp hạng theo key (-diem, tuoi, ten)' : 'Danh sách gốc chưa xếp'}</span>
        </div>

        <div style="overflow-x:auto; margin:1rem 0;">
          <table class="matrix-table" style="min-width:440px; width:100%; border-collapse:collapse;">
            <thead>
              <tr style="border-bottom:1px solid var(--line); text-align:left;">
                <th style="padding:0.5rem;">Hạng</th>
                <th style="padding:0.5rem;">Tên</th>
                <th style="padding:0.5rem;">Điểm số (Giảm)</th>
                <th style="padding:0.5rem;">Tuổi (Tăng)</th>
                <th style="padding:0.5rem;">Chìa khóa sắp xếp Tuple Python</th>
              </tr>
            </thead>
            <tbody>
              ${displayList.map((sv, idx) => `
                <tr style="border-bottom:1px solid var(--line-soft); background:${isSorted ? (idx === 0 ? 'rgba(74,222,128,0.12)' : 'rgba(255,255,255,0.02)') : 'transparent'};">
                  <td style="padding:0.5rem;"><b>#${idx + 1}</b></td>
                  <td style="padding:0.5rem; font-weight:700; color:var(--cyan);">${sv.ten}</td>
                  <td style="padding:0.5rem;"><b style="color:var(--amber);">${sv.diem}</b></td>
                  <td style="padding:0.5rem;">${sv.tuoi}</td>
                  <td style="padding:0.5rem; font-family:var(--mono); font-size:0.84rem;">
                    <code>(${isSorted ? `<b style="color:var(--rose)">-${sv.diem}</b>` : `-${sv.diem}`}, ${sv.tuoi}, '${sv.ten}')</code>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <div class="note" style="margin-top:0.4rem;">
          <b>Bí mật dấu trừ:</b> Python luôn xếp TĂNG DẦN. Muốn Điểm GIẢM DẦN, đặt dấu trừ <code>-diem</code>!
          Khi đó điểm 9.0 thành <code>-9.0</code> (bé hơn <code>-8.0</code> nên nhảy lên đầu bảng).
        </div>

        <div class="row" style="margin-top:0.8rem; gap:0.6rem;">
          <button class="btn cyan" id="${containerId}-toggle">${isSorted ? '↺ Trả về danh sách gốc' : 'Sắp xếp sorted(hoc_sinh, key=...) →'}</button>
        </div>
      `;

      document.getElementById(`${containerId}-toggle`)?.addEventListener('click', () => {
        isSorted = !isSorted;
        render();
      });
    }

    render();
  };

  // ──────────────────────────────────────────────────────────────────────────
  // BÀI 1.14: Đổi cơ số (n % b, n // b, reversed)
  // ──────────────────────────────────────────────────────────────────────────
  window.initBaseConversionVisualizer = function (containerId) {
    const root = document.getElementById(containerId);
    if (!root) return;
    if (root._cleanup) root._cleanup();

    let n = 255;
    let b = 16;
    let curN = n;
    let digits = [];
    const charMap = "0123456789ABCDEF";

    function render() {
      root.innerHTML = `
        <div class="vis-header" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
          <span class="chip py-blue">Bài 1.14 · Guồng Quay Đổi Cơ Số</span>
          <span class="chip">Đổi số <b>${n}</b> sang hệ <b>${b}</b></span>
        </div>

        <div style="margin:0.8rem 0; display:flex; align-items:center; gap:0.6rem; flex-wrap:wrap;">
          <span class="tiny" style="color:var(--text-3);">Chọn ví dụ:</span>
          <button class="btn" id="${containerId}-hex" style="font-size:0.75rem; padding:0.25rem 0.5rem;">255 he 16 (Hex)</button>
          <button class="btn" id="${containerId}-bin" style="font-size:0.75rem; padding:0.25rem 0.5rem;">13 he 2 (Binary)</button>
          <button class="btn" id="${containerId}-oct" style="font-size:0.75rem; padding:0.25rem 0.5rem;">85 he 8 (Octal)</button>
          <button class="btn" id="${containerId}-zero" style="font-size:0.75rem; padding:0.25rem 0.5rem;">n = 0</button>
        </div>

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem; margin:1rem 0;">
          <div class="card">
            <span class="tiny" style="color:var(--text-3);">Bánh xe chia liên tục:</span>
            <div style="margin-top:0.6rem; font-family:var(--mono); font-size:1.1rem;">
              n hiện tại = <b style="color:var(--cyan);">${curN}</b>
            </div>
            <div style="margin-top:0.4rem; font-size:0.82rem; color:var(--text-2);">
              ${n === 0 ? '<b style="color:#4ade80;">n = 0 ➔ Trả về "0" ngay!</b>' :
                curN > 0 ? `
                Phép tính: <code>${curN} % ${b} = ${curN % b}</code> ➔ Ký tự: <b style="color:var(--amber);">'${charMap[curN % b]}'</b><br>
                Cắt n: <code>n = ${curN} // ${b} = ${Math.floor(curN / b)}</code>
              ` : '<b style="color:#4ade80;">Đã chia hết (n = 0)!</b>'}
            </div>
          </div>

          <div class="card">
            <span class="tiny" style="color:var(--text-3);">Dãy ký số thu được (từ hàng đơn vị lên):</span>
            <div style="display:flex; gap:6px; flex-wrap:wrap; margin-top:0.6rem;">
              ${n === 0 ? '<span style="background:rgba(74,222,128,0.2); border:1px solid var(--green); padding:0.35rem 0.65rem; border-radius:4px; font-family:var(--mono); font-weight:800; color:#4ade80; font-size:1.05rem;">"0"</span>' :
                digits.length === 0 ? '<span class="tiny" style="color:var(--text-3)">Chưa có ký số nào</span>' :
                digits.map((d) => `
                <span style="background:rgba(251,191,36,0.2); border:1px solid var(--amber); padding:0.35rem 0.65rem; border-radius:4px; font-family:var(--mono); font-weight:800; color:#fbbf24; font-size:1.05rem;">
                  ${d}
                </span>
              `).join('')}
            </div>
            ${curN === 0 && digits.length > 0 ? `
              <div style="margin-top:0.6rem; padding-top:0.4rem; border-top:1px solid var(--line-soft);">
                <span class="tiny" style="color:var(--text-3);">Đảo ngược bằng <code>"".join(reversed(ket_qua))</code>:</span>
                <div style="font-size:1.3rem; font-weight:800; font-family:var(--mono); color:#4ade80; margin-top:2px;">
                  "${[...digits].reverse().join('')}"
                </div>
              </div>
            ` : ''}
          </div>
        </div>

        <div class="row" style="margin-top:0.8rem; gap:0.6rem;">
          <button class="btn cyan" id="${containerId}-step" ${n === 0 || curN === 0 ? 'disabled' : ''}>Chia bước tiếp theo →</button>
          <button class="btn" id="${containerId}-reset">↺ Đặt lại</button>
        </div>
      `;

      document.getElementById(`${containerId}-step`)?.addEventListener('click', () => {
        if (curN <= 0) return;
        const rem = curN % b;
        digits.push(charMap[rem]);
        curN = Math.floor(curN / b);
        render();
      });

      document.getElementById(`${containerId}-reset`)?.addEventListener('click', () => {
        curN = n;
        digits = [];
        render();
      });

      document.getElementById(`${containerId}-hex`)?.addEventListener('click', () => {
        n = 255; b = 16; curN = n; digits = []; render();
      });
      document.getElementById(`${containerId}-bin`)?.addEventListener('click', () => {
        n = 13; b = 2; curN = n; digits = []; render();
      });
      document.getElementById(`${containerId}-oct`)?.addEventListener('click', () => {
        n = 85; b = 8; curN = n; digits = []; render();
      });
      document.getElementById(`${containerId}-zero`)?.addEventListener('click', () => {
        n = 0; b = 2; curN = 0; digits = []; render();
      });
    }

    render();
  };

  // ──────────────────────────────────────────────────────────────────────────
  // BÀI 1.15: Ngoặc hợp lệ (Ngăn xếp Stack LIFO)
  // ──────────────────────────────────────────────────────────────────────────
  window.initParenthesesStackVisualizer = function (containerId) {
    const root = document.getElementById(containerId);
    if (!root) return;
    if (root._cleanup) root._cleanup();

    let inputStr = "{[()]}";
    let curIdx = 0;
    let stack = [];
    let state = 'running'; // 'running', 'valid', 'invalid'
    let failReason = "";
    const pairs = { ")": "(", "]": "[", "}": "{" };

    function render() {
      const tokens = inputStr.split('');

      root.innerHTML = `
        <div class="vis-header" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
          <span class="chip green">Bài 1.15 · Ống Trụ Ngăn Xếp (Stack)</span>
          <span class="chip ${state === 'valid' ? 'green' : state === 'invalid' ? 'rose' : 'violet'}">
            ${state === 'valid' ? '✓ DÃY NGOẶC HỢP LỆ (True)' : state === 'invalid' ? '✗ SAI DẤU NGOẶC (False)' : 'Đang duyệt biểu thức...'}
          </span>
        </div>

        <div style="margin:0.8rem 0; display:flex; align-items:center; gap:0.6rem; flex-wrap:wrap;">
          <span class="tiny" style="color:var(--text-3);">Thử chuỗi:</span>
          <input type="text" id="${containerId}-input" value="${inputStr}" 
                 style="background:var(--surface); border:1px solid var(--line); border-radius:var(--r-sm); color:var(--text); padding:0.35rem 0.7rem; font-family:var(--mono); font-size:0.88rem; width:150px;" />
          <button class="btn" id="${containerId}-apply" style="padding:0.35rem 0.75rem; font-size:0.8rem;">Áp dụng</button>
          <button class="btn" id="${containerId}-c1" style="font-size:0.75rem; padding:0.25rem 0.5rem;">"{[()]}"</button>
          <button class="btn" id="${containerId}-c2" style="font-size:0.75rem; padding:0.25rem 0.5rem;">"([)]"</button>
          <button class="btn" id="${containerId}-c3" style="font-size:0.75rem; padding:0.25rem 0.5rem;">"(()"</button>
          <button class="btn" id="${containerId}-c4" style="font-size:0.75rem; padding:0.25rem 0.5rem;">"(a + [b * 2])"</button>
        </div>

        <div style="display:grid; grid-template-columns: 1.2fr 1fr; gap:1.2rem; margin:1rem 0;">
          <div class="card">
            <span class="tiny" style="color:var(--text-3);">Dãy ký tự s:</span>
            <div style="display:flex; gap:0.5rem; margin-top:0.7rem; flex-wrap:wrap;">
              ${tokens.map((tok, i) => `
                <span style="padding:0.45rem 0.75rem; border-radius:var(--r-sm); font-family:var(--mono); font-weight:800; font-size:1.15rem;
                             background:${i === curIdx - 1 ? 'var(--py-blue)' : i < curIdx ? 'rgba(255,255,255,0.06)' : 'var(--surface)'};
                             color:${i === curIdx - 1 ? '#000' : i < curIdx ? 'var(--text-3)' : 'var(--text)'};
                             border:1px solid ${i === curIdx - 1 ? 'var(--py-blue)' : 'var(--line)'};">
                  ${tok}
                </span>
              `).join('')}
            </div>
            <p class="tiny" style="margin-top:0.8rem; color:var(--text-3);">
              Gặp mở <code>( [ {</code> ➔ <b>PUSH</b> vào Stack.<br>
              Gặp đóng <code>) ] }</code> ➔ <b>POP</b> đỉnh ngăn xếp ra so khớp.<br>
              Ký tự khác được tự động bỏ qua!
            </p>
          </div>

          <div class="card">
            <span class="tiny" style="color:var(--text-3);">Ngăn xếp ngan_xep = [] (LIFO - Vào sau Ra trước):</span>
            <div style="min-height:130px; border:2px dashed var(--line); border-radius:var(--r); padding:0.6rem; display:flex; flex-direction:column-reverse; gap:0.4rem; background:rgba(0,0,0,0.25);">
              ${stack.length === 0 ? '<span class="tiny" style="color:var(--text-3); margin:auto">Stack đang rỗng</span>' : ''}
              ${stack.map((item, idx) => `
                <div style="background:rgba(56,189,248,0.2); border:1px solid var(--py-blue); padding:0.35rem 0.6rem; border-radius:var(--r-sm); font-family:var(--mono); font-weight:800; color:#38bdf8; text-align:center;">
                  ${idx === stack.length - 1 ? '▲ TOP: ' : ''}${item}
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <div style="background:rgba(0,0,0,0.35); border:1px solid var(--line); border-radius:var(--r-sm); padding:0.65rem 0.9rem; font-size:0.88rem; min-height:46px; display:flex; align-items:center;">
          ${state === 'invalid' ? `<b class="rose font-bold">✗ PHÁT HIỆN LỖI: ${failReason} ➔ return False</b>` :
            state === 'valid' ? `<span style="color:#4ade80; font-weight:700;">✓ DUYỆT XONG: Ngăn xếp rỗng hoàn toàn ➔ return len(ngan_xep) == 0 (True)!</span>` :
            `Nhấn Bước tiếp theo để duyệt ký tự '${tokens[curIdx]}' (Đang còn ${tokens.length - curIdx} ký tự)`}
        </div>

        <div class="row" style="margin-top:0.8rem; gap:0.6rem;">
          <button class="btn cyan" id="${containerId}-step" ${state !== 'running' ? 'disabled' : ''}>Duyệt ký tự tiếp theo →</button>
          <button class="btn" id="${containerId}-reset">↺ Đặt lại</button>
        </div>
      `;

      document.getElementById(`${containerId}-step`)?.addEventListener('click', () => {
        if (state !== 'running') return;
        if (curIdx >= tokens.length) {
          state = (stack.length === 0) ? 'valid' : 'invalid';
          if (stack.length > 0) failReason = "Hết chuỗi nhưng Stack vẫn còn ngoặc mở chưa đóng!";
          render();
          return;
        }

        const tok = tokens[curIdx++];
        if (tok === '{' || tok === '[' || tok === '(') {
          stack.push(tok);
        } else if (tok in pairs) {
          if (stack.length === 0) {
            state = 'invalid';
            failReason = `Gặp ngoặc đóng '${tok}' nhưng ngăn xếp rỗng!`;
            render();
            return;
          }
          const top = stack.pop();
          if (top !== pairs[tok]) {
            state = 'invalid';
            failReason = `Ngoặc đóng '${tok}' không khớp với ngoặc mở '${top}' trên đỉnh stack!`;
            render();
            return;
          }
        }

        if (curIdx === tokens.length) {
          state = (stack.length === 0) ? 'valid' : 'invalid';
          if (stack.length > 0) failReason = "Hết chuỗi nhưng Stack vẫn còn ngoặc mở chưa đóng!";
        }
        render();
      });

      document.getElementById(`${containerId}-reset`)?.addEventListener('click', () => {
        curIdx = 0;
        stack = [];
        state = 'running';
        failReason = "";
        render();
      });

      document.getElementById(`${containerId}-apply`)?.addEventListener('click', () => {
        const val = document.getElementById(`${containerId}-input`)?.value;
        if (val !== undefined) {
          inputStr = val; curIdx = 0; stack = []; state = 'running'; failReason = ""; render();
        }
      });
      document.getElementById(`${containerId}-c1`)?.addEventListener('click', () => {
        inputStr = "{[()]}"; curIdx = 0; stack = []; state = 'running'; failReason = ""; render();
      });
      document.getElementById(`${containerId}-c2`)?.addEventListener('click', () => {
        inputStr = "([)]"; curIdx = 0; stack = []; state = 'running'; failReason = ""; render();
      });
      document.getElementById(`${containerId}-c3`)?.addEventListener('click', () => {
        inputStr = "(()"; curIdx = 0; stack = []; state = 'running'; failReason = ""; render();
      });
      document.getElementById(`${containerId}-c4`)?.addEventListener('click', () => {
        inputStr = "(a + [b * 2])"; curIdx = 0; stack = []; state = 'running'; failReason = ""; render();
      });
    }

    render();
  };

})();
