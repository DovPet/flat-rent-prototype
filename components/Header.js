import Image from "next/image";
import React from "react";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky items-center z-50 top-0 grid grid-cols-3 bg-white shadow-md p-3 md:px-10">
      <div className="relative flex items-stretch h-16 cursor-pointer my-auto">
        <Image
          src="https://www.graphicsprings.com/filestorage/stencils/72a5af581b4ed82c42bf134cf1ef0b2a.png?width=500&height=500"
          alt="logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      <div className="flex items-center md:border-2 rounded-full h-10 py-2 md:shadow-sm">
        <input
          className="pl-5 bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400"
          placeholder="Start Your Search"
        />
        <SearchIcon className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hidden md:inline-flex md:mx-2" />
      </div>

      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex border-2 rounded-full p-2 items-center space-x-2">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
