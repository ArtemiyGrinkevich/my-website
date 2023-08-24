import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import classes from './AboutFrontend.module.css'
import { useTranslation } from 'react-i18next';
import {motion} from 'framer-motion'
import '../../i18n'
import img from '..//../assets/images/IMG_3967.JPG'

const textAnimation = {
  hidden:{
    x: -100,
    opacity: 0
  },
  visible: custom=>({
    x: 0,
    opacity: 1,
    transition: {delay : custom * 0.2,duration: 0.3 }
  })
}
const textAnimationLeft = {
  hidden:{
    x: 100,
    opacity: 0
  },
  visible: custom=>({
    x: 0,
    opacity: 1,
    transition: {delay : custom * 0.2,duration: 0.3 }
  })
}

const AboutFrontend = ({id}) => {
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
  return (
    <motion.div 
    initial='hidden'
    whileInView='visible'
    viewport={{amount:0.2}}
    id={id} className={classes.aboutFrontend}>

    <div className={classes.goodFrontend}>
      <motion.h2 custom={1} variants={textAnimation} className={classes.title1}>{t('aboutTitle1')}</motion.h2>
      <motion.h2 custom={2} variants={textAnimationLeft} className={classes.title2}>{t('aboutTitle2')}</motion.h2>
    </div>
      
    <div className={classes.description}>
      <img  className={classes.portrait }  src={img} alt="iam" />
        <div className={classes.descriptionText} >
            <p className={classes.description1}>{t('aboutDescription1')}</p>
            <p className={classes.description1}>{t('aboutDescription2')}</p>
        </div>
    </div>

  </motion.div>
  )
}

export default AboutFrontend