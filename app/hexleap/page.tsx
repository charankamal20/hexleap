import React from "react";
import TeamCard from '@/components/TeamCard';
import { TeamData } from "@/constants/data";
import AdvertisementCard from '../../components/AdvertisementCard';


const page = () => {
  return (
    <main className="w-full max-w-7xl mx-auto">
      <section className="flex flex-col justify-center w-full">
        <div className="w-fit">
          <h1 className="font-bold text-2xl">Sports</h1>
          <div className="h-[2px] rounded-full w-full bg-purple-line"></div>
        </div>
        <div className="grid grid-cols-5">
          {TeamData &&
            TeamData.map((team, index) => (
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

        <div className="w-full justify-center items-center flex my-10">
          <button className="bg-light-blue text-sm text-white font-bold w-32 h-12 flex justify-center items-center rounded">See More</button>
        </div>
      </section>

      <section></section>
    </main>
  );
};

export default page;
