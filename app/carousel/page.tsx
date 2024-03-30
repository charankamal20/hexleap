'use client'

import { EmblaOptionsType } from "embla-carousel";
import "@/components/Carousel/css/base.css";
import "@/components/Carousel/css/sandbox.css";
import "@/components/Carousel/css/embla.css";
import EmblaCarousel from '../../components/Carousel/Carousel';

const OPTIONS: EmblaOptionsType = { align: "start" };
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const page = () => (
  <main className="flex justify-center items-center w-full">
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
  </main>
);


export default page; 