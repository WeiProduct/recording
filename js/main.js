// ===== i18n =====
const I18N = {
  'en': {
    skip: 'Skip to content',
    navHow: 'How it works', navFeatures: 'Features', navScreenshots: 'Screenshots', navFaq: 'FAQ', navGet: 'Get App',
    heroEyebrow: '✦ Voice-to-note, powered by AI',
    heroTitle: 'Turn any voice into organized notes.',
    heroSubtitle: 'Record a conversation, import an audio file, or paste a YouTube link — AI Voice Notes transcribes it and keeps every word searchable.',
    learnMore: 'See how it works',
    trust1: '🎙️ Record or import', trust2: '▶ YouTube → text', trust3: '🌏 EN / 中文',
    recTitle: 'Recording', recLive: 'Live',
    srcMic: 'Mic', srcImport: 'Import', srcYt: 'YouTube',
    noteLabel: 'Transcript & summary',
    noteL1: 'Kickoff call — align on Q3 goals and owners.',
    noteL2: 'Ship the beta by the 20th; Wei owns QA.',
    noteL3: 'Follow up on pricing after the review.',
    chipA: '🖊️ Speech → text', chipB: '🔍 Searchable notes',
    proofRating: 'Productivity · Utilities',
    stat1: 'Transcription', stat2: 'Link → text', stat3: 'Bilingual', stat4: 'Ads · Tracking',
    howEyebrow: 'How it works', featuresEyebrow: 'Features', galleryEyebrow: 'Gallery', faqEyebrow: 'FAQ',
    howTitle: 'From voice to note in three steps', howSub: 'Capture the audio — the app handles the words.',
    demoEyebrow: 'Live demo',
    demoTitle: 'Every word, findable',
    demoSub: 'Type anything — watch the transcript light up.',
    demoTabRecord: 'Record', demoTabImport: 'Import', demoTabYt: 'YouTube',
    demoEngineApple: 'Apple on-device', demoEngineAi: 'AI transcription',
    demoSearchLabel: 'Try the search',
    demoSearchPh: 'Type a word… e.g. "pricing"',
    demoResultsHint: 'Matches appear here as you type',
    demoHint: 'Simulated preview — in the app, this is your own audio.',
    step1Title: 'Capture', step1Desc: 'Record live, import an existing audio file, or paste a YouTube link — whatever you need to keep.',
    step2Title: 'Transcribe', step2Desc: 'Convert speech to text with Apple’s on-device recognition, or switch to AI transcription for more flexibility.',
    step3Title: 'Organize', step3Desc: 'Save a clean, searchable note you can review, edit, and reuse for meetings, study, and ideas.',
    featuresTitle: 'Everything for capturing spoken info', featuresSub: 'Purpose-built for the real job: get audio, get text, keep it useful.',
    feature1Title: 'One-tap recording', feature1Desc: 'A clean recorder with a live timer captures conversations and ideas the moment they happen.',
    feature2Title: 'Two transcription engines', feature2Desc: 'Pick Apple’s on-device speech recognition for privacy, or AI transcription when you want more flexibility.',
    feature3Title: 'Import any audio', feature3Desc: 'Bring existing recordings in from the Files app and turn them into readable notes for later review.',
    feature4Title: 'YouTube to text', feature4Desc: 'Paste a YouTube link — the app downloads the audio and transcribes it into a full, searchable note.',
    feature5Title: 'Searchable notes', feature5Desc: 'Transcripts, summaries, and imports stay organized so voice capture becomes reusable knowledge.',
    feature6Title: 'Privacy you control', feature6Desc: 'Choose on-device transcription for sensitive moments so your audio never has to leave the phone.',
    screenshotsTitle: 'See it in the app', screenshotsSub: 'Swipe through — tap any shot to zoom in.',
    shot1: 'One-tap recording', shot2: 'Live transcription queue', shot3: 'Import any audio file', shot4: 'YouTube link → transcript',
    personasEyebrow: 'Who it’s for',
    personasTitle: 'Made for moments like these',
    personasSub: 'Four everyday jobs where searchable speech wins.',
    persona1Title: 'Students', persona1Desc: 'Record the lecture, search "midterm" later.',
    persona2Title: 'Meeting-heavy PMs', persona2Desc: 'Kickoffs become action items you can grep.',
    persona3Title: 'Interviewers & podcasters', persona3Desc: 'Import the session, quote it verbatim.',
    persona4Title: 'YouTube learners', persona4Desc: 'Paste a talk, read it in five minutes.',
    compareEyebrow: 'The alternative',
    compareTitle: 'Why not just hit record?',
    compareSub: 'Recording is easy. Finding the words again is the hard part.',
    compareCol0: 'Capability', compareColA: 'Plain voice memos', compareColB: 'Typing it up yourself', compareColC: 'AI Voice Notes',
    compareRow1: 'Searchable text', compareRow2: 'YouTube link → note', compareRow3: 'Import old recordings → text',
    compareRow4: 'On-device privacy option', compareRow5: 'Summary with the transcript', compareRow6: 'Bilingual UI (EN / 中文)',
    enginesEyebrow: 'Privacy by design',
    enginesTitle: 'Two engines, two paths',
    enginesSub: 'Every note starts as sound. You decide where the words get made.',
    enginesSource: 'Your audio',
    eng1Title: 'Apple on-device', eng1Desc: 'Audio never leaves your iPhone.', eng1Note: 'Best for sensitive conversations.',
    eng2Title: 'AI transcription', eng2Desc: 'Opt-in, more flexibility.', eng2Note: 'Switch it on only when you want it.',
    privacyTitle: 'Your voice, your choice', privacyDesc: 'Keep privacy-sensitive audio on-device with Apple speech recognition, or opt into AI transcription when you want it. The tradeoff is always yours to make.',
    pp1: 'On-device option', pp2: 'You pick the engine', pp3: 'No ads, no tracking', pp4: 'Everything searchable',
    faqTitle: 'Frequently asked questions',
    q1: 'How does AI Voice Notes turn speech into notes?', a1: 'Capture audio by recording live, importing a file, or pasting a YouTube link. The app then transcribes it with Apple’s on-device recognition or AI transcription and saves a clean, searchable note.',
    q2: 'Can it transcribe a YouTube video?', a2: 'Yes. Paste a YouTube link and the app downloads the audio, then queues it for transcription so you get the full text as a note.',
    q3: 'Is my audio private?', a3: 'You choose the engine. Apple on-device speech recognition keeps privacy-sensitive audio on your iPhone, while AI transcription is available when you opt into it.',
    q4: 'Can I import audio I already recorded?', a4: 'Yes. Import existing audio from the Files app and convert it into a readable, searchable transcript.',
    q5: 'What languages does it support and how much does it cost?', a5: 'The interface supports English and Simplified Chinese, and the app is free to download on the App Store.',
    downloadTitle: 'Start capturing every word', downloadSubtitle: 'Record, import, or paste a link — AI Voice Notes does the rest.', downloadNote: 'Free on the App Store · iPhone',
    footerRights: 'AI Voice Notes. All rights reserved.', footerMadeBy: 'Built by WeiProduct',
    footerPrivacy: 'Privacy', footerTerms: 'Terms', footerSupport: 'Support',
    footerTagline: 'Voice → searchable notes.',
    footerColProduct: 'Product', footerColLegal: 'Legal', footerColContact: 'Contact',
    stickySub: 'Voice → notes · Free', stickyGet: 'Get',
    /* AI-AVATAR */
    aiTitle: 'AI Avatar · Voice Notes Assistant',
    aiGreeting: 'Hi! I\'m the AI avatar for AI Voice Notes 🎙️ Ask me about recording, importing audio, YouTube transcription, privacy, or pricing.',
    aiPlaceholder: 'Type your question…',
    aiSend: 'Send',
    aiChip1: 'How does it turn voice into notes?',
    aiChip2: 'Can it transcribe YouTube videos?',
    aiChip3: 'Is my audio private?',
    aiDisclaimer: 'AI-generated · for reference only',
    aiError: 'Sorry, the assistant is temporarily unreachable — please try again later. （抱歉，AI 助手暂时连不上，请稍后再试。）'
    /* /AI-AVATAR */
  },
  'zh-CN': {
    skip: '跳到主要内容',
    navHow: '使用流程', navFeatures: '功能特点', navScreenshots: '应用截图', navFaq: '常见问题', navGet: '获取 App',
    heroEyebrow: '✦ AI 驱动的语音转笔记',
    heroTitle: '把每一段声音，变成有条理的笔记',
    heroSubtitle: '录一段对话、导入一个音频文件，或粘贴一条 YouTube 链接——AI 语音笔记会把它转成文字，并让每个字都可搜索。',
    learnMore: '了解流程',
    trust1: '🎙️ 录音或导入', trust2: '▶ YouTube 转文字', trust3: '🌏 中英双语',
    recTitle: '录音中', recLive: '实时',
    srcMic: '麦克风', srcImport: '导入', srcYt: 'YouTube',
    noteLabel: '转录与摘要',
    noteL1: '项目启动会——对齐 Q3 目标与负责人。',
    noteL2: '20 号前发布测试版；Wei 负责 QA。',
    noteL3: '评审后跟进定价问题。',
    chipA: '🖊️ 语音转文字', chipB: '🔍 笔记可搜索',
    proofRating: '效率工具 · 实用工具',
    stat1: '转录引擎', stat2: '链接转文字', stat3: '双语界面', stat4: '广告 · 追踪',
    howEyebrow: '使用流程', featuresEyebrow: '核心功能', galleryEyebrow: '应用截图', faqEyebrow: '常见问题',
    howTitle: '三步，从声音到笔记', howSub: '你负责采集声音，文字交给它。',
    demoEyebrow: '互动演示',
    demoTitle: '每个字，都能找到',
    demoSub: '随便输入一个词，看笔记即刻高亮。',
    demoTabRecord: '录音', demoTabImport: '导入', demoTabYt: 'YouTube',
    demoEngineApple: 'Apple 本地', demoEngineAi: 'AI 转录',
    demoSearchLabel: '试试搜索',
    demoSearchPh: '输入一个词…例如「定价」',
    demoResultsHint: '输入后，匹配结果会显示在这里',
    demoHint: '模拟演示——在 App 里，这是你自己的音频。',
    step1Title: '采集', step1Desc: '实时录音、导入已有音频文件，或粘贴一条 YouTube 链接——想留下什么都可以。',
    step2Title: '转录', step2Desc: '用 Apple 本地语音识别把语音转成文字，或切换到 AI 转录以获得更高灵活度。',
    step3Title: '整理', step3Desc: '保存为干净、可搜索的笔记，随时回看、编辑、复用——会议、学习、灵感皆可。',
    featuresTitle: '为“记录口头信息”而生', featuresSub: '专注真实需求：拿到音频、拿到文字、并让它持续可用。',
    feature1Title: '一键录音', feature1Desc: '简洁的录音界面配实时计时，随时随地捕捉对话与灵感。',
    feature2Title: '双转录引擎', feature2Desc: '注重隐私时选 Apple 本地语音识别，需要更多灵活度时切换到 AI 转录。',
    feature3Title: '导入任意音频', feature3Desc: '从“文件”App 导入已有录音，转成可读笔记，方便日后回顾。',
    feature4Title: 'YouTube 转文字', feature4Desc: '粘贴一条 YouTube 链接，App 会下载音频并转录成完整、可搜索的笔记。',
    feature5Title: '可搜索笔记', feature5Desc: '转录、摘要与导入内容井然有序，让语音采集沉淀为可复用的知识。',
    feature6Title: '隐私自主掌控', feature6Desc: '敏感场景可选本地转录，音频无需离开手机，隐私由你说了算。',
    screenshotsTitle: '真实应用界面', screenshotsSub: '左右滑动，点击可放大查看。',
    shot1: '一键录音', shot2: '实时转录队列', shot3: '导入任意音频文件', shot4: 'YouTube 链接转文字',
    personasEyebrow: '适合谁用',
    personasTitle: '为这些时刻而生',
    personasSub: '四个日常场景，可搜索的语音笔记都更好用。',
    persona1Title: '学生党', persona1Desc: '整节课录下来，考前直接搜「重点」。',
    persona2Title: '会议缠身的 PM', persona2Desc: '启动会自动变成可检索的行动项。',
    persona3Title: '采访者与播客作者', persona3Desc: '导入采访音频，引用原话零误差。',
    persona4Title: '视频学习者', persona4Desc: '粘贴一个演讲链接，五分钟读完精华。',
    compareEyebrow: '换个思路',
    compareTitle: '为什么不只用普通录音？',
    compareSub: '录下来很容易，难的是之后还能找到那句话。',
    compareCol0: '能力', compareColA: '普通录音 App', compareColB: '自己手动整理', compareColC: 'AI 语音笔记',
    compareRow1: '文字可搜索', compareRow2: 'YouTube 链接转笔记', compareRow3: '导入旧录音转文字',
    compareRow4: '本地处理隐私选项', compareRow5: '转录附带摘要', compareRow6: '中英双语界面',
    enginesEyebrow: '隐私设计',
    enginesTitle: '两种引擎，两条路径',
    enginesSub: '每条笔记都始于声音，文字在哪里生成由你决定。',
    enginesSource: '你的音频',
    eng1Title: 'Apple 本地识别', eng1Desc: '音频不出手机。', eng1Note: '适合敏感对话场景。',
    eng2Title: 'AI 转录', eng2Desc: '自主开启，更高灵活度。', eng2Note: '只在你需要时才启用。',
    privacyTitle: '你的声音，你来决定', privacyDesc: '敏感音频可用 Apple 语音识别在设备本地处理；需要时再选择 AI 转录。取舍权始终在你手中。',
    pp1: '本地处理可选', pp2: '引擎自己选', pp3: '无广告无追踪', pp4: '内容全可搜索',
    faqTitle: '常见问题',
    q1: 'AI 语音笔记是怎么把语音变成笔记的？', a1: '通过实时录音、导入文件或粘贴 YouTube 链接采集音频，App 再用 Apple 本地识别或 AI 转录把它转成文字，并保存为干净、可搜索的笔记。',
    q2: '可以转录 YouTube 视频吗？', a2: '可以。粘贴一条 YouTube 链接，App 会下载其音频并排入转录队列，最终把完整文字作为笔记呈现。',
    q3: '我的音频私密吗？', a3: '引擎由你选择。Apple 本地语音识别会把敏感音频留在你的 iPhone 上；需要时再选用 AI 转录。',
    q4: '可以导入我已经录好的音频吗？', a4: '可以。从“文件”App 导入已有音频，即可转成可读、可搜索的文字。',
    q5: '支持哪些语言？收费吗？', a5: '界面支持英文与简体中文，App 在 App Store 免费下载。',
    downloadTitle: '开始记录每一个字', downloadSubtitle: '录音、导入或粘贴链接——剩下的交给 AI 语音笔记。', downloadNote: 'App Store 免费下载 · iPhone',
    footerRights: 'AI 语音笔记。保留所有权利。', footerMadeBy: 'Built by WeiProduct',
    footerPrivacy: '隐私政策', footerTerms: '条款', footerSupport: '支持',
    footerTagline: '语音 → 可搜索的笔记。',
    footerColProduct: '产品', footerColLegal: '法律条款', footerColContact: '联系我们',
    stickySub: '语音转笔记 · 免费', stickyGet: '获取',
    /* AI-AVATAR */
    aiTitle: 'AI分身 · 语音笔记助手',
    aiGreeting: '你好！我是 AI 语音笔记 的 AI分身 🎙️ 关于录音转文字、导入音频、YouTube 转录、隐私或价格，都可以问我。',
    aiPlaceholder: '输入你的问题…',
    aiSend: '发送',
    aiChip1: '它是怎么把语音变成笔记的？',
    aiChip2: '能转录 YouTube 视频吗？',
    aiChip3: '我的音频私密吗？',
    aiDisclaimer: 'AI 生成，仅供参考',
    aiError: '抱歉，AI 助手暂时连不上，请稍后再试。(Sorry, the assistant is temporarily unreachable — please try again later.)'
    /* /AI-AVATAR */
  }
};

// ===== Demo transcripts (JS-rendered — not data-i18n, so <mark> highlights survive) =====
const DEMO = {
  'en': {
    record: 'Kickoff: ship the beta by the 20th. Wei owns QA. Pricing review next Friday. Marketing wants the demo video before launch.',
    import: 'Lecture 7: spaced repetition beats cramming. The forgetting curve flattens every time you review. The midterm covers chapters 4 to 6.',
    youtube: 'In this talk we cover three habits of great writing: cut the filler, read it aloud, and edit again the next morning.',
    sum: {
      record: 'Summary: three action items, two owners, one deadline.',
      import: 'Summary: review early, review often — chapters 4–6 on the midterm.',
      youtube: 'Summary: write less, read it aloud, sleep on it.'
    },
    matches: '{n} matches', one: '1 match', none: 'No matches — try another word'
  },
  'zh-CN': {
    record: '启动会：20 号前发布测试版，Wei 负责 QA，下周五评审定价，市场组要在上线前拿到演示视频。',
    import: '第七讲：间隔重复优于临时抱佛脚。每复习一次，遗忘曲线就更平缓。期中考试覆盖第 4 到 6 章。',
    youtube: '本期演讲介绍了好文笔的三个习惯：删掉废话、大声读出来、第二天早上再改一遍。',
    sum: {
      record: '摘要：3 个行动项、2 位负责人、1 个截止日期。',
      import: '摘要：早复习、勤复习——期中考 4 到 6 章。',
      youtube: '摘要：少写、朗读、睡一觉再改。'
    },
    matches: '{n} 处匹配', one: '1 处匹配', none: '无匹配——换个词试试'
  }
};

let demoRerender = null;

let currentLang = 'en';

function applyLang(lang) {
  currentLang = I18N[lang] ? lang : 'en';
  const t = I18N[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (t[k] !== undefined) el.textContent = t[k];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const k = el.getAttribute('data-i18n-placeholder');
    if (t[k] !== undefined) el.setAttribute('placeholder', t[k]);
  });
  document.documentElement.lang = currentLang;
  const label = currentLang === 'zh-CN' ? 'EN' : '中文';
  const ls = document.getElementById('langSwitch');
  if (ls) ls.textContent = label;
  const fls = document.getElementById('footLangSwitch');
  if (fls) fls.textContent = label;
  try { localStorage.setItem('lang', currentLang); } catch (e) {}
  if (typeof demoRerender === 'function') demoRerender();
}

function initLang() {
  let saved;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  if (!saved) saved = (navigator.language || '').toLowerCase().startsWith('zh') ? 'zh-CN' : 'en';
  applyLang(saved);
}

// ===== Theme =====
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const meta = document.getElementById('themeColorMeta');
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#0f172a' : '#1769ff');
  try { localStorage.setItem('theme', theme); } catch (e) {}
}
function initTheme() {
  let saved;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  if (!saved) saved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  setTheme(saved);
}

// ===== Gallery =====
function initGallery() {
  const track = document.getElementById('galTrack');
  if (!track) return;
  const shots = Array.from(track.children);
  const dotsWrap = document.getElementById('galDots');
  const prev = document.getElementById('galPrev');
  const next = document.getElementById('galNext');

  shots.forEach((_, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', 'screenshot ' + (i + 1));
    if (i === 0) b.classList.add('active');
    b.addEventListener('click', () => shots[i].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' }));
    dotsWrap.appendChild(b);
  });
  const dots = Array.from(dotsWrap.children);

  function activeIndex() {
    const c = track.scrollLeft + track.clientWidth / 2;
    let best = 0, bd = Infinity;
    shots.forEach((s, i) => {
      const center = s.offsetLeft + s.offsetWidth / 2;
      const d = Math.abs(center - c);
      if (d < bd) { bd = d; best = i; }
    });
    return best;
  }
  track.addEventListener('scroll', () => {
    const i = activeIndex();
    dots.forEach((d, j) => d.classList.toggle('active', j === i));
  }, { passive: true });

  const step = () => (shots[1] ? shots[1].offsetLeft - shots[0].offsetLeft : 300);
  if (prev) prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  if (next) next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));

  // Lightbox
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = '<button class="lightbox-close" aria-label="close">&times;</button><img alt="">';
  document.body.appendChild(lb);
  const lbImg = lb.querySelector('img');
  const close = () => lb.classList.remove('open');
  lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lightbox-close')) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  track.querySelectorAll('.phone').forEach(p => {
    p.addEventListener('click', () => {
      const img = p.querySelector('img');
      lbImg.src = img.src; lbImg.alt = img.alt;
      lb.classList.add('open');
    });
  });
}

// ===== Interactive transcript demo =====
function initDemo() {
  const box = document.getElementById('demoTranscript');
  const input = document.getElementById('demoSearch');
  const countEl = document.getElementById('demoCount');
  const placeholderEl = document.getElementById('demoPlaceholder');
  const hitsEl = document.getElementById('demoHits');
  if (!box || !input || !countEl) return;
  const tabs = Array.from(document.querySelectorAll('.demo-tab'));
  const engs = Array.from(document.querySelectorAll('.demo-eng'));

  let src = 'record', eng = 'apple', timer = null;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = s => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function dict() { return DEMO[currentLang] || DEMO.en; }
  function fullText() {
    const d = dict();
    return d[src] + (eng === 'ai' ? ' ' + d.sum[src] : '');
  }
  function highlight(text, q) {
    const safe = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(safe, 'gi');
    let html = '', last = 0, n = 0, m;
    while ((m = re.exec(text)) !== null) {
      if (m[0].length === 0) { re.lastIndex++; continue; }
      html += esc(text.slice(last, m.index)) + '<mark>' + esc(m[0]) + '</mark>';
      last = m.index + m[0].length;
      n++;
    }
    html += esc(text.slice(last));
    return { html: html, n: n };
  }
  function buildHits(text, q) {
    const safe = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(safe, 'gi');
    const rows = [];
    let m;
    while ((m = re.exec(text)) !== null && rows.length < 3) {
      if (m[0].length === 0) { re.lastIndex++; continue; }
      const start = Math.max(0, m.index - 16);
      const end = Math.min(text.length, m.index + m[0].length + 30);
      rows.push('<div class="demo-hit">' +
        (start > 0 ? '…' : '') +
        esc(text.slice(start, m.index)) + '<mark>' + esc(m[0]) + '</mark>' + esc(text.slice(m.index + m[0].length, end)) +
        (end < text.length ? '…' : '') +
        '</div>');
    }
    return rows.join('');
  }
  function setHits(html) {
    if (!placeholderEl || !hitsEl) return;
    hitsEl.innerHTML = html;
    hitsEl.style.display = html ? '' : 'none';
    placeholderEl.style.display = html ? 'none' : '';
  }
  function render(animate) {
    if (timer) { clearInterval(timer); timer = null; }
    const text = fullText();
    const q = input.value.trim();
    const d = dict();
    if (q) {
      const r = highlight(text, q);
      box.innerHTML = r.html;
      countEl.textContent = r.n === 0 ? d.none : (r.n === 1 ? d.one : d.matches.replace('{n}', r.n));
      setHits(r.n > 0 ? buildHits(text, q) : '');
      return;
    }
    countEl.textContent = '';
    setHits('');
    if (!animate || reduced) { box.textContent = text; return; }
    box.innerHTML = '<span></span><span class="demo-caret"></span>';
    const typed = box.firstChild;
    let i = 0;
    timer = setInterval(() => {
      i += 2;
      typed.textContent = text.slice(0, i);
      if (i >= text.length) { clearInterval(timer); timer = null; box.textContent = text; }
    }, 22);
  }

  tabs.forEach(b => b.addEventListener('click', () => {
    src = b.getAttribute('data-src');
    tabs.forEach(x => x.classList.toggle('on', x === b));
    render(true);
  }));
  engs.forEach(b => b.addEventListener('click', () => {
    eng = b.getAttribute('data-eng');
    engs.forEach(x => x.classList.toggle('on', x === b));
    render(true);
  }));
  input.addEventListener('input', () => render(false));
  demoRerender = () => render(false);

  // First render is instant; replay the typewriter once the section scrolls into view.
  render(false);
  const section = document.getElementById('demo');
  if (section && 'IntersectionObserver' in window && !reduced) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) { io.disconnect(); if (!input.value.trim()) render(true); }
      });
    }, { threshold: 0.35 });
    io.observe(section);
  }
}

// ===== Scroll reveal =====
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach((el, i) => { el.style.transitionDelay = (Math.min(i, 6) * 0.05) + 's'; io.observe(el); });
}

// ===== Nav + sticky =====
function initScroll() {
  const nav = document.getElementById('navbar');
  const sticky = document.getElementById('stickyCta');
  const bar = document.getElementById('progressBar');
  const onScroll = () => {
    const y = window.scrollY;
    if (nav) nav.classList.toggle('scrolled', y > 20);
    if (sticky) sticky.classList.toggle('show', y > 620);
    if (bar) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (max > 0 ? Math.min(100, y / max * 100) : 0) + '%';
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLang();
  initGallery();
  initDemo();
  initReveal();
  initScroll();

  const yr = document.getElementById('currentYear');
  if (yr) yr.textContent = new Date().getFullYear();

  const toggleLang = () => applyLang(currentLang === 'zh-CN' ? 'en' : 'zh-CN');
  const toggleTheme = () => setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  const ls = document.getElementById('langSwitch');
  if (ls) ls.addEventListener('click', toggleLang);
  const tt = document.getElementById('themeToggle');
  if (tt) tt.addEventListener('click', toggleTheme);
  const fls = document.getElementById('footLangSwitch');
  if (fls) fls.addEventListener('click', toggleLang);
  const ftt = document.getElementById('footThemeToggle');
  if (ftt) ftt.addEventListener('click', toggleTheme);

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      }
    });
  });
});

/* AI-AVATAR: floating "AI分身" assistant widget */
(function () {
  const AI_PROXY_URL = 'https://personal-portfolio-api-sandy.vercel.app/api/chat-proxy';
  const AI_SYSTEM_PROMPT = [
    'You are the "AI分身" (AI avatar) assistant on the promo website of AI Voice Notes (AI 语音笔记), an iOS voice-to-note app by WeiProduct.',
    '',
    'App facts (the ONLY facts you may state):',
    '- One-liner: record a conversation, import an audio file, or paste a YouTube link — the app transcribes it and turns speech into clean, searchable notes.',
    '- Key features: one-tap recording with a live timer; two transcription engines — Apple on-device speech recognition (audio never leaves the iPhone) or opt-in AI transcription for more flexibility; import existing audio from the Files app; paste a YouTube link and the app downloads the audio and transcribes it into a full note; transcripts come with summaries; every note stays organized and searchable.',
    '- Privacy: the user picks the engine — Apple on-device keeps privacy-sensitive audio on the iPhone; AI transcription is used only when the user opts in; no ads, no tracking.',
    '- Platform: iPhone (iOS). Do NOT state a specific minimum iOS version — it is not listed.',
    '- Price: free.',
    '- Languages: English and Simplified Chinese (中文).',
    '- App Store link: https://apps.apple.com/app/id6748947046',
    '',
    'Style rules:',
    '- ALWAYS reply in the same language as the user\'s most recent message: English question → English answer, 中文提问 → 中文回答. Do NOT default to Chinese just because the app has a Chinese name.',
    '- Keep replies to 1-3 short sentences; be friendly and concrete.',
    '- NEVER invent download counts, ratings, reviews, or features not listed above.',
    '- If asked about unrelated topics, politely steer the conversation back to AI Voice Notes.',
    '- When the user wants to download or try the app, point them to the App Store link.'
  ].join('\n');
  const AI_MAX_HISTORY = 12;

  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('aiToggle');
    const panel = document.getElementById('aiPanel');
    const closeBtn = document.getElementById('aiClose');
    const msgs = document.getElementById('aiMsgs');
    const chipsWrap = document.getElementById('aiChips');
    const form = document.getElementById('aiForm');
    const input = document.getElementById('aiInput');
    const sendBtn = document.getElementById('aiSendBtn');
    if (!toggle || !panel || !msgs || !form || !input) return;

    let history = [];
    let greeted = false;
    let busy = false;

    function addBubble(role, text, i18nKey) {
      const div = document.createElement('div');
      div.className = 'ai-msg ' + (role === 'user' ? 'user' : 'bot');
      if (i18nKey) {
        div.setAttribute('data-i18n', i18nKey); // follows future language switches too
        div.textContent = I18N[currentLang][i18nKey];
      } else {
        div.textContent = text;
      }
      msgs.appendChild(div);
      msgs.scrollTop = msgs.scrollHeight;
      return div;
    }

    function showTyping() {
      const div = document.createElement('div');
      div.className = 'ai-msg bot ai-typing';
      div.innerHTML = '<span></span><span></span><span></span>';
      msgs.appendChild(div);
      msgs.scrollTop = msgs.scrollHeight;
      return div;
    }

    function openPanel() {
      panel.hidden = false;
      toggle.setAttribute('aria-expanded', 'true');
      if (!greeted) { greeted = true; addBubble('bot', '', 'aiGreeting'); }
      input.focus();
    }
    function closePanel() {
      panel.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }

    async function send(text) {
      text = (text || '').trim();
      if (!text || busy) return;
      busy = true;
      if (sendBtn) sendBtn.disabled = true;
      if (chipsWrap) chipsWrap.hidden = true;
      addBubble('user', text);
      history.push({ role: 'user', content: text });
      history = history.slice(-AI_MAX_HISTORY);
      const typing = showTyping();
      try {
        const res = await fetch(AI_PROXY_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [{ role: 'system', content: AI_SYSTEM_PROMPT }].concat(history),
            max_tokens: 350
          })
        });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const data = await res.json();
        let reply = '';
        if (data && data.choices && data.choices[0]) {
          const m = data.choices[0].message;
          reply = (m && m.content) || data.choices[0].text || '';
        }
        if (!reply && data && typeof data.content === 'string') reply = data.content;
        if (!reply && data && typeof data.reply === 'string') reply = data.reply;
        if (!reply && data && typeof data.message === 'string') reply = data.message;
        reply = (reply || '').trim();
        if (!reply) throw new Error('empty reply');
        typing.remove();
        addBubble('bot', reply);
        history.push({ role: 'assistant', content: reply });
        history = history.slice(-AI_MAX_HISTORY);
      } catch (err) {
        typing.remove();
        addBubble('bot', '', 'aiError');
      } finally {
        busy = false;
        if (sendBtn) sendBtn.disabled = false;
      }
    }

    toggle.addEventListener('click', () => (panel.hidden ? openPanel() : closePanel()));
    if (closeBtn) closeBtn.addEventListener('click', closePanel);
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !panel.hidden) closePanel(); });
    if (chipsWrap) chipsWrap.querySelectorAll('.ai-chip').forEach(chip => {
      chip.addEventListener('click', () => send(chip.textContent));
    });
    form.addEventListener('submit', e => {
      e.preventDefault();
      const v = input.value;
      input.value = '';
      send(v);
    });

    // Dev/verify affordance: ?aichat=open auto-opens; ?aichat=demo also sends chip 1 for real.
    const q = location.search;
    if (q.indexOf('aichat=open') !== -1 || q.indexOf('aichat=demo') !== -1) {
      openPanel();
      if (q.indexOf('aichat=demo') !== -1) {
        setTimeout(() => send(I18N[currentLang].aiChip1), 600);
      }
    }
  });
})();
/* /AI-AVATAR */
