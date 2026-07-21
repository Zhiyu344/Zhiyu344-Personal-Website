(function () {
  const STORAGE_KEY = 'preferred-lang';
  const saved = localStorage.getItem(STORAGE_KEY);
  const path = window.location.pathname;

  if (path.startsWith('/zh-hans') || path.startsWith('/zh-hant') || saved) {
    return;
  }

  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('zh')) {
    const isTraditional = browserLang.includes('tw') || browserLang.includes('hk');
    const prefix = isTraditional ? '/zh-hant' : '/zh-hans';
    localStorage.setItem(STORAGE_KEY, prefix.slice(1));
    window.location.replace(prefix + path);
  }
})();