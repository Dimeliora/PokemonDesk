import React from 'react';

interface HeadingProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, type, className = null }) => {
  return React.createElement(type, {className}, children);
};

export default Heading;
