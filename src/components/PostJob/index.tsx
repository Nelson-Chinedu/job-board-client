import { FunctionComponent, useState } from 'react';
import FormStep from '../FormStep';
import PostJobCard from '../PostJobCard';

const PostJob: FunctionComponent<{}> = () => {
  const [teir, setTeir] = useState({plan: '', price: 0});

  return (
    <div className="my-28">
      <h2 className="text-center text-3xl font-bold">Select Your Tier</h2>
      <div className="c-post-job-card-wrapper flex flex-col md:flex-row my-8 mx-auto justify-between">
        <PostJobCard 
          price={75} 
          plan="Basic" 
          listings={
            [
              "Featured on homepage", 
              "Included in bi-weekly newsletter", 
              "Tweet with link to listing"
            ]
          }  
          onGetTeir={teir => setTeir(teir)}
        />
        <PostJobCard 
          price={125} 
          plan="Advanced" 
          listings={
            [
              "All basic plus ++", 
              "personalized newsletter", 
              "2x Twitter post"
            ]
          }
          onGetTeir={teir => setTeir(teir)}
        />
        <PostJobCard 
          price={175} 
          plan="Premium" 
          listings={
            [
              "All basic & advanced plus ++", 
              "'Why we hire' feature on homepage "
            ]
          } 
          onGetTeir={teir => setTeir(teir)}
        />
      </div>
      <div>
        <FormStep teir={teir} />
      </div>
    </div>
  )
};

export default PostJob;
