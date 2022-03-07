import React from 'react'
import loadingStyles from './loading.module.css'
import { motion } from 'framer-motion'

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const loadingCircleVariants = {
  start: {
    y: '0%',
  },
  end: {
    y: '100%',
  },
}

const loadingCircleTransition = {
  duration: 0.4,
  repeat: Infinity,
  ease: 'easeInOut',
}

const Loader = () => {
  return (
    <div className={loadingStyles.outerContainer}>
      <span>Loading</span>
      <motion.div
        className={loadingStyles.container}
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
      >
        <motion.span
          className={loadingStyles.circle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        ></motion.span>
        <motion.span
          className={loadingStyles.circle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        ></motion.span>
        <motion.span
          className={loadingStyles.circle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        ></motion.span>
      </motion.div>
    </div>
  )
}

export default Loader
