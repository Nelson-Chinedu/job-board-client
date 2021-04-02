import { FunctionComponent } from "react";
import TrendingJobCard from "./index";

type Props = {
  companyName: string;
  location: string;
  companyLogo: string;
  posted: string;
  position: string;
};

const CardWrapper: FunctionComponent<Props> = ({
  companyLogo,
  companyName,
  location,
  posted,
  position,
}) => {
  return (
    <TrendingJobCard className="c-trending-card rounded-md">
      <p className="pt-2 mb-0">{companyName}</p>
      <div className="flex justify-between">
        <div>
          <p className="pt-3 mb-0 text-black">{position}</p>
          <p className="pt-2 mb-0 text-black">{location}</p>
          <p className="pt-2 mb-0 text-black">{posted}</p>
        </div>
        <div className="c-trending-card-img">
          <img src={companyLogo} alt="logo" />
        </div>
      </div>
    </TrendingJobCard>
  );
};

export default CardWrapper;
