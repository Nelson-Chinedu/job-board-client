import { FunctionComponent, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";

import Loading from "../Shared/Skeleton";
import CardWrapper from "../TrendingJobCard/CardWrapper";

const TrendingJob: FunctionComponent<{}> = () => {
  const [job, setJob] = useState([]);

  useEffect(() => {
    const fetchedData = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/jobs/q?limit=6`
      );
      setJob(data);
    };
    fetchedData();
  }, []);

  return (
    <div className="c-trending my-14 mx-auto">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-2">
        <div>
          <h3 className="c-trending-job text-3xl md:text-4xl font-semibold mb-0">
            Most Trending
          </h3>
          <h3 className="c-trending-job text-3xl md:text-4xl font-semibold mb-0">
            Remote Jobs
          </h3>
        </div>
        <div className="underline py-4 md:no-underline md:py-0">
          <Link to="/remote-jobs/search" className="mb-0 underline">
            Explore More Jobs
          </Link>
        </div>
      </div>
      <motion.div className="c-trending-job-container">
        {job.length < 1 ? (
          <div className=" loading grid grid-cols-1 md:grid-cols-3 md:gap-7">
            <Loading size="large" width={600} height={160} active={true} />
            <Loading size="large" width={600} height={160} active={true} />
            <Loading size="large" width={600} height={160} active={true} />
            <Loading size="large" width={600} height={160} active={true} />
            <Loading size="large" width={600} height={160} active={true} />
            <Loading size="large" width={600} height={160} active={true} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-7">
            {job.map((job: any) => {
              const urlParam = job.jobTitle.split(" ").join("-");
              return (
                <Link
                  to={{
                    pathname: `remote-jobs/${job.companyName}-${urlParam}`,
                    search: `?q=${job._id}`,
                  }}
                  key={job._id}
                >
                  <CardWrapper
                    companyName={job.companyName}
                    companyLogo="/companyLogoo.png"
                    location={job.companyHeadquarter}
                    posted={new Date().toLocaleDateString("en-us", {
                      month: "short",
                      day: "numeric",
                    })}
                    position={job.jobTitle}
                  />
                </Link>
              );
            })}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default TrendingJob;
