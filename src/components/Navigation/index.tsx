import React, { FunctionComponent, useState } from "react";

const Navigation: FunctionComponent<{}> = () => {
  const [isExpanded, toggleExpansion] = useState(false);

  const _handleButton = () => {
    toggleExpansion(!isExpanded);
  };

  return (
    <nav className="fixed top-0 w-full bg-white border border-b-black z-10 flex items-center justify-between flex-wrap p-3 c-Navbar">
      <div className="flex items-center flex-shrink-0 text-white mr-6 h-12">
        <a href="/">
          <img src="/logo.png" height="70px" width="30%" alt="logo" />
        </a>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={_handleButton}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${isExpanded ? `block` : `hidden`} 
        w-full block  lg:flex lg:items-center lg:w-auto c-Navbar-menu`}
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="/remote-jobs/search"
            className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-gray-600 mr-4"
          >
            Find a Job
          </a>
          <a
            href="/post-job"
            className="c-post-job block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white hover:scale-95 mr-4 px-4 py-2 text-white rounded"
          >
            Post a Job
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
