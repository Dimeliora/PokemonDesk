import React from 'react';
import s from './NavigationItem.module.scss';

type navigationItemProps = {
  label: string;
  href: string;
};

const NavigationItem = ({ label, href }: navigationItemProps) => {
  return (
    <li className={s.navigationItem}>
      <a href={href} className={s.navigationLink}>
        {label}
      </a>
    </li>
  );
};

export default NavigationItem;
