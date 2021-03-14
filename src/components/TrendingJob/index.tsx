import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import CardWrapper from '../TrendingJobCard/CardWrapper';


const TrendingJob: FunctionComponent<{}> = () => {
  return (
    <div className="c-trending my-14 mx-auto">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-2">
        <div>
          <h3 className="c-trending-job text-3xl md:text-4xl font-semibold mb-0">Most Trending</h3>
          <h3 className="c-trending-job text-3xl md:text-4xl font-semibold mb-0">Remote Jobs</h3>
        </div>
        <div className="underline py-4 pr-12 md:no-underline md:py-0">
          {/* <p className="font-medium mb-0">Explore More Jobs</p> */}
          <Link to="/" className="mb-0 underline">Explore More Jobs</Link>
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
