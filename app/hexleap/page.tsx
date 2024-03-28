import React from "react";
import TeamCard from "@/components/TeamCard";
import { CollectionData, TeamData } from "@/constants/data";
import AdvertisementCard from "../../components/AdvertisementCard";
import CollectionCard from "@/components/CollectionCard";
import Image from "next/image";

const page = () => {
  return (
    <main className="w-full max-w-7xl mx-auto px-4">
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

        <div className="w-full justify-center items-center flex my-10">
          <button className="bg-light-blue text-sm text-white font-bold w-32 h-12 flex justify-center items-center rounded">
            See More
          </button>
        </div>
      </section>

      <section className=" mb-20 p-10 w-full bg-gradient-to-b from-gradient-top to-gradient-bottom dark:from-dark-gradient-top dark:to-dark-gradient-bottom">
        <div>
          <div className="mx-6 gap-y-4 flex flex-col justify-center items-center w-full">
            <h1 className="text-5xl font-bold tracking-normal">
              Collection Spotlight
            </h1>
            <p className="w-3/4 text-center text-sm ">
              Discover extraordinary moments with our Spotlight Collection
              metatickets—exclusive access to premium events for an
              unforgettable experience. Grab yours today!
            </p>
          </div>
          <div className="grid grid-rows-1 grid-cols-2 lg:grid-cols-3 mt-10 w-fit mx-auto">
            {CollectionData &&
              CollectionData.slice(0, 3).map((collection, index: number) => (
                <div
                      key={index}
                      className={`${index === 2 ? 'hidden lg:block' : ''} `}
                >
                    <CollectionCard
                      team_name={collection.team_name}
                      date={collection.date}
                      day={collection.day}
                      location={collection.location}
                      action={collection.action}
                      image={collection.image}
                      month={collection.month}
                      time={collection.time}
                    />
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
