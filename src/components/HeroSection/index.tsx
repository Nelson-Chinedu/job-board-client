import { FunctionComponent } from 'react';
import Typewriter from 'typewriter-effect';
import {motion} from 'framer-motion';

const category = [
  'Bussiness Development',
  'Customer Support',
  'Design & Development',
  'Product Management'
]
const HeroSection: FunctionComponent<{}> = () => {
  return (
    <div className="container mx-auto flex items-center mt-16">
      <div className="w-6/12 ml-4">
        <h1 className="text-4xl">Find World's Best Remote Jobs</h1>
        <span className="flex text-5xl">On 
          <Typewriter
            options={{
              strings: category,
              autoStart: true,
              loop: true,
            }}
          />
        </span>
        <motion.button 
          initial={{x:'-100vh'}} 
          animate={{x: 0, transition: {type: 'spring', stiffness: 150}}} 
          className="c-btn-get-started py-4 px-8 mt-8 rounded-full text-white"
        >
          Get Started
        </motion.button>
      </div>
      <div className="w-6/12">
        <img src="/heroBanner.webp" alt="banner" className="" />
      </div>
    </div>
  )
};

export default HeroSection;