export interface LanguageConfiguration {
  langcode: string;
  name: { [languageCode: string]: string };
  isDefault: boolean;
  prefix: string;
  weight: number;
  direction: 'ltr' | 'rtl';
  hidden: boolean;
}
