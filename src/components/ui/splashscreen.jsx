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
          transition={{ duration: 1, delay: 3 }}
          className='absolute flex bg-black h-screen w-screen justify-center z-[100]'
          onAnimationComplete={onAnimationComplete} // Call onAnimationComplete when animation completes
        >
          <motion.img
            src={icon}
            alt="Icon"
            className="self-center ml-36 scale-125"
          />
        </motion.div>
      )}
    </>
  );
};

export default SplashScreen;
