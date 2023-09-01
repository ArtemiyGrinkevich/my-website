import React from 'react'
import classes from './MyHeader.module.css'
import { useNavigate } from 'react-router-dom'
import {MButton} from '../myButton/myButton';
import {  useTranslation } from 'react-i18next';
import '../../i18n'
import ChangeLanguage from '../ChangeLanguage/ChangeLanguage';
import {motion} from 'framer-motion'

const MyHeader = ({id}) => {
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
    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);
      
    };
    const textAnimation = {
      hidden:{
        x: -100,
        opacity: 0
      },
      visible: custom=>({
        x: 0,
        opacity: 1,
        transition: {delay : custom * 0.3}
      })
    }
  return (
    <motion.div
    initial='hidden'
      whileInView='visible'
      viewport={{amount:0.9}}
    id={id} className={classes.header_container}>
        <div onClick={() => scrollTo('head')} className={classes.name}>
          
          <div  className={classes.nameAG}>AG</div>
          <div className={classes.lang}>
          <motion.div custom={1} variants={textAnimation} className={classes.langEN} onClick={() => changeLanguage('en')}>EN</motion.div>
          <motion.div custom={1} variants={textAnimation} className={classes.langRU} onClick={() => changeLanguage('ru')}>RU</motion.div>
          </div>
          
          
        </div>

        <div  className={classes.header}>
          <div className={classes.header_navigation}>
            <MButton style={{color:'yellow',border:'1px solid yellow',borderRadius:'30px'}}  onClick={() => scrollTo('head')}>{t('myHeaderHeader')}</MButton>
            <MButton style={{color:'yellow',border:'1px solid yellow',borderRadius:'30px'}}  onClick={() => scrollTo('steps')}>{t('myHeaderSteps')}</MButton>
            <MButton style={{color:'yellow',border:'1px solid yellow',borderRadius:'30px'}} onClick={() => scrollTo('about')}>{t('myHeaderAbout')}</MButton>
            <MButton style={{color:'yellow',border:'1px solid yellow',borderRadius:'30px'}}  onClick={() => scrollTo('experience')}>{t('myHeaderExperience')}</MButton>
            <MButton style={{color:'yellow',border:'1px solid yellow',borderRadius:'30px'}}  onClick={() => scrollTo('contacts')}>{t('myHeaderContacts')}</MButton>
          </div>
        </div>
    </motion.div>
  )
}

export default MyHeader