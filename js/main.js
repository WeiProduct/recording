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
    howTitle: 'From voice to note in three steps', howSub: 'Capture the audio — the app handles the words.',
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
    stickySub: 'Voice → notes · Free', stickyGet: 'Get'
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
    howTitle: '三步，从声音到笔记', howSub: '你负责采集声音，文字交给它。',
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
    stickySub: '语音转笔记 · 免费', stickyGet: '获取'
  }
};

let currentLang = 'en';

function applyLang(lang) {
  currentLang = I18N[lang] ? lang : 'en';
  const t = I18N[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (t[k] !== undefined) el.textContent = t[k];
  });
  document.documentElement.lang = currentLang;
  const ls = document.getElementById('langSwitch');
  if (ls) ls.textContent = currentLang === 'zh-CN' ? 'EN' : '中文';
  try { localStorage.setItem('lang', currentLang); } catch (e) {}
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
  const onScroll = () => {
    const y = window.scrollY;
    if (nav) nav.classList.toggle('scrolled', y > 20);
    if (sticky) sticky.classList.toggle('show', y > 620);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLang();
  initGallery();
  initReveal();
  initScroll();

  const yr = document.getElementById('currentYear');
  if (yr) yr.textContent = new Date().getFullYear();

  const ls = document.getElementById('langSwitch');
  if (ls) ls.addEventListener('click', () => applyLang(currentLang === 'zh-CN' ? 'en' : 'zh-CN'));
  const tt = document.getElementById('themeToggle');
  if (tt) tt.addEventListener('click', () => setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));

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
