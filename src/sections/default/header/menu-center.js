import React from 'react';
import PropTypes from 'prop-types';

function LightHeaderD(props) {
  return (
    <header className="text-gray-600 body-font">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <a
          href
          className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className={`w-10 h-10 text-white p-2 bg-${props.theme}-500 rounded-full`}
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">Tailblocks</span>
        </a>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
          <a href className="mr-5 hover:text-gray-900">
            First Link
          </a>
          <a href className="mr-5 hover:text-gray-900">
            Second Link
          </a>
          <a href className="mr-5 hover:text-gray-900">
            Third Link
          </a>
          <a href className="mr-5 hover:text-gray-900">
            Fourth Link
          </a>
        </nav>
        <button className="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  );
}

LightHeaderD.defaultProps = {
  theme: 'indigo',
};

LightHeaderD.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default LightHeaderD;
