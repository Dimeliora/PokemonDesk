import React from 'react';
import { useHistory } from 'react-router-dom';
import s from './ErrorPage.module.scss';
import { LinkEnum } from '../../Configs/routes';

import Button from '../../Components/Button';
import rTeamImg from '../../Images/teamRocket.png';
import { ReactComponent as NotFoundImg } from '../../Images/404.svg';

const ErrorPage = () => {
  const history = useHistory();
  const handleBackToHome = () => history.push('/home');

  return (
    <div className={s.root}>
      <div className={s.images}>
        <NotFoundImg className={s.notFoundImg} />
        <img className={s.rTeamImg} src={rTeamImg} alt="R Team" />
      </div>
      <div className={s.notice}>
<<<<<<< Updated upstream
        <div className={s.noticeText}>
          <span className={s.whiteNotice}>The rocket team </span>
          <span className={s.blackNotice}>has won this time.</span>
        </div>
        <Button theme="theme-yellow" size="size-large" onClick={handleBackToHome}>
=======
        <p className={s.noticeText}>
          The rocket team
          <span className={s.blackNotice}> has won this time.</span>
        </p>
        <Button theme="theme-yellow" size="size-large" onClick={() => navigate(LinkEnum.HOME)}>
>>>>>>> Stashed changes
          Return
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
