import React, { FC } from 'react';
import Footer from '../../Components/Footer';
import s from './LegendariesPage.module.scss';
import mockGIF from '../../Images/mock.gif';

interface ILegendariesPageProps {
  title?: string;
}

const LegendariesPage: FC<ILegendariesPageProps> = ({ title }) => {
  return (
    <div className={s.root}>
      <div className={s.mock}>
        <p>Page &quot;{title}&quot; is under construction now...</p>
        <img className={s.mockPic} src={mockGIF} alt="pikachu" />
      </div>
      <Footer />
    </div>
  );
};

export default LegendariesPage;
