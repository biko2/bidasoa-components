import { LanguageConfiguration } from 'models/configuration/LanguageConfiguration';

export interface ConfigurationData {
  dataSourceDir: string;
  staticDir?: string;
  languages?: Array<LanguageConfiguration>;
  defaultLanguage?: LanguageConfiguration;
  isDevelopment?: boolean;
  isPreview?: boolean;
  contentTypesToBuild?: Array<string>;
  configPagesToBuild?: Array<string>;
  customDataToBuild?: Array<string>;
  siteName?: string;
  buildHash?: string;
}
