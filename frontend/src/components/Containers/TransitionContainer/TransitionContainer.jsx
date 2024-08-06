<<<<<<< HEAD
import React, { useContext } from 'react';
import 'animate.css';
import { motion } from 'framer-motion';

const TransitionContainer = ({ children }) => {
  return (
    <motion.div
    className="box"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    style={{ backgroundColor: 'transparent', width: '100%'}}
    >
      {children}
   </motion.div>
  );
};

=======
import React, { useContext } from 'react';
import 'animate.css';
import { motion } from 'framer-motion';

const TransitionContainer = ({ children }) => {
  return (
    <motion.div
    className="box"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    style={{ backgroundColor: 'transparent', width: '100%'}}
    >
      {children}
   </motion.div>
  );
};

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default TransitionContainer;