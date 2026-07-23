import { ui, defaultLang, type UiKey, type Lang } from './ui';
import { toTraditional } from './opencc';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'zh-hans' || lang === 'zh-hant') return lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  const sourceLang = (lang === 'zh-hant' ? 'zh-hans' : lang) as 'en' | 'zh-hans';
  const dict = ui[sourceLang];

  return function t(key: UiKey): string {
    const value = dict[key] ?? ui[defaultLang][key];
    return lang === 'zh-hant' ? toTraditional(value) : value;
  };
}

// src/i18n/utils.ts
export function formatDate(date: Date, lang: Lang): string {
  if (lang === 'en') {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formatted = `${year} 年 ${month} 月 ${day} 日`;
  return lang === 'zh-hant' ? toTraditional(formatted) : formatted;
}
