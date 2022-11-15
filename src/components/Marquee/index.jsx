import React from 'react';

const Marquee = () => {
  return (
    <div className="btn-color flex lg:justify-around gap-8 lg:gap-0 h-[70px] py-4 mt-20 lg:px-0 px-4">
      <div className="self-center">
        <img
          src="/images/logo-3.svg"
          className="scale-100 md:scale-90 lg:scale-100 object-cover"
          alt="mbtoken"
        />
      </div>
      <div className="self-center">
        <img
          src="/images/logo-2.svg"
          className="scale-100 md:scale-90 lg:scale-100 object-cover"
          alt="metamask"
        />
      </div>
      <div className="self-center">
        <img
          src="/images/logo-1.svg"
          className="scale-100 md:scale-90 lg:scale-100 object-cover"
          alt="opensea"
        />
      </div>
    </div>
  );
};

export default Marquee;
