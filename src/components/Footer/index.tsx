import { FunctionComponent } from 'react';

const Footer: FunctionComponent<{}> = () => {
  return (
    <div className="">
      <div className="flex flex-col mx-4 md:flex-row md:items-start md:justify-around md:mx-0 my-10">
        <div className="mb-6">
          <img src="/logo.png" alt="logo" className="w-1/4"/>
          <p className="w-3/5">An ultimate solution for remote jobs</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h4 className="font-bold">Employers</h4>
          <div className="mt-3 md:mt-5">
            <p className="pb-1">Overview</p>
            <p className="pb-1">Pricing</p>
            <p>Post a job</p>
          </div>
        </div>
        <div className="mb-4 md:mb-0">
          <h4 className="font-bold">About</h4>
          <div className="mt-3 md:mt-5">
            <p className="pb-1">Success stories</p>
            <p className="pb-1">Overview</p>
            <p className="pb-1">Team</p>
            <p>Press</p>
          </div>
        </div>
        <div>
          <h4 className="font-bold">General</h4>
          <div className="mt-3 md:mt-5">
            <p className="pb-1">News</p>
            <p className="pb-1">FAQ's</p>
            <p className="pb-1">Contact us</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
      <div className="text-center my-6">
        <p className="pb-8">&copy; All Rights Reserved. - Made with &hearts;</p>
      </div>
    </div>
  )
};

export default Footer;
