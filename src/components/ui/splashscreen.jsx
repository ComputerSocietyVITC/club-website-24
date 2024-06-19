import React from "react";
import { motion } from "framer-motion";
import icon from "../../assets/comsocLogowhite.png"; // Import your icon image
import { useState } from "react";

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
          transition={{ duration: 1, delay: 1 }}
          className="fixed flex bg-gradient-to-b from-[#000b11] from-2% via-[#072031] to-[#000b11] to-9% h-screen w-screen justify-center z-[100]"
          onAnimationComplete={onAnimationComplete}
        >
          <motion.img
            src={icon}
            alt="Icon"
            className="self-center scale-50"
          />
        </motion.div>
      )}
    </>
  );
};

export default SplashScreen;
