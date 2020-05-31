import React from 'react';
import LandingPage from './components/landingPage/LandingPage';
import Header from './components/Header';
import ResumePage from './components/resumePage/ResumePage';

export default () => {
  return (
    <>
      <Header />
      <LandingPage />
      <ResumePage />
    </>
  );
};
