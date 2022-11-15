import React from 'react';

const InspirationCards = ({ image }) => {
  return (
    <div className="justify-self-center lg:justify-self-start flex flex-col gap-4 h-[372px] w-full lg:w-[292px] md:scale-95 lg:px-4 px-3 border border-[#D7D7D7] fade-bg rounded-[15px] items-center justify-center overflow-hidden shadow">
      <div
        className="w-full h-[265px] rounded-[15px] text-right bg-no-repeat bg-cover bg-right-top object-cover lg:bg-center cursor-pointer hover:w-[140%] hover:rounded-[15px] smooth-transition-"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        {/* <img
          src="/images/Vector.svg"
          className="self-start p-3"
          alt="favorites"
        /> */}
      </div>
      <div className="flex flex-col gap-2.5 w-full">
        <div className="flex items-center justify-between w-full">
          <p className="text-[10px] lg:text-[12px]  leading-[13px] text-[#434343]">
            Desert King
          </p>
          <p className="font-bold text-[10px] lg:text-[12px]  leading-[13px] text-[#434343]">
            1MBT per night
          </p>
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="text-[10px] lg:text-[12px]  leading-[13px] text-[#434343]">
            2345km away
          </p>
          <p className="text-[10px] lg:text-[12px]  leading-[13px] text-[#434343]">
            available for 2 weeks stay
          </p>
        </div>
        <div className="flex gap-2.5">
          <img src="/images/Star2.svg" alt="ratings" />
          <img src="/images/Star2.svg" alt="ratings" />
          <img src="/images/Star2.svg" alt="ratings" />
          <img src="/images/Star2.svg" alt="ratings" />
          <img src="/images/Star2.svg" alt="ratings" />
        </div>
      </div>
    </div>
  );
};

export default InspirationCards;
