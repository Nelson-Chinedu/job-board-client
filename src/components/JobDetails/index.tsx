import { FunctionComponent, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { ArrowLeftOutlined } from "@ant-design/icons";

interface IProps {
  jobTitle: string;
  position: string;
  role: string;
  companyDescription: string;
  jobDescription: string;
  companyName: string;
  companyHeadquarter: string;
  companyWebsite: string;
}

const JobDetails: FunctionComponent<{}> = () => {
  const [job, setJob] = useState<IProps>();

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const query = useQuery().get("q");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fectchedData = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/job?q=${query}`
      );
      setJob(data);
    };
    fectchedData();
  }, [query]);

  if (!job) {
    return (
      <div className="w-48 mx-auto my-48">
        <img src="/loading.svg" alt="loader" />
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto my-28">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-3/5">
          <Link to="/remote-jobs/search" className="flex items-baseline mb-4">
            <ArrowLeftOutlined /> <span className="ml-2">Back to all jobs</span>
          </Link>
          <p className="c-jobDetails-datePosted tracking-wider">
            POSTED{" "}
            {new Date().toLocaleDateString("en-us", {
              month: "short",
              day: "numeric",
            })}
          </p>
          <h3 className="c-jobDetails-title text-3xl font-semibold">
            {job.jobTitle}
          </h3>
          <span className="tracking-wider border border-black bg-purple-200 px-2 py-1 mr-2">
            {job.position}
          </span>
          <span className="tracking-wider border border-black bg-purple-200 px-2 py-1">
            {job.role}
          </span>
          <div className="mt-4">
            <div
              className="c-jobDetails-description"
              dangerouslySetInnerHTML={{ __html: job.companyDescription }}
            ></div>
            <div
              className="c-jobDetails-description mb-6"
              dangerouslySetInnerHTML={{ __html: job.jobDescription }}
            ></div>
            <a
              href={job.companyWebsite}
              target="_blank"
              rel="noreferrer"
              className="c-post-job text-white hover:text-white hover:shadow-lg px-4 py-2 rounded"
            >
              Apply for this position
            </a>
          </div>
        </div>
        <div className="w-full hidden md:block md:w-1/4 text-center bg-gray-50 shadow rounded py-4">
          <div className="mb-6">
            <img
              src="/companyLogoo.png"
              alt="company logo"
              className="w-2/4 mx-auto"
            />
            <h3>{job.companyName}</h3>
            <h3>{job.companyHeadquarter}</h3>
          </div>
          <a
            href={job.companyWebsite}
            target="_blank"
            rel="noreferrer"
            className="c-post-job text-white hover:text-white hover:shadow-lg px-4 py-2 rounded"
          >
            Apply for this position
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
