import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Order = ({ pizza, setShowModal, hasPineapple }) => {
  const containerVariants = {
    hidden: { opacity: 0, x: "100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        mass: 0.4,
        damping: 8,
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  // 5sec after component mounting, setShowModal to true
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, [setShowModal]);

  // removePinapple();

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Thank you for your order :)</h2>

      <motion.p variants={childVariants}>
        You ordered a {pizza.base}{" "}
        {pizza.toppings.length > 0 ? "pizza with:" : "pizza."}
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
        {hasPineapple && (
          <p>
            I'm sorry but <br></br>
            <span className="nopineapple">no pineapple on pizza</span>.
          </p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Order;
