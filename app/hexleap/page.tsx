import React from "react";
import TeamCard from "@/components/TeamCard";
import { CollectionData, TeamData } from "@/constants/data";
import AdvertisementCard from "../../components/AdvertisementCard";
import CollectionCard from "@/components/CollectionCard";
import Image from "next/image";

import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@/components/Carousel/Carousel";
import "@/components/Carousel/css/base.css";
import "@/components/Carousel/css/sandbox.css";
import "@/components/Carousel/css/embla.css";
import { getSportsData } from "@/actions/getSportsData";
import { toast } from "sonner";
import { create } from "domain";

const page = async () => {
  const OPTIONS: EmblaOptionsType = { align: "center", loop: true };
  const SLIDE_COUNT = 6;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  try {
    const response = await getSportsData();
    if (response.success) {
      console.log(response.data);
    } else {
      console.log(response.data.message);
      return;
    }
    const TeamData = response.data.data;
  } catch (error) {
    console.error(error);
  }

  return (
    <main className="w-full max-w-7xl mx-auto px-4">
      <section className="flex mt-10 md:mt-16 flex-col justify-center w-full">
        <div className="w-fit space-y-1">
          <h1 className="font-bold text-2xl">Sports</h1>
          <div className="h-[2px] rounded-full w-full bg-purple-line"></div>
        </div>
        <div className="mx-auto gap-x-3 gap-y-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-8">
          {TeamData &&
            TeamData.slice(0, 4).map((team, index: number) => (
              <div
                className={`${index === 3 ? "hidden xl:block" : ""}${
                  index === 2 ? "block md:hidden lg:block" : ""
                }

                `}
                key={index}
              >
                <TeamCard
                  teamName={team.teamName}
                  totalEvents={team.totalEvents}
                  sport={team.sport}
                  image={team.image}
                />
              </div>
            ))}
            {!TeamData && <p>No data found!</p>}
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

      <section className="pt-16 mb-20 px-10 w-full bg-gradient-to-b from-gradient-top to-gradient-bottom dark:from-dark-gradient-top dark:to-dark-gradient-bottom">
        <div>
          <div className="gap-y-4 flex flex-col justify-center items-center w-full">
            <h1 className="text-5xl text-center font-bold tracking-normal">
              Collection Spotlight
            </h1>
            <p className="w-full md:w-3/4 text-center md:text-sm text-xs">
              Discover extraordinary moments with our Spotlight Collection
              metatickets—exclusive access to premium events for an
              unforgettable experience. Grab yours today!
            </p>
          </div>
          <div className="md:px-4 lg:px-10 mt-10 pb-10  md:flex justify-between items-center">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
