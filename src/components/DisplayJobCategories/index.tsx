import { FunctionComponent, useEffect } from "react";
import { useParams } from "react-router-dom";
import Jobs from "../FindJob/Jobs";

const DisplayJobCategories: FunctionComponent<{}> = () => {
  let { url } = useParams<{ url: string }>();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="c-categoryHeader text-center py-32">
        <h2 className="c-categoryHeader-caption font-bold text-4xl md:text-6xl">
          {url} Jobs
        </h2>
      </div>
      <div className="w-11/12 mx-auto my-8 md:w-9/12">
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
          companyName="Healthify"
          positionType="Full-time"
          datePosted="Mar 15"
        />
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
          companyName="Healthify"
          positionType="Full-time"
          datePosted="Mar 15"
        />
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
          companyName="Healthify"
          positionType="Full-time"
          datePosted="Mar 15"
        />
      </div>
    </>
  );
};

export default DisplayJobCategories;
