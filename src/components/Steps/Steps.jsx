import React from 'react'
import classes from './Steps.module.css';
import {motion} from 'framer-motion'
import { MButton } from '../myButton/myButton';
import { BsHandIndex } from 'react-icons/bs';
import { IoIosRocket } from "react-icons/io";
import {  useTranslation } from 'react-i18next';
import { BsFill1CircleFill,BsFill2CircleFill,BsFill3CircleFill,BsFill4CircleFill } from "react-icons/bs"

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
const featureAnimation = {
  hidden:{
    y: 100,
    opacity: 0
  },
  visible: custom=>({
    y: 0,
    opacity: 1,
    transition: {delay : custom * 0.2},
  }),
  
}

const Features = ({id}) => {
  const {t,i18n} = useTranslation()
  return (
    <motion.section 
    initial='hidden'
    whileInView='visible'
    viewport={{amount:0.2}}
    id={id} className={classes.start}>
     
      <motion.h1 custom={1} variants={textAnimation} className={classes.title}>{t('stepTitle')} </motion.h1>
      <hr style={{width:'30%',color:'yellow'}}/>
        <motion.h2 custom={2} variants={textAnimationRight} className={classes.description}>{t('stepDescription')}</motion.h2>
      
        
        <motion.div
        initial='hidden'
        whileInView='visible'
        
        viewport={{amount:0.2}}
        className={classes.features}>
          <motion.div
             
            custom={1} 
            variants={featureAnimation} 
            className={classes.feature}
            style={{padding:'1rem'}}>
              {t('step1')} 
            <p></p>
            <span className={classes.arrow}><BsFill1CircleFill/></span>
            </motion.div>
            
          <motion.div
            
            custom={2}
            variants={featureAnimation}
            className={classes.feature}
            style={{padding:'1rem'}}>
              {t('step2')} 
              <p></p>
              <span className={classes.arrow}><BsFill2CircleFill/></span>
          </motion.div>
          
          <motion.div
        
          custom={3} 
          variants={featureAnimation} 
          className={classes.feature}
          style={{padding:'1rem'}}>
            {t('step3')} 
            <p></p>
            <span className={classes.arrow}><BsFill3CircleFill/></span>
            </motion.div>
            <motion.div
        
          custom={4} 
          variants={featureAnimation} 
          className={classes.feature}
          style={{padding:'1rem'}}>
            {t('step4')} 
            <p></p>
            <span className={classes.arrow}><BsFill4CircleFill/></span>
            </motion.div>
        </motion.div>
    </motion.section>
  )
}

export default Features