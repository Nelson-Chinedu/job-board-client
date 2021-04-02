import { FunctionComponent, useState, useEffect, ChangeEvent } from "react";
import { SearchOutlined } from "@ant-design/icons";
import axios, { AxiosResponse } from "axios";
import { Link } from "react-router-dom";

import Jobs from "./Jobs";
import ShowJob from "./showJob";

import FormInput from "../Shared/Input";
import Loading from "../Shared/Skeleton";

const FindJob: FunctionComponent<{}> = () => {
  const [jobs, setJobs] = useState<Array<object>>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [filteredJobs, setFilteredJobs] = useState<Array<object>>([]);

  useEffect(() => {
    const getJob = async () => {
      const fetchedData: AxiosResponse<Array<object>> = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/jobs`
      );
      setJobs(fetchedData.data);
      setLoading(false);
    };
    getJob();
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchTerm(e.target.value);
    setFilteredJobs([]);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (searchTerm.length === 0) {
      return;
    }
    const showJob = jobs.filter((job: any) => {
      if (searchTerm === "") {
        return job;
      } else if (
        job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.companyHeadquarter
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        job.role.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return job;
      }
      return null;
    });
    setFilteredJobs(showJob);
  };

  return (
    <div className="mt-32">
      <div className="border-b border-gray-300 text-center pb-8">
        <h2 className="c-findjob-top-caption font-bold mb-2 text-4xl md:text-6xl">
          Advanced Search
        </h2>
        <p className="text-lg font-light c-findjob-top-title mb-4">
          Find your next career at one of the best remote companies in the world
        </p>
        <div className="w-11/12 shadow-sm border border-gray-300 p-2 md:p-4 mb-2 md:p-6 md:w-9/12 mx-auto">
          <form className="flex items-baseline" onSubmit={handleSubmit}>
            <SearchOutlined style={{ fontSize: 25 }} className="mr-4" />
            <FormInput
              type="text"
              size="large"
              className="c-input-search w-full overflow-ellipsis"
              placeholder="Enter job search here..."
              onChange={handleChange}
            />
            <button className="c-btn-search py-2 px-8 text-white hover:shadow-lg rounded focus:outline-none">
              Search
            </button>
          </form>
        </div>
      </div>
      {loading && filteredJobs.length === 0 && (
        <div className="w-11/12 mx-auto md:w-9/12">
          <div className="my-8">
            <Loading size="large" width={1000} height={90} active={true} />
            <Loading size="large" width={1000} height={90} active={true} />
            <Loading size="large" width={1000} height={90} active={true} />
            <Loading size="large" width={1000} height={90} active={true} />
            <Loading size="large" width={1000} height={90} active={true} />
            <Loading size="large" width={1000} height={90} active={true} />
          </div>
        </div>
      )}
      <div className="my-8">
        {filteredJobs.length > 0 &&
          searchTerm.length !== 0 &&
          filteredJobs.map((job: any) => {
            const urlParam = job.jobTitle.split(" ").join("-");
            return (
              <div className="w-full mx-auto md:w-9/12" key={job._id}>
                <Link
                  to={{
                    pathname: `${job.companyName}-${urlParam}`,
                    search: `?q=${job._id}`,
                  }}
                  key={job._id}
                >
                  <Jobs
                    jobTitle={job.jobTitle}
                    jobRole={job.role}
                    companyName={job.companyName}
                    positionType={job.position}
                    datePosted={new Date().toLocaleDateString("en-us", {
                      month: "short",
                      day: "numeric",
                    })}
                  />
                </Link>
              </div>
            );
          })}
      </div>
      {jobs.length !== 0 &&
        (filteredJobs.length === 0 || searchTerm.length === 0) && (
          <div className="w-full mx-auto md:w-9/12">
            <div>
              <ShowJob
                jobs={jobs}
                category="Programming Jobs"
                filter="Software Development"
              />
            </div>
            <div>
              <ShowJob
                jobs={jobs}
                category="Sales and Marketing Jobs"
                filter="Sales and Marketing"
              />
            </div>
            <div>
              <ShowJob
                jobs={jobs}
                category="Product Management Jobs"
                filter="Product"
              />
            </div>
            <div>
              <ShowJob jobs={jobs} category="Design Jobs" filter="Design" />
            </div>
          </div>
        )}
    </div>
  );
};

export default FindJob;
