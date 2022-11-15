import React from 'react';
import { Tags } from '../../../utils/links';
import { PlaceToStayImages } from '../../../utils/links';
import InspirationCards from '../../InspirationCards';

const PlaceToStay = () => {
  return (
    <div className="w-full px-4 lg:w-[1240px] mx-auto pt-1 lg:pt-14 md:pt-10 pb-16">
      <div className="flex w-full items-center gap-8 lg:gap-12  flex-wrap">
        {Tags.length !== 0 &&
          Tags.map((tag, i) => (
            <p
              key={i}
              className="lg:text-[20px] text-[14px] leading-[1px] lg:leading-[25px] md:leading-[20px] text-[#434343] cursor-pointer"
            >
              {tag}
            </p>
          ))}
        <div className="border border-[#B4B4B4] rounded-[8px] fade-bg p-2 lg:p-3 flex items-center gap-5 lg:gap-7 cursor-pointer">
          <p className="leading-[10px] lg:leading-[19px]  text-[#333333] lg:text-[20px] text-[14px]">
            Location
          </p>
          <i className="fa fa-sliders text-[#333333] " aria-hidden="true"></i>
        </div>
      </div>
      <div className="grid justify-center w-full grid-cols-1 lg:grid-cols-4 md:grid-cols-3 mt-12 md:gap-y-[0px] gap-y-4">
        {PlaceToStayImages.length !== 0 &&
          PlaceToStayImages.map((image) => (
            <InspirationCards image={image.image} key={image.id} />
          ))}
      </div>
    </div>
  );
};

export default PlaceToStay;
