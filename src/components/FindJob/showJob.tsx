import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import Jobs from "./Jobs";

type Props = {
  jobs: any;
  category: string;
  filter: string;
};

const ShowJob: FunctionComponent<Props> = ({ jobs, category, filter }) => {
  return (
    <div className="my-8">
      <h2 className="c-showJob-category font-bold text-2xl">{category}</h2>
      {jobs
        .filter((job: any) => job.role === `${filter}`)
        .map((data: any) => {
          const urlParam = data.jobTitle.split(' ').join('-');
          return (
            <Link to={{pathname: `${data.companyName}-${urlParam}`, search: `?${data._id}`}}>
              <div key={data._id}>
                <Jobs
                  jobTitle={data.jobTitle}
                  jobRole={data.role}
                  companyName={data.companyName}
                  positionType={data.position}
                  datePosted={new Date().toLocaleDateString("en-us", {
                    month: "short",
                    day: "numeric",
                  })}
                />
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default ShowJob;
