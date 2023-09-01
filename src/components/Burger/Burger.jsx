import React, {useState} from 'react'
import  './Burger.css';
import { useNavigate } from 'react-router-dom'
import {  useTranslation } from 'react-i18next';
const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(prevOpen => !prevOpen);
  };     
  const closeBurger = () => {
    setIsOpen(false);
  };
  const history = useNavigate();

  const scrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const top = section.offsetTop;
      window.scrollTo({
        top: top,
        behavior: 'smooth',
      });
      closeBurger();
    }
  };
  const {t,i18n} = useTranslation()
  return (
    <div className="burger_wrapper">
<div className={`burger_container ${isOpen ? 'open' : 'close'}`}>
      <button className='burger_btn' onClick={toggleOpen}>
            <span className='burger_span'></span>
            <span className='burger_span'></span>
            <span className='burger_span'></span>
          </button>
    <div className='burger'>
            <p className='burger_p' onClick={() => scrollTo('head')}>{t('burger_header')}</p>
            <p className='burger_p' onClick={() => scrollTo('steps')}>{t('burger_steps')}</p>
            <p className='burger_p' onClick={() => scrollTo('about')}>{t('burger_about')}</p>
            <p className='burger_p' onClick={() => scrollTo('experience')}>{t('burger_experience')}</p>
            <p className='burger_p' onClick={() => scrollTo('contacts')}>{t('burger_contact')}</p>
            
          </div>
          
    </div>
    </div>
    
    
        
    
          
  )
}

export default Burger