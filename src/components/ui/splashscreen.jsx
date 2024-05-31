import React from 'react';
import { motion } from 'framer-motion';
import icon from '../../assets/comsocLogowhite.svg'; // Import your icon image
import { useState } from 'react';


const SplashScreen = () => {
    const [showSplash, setShowSplash] = useState(true);
    const onAnimationComplete = () => {
      setShowSplash(false);
    };
  return (
    <>
      {showSplash && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 3 }}
          style={{
            backgroundColor: 'black',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 100
          }}
          onAnimationComplete={onAnimationComplete} // Call onAnimationComplete when animation completes
        >
          <motion.img
            src={icon}
            alt="Icon"
            style={{ width: '25%', height: 'auto' }}
          />
        </motion.div>
      )}
    </>
  );
};

export default SplashScreen;
