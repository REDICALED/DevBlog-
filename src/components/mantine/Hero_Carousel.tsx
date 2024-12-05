"use client";

import React, { ReactNode, useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { IconCaretLeftFilled, IconCaretRightFilled } from "@tabler/icons-react";
import Pirate_circle from "@/assets/pirate_circle.svg";
import { motion } from 'framer-motion';
import { colorIndexState } from "@/Atoms/ColorAtom";
import { useRecoilState } from "recoil";
import { OpeningState } from "@/Atoms/OpeningAtom";


export function updateTheme(bgColor: string, textColor: string) {

  requestAnimationFrame(() => {
      document.documentElement.style.setProperty('--bg-color', bgColor);
      document.documentElement.style.setProperty('--text-color', textColor);
  });
}

  const palettes = [
    { bg: "#f9f9f9", text: "#000000" }, //Welcome!!! 저는 김병찬이구요 어쩌구 - 내 얼굴 모자이크로
    { bg: "#FFEAEA ", text: "#450000" }, //Welcome!!! 개발자 일 하고 있어요 - 불타는 컴터 명나라 그림
    { bg: "#B1C1BC ", text: "#002E1E" }, //취미 - 요리, 테트리스(APM 90~100 도전은 언제나 환영) / 힙합, edm, 만화, 나의 강아지 코비를 사랑합니다 / 최근 일본 여행을 다녀왔습니다.
    { bg: "#B5B8C3 ", text: "#020A2F" }, //웹 아트도 해볼게요 - lucien freud zebra
  ];



type PropType = {
  options?: EmblaOptionsType;
  slides: ReactNode[];
};

export const Hero_Carousel = (props: PropType) => {
  const [openingstate, setOpeningState] = useRecoilState(OpeningState);
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
    <>
    { !openingstate && <div className="w-full h-[500px] lg:h-[600px] relative flex">
  <button className=" transition-none hover:transition-all hover:duration-200 rounded-md hover:text-[var(--bg-color)] hover:bg-[var(--text-color)] inline-flex embla__prev ml-2 place-items-center flex-shrink-0" onClick={scrollPrev}>
    <IconCaretLeftFilled className='lg:size-[120px] size-[65px]' />
  </button>

  <div className="w-full h-[500px] lg:h-[600px] " ref={emblaRef}> {/* 부모 높이 고정 */}
    <div className="flex flex-wrap ">
      {slides.map((slide, index) => (
        <div className="w-full h-full relative ml-1" key={index}>
          {slide}
        </div>
      ))}
    </div>
  </div>

  <button className=" transition-none hover:transition-all hover:duration-200 rounded-md hover:text-[var(--bg-color)] hover:bg-[var(--text-color)] inline-flex embla__prev mr-2 embla__next place-items-center flex-shrink-0" onClick={scrollNext}>
    <IconCaretRightFilled className='lg:size-[120px] size-[65px]' />
  </button>
</div>}
    </>
  );
};

export default Hero_Carousel;