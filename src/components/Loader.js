import React from "react";
import { motion, useCycle } from "framer-motion";

const Loader = () => {
  const loaderVariants = {
    animationOne: {
      x: [-20, 20],
      y: [0, -30],
      transition: {
        x: {
          yoyo: Infinity,
          duration: 0.5,
        },
        y: {
          yoyo: Infinity,
          duration: 0.25,
          ease: "easeOut",
        },
      },
    },
    animationTwo: {
      y: [0, -40],
      x: 0,
      transition: {
        y: {
          yoyo: Infinity,
          duration: 0.25,
          ease: "easeOut",
        },
      },
    },
  };

  //   everytime we call cycleAnimation function, it cycles through object in useCycle parametres
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");

  return (
    <>
      <div onClick={() => cycleAnimation()}>
        <motion.div
          className="loader"
          variants={loaderVariants}
          animate={animation}
        ></motion.div>
      </div>
    </>
  );
};

export default Loader;
