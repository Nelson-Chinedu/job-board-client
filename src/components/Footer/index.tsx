import { FunctionComponent } from 'react';

const Footer: FunctionComponent<{}> = () => {
  return (
    <div className="">
      <div className="flex items-start justify-around my-10">
        <div>
          <img src="/logo.png" alt="logo" className="w-1/4"/>
          <p className="w-3/5">An ultimate solution for remote jobs</p>
        </div>
        <div>
          <h4 className="font-bold">Employers</h4>
          <div className="mt-5">
            <p className="pb-3">Overview</p>
            <p className="pb-3">Pricing</p>
            <p>Post a job</p>
          </div>
        </div>
        <div>
          <h4 className="font-bold">About</h4>
          <div className="mt-5">
            <p className="pb-3">Success stories</p>
            <p className="pb-3">Overview</p>
            <p className="pb-3">Team</p>
            <p>Press</p>
          </div>
        </div>
        <div>
          <h4 className="font-bold">General</h4>
          <div className="mt-5">
            <p className="pb-3">News</p>
            <p className="pb-3">FAQ's</p>
            <p className="pb-3">Contact us</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
      <div className="text-center my-6">
        <p>&copy; All rights reserved.</p>
      </div>
    </div>
  )
};

export default Footer;
