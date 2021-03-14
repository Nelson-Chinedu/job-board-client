import { FunctionComponent } from 'react';
import Button from '../Shared/Button';

const Subscription: FunctionComponent<{}> = () => {

  const _handleSubscription = () => {
    console.log('subscribed');
  };

  return (
    <div className="c-subscribe text-center rounded-lg py-6 md:py-8 mx-auto my-8">
      <h3 className="c-subscribe-caption text-2xl md:text-3xl font-extralight mb-0 text-white">Subscribe To Our Newsletter</h3>
      <p className="c-subscribe-text text-white py-2">New updates, notifications, job alerts for job seekers & employers</p>
      <div className="w-3/4 my-2 md:w-2/5 mx-auto md:my-4">
        <input placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-md focus:outline-none" />
        <div>
          <Button
            handleClick={_handleSubscription} 
            type="button"
            className="c-btn-subscribe px-6 py-2 mt-4 text-white rounded"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  )
};

export default Subscription;
