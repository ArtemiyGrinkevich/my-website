
import React from 'react';
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import classes from './Head.module.css';
import Burger from '../Burger/Burger'
import {  useTranslation } from 'react-i18next';
import '../../i18n'
import ChangeLanguage from '../ChangeLanguage/ChangeLanguage';
import MyHeader from '../myHeader/MyHeader';

const textAnimation = {
  hidden:{
    x: 0,
    opacity: 0
  },
  visible: custom=>({
    x: -100,
    opacity: 1,
    transition: {delay : custom * 0.2}
  })
}


const Head = ({ id }) => {
  
    const {t,i18n} = useTranslation()
  
    const changeLanguage = (lang)=>{
      i18n.changeLanguage(lang)
    }
  
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
      <motion.header
      initial='hidden'
      whileInView='visible'
      viewport={{amount:0.2}}
      id={id} className={classes.header}>
          
          <Burger/>
          <ChangeLanguage/>
          
          <motion.div custom={2} variants={textAnimation} className={classes.hello}>
            {t('superHi')}
          </motion.div>
        
        <div className={classes.name}>
        
          <motion.div custom={1} variants={textAnimation} className={classes.nameG}>{t('head2')} </motion.div>
            
          <motion.div custom={1} variants={textAnimation} className={classes.nameA}>{t('head1')}</motion.div>
      
        </div>
        
        
      </motion.header>
    );
  };
  
  export default Head;