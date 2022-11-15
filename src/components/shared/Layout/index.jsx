/** @format */

import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import clsx from 'clsx';

const Layout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  return (
    <div>
      <header
        className={clsx(
          'mb-4 sticky w-full z-50 top-[-1px] bg-[#fff] transition-all duration-300 ease-out',
          scrolled && 'shadow-lg',
        )}
      >
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
