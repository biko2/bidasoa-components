export interface MetaTags {
  type:
    | 'MetaValue'
    | 'MetaProperty'
    | 'MetaHttpEquiv'
    | 'MetaItemProp'
    | 'MetaLink'
    | 'MetaLinkHreflang';
  property: string;
  content: string | HrefLangContent;
}

export interface HrefLangContent {
  rel: string;
  hreflang: string;
  href: string;
}

export interface ContentMetaTag {
  'property'?: string;
  'http-equiv'?: string;
  'itemprop'?: string;
  'name'?: string;
  'content': string;
}

export interface MetaTagLink {
  rel: string;
  href: string;
}
