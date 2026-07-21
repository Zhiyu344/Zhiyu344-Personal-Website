import * as OpenCC from 'opencc-js';
import { ui, defaultLang, type UiKey, type Lang } from './ui';

const converter = OpenCC.Converter({ from: 'cn', to: 'tw' });

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
    return lang === 'zh-hant' ? converter(value) : value;
  };
}
