import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  const svgVariants = {
    initial: {
      rotate: -180,
    },
    animate: {
      rotate: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const pathVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <header>
      {/* use drag props to be able to drag elements from the DOM */}
      <motion.div
        className="logo"
        drag
        // restore the draggable element in its relative position in the DOM
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        dragElastic={0.2}
      >
        <motion.svg
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          variants={svgVariants}
          initial="initial"
          animate="animate"
        >
          <motion.path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
        </motion.svg>
      </motion.div>

      <motion.div
        className="title"
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{
          delay: 0.2,
          duration: 0.5,
          type: "spring",
          stiffness: 80,
        }}
      >
        <Link to="/">
          <h1>Pizza Express</h1>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
