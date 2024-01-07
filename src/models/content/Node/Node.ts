import {
  ContentMetaTag,
  HrefLangContent,
  MetaTagLink,
  MetaTags,
} from 'models/content/MetaTags';
import { TranslationsConfiguration } from 'models/content/Node/TranslationConfiguration';
import { Paragraph } from 'models/content/Paragraph';
import { Breadcrumb } from '../Breadcrumb';
import { ContentNode } from './ContentNode';

export interface Node<T = Record<string, unknown>> {
  data: {
    content: ContentNode<T>;
  };
}

export function getNodeTranslations<T>(node: Node<T>): TranslationsConfiguration[] {
  return node.data.content.translations;
}

export function getNodeLangcode<T>(node: Node<T>): string {
  return node.data.content.language.id;
}

export function isNodeToBuild(node: Node<Record<string, never>>): boolean {
  return node.data.content.isPublished && Boolean(node.data.content.url?.path);
}

export function getPageTitle<T>(nodeDto: Node<T>): string {
  const content = nodeDto.data.content;
  if (!content?.metas) {
    return content?.title;
  }

  const metaTitle = content.metas.find(
    (meta: MetaTags) => meta.type === 'MetaValue' && meta.property === 'title'
  );
  if (!metaTitle) {
    return content.title;
  }

  return metaTitle.content as string;
}

export function getContentMetaTags<T>(nodeDto: Node<T>): Array<ContentMetaTag> | undefined {
  const content = nodeDto.data.content;

  if (!content?.metas) {
    return undefined;
  }

  return content.metas
    .filter(
      (meta: MetaTags) =>
        meta.type === 'MetaValue' ||
        meta.type === 'MetaProperty' ||
        meta.type === 'MetaHttpEquiv' ||
        meta.type === 'MetaItemProp'
    )
    .filter((meta: MetaTags) => meta.property !== 'title')
    .map((meta: MetaTags) => {
      if (meta.type === 'MetaProperty') {
        return {
          property: meta.property,
          content: meta.content as string,
        };
      }
      if (meta.type === 'MetaHttpEquiv') {
        return {
          'http-equiv': meta.property,
          'content': meta.content as string,
        };
      }
      if (meta.type === 'MetaItemProp') {
        return {
          itemprop: meta.property,
          content: meta.content as string,
        };
      }
      return { name: meta.property, content: meta.content as string };
    });
}

export function getLinkMetatags<T>(node: Node<T>): Array<MetaTagLink> | undefined {
  const content = node.data.content;

  if (!content?.metas) {
    return undefined;
  }
  return content.metas
    .filter((meta: MetaTags) => meta.type === 'MetaLink' || meta.type === 'MetaLinkHreflang')
    .map((meta: MetaTags) => {
      if (meta.type === 'MetaLinkHreflang' || meta.property === 'alternate') {
        const { content } = meta;
        return { ...(content as HrefLangContent) };
      }

      return { rel: meta.property, href: meta.content as string };
    });
}

export function getNodeTitle<T>(node: Node<T>): string {
  return node.data.content.title;
}

export function hasSubtitle<T>(node: Node<T>): boolean {
  return Boolean(node.data.content.subtitle);
}

export function getSubtitle<T>(node: Node<T>): string | undefined {
  return node.data.content.subtitle;
}

export function hasParagraphs<T>(node: Node<T>): boolean {
  return Boolean(node.data.content.paragraphs);
}

export function getParagraphs<T>(node: Node<T>): Paragraph[] {
  if (!node.data.content.paragraphs) {
    return [];
  }

  return node.data.content.paragraphs;
}

export function getId<T>(node: Node<T>): string {
  return node.data.content.id;
}

export function hasBreadcrumbs<T>(node: Node<T>): boolean {
  return !!node.data.content.url.breadcumbs && node.data.content.url.breadcumbs?.length > 0;
}

export function getBreadcrumbs<T>(node: Node<T>): Breadcrumb[] {
  if (!node.data.content.url.breadcumbs) {
    return [];
  }

  return node.data.content.url.breadcumbs;
}
