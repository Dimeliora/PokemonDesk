import React from 'react';
import s from './ErrorNotice.module.scss';

import Heading from '../Heading';
import sadPikachu from '../../Images/sadPikachu.png';

const ErrorNotice = () => {
  return (
    <div className={s.error}>
      <Heading type="h3" weight="bold" className={s.errorTitle}>
        Sorry, something went wrong...
      </Heading>
      <img src={sadPikachu} alt="Sad Pikachu" />
    </div>
  );
}

export default ErrorNotice;