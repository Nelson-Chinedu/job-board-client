import { FunctionComponent, useState } from 'react';
import { Steps, message } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { loadStripe } from '@stripe/stripe-js';

import Button from '../Shared/Button';

import AboutRole from './AboutRole';
import AboutCompany from './AboutCompany';
import PreviewForm from '../PreviewForm';

import { FormContext } from '../Context/FormContext';

const stripePromise = loadStripe(process.env.REACT_APP_API_KEY as string)

type Props = {
  teir: {
    plan: string;
    price: number;
  };
}

const validationSchema = Yup.object().shape({
  title: Yup
    .string()
    .required('Job title is a required field.'),
  roleType: Yup
    .string()
    .required('Please select a focus area.'),
  positionType: Yup
    .string()
    .required('Please select a position area.'),
  applicationMode: Yup
    .string()
    .required('Please provide a way for candidates to apply.'),
  companyName: Yup
    .string()
    .required('Please enter a company name.'),
  companyWebsite: Yup
    .string()
    .url('Invalid url')
    .required('Please enter a company website.'),
  emailAddress: Yup
    .string()
    .email('Invalid email address.')
    .required('Please enter a company email.'),
  companyHeadquarter: Yup
    .string()
    .required('Please provide a location for your office headquarters.'),
  companyDescription: Yup
    .string()
    .required('Required')
});


const { Step } = Steps;

const steps = [
  {
    title: 'Step 1',
    description: 'Job Details',
  },
  {
    title: 'Step 2',
    description: 'Company Details',
  },
  {
    title: 'Step 3',
    description: 'Preview'
  },
  {
    title: 'Step 4',
    description: 'Confirm',
  },
];

const roleType = [
  {value: '', label: 'Select One...'},
  {value: 'Software Development', label: 'Software Development'},
  {value: 'Marketting & Communication', label: 'Marketting & Communication'},
  {value: 'Product Management', label: 'Product Management'},
  {value: 'Technical Support', label: 'Technical Support'},
  {value: 'Multimedia Production', label: 'Multimedia Production'}
];

const positionType = [
  {value: '', label: 'Select One...'},
  {value: 'Full-time', label: 'Full-time'},
  {value: 'Part-time', label: 'Part-time'},
  {value: 'Contract', label: 'Contract'}
];

const FormStep: FunctionComponent<Props> = ({ teir }) => {
  
  const [selectedRole, setSelectedRole] = useState(undefined);
  const [selectedPosition, setSelectedPosition] = useState(undefined);
  const [current, setCurrent] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  let { plan, price } = teir;
  let setLogo = ''; 

  switch(plan){
    case 'Basic':
      price = 7500
      break;
    case 'Advanced':
      price = 12500
      break;
    case 'Premium':
      price = 17500
      break;
  }

  const next = () => {
    setCurrent(current + 1);
  };

  const handlePayment = async () => {
    setLoading(true);
    const stripe = await stripePromise;
    const data = {
      price: price || 12500,
      plan: plan || 'Advanced'
    }
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/create-checkout-session`, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  });

    const session = await response.json();

    if (stripe){
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        setLoading(false);
        console.log('failed');
      }
    }
    setLoading(false);
  }

  const prev = () => {
    if (current === 1){
      setCurrent(current - 1);
      setSelectedPosition(undefined);
      setSelectedRole(undefined);
      resetForm();
    }else{
      setCurrent(current - 1);
      setSelectedPosition(undefined);
      setSelectedRole(undefined);
    }
  };

  const _handleSubmit = () => {
    console.log('clicked');
  }

  if (localStorage.getItem('companyLogo')) {
    const cLogo: string | null = localStorage.getItem('companyLogo');
    setLogo = cLogo!;
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      roleType: '',
      positionType: '',
      applicationMode: '',
      companyName: '',
      companyWebsite: '',
      emailAddress: '',
      companyHeadquarter: '',
      jobDescription: '',
      companyDescription: ''
    },
    onSubmit: _handleSubmit,
    validationSchema
  });

  const _handleRole = (selectedRole: any) => {
    setSelectedRole(selectedRole)
  }

  const _handlePosition = (selectedPosition: any) => {
    setSelectedPosition(selectedPosition);
  };

  const {
    values, 
    errors, 
    handleSubmit, 
    handleChange, 
    handleBlur, 
    resetForm,
    setFieldValue
  } = formik;

  return (
    <>
      <div className=" w-10/12 md:w-3/12 mx-auto ">
        <Steps current={current}>
          {steps.map(item => (
            <Step 
              key={item.title} 
              // title={item.title} 
              // description={item.description} 
            />
          ))}
        </Steps>
      </div>
      <div className="c-form-step w-1/2 mx-auto">
        <form onSubmit={handleSubmit}>
          <FormContext.Provider 
            value={{ 
              value: {...values}, 
              handleChange, 
              handleBlur, 
              errors, 
              setFieldValue,
              _handleRole, 
              selectedRole, 
              roleType, 
              positionType,
              selectedPosition,
               _handlePosition ,
               setLogo
            }}
          >
            {current === 0 && (
              <AboutRole />
            )}
            {current === 1 && (
              <AboutCompany />
            )}
            {current === 2 && (
              <PreviewForm />
            )}
          </FormContext.Provider>

          <div className="steps-action">
            { current === 0 && (
              <Button 
                type="button"
                disabled={
                  !values.title ||
                  !values.positionType ||
                  !values.roleType ||
                  !values.applicationMode 
                }
                handleClick={next} 
                className="c-next-step text-white mr-2"
              >
                Next Step
              </Button>
            )}
            { current === 1 && (
              <Button 
              type="button"
              disabled={
                !values.companyName ||
                !values.companyWebsite ||
                !values.emailAddress ||
                !values.companyHeadquarter
              }
              handleClick={next} 
              className="c-next-step text-white mr-2"
            >
              Preview
            </Button>
            )}
            { current === 2 && (
              <Button 
              role="link"
              type="button"
              disabled={
                !values.companyName ||
                !values.companyWebsite ||
                !values.emailAddress ||
                !values.companyHeadquarter
              }
              handleClick={handlePayment} 
              className="c-next-step text-white mr-2"
            >
              {!loading ? 'Proceed' : 'Loading...'}
            </Button>
            )}
            { current === steps.length - 1 && (
              <Button 
                type="button" 
                className="c-final-step px-4 py-2 text-white rounded mr-2 focus:outline-none" 
                handleClick={() => message.success('Processing complete!')}
              >
                Done
              </Button>
            )}
            { current > 0 && (
              <Button 
                type="button" 
                className="c-previous-step" 
                handleClick={prev}
              >
                Previous
              </Button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default FormStep;
