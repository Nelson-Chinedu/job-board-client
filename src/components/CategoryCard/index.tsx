import { FunctionComponent, ReactNode } from "react";
import classnames from "classnames";

type Props = {
  children: ReactNode;
  marginRight?: boolean;
  className?: string;
};

const CategoryCard: FunctionComponent<Props> = ({
  children,
  marginRight,
  className,
}) => {
  const mainClassname = classnames({
    "mr-14": marginRight,
  });
  return (
    <div
      className={`
        c-card ${mainClassname} ${className} block bg-white shadow px-4 pb-6 md:inline-block my-4
      `}
    >
      {children}
    </div>
  );
};

export default CategoryCard;
