import React from "react";
import { motion } from "framer-motion";
import('./ContainerGridFramerStyles.css');

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const ContainerGridFramer = ({content}) => (
  <motion.ul
    className="container"
    variants={container}
    initial="hidden"
    animate="visible"
    style={{backgroundColor: 'var(--lightblack)'}}
  >
    {
         content.map(cnt => (
          <motion.li className='item' variants={item} key={cnt}>
            {cnt}
          </motion.li>
         ))
    }

  </motion.ul>
);

export default ContainerGridFramer;