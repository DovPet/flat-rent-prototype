import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { bookNow, removeStay, selectItems } from "../slices/bookingSlice";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { signIn, useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

function InfoCard({ image, location, title, description, star, price, total }) {
  const items = useSelector(selectItems);
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const stripePromise = loadStripe(process.env.stripe_public_key);
  const isItemAddedForBooking = items.find((i) => i.image == image);

  const continueToBooking = async () => {
    dispatch(
      bookNow({
        image,
        title,
        description,
        total,
      })
    );
  };

  const removeBookedItem = async () => {
    dispatch(
      removeStay({
        image,
      })
    );
  };

  const createCheckoutSession = async () => {
    if (!session) {
      alert("Please sign in");
    }

    if (session) {
      const stripe = await stripePromise;
      const newPrice = parseInt(price.slice(1, -1)) * 101;
      const checkoutSession = await axios.post("/api/create-checkout-session", {
        image: image,
        title: title,
        description: description,
        price: newPrice,
      });
      const result = await stripe.redirectToCheckout({
        sessionId: checkoutSession.data.id,
      });

      if (result.error) {
        alert(result.error.message);
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          className="rounded-2xl"
          src={image}
          layout="fill"
          objectFit="cover"
          alt={title}
        />
      </div>
      <div className="flex flex-col flex-grow md:pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div className="flex flex-col">
            <p className="text-right text-lg font-semibold pb-2 lg:text-2xl">
              {price}
            </p>
            <p className="text-right font-extralight">{total}</p>

            <>
              {isItemAddedForBooking ? (
                <div className="flex space-x-2">
                  <button
                    role="link"
                    onClick={() => {
                      !session ? signIn() : createCheckoutSession();
                    }}
                    className="bg-red-400 py-1.5 text-white rounded-xl mt-2 shadow-md transition transform duration-200 ease-out hover:scale-105 active:scale-90 font-semibold px-3"
                  >
                    {!session ? "Sign in to book" : "Pay Now"}
                  </button>
                  <button
                    role="link"
                    onClick={() => {
                      !session ? signIn() : removeBookedItem();
                    }}
                    className="bg-green-400 py-1.5 text-white rounded-xl mt-2 shadow-md transition transform duration-200 ease-out hover:scale-105 active:scale-90 font-semibold px-3"
                  >
                    {!session ? "Sign in to remove" : "Remove stay"}
                  </button>
                </div>
              ) : (
                <button
                  role="link"
                  onClick={() => {
                    !session ? signIn() : continueToBooking();
                  }}
                  className="bg-red-400 py-1.5 text-white rounded-xl mt-2 shadow-md transition transform duration-200 ease-out hover:scale-105 active:scale-90 font-semibold px-3"
                >
                  {!session ? "Sign in to book" : "Book Now"}
                </button>
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
