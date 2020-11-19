import React, { FC } from 'react';
import cn from 'classnames';
import s from './Layout.module.scss';

interface ILayoutProps {
  className?: string;
}

const Layout: FC<ILayoutProps> = ({ children, className = null }) => {
  return <div className={cn(s.root, className)}>{children}</div>;
};

export default Layout;
