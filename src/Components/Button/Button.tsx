import React from 'react';
import cn from 'classnames';
import s from './Button.module.scss';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  size?: 'size-small' | 'size-large';
  theme?: 'theme-green' | 'theme-blue' | 'theme-yellow';
  isFullWidth?: boolean;
  className?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  size = 'size-small',
  theme = 'theme-green',
  isFullWidth = false,
  className,
  onClick,
  children,
}) => {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={cn(s.root, s[size], s[theme], isFullWidth && s.fullWidth, className)}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
