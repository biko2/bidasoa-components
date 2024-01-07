export interface LinkConfiguration {
  label: string;
  url: {
    path: string;
  };
  links: LinkConfiguration[];
  target: '_blank' | '_self' | '_parent' | '_top' | null;
}

export function getNextLevelLinks(link: LinkConfiguration): LinkConfiguration[] {
  if (!link.links) {
    return [];
  }

  return link.links;
}

export function hasNextLevelLinks(link: LinkConfiguration): boolean {
  return Boolean(link.links);
}

export function getUrl(link: LinkConfiguration): string {
  if (!hasUrl(link) && hasNextLevelLinks(link)) {
    return getNextLevelLinks(link)[0].url?.path ?? '/404';
  }

  if (!hasUrl(link)) {
    return '/404';
  }

  return link.url.path;
}

function hasUrl(link: LinkConfiguration): boolean {
  return Boolean(link.url) && link.url.path !== '';
}
