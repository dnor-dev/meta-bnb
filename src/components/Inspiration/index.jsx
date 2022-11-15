import React from 'react';
import InspirationCards from '../InspirationCards';
import { InspirationImages } from '../../utils/links';

const Inspiration = () => {
  return (
    <div className="mt-20 w-full px-4 lg:w-[1240px] mx-auto">
      <h1 className="text-center lg:text-[48px] text-[30px] lg:leading-[60px] leading-[50px] text-[#000] font-bold">
        Inspiration for your next adventure
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 mt-12 gap-y-5">
        {InspirationImages.length !== 0 &&
          InspirationImages.map((image) => (
            <InspirationCards image={image.image} key={image.id} />
          ))}
      </div>
    </div>
  );
};

export default Inspiration;
