import React, { FC } from 'react';
import Footer from '../../Components/Footer';
import s from './DocumentationPage.module.scss';
import mockGIF from '../../Images/mock.gif';

interface IDocumentationPageProps {
  title?: string;
}

const DocumentationPage: FC<IDocumentationPageProps> = ({ title }) => {
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

export default DocumentationPage;
