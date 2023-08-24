import React from 'react'
import classes from './MyHeader.module.css'
import { useNavigate } from 'react-router-dom'
import {MButton} from '../myButton/myButton';
import {  useTranslation } from 'react-i18next';
import '../../i18n'

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
  return (
    <div id={id} className={classes.header_container}>
        <div onClick={() => scrollTo('head')} className={classes.name}>
          <div  className={classes.nameG}>{t('head2')} </div>
          <div  className={classes.nameA}>{t('head1')}</div>
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
    </div>
  )
}

export default MyHeader