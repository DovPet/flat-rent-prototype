import React, { useEffect } from "react";
import Header from "../components/Header";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Head from "next/head";
import { removeAllStays } from "../slices/bookingSlice";

function success() {
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify([]));

    dispatch(removeAllStays());
  }, []);
  const router = useRouter();
  return (
    <div className="bg-gray-100 h-screen content-center">
      <Head>
        <title>Your location has been booked!</title>
      </Head>
      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white text-center">
          <div className="flex items-center space-x-2 mb-5 self-center">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">
            Thank you, your location has been successfully booked!
            </h1>
          </div>
          <p>Thank you for your shopping</p>
          <button
            onClick={() => router.push("/")}
            className="button mt-8"
          >
            Go to main page
          </button>
        </div>
      </main>
    </div>
  );
}

export default success;
