import React, { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import CardWrapper from '../TrendingJobCard/CardWrapper';


const TrendingJob: FunctionComponent<{}> = () => {
  return (
    <div className="c-trending my-14 mx-auto">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h3 className="text-4xl font-semibold">Most Trending</h3>
          <h3 className="text-4xl font-semibold">Remote Jobs</h3>
        </div>
        <div className="pr-12">
          <p className="font-medium">Explore More Jobs</p>
        </div>
      </div>
      <motion.div>
        <CardWrapper 
          companyName="Google" 
          companyLogo="/logo192.png" 
          location="Anywhere" 
          posted="2 hours ago" 
          position="Software Engineer" 
          marginRight={true}
        />
        <CardWrapper 
          companyName="Google" 
          companyLogo="/logo192.png" 
          location="Anywhere" 
          posted="2 hours ago" 
          position="Software Engineer"
          marginRight={true}
        />
        <CardWrapper 
          companyName="Google" 
          companyLogo="/logo192.png" 
          location="Anywhere" 
          posted="2 hours ago" 
          position="Software Engineer" 
        />
        <CardWrapper 
          companyName="Google" 
          companyLogo="/logo192.png" 
          location="Anywhere" 
          posted="2 hours ago" 
          position="Software Engineer" 
          marginRight={true}
        />
        <CardWrapper 
          companyName="Google" 
          companyLogo="/logo192.png" 
          location="Anywhere" 
          posted="2 hours ago" 
          position="Software Engineer" 
          marginRight={true}
        />
        <CardWrapper 
          companyName="Google" 
          companyLogo="/logo192.png" 
          location="Anywhere" 
          posted="2 hours ago" 
          position="Software Engineer" 
        />
      </motion.div>
    </div>
  )
};

export default TrendingJob;
