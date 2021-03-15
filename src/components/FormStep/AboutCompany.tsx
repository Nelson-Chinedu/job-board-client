import { FunctionComponent, useContext } from "react";
import ReactQuill from "react-quill";

import FormInput from "../Shared/Input";
import ImageUpload from "../ImageUpload";
import { FormContext } from "../Context/FormContext";
import { TContext } from "../types/Context";

const AboutCompany: FunctionComponent<{}> = () => {
  const {
    value,
    handleChange,
    handleBlur,
    errors,
    setFieldValue,
  }: TContext = useContext(FormContext);

  return (
    <div className="c-about-company-wrapper p-4 rounded-lg shadow-md md:p-8 my-8">
      <div className="flex flex-col md:flex-row w-full justify-between">
        <FormInput
          label="Company Name"
          placeholder="Enter Company Name"
          name="companyName"
          value={value!.companyName}
          onChange={handleChange}
          onBlur={handleBlur}
          size="large"
          type="text"
          className="c-form-input-wrapper"
          error={errors!.companyName}
        />
        <FormInput
          label="Company Website"
          placeholder="http://"
          name="companyWebsite"
          value={value!.companyWebsite}
          onChange={handleChange}
          onBlur={handleBlur}
          size="large"
          type="text"
          className="c-form-input-wrapper"
          error={errors!.companyWebsite}
        />
      </div>
      <div className="flex flex-col md:flex-row items-baseline justify-between">
        <FormInput
          label="Email"
          placeholder="Enter Email Address"
          name="emailAddress"
          value={value!.emailAddress}
          onChange={handleChange}
          onBlur={handleBlur}
          size="large"
          type="text"
          className="c-form-input-wrapper"
          error={errors!.emailAddress}
        />
        <div className="c-form-input-wrapper">
          <p className="mb-1 text-base font-semibold">Logo</p>
          <div className="flex">
            <ImageUpload />
            <p className="text-xs">
              Please provide .png format of your company's logo to be displayed
              with your job opening listing
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-base font-semibold mb-1">Company Description</p>
        <ReactQuill
          value={value!.companyDescription}
          placeholder="Write Here..."
          onChange={(e: string) => setFieldValue("companyDescription", e)}
        />
      </div>
      <FormInput
        label="Company Headquarter"
        placeholder="Enter Company Headquarter"
        name="companyHeadquarter"
        value={value!.companyHeadquarter}
        onChange={handleChange}
        onBlur={handleBlur}
        size="large"
        type="text"
        description="These are remote job listings, but where is your main office?"
        error={errors!.companyHeadquarter}
      />
    </div>
  );
};

export default AboutCompany;
