import React, {useState} from 'react'
import  './Burger.css';
import { useNavigate } from 'react-router-dom'
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

  return (
    <div className="burger_wrapper">
<div className={`burger_container ${isOpen ? 'open' : 'close'}`}>
      <button className='burger_btn' onClick={toggleOpen}>
            <span className='burger_span'></span>
            <span className='burger_span'></span>
            <span className='burger_span'></span>
          </button>
    <div className='burger'>
            <p className='burger_p' onClick={() => scrollTo('head')}>Header</p>
            <p className='burger_p' onClick={() => scrollTo('steps')}>Steps</p>
            <p className='burger_p' onClick={() => scrollTo('about')}>About me</p>
            <p className='burger_p' onClick={() => scrollTo('experience')}>Experience</p>
            <p className='burger_p' onClick={() => scrollTo('contacts')}>Contact me</p>
            
          </div>
          
    </div>
    </div>
    
    
        
    
          
  )
}

export default Burger