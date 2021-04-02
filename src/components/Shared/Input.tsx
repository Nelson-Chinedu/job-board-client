import { ChangeEvent, FocusEvent, FunctionComponent, useState } from "react";
import { Input, Radio } from "antd";

type defaultType = "text" | "email" | "url";
type sizeType = "small" | "middle" | "large";

type Props = {
  placeholder?: string;
  type: defaultType;
  size: sizeType;
  label?: string;
  description?: string;
  className?: string;
  inputClassName?: string;
  radio?: boolean;
  name?: string;
  value?: string;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  error?: string;
};

const FormInput: FunctionComponent<Props> = ({
  radio,
  placeholder,
  type,
  size,
  label,
  description,
  className,
  name,
  value,
  onChange,
  onBlur,
  error,
  inputClassName,
}) => {
  const [inputType, setInputType] = useState<string>("url");
  const [inputPlaceholder, setInputPlaceholder] = useState<string>("http://");

  const _onChange = (e: any) => {
    if (e.target.value === "url") {
      setInputType("url");
      setInputPlaceholder("http://");
    } else {
      setInputType("email");
      setInputPlaceholder("mailto:");
    }
  };
  if (radio) {
    return (
      <div className="my-4">
        <label htmlFor={label} className="text-base font-semibold">
          {label}
        </label>
        <p className="text-xs mb-0 text-gray-500">{description}</p>
        <div className="mt-1 mb-3">
          <Radio.Group onChange={_onChange} value={inputType}>
            <Radio value="url">Url</Radio>
            <Radio value="email">Email</Radio>
          </Radio.Group>
        </div>
        <Input
          type={inputType}
          size={size}
          placeholder={inputPlaceholder}
          id={label}
          className={inputClassName}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
        />
        <p className="text-red-400 text-xs">{error}</p>
      </div>
    );
  }
  return (
    <div className={`my-4 ${className}`}>
      <label htmlFor={label} className="text-base font-semibold">
        {label}
      </label>
      {description && <p className="text-xs mb-0">{description}</p>}
      <div className="mt-1">
        <Input
          type={type}
          size={size}
          placeholder={placeholder}
          id={label}
          className={`${className} w-full`}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
        />
        <p className="text-red-400 text-xs">{error}</p>
      </div>
    </div>
  );
};

export default FormInput;
