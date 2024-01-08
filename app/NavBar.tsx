import Link from 'next/link';
import React from 'react';
import LoginButton from './LoginButton';
import Drawer from './Drawer';

const NavBar = () => {
  return (
    <div className="flex flex-row py-6 px-4 justify-between bg-primary  text-white space-x-3 ">
      <div className="sm:hidden">
        <Drawer />
      </div>
      <div className="hidden sm:flex">
        <Link href="/" className="mr-5">
          Logo
        </Link>
      </div>
      <LoginButton />
    </div>
  );
};

export default NavBar;
