import { LinkConfiguration } from 'models/menus/LinkConfiguration';

export interface MenuLink {
  label: string;
  url: {
    path: string;
  };
  links: LinkConfiguration[];
  target: '_blank' | '_self' | '_parent' | '_top' | null;
}
