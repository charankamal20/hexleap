import Image from "next/image";
import React from "react";

type Props = {};

const CollectionCard = (props: CollectionCard) => {
  return (
    <div className="relative">
      <Image
        width={257}
        height={625}
        src="/svgs/Subtract.svg"
        alt="mage"
        className="z-0 fill-background-dark"
      />

      <div className="absolute top-3 ">
        <div className="p-2 overflow-hidden">
          <Image
            width={226}
            height={401}
            src={props.image}
            alt="Team Image"
            className="w-full z-10 object-cover"
          />
        <div className="h-px border border-gray-300 mx-5 border-dashed"></div>
        </div>
        <div className="w-full h-2 relative">
          <div className="left-0 size-6 absolute bg-blend-overlay rounded-full"></div>
          <div className="-right-1/2 size-6 absolute bg-background rounded-full"></div>
        </div>
        <div className="text-sm">
          <div className="w-full px-2 text-center">
            <h1 className="text-lg line-clamp-1 font-medium px-4">{props.team_name}</h1>
            <div className="my-2 uppercase h-fit leading-3 flex w-full justify-center items-center divide-x divide-black gap-x-2">
              <span className="pl-1">
                {props.month} {props.date}
              </span>
              <span className="pl-1">{props.day}</span>
              <span className="pl-1">{props.time}</span>
            </div>
          </div>
          <div className="text-xs my-4 px-7">
            <p className="text-center text-gray-600">{props.location}</p>
          </div>
          <div className="pb-3 px-7">
            <button className="bg-black text-white w-full py-2 text-xs font-semibold">
              {props.action}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
