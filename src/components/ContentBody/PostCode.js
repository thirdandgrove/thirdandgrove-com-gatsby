import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const PostCode = ({ language, children }) => {
  return (
    <SyntaxHighlighter style={dracula} language={language}>
      {`${children}`}
    </SyntaxHighlighter>
  );
};

export default PostCode;
