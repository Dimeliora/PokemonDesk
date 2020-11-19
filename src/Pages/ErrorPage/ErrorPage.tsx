import React, { FC } from 'react';
import { navigate } from 'hookrouter';
import { LinkEnum } from '../../Configs/routes';
import s from './ErrorPage.module.scss';
import Button from '../../Components/Button';
import rTeamImg from '../../Images/teamRocket.png';
import { ReactComponent as NotFoundImg } from '../../Images/404.svg';

const ErrorPage: FC = () => {
  return (
    <div className={s.root}>
      <div className={s.images}>
        <NotFoundImg className={s.notFoundImg} />
        <img className={s.rTeamImg} src={rTeamImg} alt="R Team" />
      </div>
      <div className={s.notice}>
        <p className={s.noticeText}>
          The rocket team
          <span className={s.blackNotice}> has won this time.</span>
        </p>
        <Button theme="theme-yellow" size="size-large" onClick={() => navigate(LinkEnum.HOME)}>
          Return
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
