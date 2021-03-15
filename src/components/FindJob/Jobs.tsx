import { FunctionComponent } from "react";
import { Link } from 'react-router-dom';

type Props = {
  companyName: string;
  jobTitle: string;
  jobRole: string;
  positionType: string;
  datePosted: string;
};

const Jobs: FunctionComponent<Props> = ({
  companyName,
  jobTitle,
  jobRole,
  positionType,
  datePosted
}) => {
  return (
    <div className="c-jobs px-4 py-2">
      <div className="flex justify-between items-center mb-4 mt-4">
        <div className="flex items-center">
          <div className="border border-black rounded-full mr-4">
            <img src="/logo192.png" alt="logo" width="50px" height="50px" />
          </div>
          <div>
            <h3 className="mb-1">{companyName}</h3>
            <p className="mb-1">{jobTitle}</p>
            <p className="mb-1">
              {jobRole} &bull; {positionType}
            </p>
          </div>
        </div>
        <div>
          <p>{datePosted}</p>
        </div>
          <Link to="/">
            <button className="c-btn-apply px-4 py-2 rounded hover:text-white">Apply</button>
          </Link>
      </div>
    </div>
  );
};

export default Jobs;
