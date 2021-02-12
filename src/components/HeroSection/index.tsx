import { FunctionComponent } from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const categories = [
  'Bussiness Development',
  'Customer Support',
  'Design & Development',
  'Product Management'
];

const HeroSection: FunctionComponent<{}> = () => {
  return (
    <div className="container mx-auto flex flex-col mt-32 md:flex-row md:items-center md:mt-20">
      <div className="w-full pl-3 md:w-6/12 md:pl-2 md:ml-0">
        <h1 className="text-3xl font-bold md:text-4xl">Find World's Best Remote Jobs <span className="inline-block md:hidden">On</span></h1>
        <span className="flex flex-col font-bold md:flex-row text-2xl md:text-5xl"><span className="hidden md:block">On</span> 
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Software Development')
                .pauseFor(1500)
                .deleteAll()
                .start();
            }}
            options={{
              strings: categories,
              autoStart: true,
              loop: true
            }}
          />
        </span>
        <motion.button
          initial={{x:'-100vh'}} 
          animate={{x: 0, transition: {type: 'spring', stiffness: 150}}}
          whileHover={{translateY: -5}}
          className="c-btn-get-started py-4 px-8 mt-6 md:mt-8 rounded-full text-white font-semibold tracking-wider"
        >
          Find A Job
        </motion.button>
      </div>
      <div className="w-full md:w-6/12">
        <img src="/heroBanner.webp" alt="banner" className="" />
      </div>
    </div>
  )
};

export default HeroSection;