import React, { FunctionComponent } from 'react';
import FormStep from '../FormStep';
import PostJobCard from '../PostJobCard';

const PostJob: FunctionComponent<{}> = () => {
  return (
    <div className="my-28">
      <h2 className="text-center text-3xl font-bold">Select Your Tier</h2>
      <div className="c-post-job-card-wrapper flex flex-col md:flex-row my-8 mx-auto justify-between">
        <PostJobCard />
        <PostJobCard />
        <PostJobCard />
      </div>
      <div>
        <FormStep />
      </div>
    </div>
  )
};

export default PostJob;
