import React from 'react';
import cn from 'classnames';
import s from './Footer.module.scss';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = null }) => {
  return (
    <footer className={cn(s.root, className)}>
      <div className={s.wrapper}>
        <span className={s.slogan} role="img" aria-label="Make with love">
          Make with ❤️
        </span>
        <span className={s.copyright}>Ours Team</span>
      </div>
    </footer>
  );
};

export default Footer;
