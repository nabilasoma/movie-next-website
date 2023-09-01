"use client"

import React from 'react';
import HeroSection from './components/HeroSection';
import MainSection from './components/MainSection';
import Card from './components/Card';
import Footer from './components/Footer';

const Page = () => {
  return (
    <div>
      <HeroSection/>
      <MainSection/>
      <Card/>
      <Footer/>
    </div>
  );
};

export default Page;