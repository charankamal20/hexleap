import { TeamData } from '@/constants/data';
import React from 'react'
import TeamCard from '@/components/TeamCard';
import AdvertisementCard from "@/components/AdvertisementCard";

type Props = {}

const Sports = (props: Props) => {
  return (
    <section className="flex mt-16 flex-col justify-center w-full">
      <div className="w-fit space-y-1">
        <h1 className="font-bold text-2xl">Sports</h1>
        <div className="h-[2px] rounded-full w-full bg-purple-line"></div>
      </div>
      <div className="mx-auto gap-x-3 grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-8">
        {TeamData &&
          TeamData.slice(0, 4).map((team, index: number) => (
            <TeamCard
              key={index}
              teamName={team.teamName}
              totalEvents={team.totalEvents}
              sport={team.sport}
              image={team.image}
            />
          ))}
        {/* Advertisement */}
        <AdvertisementCard
          title="Advertisement title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          image={"/images/advertisement.png"}
        />
      </div>

      <div className="w-full justify-center items-center flex my-12 mt-16">
        <button className="active:scale-90 transition-all bg-light-blue text-sm text-white font-bold w-32 h-12 flex justify-center items-center rounded">
          See More
        </button>
      </div>
    </section>
  );
}

export default Sports