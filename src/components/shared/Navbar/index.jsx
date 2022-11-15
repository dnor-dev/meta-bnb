import React from 'react';
import { homelinks } from '../../../utils/links';
import { Link } from 'react-router-dom';
import ConnectWallet from '../../ConnectWallet';
import MobileNavs from '../MobileNav';

const Navbar = () => {
  return (
    <div className="home flex items-center justify-between md:justify py-6 w-full lg:w-[1240px] px-4  mx-auto">
      <img
        src="/images/meta-bnb.svg"
        alt="meta_bnb"
        className="w-[40%] lg:w-auto md:w-[30%]"
      />
      <div className="hidden lg:flex md:flex items-center gap-10 md:gap-5">
        {homelinks.length !== 0 &&
          homelinks.map((link) => (
            <Link
              className="leading-[25px] md:text-[16px] text-[20px] text-[#434343] font-normal "
              key={link.id}
              to={link.path}
            >
              {link.name}
            </Link>
          ))}
      </div>
      <div className="flex gap-3 items-center">
        <div>
          <ConnectWallet />
        </div>
        <div className="lg:hidden md:hidden self-center pt-1">
          <MobileNavs />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
