import { SITE_CONTENT as enContent, SITE_CONFIG as enConfig } from './en';
import { SITE_CONTENT as esContent, SITE_CONFIG as esConfig } from './es';

export function getContent(lang = "es") {
  if (lang === "en") return { content: enContent, config: enConfig };
  return { content: esContent, config: esConfig };
}

