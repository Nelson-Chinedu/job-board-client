import React, { FunctionComponent, useState } from 'react';
import { EditorState } from "draft-js";

import FormInput from '../Shared/Input';
import { RichEditor } from '../Shared/RichEditor';
import ImageUpload from '../ImageUpload';


const AboutCompany: FunctionComponent<{}> = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  
  return (
    <div className="c-about-company-wrapper p-4 rounded-lg shadow-md md:p-8 my-8">
      <form>
        <div className="flex flex-col md:flex-row w-full justify-between">
          <FormInput 
            label="Company Name"
            placeholder="Enter Company Name"
            size="large"
            type="text"
            className="c-form-input-wrapper"
          />
          <FormInput 
            label="Company Website"
            placeholder="Enter Company Website"
            size="large"
            type="text"
            className="c-form-input-wrapper"
          />
        </div>
        <div className="flex flex-col md:flex-row items-baseline justify-between">
          <FormInput 
            label="Email"
            placeholder="Enter Email Address"
            size="large"
            type="text"
            className="c-form-input-wrapper"
          />
          <div className="c-form-input-wrapper">
              <p className="mb-2 text-base font-semibold">Logo</p>
            <div className="flex">
              <ImageUpload />
              <p className="text-xs">
                Please provide .png format of your company's logo to be displayed 
                with your job opening listing
              </p>
            </div>
          </div>
        </div>
        <RichEditor 
          editorLabel="Company Description"
          editorState={editorState} 
          onChange={setEditorState}
        />
        <FormInput 
          label="Company Headquarter"
          placeholder="Enter Company Headquarter"
          size="large"
          type="text"
          description="These are remote job listings, but where is your main office?"
        />
      </form>
    </div>
  )
};

export default AboutCompany;
