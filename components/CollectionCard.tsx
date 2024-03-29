import Image from "next/image";
import React from "react";

type Props = {};

const Card = (
  <svg
    width="257"
    className="z-0 dark:fill-background-dark-secondary fill-white"
    height="625"
    viewBox="0 0 273 641"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_1_116)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 4H265V432C259.477 432 255 436.477 255 442C255 447.523 259.477 452 265 452V629H8V452C13.5228 452 18 447.523 18 442C18 436.477 13.5228 432 8 432V4Z"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1_116"
        x="0"
        y="0"
        width="273"
        height="641"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="4" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_116"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1_116"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);


const CollectionCard = (props: CollectionCard) => {
  return (
    <div className="group relative">
      {/* <Image
        width={257}
        height={625}
        src="/svgs/Subtract.svg"
        alt="mage"
        className="z-0 "
      /> */}
      {Card}
      <div className="absolute top-3 ">
        <div className="p-2 overflow-hidden">
          <Image
            width={226}
            height={401}
            src={props.image}
            alt="Team Image"
            className="w-full z-10 object-cover"
          />
          <div className="h-px border dark:border-background-dark border-gray-300 mx-5 border-dashed"></div>
        </div>
        <div className="text-sm mt-3">
          <div className="w-full px-2 text-center">
            <h1 className="text-[16px] line-clamp-1 font-medium px-4">
              {props.team_name}
            </h1>
            <div className="my-4 uppercase h-fit leading-3 flex w-full justify-center items-center divide-x-2 dark:divide-gray-500 divide-black gap-x-2">
              <span className="pl-1">
                {props.month} {props.date}
              </span>
              <span className="pl-1">{props.day}</span>
              <span className="pl-1">{props.time}</span>
            </div>
          </div>
          <div className="text-xs my-4 px-7">
            <p className="text-center dark:text-gray-300 text-gray-600">{props.location}</p>
          </div>
          <div className="pb-3 px-7">
            <button className="transition-all duration-200 group-hover:shadow-xl active:scale-95 bg-black text-white w-full py-2 text-xs font-semibold">
              {props.action}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
