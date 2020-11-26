import React, { FC } from 'react';
import cn from 'classnames';
import s from './Notification.module.scss';
import Heading from '../Heading';
import sadPikachu from '../../Images/sadPikachu.png';

interface INotificationProps {
  classname?: string;
}

const Notification: FC<INotificationProps> = ({ children, classname = null }) => {
  return (
    <div className={cn(s.notice, classname)}>
      <Heading type="h3" weight="bold" className={s.noticeTitle}>
        {children}
      </Heading>
      <img className={s.noticeImage} src={sadPikachu} alt="Sad Pikachu" />
    </div>
  );
};

export default Notification;
