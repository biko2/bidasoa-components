import { Breadcrumb } from '../Breadcrumb';
import { MetaTags } from '../MetaTags';
import { Paragraph } from '../Paragraph';
import { TranslationsConfiguration } from './TranslationConfiguration';

interface BaseContentNode {
  id: string;
  title: string;
  subtitle?: string;
  bundle: string;
  created: number;
  changed: number;
  isPublished: boolean;
  translations: Array<TranslationsConfiguration>;
  language: {
    id: string;
  };
  url: {
    path: string;
    breadcumbs?: Breadcrumb[];
  };
  metas?: Array<MetaTags>;
  paragraphs?: Array<Paragraph>;
  menuMachineName?: string;
}

export type ContentNode<T = Record<string, unknown>> = BaseContentNode & T;
