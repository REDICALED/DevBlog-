"use client";

import React, { ReactNode, useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { IconCaretLeftFilled, IconCaretRightFilled } from "@tabler/icons-react";
import Pirate_circle from "@/assets/pirate_circle.svg";
import { motion } from 'framer-motion';
import { colorIndexState } from "@/Atoms/ColorAtom";
import { useRecoilState } from "recoil";


export function updateTheme(bgColor: string, textColor: string) {
  requestAnimationFrame(() => {
      document.documentElement.style.setProperty('--bg-color', bgColor);
      document.documentElement.style.setProperty('--text-color', textColor);
  });
}

  const palettes = [
    { bg: "#f9f9f9", text: "#000000" }, //Welcome!!! 저는 김병찬이구요 어쩌구 - 내 얼굴 모자이크로
    { bg: "#B1C1BC ", text: "#002E1E" }, //Welcome!!! 개발자 일 하고 있어요 - 불타는 컴터 명나라 그림
    { bg: "#FFEAEA ", text: "#450000" }, //일상 같은 거 올릴게요. - 코비, 일본 
    { bg: "#B5B8C3 ", text: "#020A2F" }, //웹 아트도 해볼게요 - lucien freud zebra
    { bg: "#FFF9EA ", text: "#453900" }, //여러가지 올릴 수도 있고 잘해봅시다잉 - 리애기공룡둘리애 또치
  ];



type PropType = {
  options?: EmblaOptionsType;
  slides: ReactNode[];
};

export const Hero_Carousel = (props: PropType) => {
  const [paletteIndex, setPaletteIndex] = useRecoilState(colorIndexState);
  const { options, slides } = props; 
  const [emblaRef, embla] = useEmblaCarousel(options); 
  const scrollPrev = useCallback(() => {
    handleClickPrev();
    if (embla) embla.scrollPrev()
  }, [embla])

  const scrollNext = useCallback(() => {
    handleClickNext();
    if (embla) embla.scrollNext()
  }, [embla])


  const LgimageStyle = {
    fill: 'var(--text-color)'

}

const handleClickNext = () => {
  setPaletteIndex((prevIndex) => {
    const newIndex = (prevIndex + 1) % palettes.length;
    const { bg, text } = palettes[newIndex];
    updateTheme(bg, text);
    return newIndex;
  });
  };

  const handleClickPrev = () => {
    setPaletteIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? palettes.length - 1 : (prevIndex - 1) % palettes.length;
      const { bg, text } = palettes[newIndex];
      updateTheme(bg, text);
      return newIndex;
    });

  };

  return (
    <div className="w-full h-[55vh] relative flex">
  <button className="embla__prev grid place-items-center flex-shrink-0" onClick={scrollPrev}>
    <IconCaretLeftFilled className='lg:size-[70px] size-[45px]' />
  </button>

  <div className="w-full h-[55vh] " ref={emblaRef}> {/* 부모 높이 고정 */}
    <div className="flex flex-wrap ">
      {slides.map((slide, index) => (
        <div className="w-full h-full relative ml-1" key={index}>
          {slide}
        </div>
      ))}
    </div>
  </div>

  <button className="embla__next grid place-items-center flex-shrink-0" onClick={scrollNext}>
    <IconCaretRightFilled className='lg:size-[70px] size-[45px]' />
  </button>
</div>
  );
};

export default Hero_Carousel;