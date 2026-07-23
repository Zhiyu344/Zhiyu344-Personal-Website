import * as OpenCC from 'opencc-js';

const customDict: [string, string][] = [
    ['專案', '項目'],
    ['部落格', '博客'],
    ['最佳化', '優化'],
];

const converter = OpenCC.ConverterFactory(
  OpenCC.Locale.from.cn,
  OpenCC.Locale.to.twp.concat([customDict])
);

export function toTraditional(text: string): string {
  return converter(text);
}
