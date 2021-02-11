import React, { FunctionComponent, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Subscription: FunctionComponent<{}> = () => {
  const controls = useAnimation();
  const {ref, inView} = useInView();
  
  useEffect(() => {
    if (inView){
      controls.start('visible');
    }
    if (!inView){
      controls.start('hidden');
    }
  },[controls, inView]);

  const boxVariants = {
    hidden: {opacity: 0, y: 100},
    visible: {
      opacity: 1,
      y: 0,
      transition:{
        type: 'spring',
        stiffness: 200,
        duration: 0.5
      }
    }
  };

  return (
    <div className="c-subscribe text-center rounded-lg py-6 md:py-8 mx-auto my-8">
      <h3 className="text-2xl md:text-3xl font-bold text-white">Subscribe To Our Newsletter</h3>
      <p className="text-white py-2">New updates, notifications, job alerts for job seekers & employers</p>
      <div className="w-3/4 my-2 md:w-2/5 mx-auto md:my-4">
        <input placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-md focus:outline-none" />
        <motion.button 
          variants={boxVariants} 
          initial="hidden" 
          animate={controls} 
          ref={ref} 
          className="c-btn-subscribe px-6 py-2 mt-4 text-white rounded"
        >
          Subscribe
        </motion.button>
      </div>
    </div>
  )
};

export default Subscription;
