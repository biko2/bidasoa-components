import {
  getNextLevelLinks,
  hasNextLevelLinks,
  LinkConfiguration,
} from 'models/menus/LinkConfiguration';

export interface FlattenedLink {
  parent?: LinkConfiguration;
  link: LinkConfiguration;
}

export function getFlatennedLinks(
  links: LinkConfiguration[],
  parent?: LinkConfiguration
): FlattenedLink[] {
  return links.reduce<FlattenedLink[]>((accumulator, current) => {
    const currentLinkFlattened = { link: current, ...(parent && { parent }) };

    if (!hasNextLevelLinks(current)) {
      return [...accumulator, currentLinkFlattened];
    }

    return [
      ...accumulator,
      currentLinkFlattened,
      ...getFlatennedLinks(getNextLevelLinks(current), current),
    ];
  }, []);
}
