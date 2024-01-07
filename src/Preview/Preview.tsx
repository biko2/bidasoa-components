import React, { useEffect, useState } from 'react';

import { PageContext } from 'models/content/PageContext';
import { BackToEditingContentButton } from './Preview.styles';

interface Props {
  pageContext?: PageContext;

  renderView: (contentType: string, pageContext: PageContext) => React.ReactNode;
}

export const Preview: React.FC<Props> = ({ pageContext, renderView }) => {
  const [isNodePreview, setIsNodePreview] = useState(false);

  const handleClick = () => {
    const nodeId = pageContext?.node?.data.content.id;
    const splittedUrl = window.location.pathname.split('/');
    if (!nodeId) {
      const nodeType = pageContext?.node?.data.content.bundle;
      window.location.href = `/node/add/${nodeType}?uuid=${splittedUrl[3]}`;
    } else {
      window.location.href = `/node/${nodeId}/edit?uuid=${splittedUrl[3]}`;
    }
  };

  useEffect(() => {
    if (!pageContext || !pageContext?.node.data.content.bundle) {
      return;
    }
    if (window.location.pathname.indexOf('/node/preview') !== -1) {
      setIsNodePreview(true);
    }
  }, []);

  if (!pageContext || !pageContext?.node?.data.content.bundle) {
    return null;
  }

  const contentTypeToRender = pageContext?.node?.data.content.bundle;

  if (contentTypeToRender === 'preview') {
    return <p>Cargando contenido para preview</p>;
  }

  return (
    <>
      {isNodePreview && (
        <BackToEditingContentButton onClick={handleClick}>
          Vuelta a edición
        </BackToEditingContentButton>
      )}

      {renderView(contentTypeToRender, pageContext)}
    </>
  );
};
