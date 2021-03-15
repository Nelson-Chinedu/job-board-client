import { useContext } from "react";
import ReactHtmlParser from "react-html-parser";
import { FormContext } from "../Context/FormContext";

type ContextProp = {
  value?: any;
  setLogo?: any;
};

const PreviewForm = () => {
  const { value, setLogo }: ContextProp = useContext(FormContext);
  return (
    <div className="flex flex-col justify-between my-5 md:flex-row">
      <div className="w-3/4">
        <div>
          <h2 className="font-bold text-3xl capitalize">{value.title}</h2>
          <p className="text-base font-normal">
            <span>{value.roleType}</span>
            &bull;
            <span>{value.positionType}</span>
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-2xl">Job Description</h2>
          <div className="font-normal text-base">
            {ReactHtmlParser(value.jobDescription)}
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-2xl">{`About ${value.companyName}`}</h2>
          <div className="font-normal text-base">
            {ReactHtmlParser(value.companyDescription)}
          </div>
        </div>
      </div>
      <div className="w-1/3 md:w-1/4">
        <div className="bg-gray-200 p-6">
          <div className="bg-white rounded-md">
            <img src={setLogo} alt="company logo" className="w-14 h-14" />
          </div>
          <h3 className="font-semibold text-lg my-4">{value.companyName}</h3>
          <div className="mt-4">
            <a
              href={value.companyWebsite}
              target="_blank"
              rel="noreferrer"
              className="underline text-base font-normal uppercase"
            >
              Visit website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewForm;
