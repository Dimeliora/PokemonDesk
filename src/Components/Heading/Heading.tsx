import React, { FC } from 'react';
import cn from 'classnames';
import s from './Heading.module.scss';

interface HeadingProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  weight: 'normal' | 'bold';
  className?: string;
}

const Heading: FC<HeadingProps> = ({ children, type, weight, className = null }) => {
  return React.createElement(type, {className: cn(s[type], s[weight], className)}, children);
};

export default Heading;
