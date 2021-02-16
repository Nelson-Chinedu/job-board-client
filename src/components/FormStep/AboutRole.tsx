import React, { FunctionComponent, useState } from 'react';
import { EditorState } from "draft-js";

import FormInput from '../Shared/Input';
import FormSelect from '../Shared/Select';
import { RichEditor } from '../Shared/RichEditor';

const AboutRole: FunctionComponent<{}> = () => {
  
 
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return (
    <div className="c-about-role shadow-md p-4 md:p-8 my-5 rounded-lg border-t-4 border-red-400">
      <form>
        <FormInput 
          type="text" 
          placeholder="Enter Job Title" 
          size="large" 
          label="Job Title"
        />
        <div className="flex justify-between">
          <div className="c-form-select">
            <FormSelect 
              defaultValue="Select One..."
              label="Role Focus"
              value="one"
              className="w-full"
            />
          </div>
          <div className="c-form-select">
            <FormSelect 
              defaultValue="Select One..."
              label="Position Type"
              value="one"
              className="w-full"
            />
          </div>
        </div>
        <div className="mt-4">
          <RichEditor
            editorLabel="Job Description"
            editorState={editorState} 
            onChange={setEditorState} 
          />
        </div>
        <div>
          <FormInput 
            type="url" 
            placeholder="" 
            size="large" 
            label="How to apply"
            radio={true}
            description="Email Address or link to 3rd party application page"
          />
        </div>
      </form>
    </div>
  )
};

export default AboutRole;
