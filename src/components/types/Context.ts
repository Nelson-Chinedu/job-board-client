import { TInput as Input } from './Form';

export type TContext = {
  handleChange?: any;
  handleBlur?: () => void;
  _handleRole?: any;
  errors?: Input | undefined;
  value?: Input | undefined;
  setFieldValue?: any;
  roleType?: string;
  positionType?: number;
  _handlePosition?: any;
}