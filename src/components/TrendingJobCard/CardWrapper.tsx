import React, { FunctionComponent } from 'react';
import TrendingJobCard from '.';

type Props = {
  marginRight?: boolean;
  companyName: string;
  location: string;
  companyLogo: string;
  posted: string;
  position: string;
}
const CardWrapper: FunctionComponent<Props> = ({
  marginRight, 
  companyLogo, 
  companyName, 
  location,
  posted,
  position
}) => {
  return (
    <TrendingJobCard marginRight={marginRight} className="c-trending-card rounded-md">
      <p className="pt-2">{companyName}</p>
      <div className="flex justify-between">
        <div>
          <p className="pt-3">{position}</p>
          <p className="pt-2">{location}</p>
          <p className="pt-2">{posted}</p>
        </div>
        <div className="c-trending-card-img">
          <img src={companyLogo} alt="logo" />
        </div>
      </div>
    </TrendingJobCard>
  )
};

export default CardWrapper;
