import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#1D1D1E] text-[#fff] lg:h-[322px] h-[fit-content] pb-8 pt-12 lg:md:py-0  flex flex-col items-center justify-center mt-0">
      <div className="w-full lg:w-[1240px] mx-auto">
        <div className="flex justify-between w-full flex-col lg:flex-row">
          <div className="w-[60%] self-center">
            <img
              src="/images/meta-white.svg"
              className="mx-auto lg:mx-0"
              alt="meta-bnb"
            />
            <div className="flex gap-7 items-center justify-center lg:md:justify-start mt-10 lg:md:mt-20 mb-10">
              <a href="/">
                <img src="/images/facebook.svg" alt="facebook" />
              </a>
              <a href="/">
                <img src="/images/instagram.svg" alt="instagram" />
              </a>
              <a href="/">
                <img src="/images/twitter.svg" alt="twitter" />
              </a>
            </div>
            <p className="leading-[16px] text-[#F7F7F7] text-center lg:text-left lg:md:text-left">
              &copy; 2022 Metabnb
            </p>
          </div>
          <div className="border-b border-[#ccc] mt-8"></div>
          <div className="grid grid-cols-2 lg:md:grid-cols-3 mt-8 lg:mt-0 self-center w-full">
            <div className="flex flex-col text-center lg:text-left community">
              <p className="font-extrabold lg:font-bold md:font-bold text-[18px] mb-2 lg:mb-4">
                Community
              </p>
              <a
                className="leading-[35px] lg:leading-[35px] md:leading-[29px] font-normal text-[14px] text-[#F1F3F9]"
                href="/"
              >
                NFT
              </a>
              <a
                className="leading-[35px] lg:leading-[35px] md:leading-[29px] font-normal text-[14px] text-[#F1F3F9]"
                href="/"
              >
                Tokens
              </a>
              <a
                className="leading-[35px] lg:leading-[35px] md:leading-[29px] font-normal text-[14px] text-[#F1F3F9]"
                href="/"
              >
                Landlords
              </a>
              <a
                className="leading-[35px] lg:leading-[35px] md:leading-[29px] font-normal text-[14px] text-[#F1F3F9]"
                href="/"
              >
                Discord
              </a>
            </div>
            <div className="flex flex-col text-center lg:text-left  places">
              <p className="font-extrabold lg:md:font-bold text-[18px] mb-2 lg:md:mb-4">
                Places
              </p>
              <a
                className="leading-[35px] lg:leading-[35px] md:leading-[29px] font-normal text-[14px] text-[#F1F3F9]"
                href="/"
              >
                Castle
              </a>
              <a
                className="leading-[35px] lg:leading-[35px] md:leading-[29px] font-normal text-[14px] text-[#F1F3F9]"
                href="/"
              >
                Farms
              </a>
              <a
                className="leading-[35px] lg:leading-[35px] md:leading-[29px] font-normal text-[14px] text-[#F1F3F9]"
                href="/"
              >
                Beach
              </a>
              <a
                className="leading-[35px] lg:leading-[35px] md:leading-[29px] font-normal text-[14px] text-[#F1F3F9]"
                href="/"
              >
                Learn More
              </a>
            </div>
            <div className="flex flex-col text-center lg:text-left about-us">
              <p className="font-extrabold lg:md:font-bold text-[18px] mb-2 lg:md:mb-4 mt-6 lg:mt-0">
                About us
              </p>
              <a
                className="leading-[35px] lg:leading-[35px] md:leading-[29px] font-normal text-[14px] text-[#F1F3F9]"
                href="/"
              >
                Road map
              </a>
              <a
                className="leading-[35px] lg:leading-[35px] md:leading-[29px] font-normal text-[14px] text-[#F1F3F9]"
                href="/"
              >
                Creators
              </a>
              <a
                className="leading-[35px] lg:leading-[35px] md:leading-[29px] font-normal text-[14px] text-[#F1F3F9]"
                href="/"
              >
                Career
              </a>
              <a
                className="leading-[35px] lg:leading-[35px] md:leading-[29px] font-normal text-[14px] text-[#F1F3F9]"
                href="/"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
