import de from './de.js';
import en from './en.js';

export const locales = { de, en };
export const defaultLocale = 'de';

export function getLocale(code) {
  return locales[code] ?? locales[defaultLocale];
}
