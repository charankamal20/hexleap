"use client";

import React, { useCallback, useEffect, useState } from "react";
import { EmblaEventType, EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { CollectionData } from "@/constants/data";
import CollectionCard from "../CollectionCard";
import Autoplay from "embla-carousel-autoplay";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


/**
 * Represents a carousel component that displays a collection of slides.
 *
 * @component
 * @param {number[]} slides - An array of slide numbers.
 * @param {EmblaOptionsType} [options] - Optional configuration options for the carousel.
 * @returns {JSX.Element} The rendered carousel component.
 */
const EmblaCarousel: React.FC<PropType> = (props) => {

  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 4000, stopOnInteraction: false}),
  ]);

  const [isPlaying, setIsPlaying] = useState(true);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoplay: any = emblaApi?.plugins()?.autoplay;
      if (!autoplay) return;

      const resetOrStop =
        autoplay.options.stopOnInteraction === false
          ? autoplay.reset
          : autoplay.stop;

      resetOrStop();
      callback();
    },
    [emblaApi]
  );


  return (
    <>
      <button
        onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
        disabled={prevBtnDisabled}
        className="hidden md:block active:scale-95 transition-all border-light-blue h-fit border px-0.5 py-2"
      >
        <FaAngleLeft className="text-light-blue size-6" />
      </button>
      <div className="flex justify-center items-center w-full md:w-[75%]">
        <section className="embla w-full">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {CollectionData.map((item, index) => (
                <div
                  className="flex justify-center items-center embla__slide"
                  key={index}
                >
                  <CollectionCard {...item} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <button
        onClick={() => onButtonAutoplayClick(onNextButtonClick)}
        disabled={nextBtnDisabled}
        className="hidden md:block active:scale-95 transition-all border-light-blue h-fit border px-0.5 py-2"
      >
        <FaAngleRight className="text-light-blue size-6" />
      </button>

      {/* Mobile Screen */}
      <div className="md:hidden justify-center flex gap-x-4 w-full">
        <button
          onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
          disabled={prevBtnDisabled}
          className="active:scale-95 transition-all border-light-blue h-fit border px-0.5 py-2"
        >
          <FaAngleLeft className="text-light-blue size-6" />
        </button>
        <button
          onClick={() => onButtonAutoplayClick(onNextButtonClick)}
          disabled={nextBtnDisabled}
          className="active:scale-95 transition-all border-light-blue h-fit border px-0.5 py-2"
        >
          <FaAngleRight className="text-light-blue size-6" />
        </button>
      </div>
    </>
  );
};

export default EmblaCarousel;
