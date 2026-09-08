/* ═══════════════════════════════════════════════════════════════════════════
   Quantum Zero→Hero · deck engine v2
   Không phụ thuộc thư viện ngoài. Tự lo:
     · điều hướng slide + nhớ vị trí        · tô màu code + nút copy
     · hé lộ từng ý (fragment)               · quiz có chấm điểm & làm lại
     · tìm kiếm xuyên deck (phím /)          · mục lục theo chương
     · checklist nhớ được                    · đánh dấu "đã hiểu" từng slide
     · ghi chú giảng viên (phím N)           · in PDF đầy đủ nội dung
   ═══════════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  /* ── tô màu cú pháp ────────────────────────────────────────────────────── */
  const PY_KW = new RegExp(
    "\\b(?:False|None|True|and|as|assert|async|await|break|class|continue|def|del|" +
    "elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|" +
    "or|pass|raise|return|try|while|with|yield|self)\\b"
  );
  const PY_BI = new RegExp(
    "\\b(?:abs|all|any|bool|complex|dict|enumerate|float|int|len|list|max|min|" +
    "print|range|round|set|sorted|str|sum|tuple|type|zip|np|plt)\\b"
  );
  const RS_KW = new RegExp(
    "\\b(?:as|break|const|continue|crate|dyn|else|enum|extern|false|fn|for|if|impl|" +
    "in|let|loop|match|mod|move|mut|pub|ref|return|self|Self|static|struct|super|" +
    "trait|true|type|unsafe|use|where|while|async|await)\\b"
  );

  function esc(s) {
    return s.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
  }

  function tokenize(src, rules) {
    let out = "", i = 0;
    const master = new RegExp(rules.map((r) => "(" + r.re.source + ")").join("|"), "g");
    let m;
    while ((m = master.exec(src)) !== null) {
      if (m.index > i) out += esc(src.slice(i, m.index));
      let cls = null;
      for (let k = 0; k < rules.length; k++) {
        if (m[k + 1] !== undefined) { cls = rules[k].cls; break; }
      }
      out += cls ? `<span class="${cls}">${esc(m[0])}</span>` : esc(m[0]);
      i = m.index + m[0].length;
      if (m[0].length === 0) master.lastIndex++;      // chống kẹt vô hạn
    }
    out += esc(src.slice(i));
    return out;
  }

  const RULES = {
    python: [
      { re: /#[^\n]*/, cls: "t-com" },
      { re: /"""[\s\S]*?"""|'''[\s\S]*?'''/, cls: "t-str" },
      { re: /"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*'/, cls: "t-str" },
      { re: PY_KW, cls: "t-kw" },
      { re: /\b\d+\.?\d*(?:[eE][+-]?\d+)?j?\b/, cls: "t-num" },
      { re: PY_BI, cls: "t-bi" },
      { re: /\b[A-Za-z_]\w*(?=\s*\()/, cls: "t-fn" },
    ],
    rust: [
      { re: /\/\/[^\n]*/, cls: "t-com" },
      { re: /"(?:\\.|[^"\\\n])*"/, cls: "t-str" },
      { re: RS_KW, cls: "t-kw" },
      { re: /\b\d+\.?\d*(?:_\w+)?\b/, cls: "t-num" },
      { re: /\b(?:usize|u8|u32|u64|f32|f64|bool|String|Vec|Option|Result|Complex)\b/, cls: "t-bi" },
      { re: /\b[A-Za-z_]\w*(?=\s*[(!])/, cls: "t-fn" },
    ],
    bash: [
      { re: /#[^\n]*/, cls: "t-com" },
      { re: /"(?:\\.|[^"\\\n])*"|'(?:[^'\n])*'/, cls: "t-str" },
      { re: /(?:^|\n)\s*[a-zA-Z_][\w.\-/]*/, cls: "t-fn" },
      { re: /\s-{1,2}[\w-]+/, cls: "t-kw" },
      { re: /\b\d+\b/, cls: "t-num" },
    ],
    text: [{ re: /#[^\n]*/, cls: "t-com" }],
  };

  function paintCode() {
    document.querySelectorAll("pre.code").forEach((pre) => {
      if (pre.dataset.painted) return;
      pre.dataset.painted = "1";
      const lang = pre.dataset.lang || "python";
      const raw = pre.textContent.replace(/^\n/, "").replace(/\s+$/, "");
      pre.dataset.raw = raw;
      pre.innerHTML = "<code>" + tokenize(raw, RULES[lang] || RULES.text) + "</code>";
    });
  }

  /* ── nút copy trên mỗi khối code ───────────────────────────────────────── */
  function wireCopy() {
    document.querySelectorAll(".code-head").forEach((head) => {
      if (head.querySelector(".copy")) return;
      const pre = head.nextElementSibling;
      if (!pre || !pre.classList.contains("code")) return;
      const b = document.createElement("button");
      b.className = "copy";
      b.type = "button";
      b.textContent = "copy";
      b.addEventListener("click", (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(pre.dataset.raw || pre.textContent).then(
          () => { b.textContent = "đã copy ✓"; setTimeout(() => (b.textContent = "copy"), 1400); },
          () => { b.textContent = "lỗi"; setTimeout(() => (b.textContent = "copy"), 1400); }
        );
      });
      head.appendChild(b);
    });
  }

  /* ═══ quiz v2 ═══════════════════════════════════════════════════════════
     Tương thích ngược với markup cũ (button.opt + data-ok + .why).
     Thêm: giải thích riêng cho từng đáp án (data-why), nút làm lại,
     và tổng điểm của cả deck hiện trên thanh dưới.
     ══════════════════════════════════════════════════════════════════════ */
  const quizState = { total: 0, right: 0, done: 0 };

  function wireQuiz() {
    document.querySelectorAll(".quiz").forEach((q) => {
      if (q.dataset.wired) return;
      q.dataset.wired = "1";
      quizState.total++;

      const opts = [...q.querySelectorAll("button.opt")];
      const why = q.querySelector(".why");
      const perOpt = document.createElement("div");
      perOpt.className = "why-opt";
      if (why) why.parentNode.insertBefore(perOpt, why);

      const again = document.createElement("button");
      again.type = "button";
      again.className = "q-again";
      again.textContent = "↺ Làm lại câu này";

      function reset() {
        q.classList.remove("answered");
        perOpt.innerHTML = "";
        opts.forEach((x) => {
          x.disabled = false;
          x.classList.remove("right", "wrong");
        });
        if (again.parentNode) again.parentNode.removeChild(again);
      }
      again.addEventListener("click", reset);

      opts.forEach((o, i) => {
        o.dataset.k = String.fromCharCode(65 + i);
        o.addEventListener("click", () => {
          if (q.classList.contains("answered")) return;
          q.classList.add("answered");
          const ok = o.dataset.ok === "1";
          quizState.done++;
          if (ok) quizState.right++;
          updateScore();
          opts.forEach((x) => {
            x.disabled = true;
            if (x.dataset.ok === "1") x.classList.add("right");
          });
          if (!ok) o.classList.add("wrong");
          if (o.dataset.why) {
            perOpt.innerHTML = (ok ? "<b class='ok'>Đúng.</b> " : "<b class='no'>Chưa đúng.</b> ") + o.dataset.why;
          }
          q.appendChild(again);
        });
      });
    });
  }

  function updateScore() {
    const el = document.getElementById("qzh-score");
    if (!el) return;
    if (!quizState.done) { el.textContent = ""; el.classList.remove("on"); return; }
    el.classList.add("on");
    el.textContent = "quiz " + quizState.right + "/" + quizState.done;
    el.classList.toggle("good", quizState.right === quizState.done);
  }

  /* ── thanh dữ liệu: chạy animation khi slide hiện ra ───────────────────── */
  function runBars(slide) {
    slide.querySelectorAll(".bars .b .fill").forEach((f) => {
      const w = f.dataset.w || "0";
      f.style.width = "0%";
      requestAnimationFrame(() => requestAnimationFrame(() => (f.style.width = w + "%")));
    });
  }

  /* ═══ checklist nhớ được ════════════════════════════════════════════════
     <ul class="check"><li>việc cần làm</li>…</ul>
     Trạng thái tick lưu trong localStorage theo từng deck.
     ══════════════════════════════════════════════════════════════════════ */
  function wireCheck(storeKey) {
    document.querySelectorAll("ul.check, ol.check").forEach((list, li) => {
      if (list.dataset.wired) return;
      list.dataset.wired = "1";
      [...list.children].forEach((item, ii) => {
        const id = storeKey + ":chk:" + li + ":" + ii;
        const box = document.createElement("button");
        box.type = "button";
        box.className = "ck";
        const inner = document.createElement("span");
        inner.className = "ck-txt";
        while (item.firstChild) inner.appendChild(item.firstChild);
        item.appendChild(box);
        item.appendChild(inner);
        let on = false;
        try { on = localStorage.getItem(id) === "1"; } catch (e) { /* riêng tư */ }
        const paint = () => { item.classList.toggle("on", on); box.textContent = on ? "✓" : ""; };
        paint();
        const toggle = () => {
          on = !on;
          try { localStorage.setItem(id, on ? "1" : "0"); } catch (e) { /* riêng tư */ }
          paint();
          updateCheckCounters();
        };
        box.addEventListener("click", toggle);
        inner.addEventListener("click", toggle);
      });
    });
    updateCheckCounters();
  }

  function updateCheckCounters() {
    document.querySelectorAll("[data-check-count]").forEach((el) => {
      const list = document.querySelector(el.dataset.checkCount);
      if (!list) return;
      const all = [...list.children];
      const done = all.filter((x) => x.classList.contains("on")).length;
      el.textContent = done + "/" + all.length;
      el.classList.toggle("full", done === all.length && all.length > 0);
    });
  }

  /* Các trang không phải deck (trang chủ) vẫn cần tô màu code + nút copy,
     nên chạy phần này TRƯỚC khi thoát sớm. */
  paintCode();
  wireCopy();
  wireQuiz();
  window.PM = window.QZH = { paintCode, wireCopy, wireQuiz, tokenize, esc };

  /* ── engine ────────────────────────────────────────────────────────────── */
  const deck = document.querySelector(".deck");
  if (!deck) { wireCheck("home"); return; }
  const slides = [...deck.querySelectorAll(".slide")];
  const key = "qzh:" + (document.body.dataset.deck || location.pathname.split("/").pop());
  let cur = 0;

  wireCheck(key);

  function titleOf(s, i) {
    if (s.dataset.title) return s.dataset.title;
    const h = s.querySelector("h1, h2, h3");
    return h ? h.textContent.trim().replace(/\s+/g, " ") : "Slide " + (i + 1);
  }

  /* ── slide "đã hiểu" ──────────────────────────────────────────────────── */
  const doneKey = key + ":done";
  let doneSet = new Set();
  try { doneSet = new Set(JSON.parse(localStorage.getItem(doneKey) || "[]")); } catch (e) { /* riêng tư */ }
  function saveDone() {
    try { localStorage.setItem(doneKey, JSON.stringify([...doneSet])); } catch (e) { /* riêng tư */ }
  }

  /* ── fragment: hé lộ từng ý bằng phím → ───────────────────────────────── */
  function fragsOf(s) { return [...s.querySelectorAll(".frag")]; }
  function fragShown(s) { return fragsOf(s).filter((f) => f.classList.contains("on")).length; }
  function revealNext(s) {
    const f = fragsOf(s).find((x) => !x.classList.contains("on"));
    if (!f) return false;
    f.classList.add("on");
    updateFragDots();
    return true;
  }
  function hideLast(s) {
    const shown = fragsOf(s).filter((x) => x.classList.contains("on"));
    if (!shown.length) return false;
    shown[shown.length - 1].classList.remove("on");
    updateFragDots();
    return true;
  }
  function resetFrags(s, showAll) {
    fragsOf(s).forEach((f) => f.classList.toggle("on", !!showAll));
  }

  /* thanh điều khiển */
  const bar = document.createElement("div");
  bar.className = "bar";
  bar.innerHTML =
    '<a class="btn" href="index.html" title="Về trang chủ">⌂<span class="lbl"> Trang chủ</span></a>' +
    '<button class="btn" data-go="prev">←<span class="lbl"> Trước</span></button>' +
    '<div class="track"><div class="fill" id="qzh-fill"></div></div>' +
    '<span class="num" id="qzh-num"></span>' +
    '<span class="score" id="qzh-score"></span>' +
    '<button class="btn" data-go="done" id="qzh-done" title="Đánh dấu slide này đã hiểu (D)">○<span class="lbl"> Đã hiểu</span></button>' +
    '<button class="btn" data-go="next"><span class="lbl">Tiếp </span>→</button>' +
    '<button class="btn" data-go="find" title="Tìm trong deck (/)">⌕</button>' +
    '<button class="btn" data-go="ov" title="Mục lục (O)">☰</button>' +
    '<button class="btn" data-go="help" title="Phím tắt (?)">?</button>';
  document.body.appendChild(bar);

  /* chấm tiến độ fragment, hiện góc dưới phải */
  const dots = document.createElement("div");
  dots.className = "fragdots";
  document.body.appendChild(dots);
  function updateFragDots() {
    const fs = fragsOf(slides[cur]);
    if (!fs.length) { dots.className = "fragdots"; dots.innerHTML = ""; return; }
    dots.className = "fragdots on";
    dots.innerHTML = fs.map((f) => '<i class="' + (f.classList.contains("on") ? "on" : "") + '"></i>').join("") +
      '<span>' + fragShown(slides[cur]) + "/" + fs.length + "</span>";
  }

  /* ── mục lục (O) ──────────────────────────────────────────────────────── */
  const ov = document.createElement("div");
  ov.className = "overview";
  ov.innerHTML = '<div class="ov-top"><h4>Mục lục — bấm để nhảy tới slide</h4>' +
    '<span class="ov-stat" id="qzh-ovstat"></span></div><div class="ov-grid"></div>';
  document.body.appendChild(ov);
  const ovGrid = ov.querySelector(".ov-grid");
  let lastPart = null;
  slides.forEach((s, i) => {
    if (s.dataset.part && s.dataset.part !== lastPart) {
      lastPart = s.dataset.part;
      const h = document.createElement("div");
      h.className = "ov-part";
      h.textContent = lastPart;
      ovGrid.appendChild(h);
    }
    const b = document.createElement("button");
    b.className = "ov-item";
    b.dataset.i = i;
    b.innerHTML = `<span class="n">${String(i + 1).padStart(2, "0")}</span>
                   <span class="t">${esc(titleOf(s, i))}</span>
                   <span class="tick">✓</span>`;
    b.addEventListener("click", () => { go(i); toggleOv(false); });
    ovGrid.appendChild(b);
  });

  function paintOv() {
    ovGrid.querySelectorAll(".ov-item").forEach((b) => {
      const i = +b.dataset.i;
      b.classList.toggle("cur", i === cur);
      b.classList.toggle("done", doneSet.has(i));
    });
    const st = document.getElementById("qzh-ovstat");
    if (st) st.textContent = "đã hiểu " + doneSet.size + "/" + slides.length;
  }

  /* ── tìm kiếm (/) ─────────────────────────────────────────────────────── */
  const find = document.createElement("div");
  find.className = "finder";
  find.innerHTML =
    '<div class="fbox"><input type="text" id="qzh-q" placeholder="Tìm trong deck này… (Esc để đóng)" autocomplete="off">' +
    '<div class="fres" id="qzh-fres"></div></div>';
  document.body.appendChild(find);
  const fInput = find.querySelector("#qzh-q");
  const fRes = find.querySelector("#qzh-fres");
  const haystack = slides.map((s, i) => ({
    i, title: titleOf(s, i),
    text: (s.textContent || "").replace(/\s+/g, " ").trim(),
  }));

  function norm(s) {
    return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d");
  }

  function runFind() {
    const qq = norm(fInput.value.trim());
    if (qq.length < 2) { fRes.innerHTML = '<p class="tiny">Gõ ít nhất 2 ký tự. Không cần dấu.</p>'; return; }
    const hits = [];
    haystack.forEach((h) => {
      const t = norm(h.text), pos = t.indexOf(qq);
      if (pos === -1) return;
      const from = Math.max(0, pos - 45);
      hits.push({
        i: h.i, title: h.title,
        snip: (from > 0 ? "…" : "") + h.text.slice(from, pos + qq.length + 65) + "…",
      });
    });
    if (!hits.length) { fRes.innerHTML = '<p class="tiny">Không thấy gì. Thử từ khoá ngắn hơn.</p>'; return; }
    fRes.innerHTML = hits.map((h) =>
      '<button class="fhit" data-i="' + h.i + '"><span class="n">' + String(h.i + 1).padStart(2, "0") +
      '</span><span><b>' + esc(h.title) + "</b><i>" + esc(h.snip) + "</i></span></button>").join("");
    fRes.querySelectorAll(".fhit").forEach((b) => {
      b.addEventListener("click", () => { go(+b.dataset.i); toggleFind(false); });
    });
  }
  fInput.addEventListener("input", runFind);
  fInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { const f = fRes.querySelector(".fhit"); if (f) f.click(); }
    if (e.key === "Escape") toggleFind(false);
    e.stopPropagation();
  });
  find.addEventListener("click", (e) => { if (e.target === find) toggleFind(false); });

  /* ── trợ giúp (?) ─────────────────────────────────────────────────────── */
  const help = document.createElement("div");
  help.className = "help";
  help.innerHTML =
    '<div class="box"><h3>Phím tắt</h3>' +
    [["→ / Space / J", "ý tiếp theo, rồi slide tiếp"], ["← / K", "lùi lại"],
     ["Shift + →", "bỏ qua, sang thẳng slide sau"], ["1–9", "nhảy tới slide"],
     ["O", "mục lục"], ["/", "tìm trong deck"], ["D", "đánh dấu đã hiểu"],
     ["N", "ghi chú của slide"], ["Home / End", "đầu / cuối"],
     ["F", "toàn màn hình"], ["P", "in ra PDF"], ["?", "bảng này"], ["Esc", "đóng"]]
      .map(([k, v]) => `<div class="kv"><kbd>${k}</kbd><span>${v}</span></div>`).join("") +
    '<p class="tiny" style="margin-top:.5rem">Vị trí đang học, checklist và slide đã đánh dấu đều được nhớ riêng cho từng deck.</p></div>';
  document.body.appendChild(help);

  const fill = bar.querySelector("#qzh-fill");
  const num = bar.querySelector("#qzh-num");
  const prevBtn = bar.querySelector('[data-go="prev"]');
  const nextBtn = bar.querySelector('[data-go="next"]');
  const doneBtn = bar.querySelector("#qzh-done");

  function go(i, push) {
    cur = Math.max(0, Math.min(slides.length - 1, i));
    slides.forEach((s, k) => {
      s.classList.toggle("active", k === cur);
      if (k !== cur) resetFrags(s, false);
    });
    resetFrags(slides[cur], false);
    slides[cur].scrollTop = 0;
    fill.style.width = ((cur + 1) / slides.length) * 100 + "%";
    num.textContent = `${String(cur + 1).padStart(2, "0")} / ${slides.length}`;
    prevBtn.disabled = cur === 0;
    nextBtn.disabled = cur === slides.length - 1;
    paintDoneBtn();
    paintOv();
    updateFragDots();
    runBars(slides[cur]);
    // Auto-initialize algorithm visualizers on slide change
    if (slides[cur].querySelector('#spiral-vis-box') && window.initSpiralMatrixVisualizer) {
      window.initSpiralMatrixVisualizer('spiral-vis-box');
    }
    if (slides[cur].querySelector('#twoptr-vis-box') && window.initTwoPointersVisualizer) {
      window.initTwoPointersVisualizer('twoptr-vis-box');
    }
    if (slides[cur].querySelector('#sliding-vis-box') && window.initSlidingWindowVisualizer) {
      window.initSlidingWindowVisualizer('sliding-vis-box');
    }
    if (slides[cur].querySelector('#stack-vis-box') && window.initStackVisualizer) {
      window.initStackVisualizer('stack-vis-box');
    }
    try { localStorage.setItem(key, String(cur)); } catch (e) { /* riêng tư */ }
    if (push !== false) history.replaceState(null, "", "#" + (cur + 1));
  }

  function paintDoneBtn() {
    const on = doneSet.has(cur);
    doneBtn.classList.toggle("on", on);
    doneBtn.firstChild.nodeValue = on ? "✓" : "○";
  }

  function toggleDone() {
    if (doneSet.has(cur)) doneSet.delete(cur); else doneSet.add(cur);
    saveDone(); paintDoneBtn(); paintOv();
  }

  function toggleOv(on) {
    ov.classList.toggle("on", on === undefined ? !ov.classList.contains("on") : on);
    if (ov.classList.contains("on")) paintOv();
  }
  function toggleHelp(on) {
    help.classList.toggle("on", on === undefined ? !help.classList.contains("on") : on);
  }
  function toggleFind(on) {
    const willOpen = on === undefined ? !find.classList.contains("on") : on;
    find.classList.toggle("on", willOpen);
    if (willOpen) { fInput.value = ""; runFind(); setTimeout(() => fInput.focus(), 30); }
  }
  function toggleNotes() {
    document.body.classList.toggle("show-notes");
  }

  bar.addEventListener("click", (e) => {
    const g = e.target.closest("[data-go]");
    if (!g) return;
    if (g.dataset.go === "prev") back();
    if (g.dataset.go === "next") fwd();
    if (g.dataset.go === "ov") toggleOv();
    if (g.dataset.go === "find") toggleFind();
    if (g.dataset.go === "done") toggleDone();
    if (g.dataset.go === "help") toggleHelp();
  });
  ov.addEventListener("click", (e) => { if (e.target === ov) toggleOv(false); });
  help.addEventListener("click", () => toggleHelp(false));

  function fwd(skipFrags) {
    if (!skipFrags && revealNext(slides[cur])) return;
    go(cur + 1);
  }
  function back() {
    if (hideLast(slides[cur])) return;
    go(cur - 1);
    resetFrags(slides[cur], true);
    updateFragDots();
  }

  document.addEventListener("keydown", (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea") return;
    switch (e.key) {
      case "ArrowRight": case " ": case "PageDown": case "j": case "J":
        e.preventDefault(); fwd(e.shiftKey); break;
      case "ArrowLeft": case "PageUp": case "k": case "K":
        e.preventDefault(); back(); break;
      case "Home": e.preventDefault(); go(0); break;
      case "End": e.preventDefault(); go(slides.length - 1); break;
      case "o": case "O": toggleOv(); break;
      case "d": case "D": toggleDone(); break;
      case "n": case "N": toggleNotes(); break;
      case "/": e.preventDefault(); toggleFind(true); break;
      case "?": toggleHelp(); break;
      case "f": case "F":
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen?.();
        break;
      case "p": case "P": window.print(); break;
      case "Escape": toggleOv(false); toggleHelp(false); toggleFind(false); break;
      default:
        if (/^[0-9]$/.test(e.key)) {
          const n = e.key === "0" ? 9 : parseInt(e.key, 10) - 1;
          if (n < slides.length) go(n);
        }
    }
  });

  /* vuốt trên trackpad/điện thoại */
  let tx = 0, ty = 0;
  deck.addEventListener("touchstart", (e) => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
  deck.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - tx;
    const dy = e.changedTouches[0].clientY - ty;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.6) (dx < 0 ? fwd() : back());
  }, { passive: true });

  /* in PDF: bung hết fragment và mở mọi khối "xem thêm" */
  window.addEventListener("beforeprint", () => {
    slides.forEach((s) => resetFrags(s, true));
    document.querySelectorAll("details").forEach((d) => { d.dataset.wasOpen = d.open ? "1" : "0"; d.open = true; });
  });
  window.addEventListener("afterprint", () => {
    slides.forEach((s, k) => { if (k !== cur) resetFrags(s, false); });
    document.querySelectorAll("details").forEach((d) => { d.open = d.dataset.wasOpen === "1"; });
  });

  /* khởi động */
  let start = 0;
  const fromHash = parseInt((location.hash || "").slice(1), 10);
  if (fromHash >= 1 && fromHash <= slides.length) start = fromHash - 1;
  else {
    try {
      const saved = parseInt(localStorage.getItem(key) || "0", 10);
      if (saved >= 0 && saved < slides.length) start = saved;
    } catch (e) { /* bỏ qua */ }
  }
  go(start);
  updateScore();

  Object.assign(window.PM, { go, slides, toggleOv, toggleFind, doneSet }); window.QZH = window.PM;
})();
