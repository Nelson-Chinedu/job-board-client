import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import CategoryCard from "./index";

type Props = {
  headlineTop: string;
  headlineBottom: string;
  label: string;
  marginRight?: boolean;
  imagePath: string;
  urlPath: string;
};

const CardWrapper: FunctionComponent<Props> = ({
  headlineTop,
  headlineBottom,
  label,
  marginRight,
  imagePath,
  urlPath,
}) => {
  return (
    <Link to={`categories/${urlPath}`}>
      <CategoryCard
        marginRight={marginRight}
        className="c-category-card rounded-md"
      >
        <div className="flex justify-between items-end pt-2">
          <img src={imagePath} alt="progress" className="c-category-card-img" />
          <img src="/dot-hover.png" alt="dot" />
        </div>
        <div className="py-2">
          <h4 className="font-bold mb-0">{headlineTop}</h4>
          <h4 className="font-bold">{headlineBottom}</h4>
        </div>
        <p>{label}</p>
      </CategoryCard>
    </Link>
  );
};

export default CardWrapper;
