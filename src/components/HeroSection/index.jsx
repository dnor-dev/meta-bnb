import React from 'react';
import HeroImages from '../HeroImages';

const HeroSection = () => {
  return (
    <div className="flex justify-between gap-14 lg:mt-20 mt-5 lg:w-[1240px] w-full px-4 mx-auto">
      <div className="lg:w-[60%] w-full flex flex-col gap-4 lg:gap-10 text-[#434343]">
        <h1 className="leading-[140%] lg:text-[56px] text-[30px] md:text-[35px] mt-5">
          Rent a <span className="theme-font font-medium">Place</span> away from{' '}
          <span className="theme-font font-medium">Home</span> in the{' '}
          <span className="theme-font font-medium">Metaverse</span>
        </h1>
        <p className="leading-[35px] lg:text-[24px] text-base lg:max-w-[90%]">
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div className="search-location flex gap-0 lg:w-[90%] w-full lg:mt-0 mt-4">
          <input
            type="text"
            name="search"
            placeholder="Search for location"
            className="w-full box-border input-border lg:py-4 py-2 px-4 text-[#B8B8B8] placeholder:text-sm lg:placeholder:text-base"
          />
          <button className="btn-color text-sm lg:text-base lg:px-28 px-6 rounded-br-[8px] rounded-tr-[8px] text-[#fff]">
            Search
          </button>
        </div>
      </div>
      <div className="hidden md:block">
        <HeroImages />
      </div>
    </div>
  );
};

export default HeroSection;
