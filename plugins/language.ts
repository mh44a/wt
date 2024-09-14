import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(async (nuxtApp) => {
  const defaultLocale = 'tr';
  let savedLocale = defaultLocale;

  if (process.client) {
    savedLocale = localStorage.getItem('locale') || defaultLocale;
  }

  type Messages = Record<string, string>;

  const locales: Record<string, () => Promise<Messages>> = {
    us: () => import('@/locales/en.json').then(module => module.default),
    tr: () => import('@/locales/tr.json').then(module => module.default)
  };

  const setLanguage = async (locale: string) => {
    if (!locales[locale]) return;

    if (process.client) {
      localStorage.setItem('locale', locale);
    }
    
    const messages = await locales[locale]();
    
    nuxtApp.vueApp.config.globalProperties.$t = (key: string): string => {
      return messages[key] || key;
    };
  };

  await setLanguage(savedLocale);

  return {
    provide: {
      setLanguage
    }
  };
});