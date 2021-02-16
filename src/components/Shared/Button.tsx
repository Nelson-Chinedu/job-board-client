import { FunctionComponent, ReactNode } from 'react';

type defaultType = 'button' | 'submit';

type Props = {
  children: ReactNode;
  handleClick: () => void;
  className: string;
  type: defaultType; 
}

const Button: FunctionComponent<Props> = ({
  children, 
  className,
  handleClick,
  type
}) => {
  return (
    <button 
      className={className} 
      onClick={handleClick}
      type={type}
    >
      {children}
    </button>
  )
};

export default Button;
