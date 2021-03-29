import { FunctionComponent } from "react";

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
  datePosted,
}) => {
  return (
    <>
      <div className="c-jobs bg-gray-100 px-4 py-2 mb-4 tracking-wider">
        <div className="flex justify-between items-center mb-4 mt-4">
          <div className="flex items-center">
            <div className="border border-black rounded-full overflow-hidden hidden h-12 md:block md:mr-4">
              <img
                src="/companyLogoo.png"
                alt="logo"
                width="50px"
                height="50px"
              />
            </div>
            <div>
              <h3 className="mb-1 text-black">{companyName}</h3>
              <p className="mb-1 text-black font-semibold w-3/5 md:w-full">{jobTitle}</p>
              <p className="mb-1 text-black">
                {jobRole} &bull; {positionType}
              </p>
            </div>
          </div>
          <div>
            <p className="text-black">{datePosted}</p>
          </div>
          <button className="c-btn-apply px-4 py-2 rounded hover:text-white hidden md:block">
            Apply
          </button>
        </div>
      </div>
    </>
  );
};

export default Jobs;
