import { FunctionComponent, ReactNode } from "react";
import classnames from "classnames";

type Props = {
  className: string;
  marginRight?: boolean;
  children: ReactNode;
};

const TrendingJobCard: FunctionComponent<Props> = ({
  className,
  marginRight,
  children,
}) => {
  const mainClassname = classnames({
    "mr-8": marginRight,
  });
  return (
    <div
      className={`c-trending-job-card 
        ${mainClassname} 
        ${className} 
        my-3 bg-white shadow px-4 pb-6 md:my-2`}
    >
      {children}
    </div>
  );
};

export default TrendingJobCard;
