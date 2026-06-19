import React from 'react';

const renderNode = (
  Component: React.ComponentType<any> | undefined,
  content: unknown,
  defaultProps: Record<string, unknown> = {},
): React.ReactElement | null => {
  if (content == null || content === false) {
    return null;
  }
  if (React.isValidElement(content)) {
    return content;
  }
  if (typeof content === 'function') {
    return content();
  }
  if (content === true) {
    if (!Component) {
      return null;
    }
    return <Component {...defaultProps} />;
  }
  if (typeof content === 'string') {
    if (content.length === 0) {
      return null;
    }
    return <Component {...defaultProps}>{content}</Component>;
  }
  if (typeof content === 'number') {
    return <Component {...defaultProps}>{content}</Component>;
  }
  return (
    <Component {...defaultProps} {...(content as Record<string, unknown>)} />
  );
};
export default renderNode;
