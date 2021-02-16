import React, { FunctionComponent, useState } from 'react';
import { Input, Radio } from 'antd';

type defaultType = 'text' | 'email' | 'url';
type sizeType = 'small' | 'middle' | 'large';

type Props = {
  placeholder: string;
  type: defaultType;
  size: sizeType;
  label: string;
  description?: string;
  className?: string;
  radio?: boolean;
}

const FormInput: FunctionComponent<Props> = ({
  radio, 
  placeholder, 
  type, 
  size, 
  label, 
  description, 
  className
}) => {
  const [value, setValue] = useState<string>('url');
  const [inputPlaceholder, setInputPlaceholder] = useState<string>('http://');

  const onChange = (e: any) => {
    setValue(e.target.value);
    if(e.target.value === 'url'){
      setValue('url');
      setInputPlaceholder('http://')
    } else {
      setValue('email');
      setInputPlaceholder('mailto:')
    }
  };
  if (radio){
    return(
      <div className="my-4">
        <label htmlFor={label} className="text-base font-semibold">{label}</label>
        <p className="text-xs mb-0">{description}</p>
        <div className="mt-2 mb-3">
          <Radio.Group onChange={onChange} value={value}>
            <Radio value="url">Url</Radio>
            <Radio value="email">Email</Radio>
          </Radio.Group>
        </div>
        <Input 
          type={value}
          size={size}
          placeholder={inputPlaceholder}
          id={label}
          className={`c-form-input`}
          required
        />
      </div>
    )
  }
  return (
    <div className={`my-4 ${className}`}>
      <label htmlFor={label} className="text-base font-semibold">{label}</label>
      {description && (
        <p className="text-xs mb-0">{description}</p>
      )}
      <div className="mt-2">
        <Input 
          type={type}
          size={size}
          placeholder={placeholder}
          id={label}
          className={`c-form-input`}
        />
      </div>
    </div>
  );
};

export default FormInput;
