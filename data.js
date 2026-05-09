// ===== Sentience — original analytical content =====
// All prose is original synthesis on public-domain evolutionary biology,
// neuroscience, and cognitive science frameworks.

// ===== Evolution of perception (timeline) =====
window.PERCEPTION = [
  {
    id: "chemo", en: "Chemoreception 化学感应", zh: "化学感应",
    when_en: "~3.5 Gya · prokaryotes", when_zh: "约 35 亿年前 · 原核生物",
    en_desc: "The first sense was chemistry. Bacteria detect gradients of nutrients and toxins by membrane receptors and respond by changing flagellar bias. Smell and taste in modern animals descend from this ~3-billion-year-old machinery.",
    zh_desc: "最早的感官是化学。细菌通过膜受体感知营养与毒素的梯度，并以鞭毛偏向作出回应。现代动物的嗅觉与味觉皆继承自这套约 30 亿年前的机制。"
  },
  {
    id: "photo", en: "Photoreception 光感", zh: "光感",
    when_en: "~3.4 Gya · cyanobacteria; ~600 Mya · eyespots",
    when_zh: "约 34 亿年前 · 蓝藻；约 6 亿年前 · 眼点",
    en_desc: "Opsin-based light detection appears first as a chemical clue (light = sun = food / surface). Eyespots in early metazoans add direction. The eye is built four to six independent times across animal phyla — a strong selection signal.",
    zh_desc: "基于视蛋白的光感最早是一种化学线索（光 = 阳 = 食 / 水面）。早期后生动物的'眼点'增加了方向感。眼睛在动物各门中独立演化了四至六次——这是强烈的选择信号。"
  },
  {
    id: "touch", en: "Mechanoreception 机械感应", zh: "机械感应",
    when_en: "~700 Mya · cnidarians",
    when_zh: "约 7 亿年前 · 刺胞动物",
    en_desc: "Touch, pressure, vibration, gravity. Hair cells in the lateral line of fish and the inner ear of mammals descend from one ancient mechanosensory cell type. The earliest 'pain' is mechanical: tissue damage produces a chemical signature that the same machinery picks up.",
    zh_desc: "触、压、振、重力。鱼侧线毛细胞与哺乳动物内耳毛细胞同源于一类古老的机械感应细胞。最早的'痛'是机械性的：组织损伤产生一种化学特征，由同一机制识别。"
  },
  {
    id: "vision", en: "Image-forming vision 成像视觉", zh: "成像视觉",
    when_en: "~540 Mya · Cambrian explosion",
    when_zh: "约 5.4 亿年前 · 寒武纪大爆发",
    en_desc: "When animals could see each other, the food-web lit up. The Cambrian explosion correlates tightly with the appearance of camera-type and compound eyes. Predation, escape, and mating display all become possible — and intelligence has its first reason to scale.",
    zh_desc: "当动物彼此能见，食物网亮起。寒武纪大爆发与照相型眼及复眼的出现紧密相关。捕食、逃避、求偶展示皆成可能——智能由此首次有了扩展的理由。"
  },
  {
    id: "echo", en: "Echolocation 回声定位", zh: "回声定位",
    when_en: "~50 Mya · bats; later cetaceans",
    when_zh: "约 5 千万年前 · 蝙蝠；后及鲸豚",
    en_desc: "Active sensing — the animal emits an outgoing signal and reads its echo. The brain must subtract its own emission from the return — an early instance of self-vs-world separation, a precursor to the agency-detection circuitry that supports self-awareness.",
    zh_desc: "主动感知——动物发出信号并读取其回声。大脑必须从回声中减去自身发出的部分——这是'自我'与'世界'最早的分离，是支持自我意识的能动者识别回路之前身。"
  },
  {
    id: "multi", en: "Multisensory integration 多感官整合", zh: "多感官整合",
    when_en: "Vertebrate cortex · superior colliculus",
    when_zh: "脊椎动物皮层 · 上丘",
    en_desc: "Senses are useful only when combined. The superior colliculus and association cortex bind sight, sound, touch and proprioception into a single space. The world is not a single perception — it is a synthesis. Consciousness may begin here.",
    zh_desc: "感官只有合一才有用。上丘与联合皮层将视、听、触、本体感觉整合为单一空间。世界不是单一感知——而是一种合成。意识可能起始于此。"
  }
];

// ===== Cells → nervous systems =====
window.NERVOUS = [
  { en: "Single-cell responsiveness 单细胞应激", zh: "单细胞应激",
    en_desc: "A bacterium adjusts its metabolism to a glucose pulse without a nervous system. Information processing predates neurons by three billion years.",
    zh_desc: "细菌无须神经系统即可对葡萄糖脉冲调整代谢。信息处理早于神经元三十亿年。" },
  { en: "Neural net 神经网", zh: "神经网",
    en_desc: "Cnidarians (jellyfish, hydra) have a diffuse net — every neuron is roughly equal. No 'top.' No 'where.' But coordinated swimming and stinging emerges from local rules.",
    zh_desc: "刺胞动物（水母、水螅）具弥散神经网——每个神经元地位大致平等。无'顶部'，无'方位'。但协调游动与刺击由局部规则涌现。" },
  { en: "Ganglia 神经节", zh: "神经节",
    en_desc: "Bilaterians develop clusters of neurons at sensory hotspots. Earthworms, leeches, planarians. The cluster compresses information from a region. Cognition is local.",
    zh_desc: "两侧对称动物在感官热点形成神经元群。蚯蚓、水蛭、涡虫。神经节将一区信息压缩。认知是局部的。" },
  { en: "Cephalisation 头部化", zh: "头部化",
    en_desc: "Move forward, eat in front, see in front, think in front. The forward ganglion concentrates inputs and becomes a brain. Selection rewards faster integration where the action is.",
    zh_desc: "向前游、向前吃、向前看、向前思。前部神经节汇聚输入，化为脑。选择奖励行动所在之处的更快整合。" },
  { en: "Vertebrate brain 脊椎动物脑", zh: "脊椎动物脑",
    en_desc: "A telencephalon, diencephalon, midbrain, hindbrain — each with specialised functions. The cerebellum predicts, the basal ganglia select, the thalamus relays. A modular architecture, ~500 Mya old.",
    zh_desc: "端脑、间脑、中脑、后脑——各司其职。小脑预测，基底节抉择，丘脑中继。这是一个模块化架构，约 5 亿年前出现。" },
  { en: "Cortex 皮层", zh: "皮层",
    en_desc: "A six-layered sheet draped over the older brain. Mammals scale it; primates fold it; humans expand it disproportionately. The cortex is where the world model is kept refreshed.",
    zh_desc: "覆于古老脑结构之上的六层薄片。哺乳动物将其扩展，灵长类将其折叠，人类不成比例地膨大。皮层是世界模型保持刷新之处。" }
];

// ===== Predictive processing primer =====
window.PREDICTION = [
  { en: "Reactive 反应式", zh: "反应式",
    en_desc: "If A then B. A jellyfish stings whatever bumps it. No model of the future. Energy-efficient, latency-bounded by physics. Sufficient when the world is simple.",
    zh_desc: "若 A 则 B。水母对碰撞物刺击。无未来模型。节能，延迟由物理决定。世界简单时即足够。" },
  { en: "Pattern recognition 模式识别", zh: "模式识别",
    en_desc: "After two days of swimming through warm patches, a fish learns the gradient. The same input gets faster, more confident responses. Memory begins to subsidise computation.",
    zh_desc: "在暖水块中游了两天后，鱼学会了梯度。同一输入触发更快、更自信的反应。记忆开始为计算补贴。" },
  { en: "Forward model 前向模型", zh: "前向模型",
    en_desc: "An octopus reaching toward a crab predicts the crab's escape vector before it moves. The brain runs a tiny simulation of physics and acts on the result. Mistakes update the model.",
    zh_desc: "章鱼伸向螃蟹时，已在螃蟹动之前预判其逃跑方向。大脑运行一个小型物理模拟并据其行动。错误使模型更新。" },
  { en: "Hierarchical prediction 分层预测", zh: "分层预测",
    en_desc: "Higher cortical layers predict lower ones, which predict sensory input. What reaches consciousness is the prediction error — the part the model didn't anticipate. A computational economy.",
    zh_desc: "更高皮层层级预测更低层级，最低层预测感觉输入。到达意识者，是预测误差——模型未能预料的那部分。这是一种计算经济。" },
  { en: "Counterfactual 反事实", zh: "反事实",
    en_desc: "Humans (and crows, dolphins, elephants) simulate non-existent worlds: 'if I jump, can I reach?' This is what intelligence finally becomes — running a model of a world that isn't there.",
    zh_desc: "人类（以及鸦、海豚、象）会模拟不存在的世界：'若我跳，能及否？'这是智能最终成为之物——运行一个并不存在的世界的模型。" }
];

// ===== Predator-prey arms race =====
window.ARMS = [
  { en: "Hunting 狩猎", zh: "狩猎",
    en_desc: "Predators run faster, see further, plan ahead. Each upgrade in cognition is paid for by extra calories — selection pressures only spend energy on cognition when it actually returns more food.",
    zh_desc: "捕食者跑得更快、看得更远、谋得更深。认知的每一次升级都以热量为代价——只有当其确实能换回更多食物，选择压力才会为认知开销。" },
  { en: "Hiding 隐匿", zh: "隐匿",
    en_desc: "Camouflage, freeze responses, alarm calls, social vigilance. Prey species often have larger eyes and broader visual fields than their predators. Each side optimises a different part of the same equation.",
    zh_desc: "伪装、僵直反应、警报叫声、群体警戒。被捕者常具更大眼睛与更广视野。双方在同一方程的不同部分上优化。" },
  { en: "Deception 欺骗", zh: "欺骗",
    en_desc: "Anglerfish lures, mimicry, false-alarm calls used to steal food. Once organisms can deceive, they must also detect deception — a doubling of cognitive cost that drives social intelligence.",
    zh_desc: "鮟鱇灯、拟态、用假警报抢食。一旦生物能欺骗，便也必须能识破欺骗——认知成本翻倍，驱动了社会智能。" },
  { en: "Coordination 协作", zh: "协作",
    en_desc: "Wolves run prey. Orcas drive seals onto beaches and onto ice floes. Coordinated hunting requires representing multiple agents, including yourself, simultaneously. Social cognition arises here.",
    zh_desc: "狼群驱猎。虎鲸将海豹赶上岸或浮冰。协同狩猎要求同时表征多个能动者，含自身。社会认知由此而起。" }
];

// ===== Memory & learning =====
window.MEMORY = [
  { en: "Genetic 基因", zh: "基因",
    en_desc: "Instincts. Encoded over millions of generations. Cheap to use, expensive to update. A salmon hatched in a tank still seeks fresh water and gravel.",
    zh_desc: "本能。经百万代编码。使用便宜，更新昂贵。水箱中孵化的鲑鱼仍寻淡水与碎石。" },
  { en: "Habituation 习惯化", zh: "习惯化",
    en_desc: "The simplest learning. A repeated harmless stimulus stops triggering a response. Even Aplysia (a sea slug, ~20,000 neurons) does this. Forgetting irrelevant inputs is a computational saving.",
    zh_desc: "最简单的学习。无害刺激重复后不再引发反应。海兔（约 2 万个神经元）即可如此。忽略无关输入是计算上的节省。" },
  { en: "Associative 联想", zh: "联想",
    en_desc: "Pavlov's dogs. Bees learning which flowers reward. The hippocampus and its homologs link co-occurring cues into a future-prediction.",
    zh_desc: "巴甫洛夫的狗。学会哪种花有蜜的蜂。海马及其同源结构将共现线索连为预测未来。" },
  { en: "Reinforcement 强化", zh: "强化",
    en_desc: "Dopamine signals 'better than expected'; serotonin and others modulate. The same algorithm — temporal-difference learning — has been observed in honeybees, fish, primates, and modern reinforcement-learning agents.",
    zh_desc: "多巴胺发出'优于预期'的信号；血清素等加以调节。同一算法——时序差分学习——已在蜜蜂、鱼、灵长类及现代强化学习智能体中观察到。" },
  { en: "Episodic 情景", zh: "情景",
    en_desc: "Remembering specific events: where, when, with whom. Long thought to be uniquely human; now demonstrated in scrub jays, rats, and dolphins. The substrate of autobiographical memory.",
    zh_desc: "对具体事件的记忆：何处、何时、与谁。曾被视为人独有，现已在丛鸦、鼠、海豚中得到证实。是自传式记忆的基底。" },
  { en: "Cultural 文化", zh: "文化",
    en_desc: "Knowledge stored outside any one brain — in tools, songs, books, code. A young human inherits 100,000 generations of accumulated cognition for free. Civilisation is collective memory at planetary scale.",
    zh_desc: "存于任一大脑之外的知识——存于工具、歌谣、书籍、代码。一个孩子免费继承十万代积累的认知。文明是行星尺度的集体记忆。" }
];

// ===== Social & language =====
window.SOCIAL = [
  { en: "Signalling 信号", zh: "信号",
    en_desc: "Vervet monkeys give different alarm calls for leopards, eagles, and snakes — and other vervets respond differently to each. A simple proto-vocabulary.",
    zh_desc: "长尾猴对豹、鹰、蛇发出不同的警报叫声——同伴对每种作出不同反应。一种简单的前语言词汇。" },
  { en: "Theory of mind 心智理论", zh: "心智理论",
    en_desc: "Modelling another agent's beliefs. Demonstrated in chimps, magpies, and human children around age four. Once you can model what another agent thinks, deception, teaching, and politics all become possible.",
    zh_desc: "对另一能动者信念的建模。已在黑猩猩、鹊鸟与四岁左右人类儿童中得到证实。能建模他者所想，欺骗、教学、政治皆成可能。" },
  { en: "Cooperation 协作", zh: "协作",
    en_desc: "Pair-bonding, kin selection, reciprocal altruism, large-scale shared work. Cooperation lets a small organism punch above its biomass — the Polynesian, Mongol, and silicon-valley examples are all expressions of the same algorithm.",
    zh_desc: "配偶绑定、亲缘选择、互惠利他、大规模共同劳作。协作让小生物超出其生物量级——波利尼西亚、蒙古、硅谷都是同一算法的表达。" },
  { en: "Language 语言", zh: "语言",
    en_desc: "A discrete combinatorial system that lets one mind transplant a model into another. Once language exists, the unit of cognition is no longer the brain — it is the lineage of brains connected by language.",
    zh_desc: "一种离散的组合系统，使一颗心智得以将模型移植入另一颗。语言一旦存在，认知的单位便不再是大脑——而是由语言连接的大脑谱系。" },
  { en: "Writing 文字", zh: "文字",
    en_desc: "Memory escapes the body. A sentence in cuneiform, papyrus or PDF outlives its writer. Civilisation requires written memory because no oral lineage scales past about 10,000 people.",
    zh_desc: "记忆逃出身体。楔形文字、纸草或 PDF 上的一句话比其作者更长寿。文明需要书写的记忆，因为口传谱系无法越过万人之众。" },
  { en: "Symbolic externalisation 符号外化", zh: "符号外化",
    en_desc: "Mathematics, computer code, money, contracts. Each is a substrate that lets cognition run outside any individual brain. Civilisation is, structurally, an externalised cortex.",
    zh_desc: "数学、代码、货币、契约。每一项都是让认知在任一大脑之外运行的基质。文明在结构上是一个被外化的皮层。" }
];

// ===== Self-awareness =====
window.SELF = [
  { en: "Mirror test 镜像测试", zh: "镜像测试",
    en_desc: "Mark an animal where it can see only by mirror; if it touches the mark on its body, not in the mirror, it has a body-image. Passed by chimps, orangutans, dolphins, elephants, magpies, cleaner wrasse.",
    zh_desc: "在动物只能通过镜子看到的位置作记号；若它触碰自己身上的记号而非镜中，则其拥有身体图式。黑猩猩、猩猩、海豚、象、鹊鸟、清洁鱼皆通过此测试。" },
  { en: "Body schema 身体图式", zh: "身体图式",
    en_desc: "An internal map of where the body ends and the world begins. Updated continuously by proprioception and vision. Without it, you cannot pick up a glass without knocking it over.",
    zh_desc: "一张'身体止于何处、世界始于何处'的内部地图。由本体感觉与视觉持续更新。无之者，无法不碰倒杯子地拿起一只杯子。" },
  { en: "Autobiographical memory 自传式记忆", zh: "自传式记忆",
    en_desc: "A self made of episodes. The hippocampus binds events into a temporal narrative; the prefrontal cortex retrieves them as 'mine.' Damage to either produces fragmentation of the self.",
    zh_desc: "由情景构成的自我。海马将事件绑入时间叙事；前额皮层将其检索为'我的'。任一受损皆使自我碎裂。" },
  { en: "Metacognition 元认知", zh: "元认知",
    en_desc: "Knowing what you know. Confidence ratings — 'I'm sure' vs 'I'm guessing' — appear in primates, dolphins, and rats. Reasoning about your own reasoning is the substrate of science.",
    zh_desc: "知其所知。信心等级——'我确定' vs '我在猜'——出现在灵长类、海豚与大鼠中。对自身推理的推理，是科学的基底。" },
  { en: "Narrative self 叙事自我", zh: "叙事自我",
    en_desc: "A continuous 'I' across decades, woven from autobiographical memory, predicted futures, and cultural roles. Likely human-specific. Probably an interpretation, not a thing.",
    zh_desc: "穿越数十年的连续之'我'——由自传式记忆、所预未来、文化角色编织而成。可能是人类特有。可能是一种诠释，而非一物。" }
];

// ===== Civilization-scale cognitive externalisation =====
window.CIVILIZATION = [
  { en: "Tools 工具", zh: "工具",
    en_desc: "A stone axe holds the design choices of its makers. Knowledge persists in the artefact. Tool use is older than Homo sapiens by ~3 million years.",
    zh_desc: "一柄石斧承载其制者的设计抉择。知识存于器物。用具早于智人约 300 万年。" },
  { en: "Writing 书写", zh: "书写",
    en_desc: "Sumer, ~3200 BCE. Memory leaves the body. A library is an extension of one mind into the past and future, available to anyone who reads.",
    zh_desc: "苏美尔，约公元前 3200 年。记忆离开身体。图书馆是一颗心智向过去与未来的延伸，向任何识字者开放。" },
  { en: "Mathematics 数学", zh: "数学",
    en_desc: "A formal symbol system that lets the mind manipulate quantities and relations beyond perceptual capacity. Mathematics is reasoning that does not fit in working memory.",
    zh_desc: "一种形式符号系统，使心智得以操纵超出感知容量的数量与关系。数学是无法装入工作记忆的推理。" },
  { en: "Print 印刷", zh: "印刷",
    en_desc: "Movable type made each copy of a book identical and cheap. The same idea could now travel across thousands of identical brains in a generation. Modernity begins here.",
    zh_desc: "活字使每一本书相同且廉价。同一思想得以在一代之内穿越数千颗相同的大脑。现代性始于此。" },
  { en: "Computer 计算机", zh: "计算机",
    en_desc: "A symbol-manipulating machine that runs cognition without a brain. The first general-purpose externalised cognition. Everything since 1945 is downstream.",
    zh_desc: "一种无须大脑即可运行认知的符号操纵机。这是首个通用外化认知。1945 年以来一切皆为下游。" },
  { en: "AI 模型", zh: "AI 模型",
    en_desc: "A statistical engine trained on most of human-written text. Whether or not it is 'sentient' in any technical sense, it is now the largest single cognitive externalisation in our history — and growing.",
    zh_desc: "在人类几乎全部书写文本上训练的统计引擎。无论其在任何技术意义上是否'有感知'，它已是史上最大单一的认知外化——且仍在增长。" }
];

// ===== AI / synthetic cognition =====
window.AI = [
  { en: "Machine perception 机器感知", zh: "机器感知",
    en_desc: "Convolutional and transformer networks now match or exceed human accuracy on many object-recognition benchmarks. The first cognitive function to be externalised at scale was sight.",
    zh_desc: "卷积与 Transformer 网络在多项物体识别基准上已达到或超越人类。最早被大规模外化的认知功能，是视觉。" },
  { en: "World models 世界模型", zh: "世界模型",
    en_desc: "Modern systems learn implicit models of physics, language, and other agents. They predict the next token, the next frame, the next action. Whether the model 'understands' is a separate, harder question.",
    zh_desc: "现代系统学得物理、语言、其他能动者的隐式模型。它们预测下一个词元、下一帧、下一动作。模型是否'理解'，是另一个更难的问题。" },
  { en: "Agents 智能体",  zh: "智能体",
    en_desc: "Loops that perceive, plan, act, and revise. The architecture is a literal externalisation of perception → memory → prediction → action. Whether this is enough for awareness depends on which theory of consciousness you adopt.",
    zh_desc: "感知、计划、行动、修正的循环。其架构正是感知→记忆→预测→行动的字面外化。其是否足以产生觉知，取决于你采纳的意识理论。" },
  { en: "Open question 未决问题", zh: "未决问题",
    en_desc: "There is no scientific consensus that any current AI system is conscious. There is also no scientific test that could prove it isn't. We are inside a period where the question is genuinely open — a position humans have rarely been in since the Enlightenment.",
    zh_desc: "目前没有科学共识表明任何 AI 系统具有意识。同样，没有科学检验能证明其不具意识。我们正处于这一问题真正悬而未决的时期——这是启蒙运动以来人类罕有的处境。" }
];
