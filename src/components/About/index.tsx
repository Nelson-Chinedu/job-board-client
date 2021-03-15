import { FunctionComponent, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: FunctionComponent<{}> = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView){
      controls.start('visible');
    }
    if (!inView){
      controls.start('hidden');
    }
  },[controls, inView]);

  const boxVariantsLeft = {
    hidden: {opacity: 0, x: '10vw'},
    visible: {
      opacity: 1,
      x: 0,
      transition:{
        type: 'spring',
        stiffness: 150,
        duration: 0.5,
        delay: .5
      }
    }
  };

  const boxVariantsRight = {
    hidden: {opacity: 0, x: '-10vw'},
    visible: {
      opacity: 1,
      x: 0,
      transition:{
        type: 'spring',
        stiffness: 150,
        duration: 0.5,
        delay: .5
      }
    }
  };
  
  return (
    <div className="c-about flex flex-col-reverse overflow-hidden md:flex-row md:items-start md:mx-auto">
      <motion.div 
        initial="hidden" 
        variants={boxVariantsLeft} 
        animate={controls} 
        ref={ref} 
        className="w-full md:w-1/2 pt-10"
      >
        <h3 className="c-about-intro text-md text-center md:text-left md:text-xl font-light">
          The finder has been created to foster long-term
          business relations and network built on Trust and quality.
        </h3>
        <div className="c-about-hr w-1/2 my-8">
          <hr className="border-t-2 border-grey-400 border-dashed "/>
        </div>
        <div className="c-about-logos w-4/5 mx-auto md:mx-0 md:w-7/12">
          <img src="/google.webp" alt="google logo"/>
          <img src="/facebook.svg" alt="facebook logo"/>
          <img src="/twilio.svg" alt="twilio logo"/>
          <img src="/microsoft.svg" alt="microsoft logo"/>
          <img src="/slack.svg" alt="slack logo"/>
          <img src="/ibm.svg" alt="ibm logo"/>
        </div>
      </motion.div>
      <motion.div 
        initial="hidden" 
        variants={boxVariantsRight} 
        animate={controls} 
        ref={ref} 
        className="w-full md:w-1/2"
      >
        <img src="/aboutt.png" alt="" className="w-full" />
      </motion.div>
    </div>
  )
};

export default About;
