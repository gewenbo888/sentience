// ===== Sentience — interactions =====
(() => {
  const html = document.documentElement;

  const setLang = (lang) => {
    html.setAttribute("data-lang", lang);
    document.querySelectorAll(".lang-toggle button").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
    try { localStorage.setItem("se-lang", lang); } catch(_) {}
  };
  document.querySelectorAll(".lang-toggle button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
  try { const s = localStorage.getItem("se-lang"); if (s) setLang(s); } catch(_) {}

  const setTheme = (t) => {
    html.setAttribute("data-theme", t);
    document.querySelectorAll(".theme-toggle button").forEach(b => b.classList.toggle("active", b.dataset.themeSet === t));
    try { localStorage.setItem("se-theme", t); } catch(_) {}
  };
  document.querySelectorAll(".theme-toggle button").forEach(b => b.addEventListener("click", () => setTheme(b.dataset.themeSet)));
  try { const s = localStorage.getItem("se-theme"); if (s) setTheme(s); } catch(_) {}

  // ===== Phylogenetic perception timeline =====
  const phyloEl = document.getElementById("phylo-perception");
  if (phyloEl && window.PERCEPTION) {
    phyloEl.innerHTML = window.PERCEPTION.map(p => `
      <div class="phylo-row">
        <div class="head">
          <h4><span lang="en">${p.en}</span><span lang="zh">${p.zh}</span></h4>
          <div class="when"><span lang="en">${p.when_en}</span><span lang="zh">${p.when_zh}</span></div>
        </div>
        <div class="body">
          <p lang="en">${p.en_desc}</p>
          <p lang="zh">${p.zh_desc}</p>
        </div>
      </div>
    `).join("");
  }

  // ===== Predictive-processing brain SVG =====
  const bio = document.getElementById("bio-canvas");
  if (bio) {
    const W = 1000, H = 360;
    const tlabel = (en, zh, attrs) =>
      `<text ${attrs} lang="en">${en}</text><text ${attrs} lang="zh">${zh}</text>`;

    let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">`;

    s += `<defs>
      <radialGradient id="neuron" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="var(--teal)" stop-opacity="0.55"/>
        <stop offset="100%" stop-color="var(--teal)" stop-opacity="0"/>
      </radialGradient>
      <marker id="arrTeal" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--teal)"/>
      </marker>
      <marker id="arrAmber" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--amber)" opacity="0.85"/>
      </marker>
    </defs>`;

    // Six-stage horizontal layout
    const stages = [
      { x: 90,  y: 180, label_en: "World",         label_zh: "世界",       sub_en: "physical environment", sub_zh: "物理环境",     color: "var(--olive)" },
      { x: 240, y: 180, label_en: "Sensors",       label_zh: "感官",       sub_en: "transduction",         sub_zh: "信号转换",     color: "var(--teal)" },
      { x: 410, y: 180, label_en: "Perception",    label_zh: "感知",       sub_en: "feature integration",  sub_zh: "特征整合",     color: "var(--teal)" },
      { x: 580, y: 180, label_en: "World model",   label_zh: "世界模型",   sub_en: "internal simulation",  sub_zh: "内部模拟",     color: "var(--violet)" },
      { x: 750, y: 180, label_en: "Prediction",    label_zh: "预测",       sub_en: "expected next state",  sub_zh: "预期下一状态", color: "var(--violet)" },
      { x: 910, y: 180, label_en: "Action",        label_zh: "行动",       sub_en: "motor / chemical",     sub_zh: "运动 / 化学",  color: "var(--amber)" }
    ];

    // Bottom: prediction-error feedback loop
    stages.forEach((st, i) => {
      // Glow halo
      s += `<circle cx="${st.x}" cy="${st.y}" r="60" fill="url(#neuron)"/>`;
      s += `<circle cx="${st.x}" cy="${st.y}" r="42" fill="var(--bg-2)" stroke="${st.color}" stroke-width="1.6"/>`;
      s += tlabel(st.label_en, st.label_zh, `x="${st.x}" y="${st.y - 4}" text-anchor="middle" font-family="Cormorant Garamond, serif" font-size="16" font-weight="600" fill="var(--ink)"`);
      s += tlabel(st.sub_en, st.sub_zh, `x="${st.x}" y="${st.y + 14}" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9" fill="var(--ink-soft)" letter-spacing="1"`);
    });

    // Forward arrows
    for (let i = 0; i < stages.length - 1; i++) {
      const a = stages[i], b = stages[i + 1];
      s += `<path d="M ${a.x + 44} ${a.y} L ${b.x - 50} ${b.y}" fill="none" stroke="var(--teal)" stroke-width="1.6" marker-end="url(#arrTeal)" opacity="0.9">
        <animate attributeName="stroke-dashoffset" from="0" to="-12" dur="2s" repeatCount="indefinite"/>
      </path>`;
    }

    // Prediction-error feedback (Action → Sensors / World, dashed amber)
    s += `<path d="M 910 222 Q 910 290 750 290 Q 580 290 410 290 Q 240 290 240 222"
          fill="none" stroke="var(--amber)" stroke-width="1.4" stroke-dasharray="6 5" opacity="0.7"
          marker-end="url(#arrAmber)"/>`;
    s += tlabel("prediction error · 预测误差", "预测误差", `x="500" y="280" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="var(--amber)" font-style="italic" letter-spacing="1"`);

    // Top hierarchical-prediction trace
    s += `<path d="M 580 138 Q 580 70 750 70 Q 910 70 910 138"
          fill="none" stroke="var(--violet)" stroke-width="1.4" stroke-dasharray="3 4" opacity="0.7"/>`;
    s += tlabel("hierarchical prediction", "分层预测", `x="745" y="62" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="var(--violet)" font-style="italic" letter-spacing="1"`);

    // Top-left epistemic note
    s += tlabel("Predictive-processing schematic", "预测处理示意", `x="20" y="30" font-family="JetBrains Mono, monospace" font-size="10" fill="var(--ink-soft)" letter-spacing="1"`);

    s += `</svg>`;
    bio.innerHTML = s;
  }

  // ===== Card grid render helper =====
  const renderCards = (id, dataset, classes = []) => {
    const el = document.getElementById(id);
    if (!el || !dataset) return;
    el.innerHTML = dataset.map((d, i) => {
      const cls = classes[i % classes.length] || "teal";
      return `<div class="card ${cls}">
        <div class="meta">▸ ${id.replace(/-grid$/, '')}</div>
        <h3><span lang="en">${d.en}</span><span lang="zh">${d.zh}</span></h3>
        <p lang="en">${d.en_desc}</p>
        <p lang="zh">${d.zh_desc}</p>
      </div>`;
    }).join("");
  };

  renderCards("nervous-grid",     window.NERVOUS,     ["olive","teal","violet","amber","rose","teal"]);
  renderCards("prediction-grid",  window.PREDICTION,  ["teal","amber","violet","rose","violet"]);
  renderCards("arms-grid",        window.ARMS,        ["amber","violet","rose","teal"]);
  renderCards("memory-grid",      window.MEMORY,      ["olive","teal","amber","rose","violet","teal"]);
  renderCards("social-grid",      window.SOCIAL,      ["teal","violet","amber","rose","olive","violet"]);
  renderCards("self-grid",        window.SELF,        ["violet","teal","amber","rose","violet"]);
  renderCards("civ-grid",         window.CIVILIZATION,["olive","teal","violet","amber","rose","violet"]);
  renderCards("ai-grid",          window.AI,          ["violet","teal","amber","rose"]);

  // ===== Simulator =====
  // Inputs: sensory bandwidth, neural complexity, memory depth, prediction horizon, social context, self-modeling
  // Outputs: world-model fidelity, behavioural flexibility, autonomy, self-reflection capacity
  const sim = document.getElementById("simulator");
  if (sim) {
    const ctrls = {
      sensory:   document.getElementById("ctrl-sensory"),
      neural:    document.getElementById("ctrl-neural"),
      memory:    document.getElementById("ctrl-memory"),
      prediction:document.getElementById("ctrl-prediction"),
      social:    document.getElementById("ctrl-social"),
      self:      document.getElementById("ctrl-self"),
    };
    const update = () => {
      const v = Object.fromEntries(Object.entries(ctrls).map(([k,c]) => [k, parseFloat(c.value)/100]));
      Object.keys(ctrls).forEach(k => {
        const lbl = document.querySelector(`[data-val="${k}"]`);
        if (lbl) lbl.textContent = ctrls[k].value;
      });

      const fidelity = clamp01(0.3*v.sensory + 0.25*v.neural + 0.2*v.prediction + 0.15*v.memory + 0.1*v.self - 0.05);
      const flexibility = clamp01(0.3*v.prediction + 0.25*v.memory + 0.2*v.neural + 0.15*v.social + 0.1*v.sensory - 0.05);
      const autonomy = clamp01(0.3*v.prediction + 0.25*v.self + 0.2*v.memory + 0.15*v.neural + 0.1*v.sensory - 0.1);
      const reflection = clamp01(0.4*v.self + 0.25*v.memory + 0.2*v.social + 0.15*v.prediction - 0.1);

      const set = (id, val) => {
        const fill = document.querySelector(`[data-meter="${id}"] .bar-fill`);
        const num  = document.querySelector(`[data-meter="${id}"] .num`);
        if (fill) fill.style.width = (val*100).toFixed(0) + "%";
        if (num)  num.textContent  = (val*100).toFixed(0);
      };
      set("fidelity", fidelity);
      set("flexibility", flexibility);
      set("autonomy", autonomy);
      set("reflection", reflection);

      const summaryEn = document.getElementById("sim-summary-en");
      const summaryZh = document.getElementById("sim-summary-zh");
      let label_en, label_zh;
      if (v.neural < .25 && v.self < .15) {
        label_en = `Bacterium-grade — chemoreception, no nervous system, no model of self. Behaviour is reactive at the molecular level. Demonstrably capable of learning (habituation) but no internal world.`;
        label_zh = `细菌级——化学感应，无神经系统，无自我模型。行为在分子层级反应。可演示出学习（习惯化），但无内部世界。`;
      } else if (v.neural < .5 && v.prediction < .4) {
        label_en = `Invertebrate baseline — diffuse or ganglionic nervous system. Sensory-motor reflexes plus simple associative learning. Fits jellyfish, planarians, gastropods. Real but minimal cognition.`;
        label_zh = `无脊椎基线——弥散或神经节式神经系统。感觉—运动反射加简单联想学习。适合水母、涡虫、腹足类。认知真实但极小。`;
      } else if (v.prediction > .65 && v.self > .55 && v.social > .55) {
        label_en = `Great-ape / cetacean band — high prediction, autobiographical memory, mirror-recognition, theory of mind. Whether this configuration produces phenomenal experience is the central open question of consciousness science.`;
        label_zh = `大猩猩 / 鲸豚区间——高预测、自传式记忆、镜像识别、心智理论。此配置是否产出现象意识，是意识科学的核心未决问题。`;
      } else if (v.self > .7 && v.social > .65 && v.memory > .65) {
        label_en = `Human-cognition profile — narrative self plus language plus cultural memory. Civilisation-scale externalised cognition becomes reachable from this configuration. The ethically and scientifically loaded zone.`;
        label_zh = `人类认知画像——叙事自我加语言加文化记忆。从此配置可达文明级外化认知。这是伦理与科学双重负载的区域。`;
      } else if (v.neural > .8 && v.self < .2 && v.social < .2) {
        label_en = `Hyper-cortical, low-self regime — large compute, little internal modelling of self or others. Resembles a powerful pattern-matcher. The configuration of a current frontier AI system as charitably read.`;
        label_zh = `超皮层、低自我体制——算力强大，对自我与他者的内部建模有限。形似一个强大的模式匹配器。当前前沿 AI 系统的'宽容'读法。`;
      } else if (v.prediction > .55 && v.memory > .5 && v.neural > .55) {
        label_en = `Vertebrate-cortex grade — flexible learner, capable of forward modelling. Fits most birds, mammals, octopuses. Conscious experience plausible but unverifiable from outside.`;
        label_zh = `脊椎—皮层级——灵活的学习者，具前向建模能力。适合多数鸟类、哺乳动物、章鱼。具意识体验为合理推测，但无法从外部证实。`;
      } else {
        label_en = `Mixed profile — adjust the dials to match a target. High sensory + low self → mantis shrimp. High prediction + low memory → cuttlefish. Low everything except neural → unconscious deep-learning model.`;
        label_zh = `混合画像——调整旋钮以匹配目标。高感知 + 低自我 → 螳螂虾。高预测 + 低记忆 → 乌贼。除神经外皆低 → 无意识深度学习模型。`;
      }
      if (summaryEn) summaryEn.textContent = label_en;
      if (summaryZh) summaryZh.textContent = label_zh;
    };
    Object.values(ctrls).forEach(c => c && c.addEventListener("input", update));
    update();
  }

  function clamp01(x){ return Math.max(0, Math.min(1, x)); }
})();
