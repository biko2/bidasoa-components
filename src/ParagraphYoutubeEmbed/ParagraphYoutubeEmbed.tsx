import React from 'react';
import styled from 'styled-components';

interface Props {
    alt: string;
    src: string;
}

export const ParagraphYoutubeEmbed: React.FC<Props> = ({ alt, src }) => {
  const embeddedUrl = src.replace(/https:\/\/youtu.be\//, '');

  return (
    <IframeWrapper>
      <iframe
        title={alt}
        allowFullScreen
        src={`https://www.youtube.com/embed/${embeddedUrl}`}
        width="100%"
        height="100%"
      />
    </IframeWrapper>
  );
};

const IframeWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
`;
