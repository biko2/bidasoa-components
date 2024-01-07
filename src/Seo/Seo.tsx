import { Helmet } from 'react-helmet';
import React from 'react';

import {
  getContentMetaTags,
  getLinkMetatags,
  getNodeLangcode,
  getPageTitle,
  Node,
} from 'models/content/Node/Node';

interface Props {
  content: Node;
}

export const Seo: React.FC<Props> = ({ content }) => {
  return (
    <Helmet
      htmlAttributes={{
        'lang': getNodeLangcode(content),
        'dir': 'ltr',
        'prefix':
          'content: http://purl.org/rss/1.0/modules/content/  dc: http://purl.org/dc/terms/  foaf: http://xmlns.com/foaf/0.1/  og: http://ogp.me/ns#  rdfs: http://www.w3.org/2000/01/rdf-schema#  schema: http://schema.org/  sioc: http://rdfs.org/sioc/ns#  sioct: http://rdfs.org/sioc/types#  skos: http://www.w3.org/2004/02/skos/core#  xsd: http://www.w3.org/2001/XMLSchema# ',
        'xmlns': 'http://www.w3.org/1999/xhtml',
        'xmlns:fb': 'https://www.facebook.com/2008/fbml',
        'xmlns:og': 'http://ogp.me/ns#',
      }}
      title={getPageTitle(content)}
      meta={getContentMetaTags(content)}
      link={getLinkMetatags(content)}
      defer={false}
    />
  );
};
