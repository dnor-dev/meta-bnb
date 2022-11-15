import React, { useState } from 'react';
import { homelinks } from '../../../utils/links';
import { Link } from 'react-router-dom';

const MobileNavs = () => {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <div>
      <button onClick={() => setMobileNav(true)}>
        {' '}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className="w-[70%] h-screen rounded shadow-lg bg-white pb-10 pt-0 right-0 scale-0 absolute shadow-xl top-0 transition-all duration-300 ease-out"
        style={{
          transform: mobileNav ? 'scale(1)' : 'scale(0)',
          transformOrigin: 'right',
        }}
      >
        <ul className="relative">
          <li className="relative mb-2 pr-5 flex items-end justify-end pt-5">
            <button onClick={() => setMobileNav(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7 font-semibold "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
          {homelinks.length !== 0 &&
            homelinks.map((link) => (
              <li
                className="relative border-b border-[#ccc] py-2 hover:bg-[#a02279] hover:text-[#fff]"
                key={link.id}
                onClick={() => setMobileNav(false)}
              >
                <Link to={link.path}>
                  <a
                    className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:bg-gray-100 transition duration-300 ease-in-out"
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="dark"
                  >
                    {link.name}
                  </a>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNavs;
