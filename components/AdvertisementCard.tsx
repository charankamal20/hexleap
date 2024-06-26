import Image from "next/image";
import React from "react";

/**
 * Renders an advertisement card component.
 * @param {Object} props - The component props.
 * @param {string} props.image - The image source for the advertisement.
 * @param {string} props.title - The title of the advertisement.
 * @param {string} props.description - The description of the advertisement.
 */
const AdvertisementCard = (props: AdvertisementCard) => {
  return (
    <div className="text-black max-w-60 h-full bg-background-secondary p-2 dark:bg-background-dark-secondary w-full transition-all duration-500 hover:shadow-xl shadow-lg">
      <div className="flex flex-col h-full border dark:border-[#006555]/20 overflow-hidden">
        <div className="relative drop-shadow-lg">
          <div className="absolute text-white text-xs font-semibold bg-black px-3 py-1 right-0 top-0">
            Ad
          </div>
          <Image
            width={300}
            height={200}
            className="w-full object-cover"
            src={props.image}
            alt="Team Image"
          />
        </div>
        <div className="mt-3 p-2.5 space-y-1">
          <div className="dark:text-white font-semibold text-[16px] lg:text-xl">
            <h2>{props.title}</h2>
          </div>
          <div className="text-xs h-full dark:text-gray-400 text-gray-500 ">
            <p className="line-clamp-5 sm:line-clamp-3 md:line-clamp-none">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementCard;
