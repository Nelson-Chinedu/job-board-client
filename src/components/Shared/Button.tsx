import { FunctionComponent, ReactNode } from "react";
import classnames from "classnames";

type defaultType = "button" | "submit";

type Props = {
  children: ReactNode;
  handleClick?: () => void;
  className: string;
  type: defaultType;
  disabled?: any;
  role?: any;
};

const Button: FunctionComponent<Props> = ({
  children,
  className,
  handleClick,
  type,
  disabled,
  role,
}) => {
  const mainClassNames = classnames("px-4 py-2 rounded focus:outline-none", {
    "bg-gray-500 text-white mr-2": disabled,
    [`${className}`]: !disabled,
  });
  return (
    <button
      role={role}
      className={`${mainClassNames}`}
      onClick={handleClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
