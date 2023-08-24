import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs';
import { SiTelegram } from 'react-icons/si'
import { CgMail } from 'react-icons/cg';
import classes from './Contacts.module.css'
import {  useTranslation } from 'react-i18next';

const Contacts = ({id}) => {
  const {t,i18n} = useTranslation()
    const telegramUsername = 'tema_grin';
  return (
    <div className={classes.down} id={id}>
        <h3 className={classes.contacts}>{t('myContacts')}</h3>
        <div className={classes.footer_footer} >
            
    <Link className={classes.link}  to='https://github.com/ArtemiyGrinkevich' target="_blank">
    <span style={{display:'flex',alignItems:'center'}}><p className={classes.p}>Git</p><p style={{ font: '1.1em "Fira Sans", sans-serif', fontWeight: '700' }} className={classes.p}>Hub</p> <FaGithub style={{marginLeft:'3px'}}/></span>
    </Link>


    <Link className={classes.link}  to='https://instagram.com/temagrin?igshid=MzRlODBiNWFlZA==' target="_blank">
      <span style={{display:'flex',alignItems:'center'}}><p className={classes.p}>Instagram </p> <BsInstagram style={{marginLeft:'3px'}}/></span> 
    </Link>

    <Link className={classes.link}  to='https://www.linkedin.com/in/artemiy-grinkevich-31976a266/' target="_blank">
    <span style={{display:'flex',alignItems:'center'}}><p className={classes.p}>Linked</p>  <AiFillLinkedin style={{marginLeft:'3px'}}/></span>
    </Link>

    <Link className={classes.link}  to={`https://t.me/${telegramUsername}`} target="_blank">
    <span style={{display:'flex',alignItems:'center'}}><p className={classes.p}>Telegram</p> <SiTelegram style={{marginLeft:'3px'}}/></span>
    </Link>

    <Link className={classes.link}  to='mailto:artemijgrinkevic@gmail.com' target="_blank">
    <span style={{display:'flex',alignItems:'center'}}><p className={classes.p}>artemijgrinkevic@gmail.com </p><CgMail style={{marginLeft:'3px'}}/></span>
    </Link>

    <Link className={classes.link}  to='https://drive.google.com/file/d/18KgZXDR1RR8SAaCFcEI73EkK-U1IFOBL/view?usp=drive_link' target="_blank">
    <span style={{display:'flex',alignItems:'center'}}><p className={classes.p}>MY_</p>CV</span>
    </Link>
</div>
<h4 className={classes.contacts}>{t('designedContacts')}</h4>
</div>
  )
}

export default Contacts