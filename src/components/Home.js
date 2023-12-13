import React from 'react'

import MainContent from './MainContent';
import InfoSection from './InfoSection';

export default function Home(){
  return (
    <div className="App">
      <MainContent/>
      <InfoSection/>
    </div>
  );
}