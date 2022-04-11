import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { DateRangePicker, DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useRouter } from "next/router";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [handleShow, setHandleShow] = useState(false);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests: numberOfGuests,
      },
    });
  };

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 150) {
        setHandleShow(true);
      } else setHandleShow(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 flex flex-row w-screen grid-cols-1 transition duration-100 ease-out p-5 ${
        handleShow ? "bg-white shadow-md" : ""
      }  sm:grid grid-flow-row p-5 md:px-10 sm:grid-cols-3 `}
    >
      <div className="relative flex items-stretch h-16 w-16 cursor-pointer my-auto">
        <div className="flex rounded-full border-2 w-16 border-red-400">
          <Image
            onClick={() => router.push("/")}
            src="https://www.graphicsprings.com/filestorage/stencils/72a5af581b4ed82c42bf134cf1ef0b2a.png?width=500&height=500"
            alt="logo"
            //layout="fill"
            objectFit="contain"
            objectPosition="left"
            width={64}
            height={64}
          />
        </div>
      </div>

      <div
        className={
          "flex items-center self-center md:border-2 rounded-full h-10 py-2 md:shadow-sm w-full break-words"
        }
      >
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className={`pl-5  bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400 ${
            handleShow
              ? "text-gray-600 placeholder-gray-400 "
              : "text-red-400 placeholder-red-200"
          }`}
          placeholder={placeholder || "Start Your Search"}
        />
        <SearchIcon className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hidden md:inline-flex md:mx-2" />
      </div>

      <div
        className={`hidden sm:flex items-center justify-end space-x-4 ${
          handleShow ? "text-gray-500" : "text-red-400"
        }`}
      >
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex border-2 rounded-full p-2 items-center space-x-2">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>

      <div className="absolute md:w-[580px]  top-20 md:left-[20%] lg:left-[34%]  z-50">
        {searchInput && (
          <div className="z-50 flex flex-col p-5 mt-5 bg-white shadow-md md:col-span-4 w-max rounded-xl">
            <div className={"hidden md:inline-flex"}>
              <DateRangePicker
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={["#FD5B61"]}
                onChange={handleSelect}
              />
            </div>
            <div className={"md:hidden flex sm:p-0"}>
              <DateRange
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={["#FD5B61"]}
                onChange={handleSelect}
              />
            </div>
            <div className="flex items-center border-b mb-4">
              <h2 className="text-2xl flex-grow font-semibold">
                Number of Guests
              </h2>
              <UserIcon className="h-5" />
              <input
                value={numberOfGuests}
                min={1}
                onChange={(e) => setNumberOfGuests(e.target.value)}
                className="w-12 pl-2 text-lg outline-none text-red-400"
                type="number"
              />
            </div>
            <div className="flex">
              <button
                className="flex-grow text-gray-500"
                onClick={() => setSearchInput("")}
              >
                Cancel
              </button>
              <button className="flex-grow text-red-400" onClick={search}>
                Search
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
