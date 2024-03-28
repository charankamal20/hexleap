import Image from "next/image";
import React from "react";

/**
 * Renders a team card.
 * @param props - The props for the team card component.
 * @returns The rendered team card.
 */
const TeamCard = (props: TeamCardProps) => {
  return (
    <div className="p-2 text-black w-60 bg-background-secondary dark:bg-background-dark-secondary shadow-lg">
      <div className="">

        <div className="border overflow-hidden h-96 w-56 drop-shadow-lg">
          <Image
            width={400}
            height={400}
            className="w-full h-full object-cover"
            src={props.image}
            alt="Team Image"
          />
        </div>
        <div className="mt-3 space-y-3 text-sm">
          <div className="font-medium text-lg">
            <h2>{props.teamName}</h2>
          </div>
          <div className="text-xs flex p-2 justify-between text-gray-500 bg-accent dark:bg-background-dark-secondary">
            <div className="w-full space-y-1">
              <h3>Total Events</h3>
              <p className="text-sm font-semibold text-black">{props.totalEvents} Events</p>
            </div>
            <div className="w-full space-y-1">
              <h3>Sport</h3>
              <p className="text-sm font-semibold text-black">{props.sport}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
