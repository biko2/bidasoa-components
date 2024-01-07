import { LinkConfiguration } from '../LinkConfiguration';
import { FlattenedLink, getFlatennedLinks } from './FlattenedLink';

export interface MenuNode<T = LinkConfiguration> {
  data: {
    menu: {
      links: T[];
    };
  };
}

export function getLinks<T = LinkConfiguration>(menu: MenuNode<T>): T[] {
  return menu.data.menu.links;
}

export function getLinkByPathname(mainMenu: MenuNode, pathname: string): FlattenedLink | undefined {
  return getFlatennedLinks(getLinks(mainMenu)).find(element => {
    return element.link.url.path === pathname;
  });
}

export function getParentLinkForPath(menu: MenuNode, path: string): LinkConfiguration | undefined {
  const flattenedLinks = getFlatennedLinks(getLinks(menu));
  const currentLink = flattenedLinks.find(link => {
    return (
      Boolean(link.link.url) &&
      removeTrailingSlashes(link.link.url.path) === removeTrailingSlashes(path)
    );
  });

  if (!currentLink) {
    return undefined;
  }

  return currentLink.parent;
}

function removeTrailingSlashes(rawPath: string) {
  return rawPath.replace(/\/+$/, '');
}
