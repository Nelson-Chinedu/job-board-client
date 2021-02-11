import React, { FunctionComponent, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import CardWrapper from '../CategoryCard/CardWrapper';

const Category: FunctionComponent<{}> = () => {
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
    <div className="c-category">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-4">
        <div>
          <h3 className="text-3xl md:text-4xl font-semibold">Remote Jobs</h3>
          <h3 className="text-3xl md:text-4xl font-semibold">By Category</h3>
        </div>
        <div className="py-4 underline md:no-underline md:py-0 md:pr-12">
          <p className="font-medium">Explore Category</p>
        </div>
      </div>
      <motion.div variants={boxVariants} initial="hidden" animate={controls} ref={ref}>
        <CardWrapper marginRight={true} headlineTop="Business" headlineBottom="Development" label="649 Jobs Vacancy" imagePath="/progress.svg" />
        <CardWrapper marginRight={true} headlineTop="Customer" headlineBottom="Support" label="345 Jobs Vacancy" imagePath="/support.svg" />
        <CardWrapper marginRight={true} headlineTop="Marketting &" headlineBottom="Communication" label="296 Jobs Vacancy" imagePath="/promotion.svg"/>
        <CardWrapper headlineTop="Product" headlineBottom="Management" label="458 Jobs Vacancy" imagePath="/management.svg"/>
        <CardWrapper marginRight={true} headlineTop="Multimedia" headlineBottom="Production" label="356 Jobs Vacancy" imagePath="/video-camera.svg"/>
        <CardWrapper marginRight={true} headlineTop="Design &" headlineBottom="Development" label="478 Jobs Vacancy" imagePath="/art-design.svg"/>
        <CardWrapper marginRight={true} headlineTop="Technical" headlineBottom="Support" label="427 Jobs Vacancy" imagePath="/technical-support.svg"/>
        <CardWrapper headlineTop="Human" headlineBottom="Resources" label="354 Jobs Vacancy" imagePath="/dartboard.svg"/>
      </motion.div>
    </div>
  )
};

export default Category;