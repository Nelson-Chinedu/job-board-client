import React, { FunctionComponent } from 'react';
import { motion } from 'framer-motion';

const PostJobCard: FunctionComponent<{}> = () => {
  const boxVariants = {
    hidden: {
      opacity: 0,
      y: 100
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
      }
    }
  }
  return (
    <motion.div variants={boxVariants} whileHover={{scale: 1.1, cursor: 'pointer'}} initial="hidden" animate="visible" className="c-post-job-card my-4 shadow-md rounded-lg p-8 text-center">
      <div>
        <h2 className="font-bold text-5xl"><sup className="text-2xl">$</sup>75</h2>
        <p>Basic</p>
      </div>
      <div>
        <p>
          Featured on homepage included in bi-weekly newsletter Tweet with 
          link to listing.
        </p>
      </div>
    </motion.div>
  )
};

export default PostJobCard;