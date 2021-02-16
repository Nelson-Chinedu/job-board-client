import React, { FunctionComponent } from 'react';
import { Select } from 'antd';

const { Option } = Select;

type Props = {
  value: string;
  defaultValue: string;
  label: string;
  className?: string;
}

const FormSelect: FunctionComponent<Props> = ({label, value, defaultValue, className}) => {
  return (
    <div>
      <label htmlFor="" className="text-base font-semibold mb-4">{label}</label>
      <Select defaultValue={defaultValue} className={`${className}`}>
        <Option value={value}>{value}</Option>
      </Select>
    </div>
  )
};

export default FormSelect;