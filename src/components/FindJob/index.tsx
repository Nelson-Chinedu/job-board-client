import { FunctionComponent } from "react";
import { SearchOutlined } from "@ant-design/icons";

import FormSelect from "../Shared/Select";

import Jobs from "./Jobs";

import { positionType, roleType, location, companies } from "../Constant";

const FindJob: FunctionComponent<{}> = () => {
  return (
    <div className="mt-32">
      <div className="border-b border-gray-300 text-center pb-8">
        <h2 className="c-findjob-top-caption font-bold mb-2 text-4xl md:text-6xl">
          Advanced Search
        </h2>
        <p className="text-lg font-light c-findjob-top-title">
          Find your next career at one of the best remote companies in the world
        </p>
        <div className="w-11/12 shadow-sm border border-gray-300 p-4 mb-2 md:p-6 md:w-9/12 mx-auto">
          <form className="flex items-center">
            <SearchOutlined style={{ fontSize: 25 }} className="mr-4" />
            <input
              type="text"
              className="w-full outline-none border-0 overflow-ellipsis"
              placeholder="Enter job title or keyword and use the filters below to get best results "
            />
            <button className="c-btn-search py-3 px-8 text-white hover:shadow-lg rounded">
              Search
            </button>
          </form>
        </div>
        <div className="w-11/12 md:w-9/12 mx-auto flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-52 text-left">
            <FormSelect
              label=""
              placeholder="Job Categories"
              options={roleType}
            />
          </div>
          <div className="w-full md:w-52 text-left">
            <FormSelect label="" placeholder="Locations" options={location} />
          </div>
          <div className="w-full md:w-52 text-left">
            <FormSelect label="" placeholder="Companies" options={companies} />
          </div>
          <div className="w-full md:w-52 text-left">
            <FormSelect
              label=""
              placeholder="Job Types"
              options={positionType}
            />
          </div>
          <button className="focus:outline-none">Clear</button>
        </div>
      </div>
      <div className="w-11/12 mx-auto md:w-9/12">
        <div className="my-8">
          <h2 className="font-bold text-2xl">Programming Jobs</h2>
          <Jobs
            jobTitle="Senior Frontend Engineer"
            jobRole="Software Development"
            companyName="Healthify"
            positionType="Full-time"
            datePosted="Mar 15"
          />
          <Jobs
            jobTitle="Senior Frontend Engineer"
            jobRole="Software Development"
            companyName="Iterative"
            positionType="Contract"
            datePosted="Mar 15"
          />
          <Jobs
            jobTitle="Senior Android Engineer"
            jobRole="Software Development"
            companyName="Toggl"
            positionType="Full-time"
            datePosted="Mar 15"
          />
          <Jobs
            jobTitle="Senior Frontend Engineer"
            jobRole="Software Development"
            companyName="Zagomail"
            positionType="Full-time"
            datePosted="Mar 15"
          />
          <Jobs
            jobTitle="Backend Engineer - PHP (Laravel)"
            jobRole="Software Development"
            companyName="Upkey"
            positionType="Part-time"
            datePosted="Mar 15"
          />
        </div>
        <div className="my-8">
          <h2 className="font-bold text-2xl">Design Jobs</h2>
          <Jobs
            jobTitle="Senior Product Designer"
            jobRole="Design"
            companyName="ShakaCode"
            positionType="Full-time"
            datePosted="Mar 15"
          />
          <Jobs
            jobTitle="User Experience Engineer"
            jobRole="Design"
            companyName="Current Mobile"
            positionType="Contract"
            datePosted="Mar 15"
          />
          <Jobs
            jobTitle="Product Designer (Mobile)"
            jobRole="Design"
            companyName="Alpha Beta"
            positionType="Full-time"
            datePosted="Mar 15"
          />
          <Jobs
            jobTitle="Senior Product Designer"
            jobRole="Design"
            companyName="Superside"
            positionType="Full-time"
            datePosted="Mar 15"
          />
          <Jobs
            jobTitle="Lead Product Designer"
            jobRole="Design"
            companyName="Tech Labs"
            positionType="Part-time"
            datePosted="Mar 15"
          />
        </div>
      </div>
    </div>
  );
};

export default FindJob;
