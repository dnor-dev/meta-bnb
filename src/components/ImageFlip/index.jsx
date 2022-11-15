import React from 'react';

const ImageFlip = () => {
  return (
    <div className="relative w-full top-[-50px] right-[50px]">
      <img
        src="/images/image9.svg"
        className="absolute z-10 top-[-50px] left-[223.45px]"
        alt="nfts"
      />
      <img
        src="/images/image7.svg"
        className="absolute z-20 top-[113.13px] left-[-20px]"
        alt="nfts"
      />
      <img
        src="/images/image8.svg"
        className="absolute z-30 top-[213.93px] left-[291.53px]"
        alt="nfts"
      />
    </div>
  );
};

export default ImageFlip;
