import { FunctionComponent } from "react";
import Select from "react-select";

type Props = {
  value?: () => void;
  label: string;
  className?: string;
  name?: string;
  options?: any;
  placeholder?: string;
  onchange?: any;
  onblur?: any;
  error?: any;
};

const FormSelect: FunctionComponent<Props> = ({
  onblur,
  label,
  value,
  name,
  options,
  placeholder,
  onchange,
  error,
}) => {
  return (
    <div className="my-2 md:my-0">
      <label htmlFor="" className="text-base font-semibold">
        {label}
      </label>
      <Select
        options={options}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onchange}
        onBlur={onblur}
        className="mt-1"
      />
      <p className="text-red-400 text-xs">{error}</p>
    </div>
  );
};

export default FormSelect;
