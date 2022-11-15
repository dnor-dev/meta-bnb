import React from 'react';

const HeroImages = () => {
  return (
    <div className="flex gap-2 h-[459px] md:h-[90%] lg:h-[459px]">
      <div className="flex flex-col gap-2 self-end">
        <img src="/images/image4.svg" alt="suites" />
        <img src="/images/image6.svg" alt="suites" />
      </div>
      <div className="flex flex-col gap-2">
        <img src="/images/image3.svg" alt="suites" />
        <img src="/images/image5.svg" alt="suites" />
      </div>
    </div>
  );
};

export default HeroImages;
