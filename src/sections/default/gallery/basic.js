import React from 'react';
import PropTypes from 'prop-types';

function LightGalleryC(props) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-20 text-center">
          <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
            Master Cleanse Reliac Heirloom
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven&apos;t heard of them man bun deep jianbing selfies heirloom.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/3 sm:w-1/2">
            <div className="relative flex">
              <img
                alt="gallery"
                className="absolute inset-0 object-cover object-center w-full h-full"
                src="https://dummyimage.com/600x360"
              />
              <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
                <h2
                  className={`tracking-widest text-sm title-font font-medium text-${props.theme}-500 mb-1`}
                >
                  THE SUBTITLE
                </h2>
                <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                  Shooting Stars
                </h1>
                <p className="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/3 sm:w-1/2">
            <div className="relative flex">
              <img
                alt="gallery"
                className="absolute inset-0 object-cover object-center w-full h-full"
                src="https://dummyimage.com/601x361"
              />
              <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
                <h2
                  className={`tracking-widest text-sm title-font font-medium text-${props.theme}-500 mb-1`}
                >
                  THE SUBTITLE
                </h2>
                <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                  The Catalyzer
                </h1>
                <p className="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/3 sm:w-1/2">
            <div className="relative flex">
              <img
                alt="gallery"
                className="absolute inset-0 object-cover object-center w-full h-full"
                src="https://dummyimage.com/603x363"
              />
              <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
                <h2
                  className={`tracking-widest text-sm title-font font-medium text-${props.theme}-500 mb-1`}
                >
                  THE SUBTITLE
                </h2>
                <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                  The 400 Blows
                </h1>
                <p className="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/3 sm:w-1/2">
            <div className="relative flex">
              <img
                alt="gallery"
                className="absolute inset-0 object-cover object-center w-full h-full"
                src="https://dummyimage.com/602x362"
              />
              <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
                <h2
                  className={`tracking-widest text-sm title-font font-medium text-${props.theme}-500 mb-1`}
                >
                  THE SUBTITLE
                </h2>
                <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                  Neptune
                </h1>
                <p className="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/3 sm:w-1/2">
            <div className="relative flex">
              <img
                alt="gallery"
                className="absolute inset-0 object-cover object-center w-full h-full"
                src="https://dummyimage.com/605x365"
              />
              <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
                <h2
                  className={`tracking-widest text-sm title-font font-medium text-${props.theme}-500 mb-1`}
                >
                  THE SUBTITLE
                </h2>
                <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                  Holden Caulfield
                </h1>
                <p className="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/3 sm:w-1/2">
            <div className="relative flex">
              <img
                alt="gallery"
                className="absolute inset-0 object-cover object-center w-full h-full"
                src="https://dummyimage.com/606x366"
              />
              <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
                <h2
                  className={`tracking-widest text-sm title-font font-medium text-${props.theme}-500 mb-1`}
                >
                  THE SUBTITLE
                </h2>
                <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                  Alper Kamu
                </h1>
                <p className="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

LightGalleryC.defaultProps = {
  theme: 'indigo',
};

LightGalleryC.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default LightGalleryC;
