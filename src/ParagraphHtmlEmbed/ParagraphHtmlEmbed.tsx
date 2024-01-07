import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  contentHTML: { value: string };
  contentCSS?: { value: string };
  contentJavascript?: { value: string };
}
export const ParagraphHtmlEmbed: React.FC<Props> = ({
  contentHTML,
  contentCSS,
  contentJavascript,
}) => {
  return (
    <>
      <Helmet>
        {contentCSS && <style type="text/css">{contentCSS.value}</style>}
        {contentJavascript && <script>{contentJavascript.value}</script>}
      </Helmet>
      <div dangerouslySetInnerHTML={{ __html: contentHTML.value }} />
    </>
  );
};
