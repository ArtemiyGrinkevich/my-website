
import React, { useState } from 'react';
import { MdLanguage } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import '../../i18n';
// import LanguageButton from '../LanguageButton/LanguageButton';
import { useTranslation } from 'react-i18next';
import classes from './ChangeLanguage.module.css';

const ChangeLanguage = () => {
  const { t, i18n } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);

  const toggleOpen = () => {
    setLangOpen(prevOpen => !prevOpen);
  };

  const closeLanguage = () => {
    setLangOpen(false);
  };

  const history = useNavigate();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    closeLanguage();
  };

  return (
    <div className={classes.language_wrapper}>
      <div className={`${classes.language_container} ${langOpen ? '':classes.open }`}>
        <button className={classes.language_button} onClick={toggleOpen}>
          <MdLanguage />
        </button>
        <div className={classes.language}>
          <button style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'10px 0',background:'none',border:'none'}} onClick={() => changeLanguage('en')}><div style={{borderRadius:'50%',overflow:'hidden',height:'20px',width:'22px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'46px',paddingTop:'2px',marginTop:'10px'}}>🇬🇧</div></button>
          <button style={{display:'flex',justifyContent:'center',alignItems:'center',background:'none',border:'none'}} onClick={() => changeLanguage('ru')}><div style={{borderRadius:'50%',overflow:'hidden',height:'20px',width:'22px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'46px',paddingTop:'2px',marginTop:'15px'}}>🇷🇺</div></button>
        </div>
      </div>
    </div>
  );
}

export default ChangeLanguage;
