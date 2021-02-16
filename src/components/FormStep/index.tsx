import React, { FunctionComponent, useState } from 'react';
import { Steps, message } from 'antd';

import AboutRole from './AboutRole';
import AboutCompany from './AboutCompany';
import Button from '../Shared/Button';

const { Step } = Steps;

const steps = [
  {
    title: 'Step 1',
    description: 'Post',
  },
  {
    title: 'Step 2',
    description: 'Preview',
  },
  {
    title: 'Step 3',
    description: 'Confirm',
  },
];

const FormStep: FunctionComponent<{}> = () => {
  const [current, setCurrent] = useState<number>(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <div className=" w-10/12 md:w-2/6 mx-auto ">
        <Steps current={current}>
          {steps.map(item => (
            <Step 
              key={item.title} 
              title={item.title} 
              description={item.description} 
            />
          ))}
        </Steps>
      </div>
      <div className="c-form-step w-1/2 mx-auto">
        {current === 0 && (
          <>
            <AboutRole />
            <AboutCompany />
          </>
        )}
        {current === 1 && (
          <div>Preview form here</div>
        )}
        {current === 2 && (
          <div>Payment form here</div>
        )}
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button 
              type="button" 
              handleClick={next} 
              className="c-next-step px-4 py-2 text-white rounded mr-2 focus:outline-none"
            >
              {current === 0 ? 'Next Step': 'Proceed To Payment'}
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button 
              type="button" 
              className="c-final-step px-4 py-2 text-white rounded mr-2 focus:outline-none" 
              handleClick={() => message.success('Processing complete!')}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button 
              type="button" 
              className="c-previous-step px-4 py-2 rounded focus:outline-none" 
              handleClick={prev}
            >
              Previous
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default FormStep;
