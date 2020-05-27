import React from 'react';
import LandingPage from './components/landingPage/LandingPage';
import Header from './components/Header';
import IntroductionPage from './components/introductionPage/IntroductionPage';

export default () => {
  return (
    <>
      <Header />
      <LandingPage />
      <IntroductionPage />
    </>
  );
};
