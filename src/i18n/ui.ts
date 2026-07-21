export const languages = {
  en: 'English',
  'zh-hans': '简体中文',
  'zh-hant': '繁體中文',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'menu.language': 'Languages',
    'menu.darkMode': 'Dark mode',
    'menu.lightMode': 'Light mode',
    'home.greeting': 'Hello, I\'m Julian',
    'home.aka': 'also known as Zhiyu344',
    'home.tagline': 'Exploring the world of code, open source, and creativity. Welcome to my digital garden inspired by the light.',
    'home.viewProjects': 'View Projects',
    'home.readBlog': 'Read Blog',
    '404.title': 'Page Not Found',
    '404.message': "The page you're looking for doesn't exist or has been moved.",
    '404.backHome': 'Back to Home',
  },
  'zh-hans': {
    'nav.home': '首页',
    'nav.projects': '项目',
    'nav.blog': '博客',
    'nav.about': '关于',
    'menu.language': '语言',
    'menu.darkMode': '深色模式',
    'menu.lightMode': '浅色模式',
    'home.greeting': 'Hello, 我是 Julian',
    'home.aka': 'aka Zhiyu344',
    'home.tagline': 'Exploring the world of code, open source, and creativity. Welcome to my digital garden inspired by the light.',
    'home.viewProjects': '浏览项目',
    'home.readBlog': '阅读博客',
    '404.title': '页面未找到',
    '404.message': '你访问的页面不存在，或者已经被移动了。',
    '404.backHome': '返回首页',
  },
} as const;

export type UiKey = keyof typeof ui['en'];