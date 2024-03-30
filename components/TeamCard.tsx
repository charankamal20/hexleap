import Image from "next/image";
import React from "react";

/**
 * Renders a team card.
 * @param props - The props for the team card component.
 * @returns The rendered team card.
 */
const TeamCard = (props: TeamCardProps) => {
  return (
    <div className="p-2 transition-all duration-500 hover:shadow-2xl w-full dark:text-white text-black md:w-60 bg-background-secondary dark:bg-background-dark-secondary shadow-lg">
      <div className="">
        <div className="overflow-hidden h-64 md:h-96 md:w-56 drop-shadow-lg">
          <Image
            width={400}
            height={400}
            className="w-full h-full object-cover"
            src={props.image}
            alt="Team Image"
          />
        </div>
        <div className="mt-3 space-y-3 text-xs md:text-sm">
          <div className="font-medium text-sm md:text-lg line-clamp-1">
            <h2>{props.teamName}</h2>
          </div>
          <div className="text-[10px] md:text-xs flex p-2 justify-between dark:text-gray-400 text-gray-500 bg-accent dark:bg-dark-accent transition-all">
            <div className="w-full space-y-1">
              <h3>Total Events</h3>
              <p className="text-xs md:text-sm font-semibold text-black dark:text-white">
                {props.totalEvents} Events
              </p>
            </div>
            <div className="ml-2 text-wrap w-full space-y-1">
              <h3>Sport</h3>
              <p className="text-xs text-ellipsis truncate md:text-sm font-semibold text-black dark:text-white">
                {props.sport}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
