import { FunctionComponent, useContext } from 'react';
import ReactQuill from 'react-quill';

import FormInput from '../Shared/Input';
import FormSelect from '../Shared/Select';
import { FormContext } from '../Context/FormContext';
import { TContext } from '../types/Context';

const AboutRole: FunctionComponent<{}> = () => {
  const { 
    value, 
    handleChange, 
    handleBlur, 
    errors,
    _handleRole, 
    setFieldValue, 
    roleType, 
    positionType,
    _handlePosition 
  } = useContext<TContext>(FormContext)

  return (
    <div 
      className={`
        c-about-role shadow-md p-4 md:p-8 my-5 rounded-lg border-t-4 border-red-400
      `}
    >
      <FormInput 
        type="text" 
        placeholder="Enter Job Title" 
        size="large" 
        label="Job Title"
        name="title"
        value={value!.title}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors!.title}
      />
      <div className="flex flex-col md:flex-row justify-between">
        <div className="c-form-select">
          <FormSelect
            label="Role Focus"
            value={value!.selectedRole}
            className="w-full"
            name="roleType"
            options={roleType}
            placeholder="Select One..."
            onchange={(selectedRole: any) => {
              _handleRole(selectedRole)
              handleChange("roleType")(selectedRole.value)
            }}
            onblur={handleBlur}
            error={errors!.roleType}
          />
        </div>
        <div className="c-form-select">
          <FormSelect
            label="Position Type"
            value={value!.selectedPosition}
            className="w-full"
            name="positionType"
            options={positionType}
            placeholder="Select One..."
            onchange={(selectedPosition: any) => {
              _handlePosition(selectedPosition)
              handleChange("positionType")(selectedPosition.value);
            }}
            onblur={handleBlur}
            error={errors!.positionType}
          />
        </div> 
      </div>
      <div className="mt-2">
        <p className="text-base font-semibold mb-1">Job Description</p>
        <ReactQuill 
          value={value!.jobDescription} 
          placeholder="Write Here..."
          onChange={(e) => setFieldValue('jobDescription', e)}
        />
      </div> 
      <div>
        <FormInput 
          type="url"
          name="applicationMode"
          value={value!.applicationMode}
          onChange={handleChange}
          onBlur={handleBlur}
          size="large" 
          label="How to apply"
          radio={true}
          error={errors!.applicationMode}
          description="Email Address or link to 3rd party application page"
        />
      </div>
    </div>
  )
};

export default AboutRole;
