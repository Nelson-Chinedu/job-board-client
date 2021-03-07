import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';

type TeirProps = {
  plan: string;
  price: number;
}

type Props = {
  plan: string;
  price: number;
  listings: Array<string>;
  onGetTeir: (teir: TeirProps) => void;
};

const PostJobCard: FunctionComponent<Props> = ({ plan, price, listings, onGetTeir }) => {
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
    <motion.div 
      variants={boxVariants} 
      whileHover={{scale: 1.1, cursor: 'pointer'}} 
      initial="hidden" 
      animate="visible"
      className={`c-post-job-card my-4 shadow-md rounded-lg p-8 text-center`}
      onClick={() => onGetTeir({price, plan})}
    >
      <div className="text-center">
        <h2 className="font-bold text-5xl mb-0"><sup className="text-2xl">$</sup>{price}</h2>
        <p className="text-xl">{plan}</p>
      </div>
      <div>
        <ul>
          {listings.map((listing:string, index: number) => <li key={index}>{listing}</li>)}
        </ul>
      </div>
    </motion.div>
  )
};

export default PostJobCard;