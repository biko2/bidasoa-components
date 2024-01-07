import { Node } from './Node';

export interface BasePageContext<T = Record<string, unknown>> {
  node: Node<T>;
}

export type PageContext<
  Content = Record<string, unknown>,
  Configuration = Record<string, unknown>
> = BasePageContext<Content> & Configuration;
