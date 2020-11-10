import React, { FC } from 'react';
import { navigate } from 'hookrouter';
import s from './ErrorPage.module.scss';
import Button from '../../Components/Button';

const ErrorPage: FC = () => {
  return (
    <div className={s.root}>
      <div className={s.notice}>
        <p className={s.noticeText}>
          The rocket team
          <span className={s.blackNotice}> has won this time.</span>
        </p>
        <Button theme="theme-yellow" size="size-large" onClick={() => navigate('/')}>
          Return
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
