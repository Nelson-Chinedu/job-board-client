import { FunctionComponent } from 'react';
import {motion} from 'framer-motion';

const HeroBottom: FunctionComponent<{}> = () => {
  return (
    <div className="hidden md:block">
      <div className="bg-white shadow-lg p-6 w-9/12 mx-auto">
        <h2 className="text-center text-2xl font-bold">Hiring? Candidates are looking for you.</h2>
        <div className="c-heroBottom flex justify-between items-baseline">
          <div className="text-center">
            <p className="c-heroBottom-subscribers text-2xl font-bold">14000+</p>
            <p>Newsletter Subscribers</p>
          </div>
          <div className="text-center">
            <p className="c-heroBottom-applicants text-2xl font-bold">60</p>
            <p>Average Job Applicants</p>
          </div>
          <div className="text-center">
            <p className="c-heroBottom-hire text-2xl font-bold">20</p>
            <p>Average Days to Hire</p>
          </div>
          <div className="text-center">
            <motion.button
              initial={{translateY: 0}}
              whileHover={{translateY: -5}}
              className="c-btn-get-started py-3 px-6 mt-8 rounded-full text-white"
            >
              Post a Job
            </motion.button>
          </div>
        </div>
      </div>
      <img src="/dot-left.png" className="dot-left" alt="dot" />
      <img src="/dot-right.png" className="dot-right" alt="dot" />
    </div>
  )
};

export default HeroBottom;
