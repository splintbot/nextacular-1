import React from 'react';
import PropTypes from 'prop-types';

function LightFeatureB(props) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="mb-20 text-center">
          <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
            Raw Denim Heirloom Man Braid
          </h1>
          <p className="mx-auto text-base leading-relaxed xl:w-2/4 lg:w-3/4 text-gray-500s">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
            pug.
          </p>
          <div className="flex justify-center mt-6">
            <div
              className={`w-16 h-1 rounded-full bg-${props.theme}-500 inline-flex`}
            ></div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 space-y-6 sm:-m-4 md:space-y-0">
          <div className="flex flex-col items-center p-4 text-center md:w-1/3">
            <div
              className={`w-20 h-20 inline-flex items-center justify-center rounded-full bg-${props.theme}-100 text-${props.theme}-500 mb-5 flex-shrink-0`}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">
                Shooting Stars
              </h2>
              <p className="text-base leading-relaxed">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug VHS try-hard.
              </p>
              <a
                href
                className={`mt-3 text-${props.theme}-500 inline-flex items-center`}
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 text-center md:w-1/3">
            <div
              className={`w-20 h-20 inline-flex items-center justify-center rounded-full bg-${props.theme}-100 text-${props.theme}-500 mb-5 flex-shrink-0`}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3" />
                <circle cx="6" cy="18" r="3" />
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">
                The Catalyzer
              </h2>
              <p className="text-base leading-relaxed">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug VHS try-hard.
              </p>
              <a
                href
                className={`mt-3 text-${props.theme}-500 inline-flex items-center`}
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 text-center md:w-1/3">
            <div
              className={`w-20 h-20 inline-flex items-center justify-center rounded-full bg-${props.theme}-100 text-${props.theme}-500 mb-5 flex-shrink-0`}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">
                Neptune
              </h2>
              <p className="text-base leading-relaxed">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug VHS try-hard.
              </p>
              <a
                href
                className={`mt-3 text-${props.theme}-500 inline-flex items-center`}
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <button
          className={`flex mx-auto mt-16 text-white bg-${props.theme}-500 border-0 py-2 px-8 focus:outline-none hover:bg-${props.theme}-600 rounded text-lg`}
        >
          Button
        </button>
      </div>
    </section>
  );
}

LightFeatureB.defaultProps = {
  theme: 'indigo',
};

LightFeatureB.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default LightFeatureB;
