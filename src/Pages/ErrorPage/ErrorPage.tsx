import React from 'react';
import { useHistory } from 'react-router-dom';
import s from './ErrorPage.module.scss';
import Button from '../../Components/Button';

const ErrorPage = () => {
  const history = useHistory();
  const handleBackToHome = () => history.push('/home');

  return (
    <div className={s.root}>
      <div className={s.notice}>
        <div className={s.noticeText}>
          <span className={s.whiteNotice}>The rocket team </span>
          <span className={s.blackNotice}>has won this time.</span>
        </div>
        <Button theme="theme-yellow" size="size-large" onClick={handleBackToHome}>
          Return
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
