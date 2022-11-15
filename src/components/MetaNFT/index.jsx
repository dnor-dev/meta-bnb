import React from 'react';
import ImageFlip from '../ImageFlip';

const MetaNFT = () => {
  return (
    <div className="mt-16 btn-color lg:h-[774px] h-[fit-content] border border-[#000] flex flex-col items-center justify-center mb-0 py-12 lg:py-0">
      <div className="lg:w-[1240px] w-full px-4 mx-auto flex justify-between">
        <div className="text flex flex-col lg:gap-10 gap-5 md:text-center lg:text-left text-left lg:w-[45%] w-full">
          <h1 className="bg-clip-text lg:text-[48px] text-[30px] leading[60px] text-[#fff] font-bold ">
            Metabnb NFTs
          </h1>
          <p className="text-[#fff] leading-[35px] lg:text-[18px] text-base bg-clip-text lg:max-w-[415px]">
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs give our customer
            access to loads of our exclusive services.
          </p>
          <button className="theme-font text-[16px] leading-[19px] w-[156px] rounded-[8px] py-4 bg-[#fff] mt-4 mb-2 lg:mb-0 md:mx-auto lg:mx-0">
            Learn more
          </button>
        </div>
        <div className="w-[55%] justify-self-start hidden lg:block">
          <ImageFlip />
        </div>
      </div>
    </div>
  );
};

export default MetaNFT;
