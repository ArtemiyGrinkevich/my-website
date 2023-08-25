import {motion} from 'framer-motion'
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import {MButton} from '../myButton/myButton';
import classes from './Experience.module.css';
import videoBGP from '../../assets/video/video (2160p).mp4';
import logo from '..//..//../src/logo.svg'
import {  useTranslation } from 'react-i18next';
import { BsFillMortarboardFill} from "react-icons/bs";

const Experience = ({ id }) => {
  const {t,i18n} = useTranslation()
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
  const textAnimation = {
    hidden:{
      x: -100,
      opacity: 0
    },
    visible: custom=>({
      x: 0,
      opacity: 1,
      transition: {delay : custom * 0.2}
    })
  }
  const textAnimationRight = {
    hidden:{
      x: 100,
      opacity: 0
    },
    visible: custom=>({
      x: 0,
      opacity: 1,
      transition: {delay : custom * 0.2}
    })
  }
  return (
    <motion.div 
    initial='hidden'
    whileInView='visible'
    id={id} className={classes.main_experience}>
      
            <div className={classes.experience}>
              <div  style={{ maxWidth: '800px' , padding:'15px'}}>
                  <motion.h2 custom={1} variants={textAnimation} style={{color:'white'}}>{t('frontendExperience')}</motion.h2>
                  <hr style={{maxWidth:'50%'}}/>
                  <motion.h2 custom={2} variants={textAnimationRight}>{t('experienceTitle')}</motion.h2>
                  <motion.h2 className={classes.description} custom={3} variants={textAnimationRight}>{t('experienceDescription')}  <Link className={classes.link} to='https://drive.google.com/file/d/134LJw1ctawx-ApvhvW3DyIwVpZoxTGNY/view?usp=drive_link' target="_blank">
                  My certificate <BsFillMortarboardFill/></Link></motion.h2>
              </div>
              
              <img  src={logo} className="App-logo" alt="logo" />
              <div className={classes.button} >
                <MButton  onClick={() => scrollTo('head')}>{t('experienceButton')}</MButton>
              </div>
            </div>

            <div className={classes.videoBackgroundContainer}>
              <video className={classes.videoBackground} autoPlay loop muted>
                <source src={videoBGP} type="video/mp4" />
              </video>
            </div>

    </motion.div>
  );
};

export default Experience;
