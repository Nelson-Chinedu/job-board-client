import { FunctionComponent } from 'react';

const About: FunctionComponent<{}> = () => {
  return (
    <div className="c-about flex items-start mx-auto">
      <div className="w-1/2 pt-10">
        <h3 className="text-3xl font-semibold">
          The finder has been created to foster long-term
          business relations and network built on Trust and quality.
        </h3>
        <div className="c-about-hr w-1/2 my-8">
          <hr className="border-t-2 border-grey-400 border-dashed "/>
        </div>
        <div className="c-about-logos w-7/12">
          <img src="/google.webp" alt="google logo"/>
          <img src="/facebook.svg" alt="facebook logo"/>
          <img src="/twilio.svg" alt="twilio logo"/>
          <img src="/microsoft.svg" alt="microsoft logo"/>
          <img src="/slack.svg" alt="slack logo"/>
          <img src="/ibm.svg" alt="ibm logo"/>
        </div>
      </div>
      <div className="w-1/2">
        <img src="/aboutt.png" alt="" className="w-full" />
      </div>
    </div>
  )
};

export default About;
