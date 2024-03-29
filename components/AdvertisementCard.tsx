import Image from "next/image";
import React from "react";

const AdvertisementCard = (props: AdvertisementCard) => {
  return (
    <div className="text-black max-w-60 bg-background-secondary p-2 dark:bg-background-dark-secondary w-full transition-all duration-500 hover:shadow-xl shadow-lg">
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
          <div className="dark:text-white font-semibold text-xl">
            <h2>{props.title}</h2>
          </div>
          <div className="text-xs leading-5 dark:text-gray-400 text-gray-500">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementCard;
