import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTime } from '../../store/slices/clockSlice';
import { useSpring, animated } from 'react-spring';
import classes from './myClock.module.css'
const MyClock = ({style}) => {
  const dispatch = useDispatch();
  const currentTime = useSelector((state) => state.clock.time);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  const springProps = useSpring({
    to: { opacity: 1, transform: 'scale(1)' },
    from: { opacity: 0, transform: 'scale(0.8)' },
  });

  return (
    <div className={classes.clock} style={{style}}>
      <animated.div className="clock" style={springProps}>
        {currentTime}
      </animated.div>
    </div>
  );
};

export default MyClock;