
import {motion} from 'framer-motion'
import React, { useState, forwardRef } from 'react';
import classes from './myButton.module.css';
import {  BsArrowUpRight } from 'react-icons/bs';
const MyButton = forwardRef(({ onClick, style, children },ref) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
    ref={ref}
      className={classes.button}
      onClick={onClick}
      style={{
        ...style,
        '--icon-rotation': isHovered ? '45deg' : '0deg',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={classes.icon}><BsArrowUpRight/></span> {children}
    </button>
  );
});

// export default MyButton;

export const MButton = motion(MyButton)