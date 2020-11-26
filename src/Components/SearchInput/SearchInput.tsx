import React, { FC, useState, ChangeEvent } from 'react';
import cn from 'classnames';
import s from './SearchInput.module.scss';

interface ISearchInputProps {
  className?: string;
  placeholder?: string;
  onSearchInput: (template: string) => void;
}

const SearchInput: FC<ISearchInputProps> = ({ className = null, onSearchInput, placeholder = '' }) => {
  const [template, setTemplate] = useState('');

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTemplate(e.target.value);
    onSearchInput(e.target.value);
  };

  return (
    <div className={cn(s.root, className)}>
      <input className={s.searchInput} value={template} onChange={onChangeInput} placeholder={placeholder}/>
    </div>
  );
};

export default SearchInput;
