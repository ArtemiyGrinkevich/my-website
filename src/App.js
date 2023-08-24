



import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Head from './components/Head/Head';
import AboutFrontend from './components/AboutFrontend/AboutFrontend';
import Experience from './components/Experience/Experience';
import React, { useState, useEffect, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import Loader from './components/Loader/Loader';
import Steps from './components/Steps/Steps';
import Contacts from './components/Contacts/Contacts';
import MyHeader from './components/myHeader/MyHeader';

function App() {
  
  const history = useNavigate();
  const scrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const top = section.offsetTop;
      window.scrollTo({
        top: top,
        behavior: 'smooth',
      });
    }
  };
 
  return (
    <Suspense fallback={<Loader/>}>

    <div className="App">
      
      <MyHeader id='myHeader'/>

      <Head id='head'/>
      
      <Steps id='steps'/>

      <AboutFrontend id='about'/>

      <Experience id='experience'/>

      <Contacts id='contacts'/>

      </div>

      </Suspense>
    
  );
}

export default App;

