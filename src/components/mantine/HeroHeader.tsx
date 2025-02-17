'use client';
import {Hero_Carousel} from "@/components/mantine/Hero_Carousel";

import Slide_1 from "@/components/herocards/Slide_1";
import Slide_2 from "@/components/herocards/Slide_2";
import Slide_3 from "@/components/herocards/Slide_3";
import Slide_4 from "@/components/herocards/Slide_4";

import { colorIndexState } from '@/Atoms/ColorAtom';
import { useRecoilState } from 'recoil';
import { OpeningState } from '@/Atoms/OpeningAtom';
import BlinkerBar from '../main/BlinkerBar';
import { useEffect, useRef, useState } from "react";



export default function HeroHeader() {
  const [paletteIndex, setPaletteIndex] = useRecoilState(colorIndexState);
  const [openingstate, setOpeningState] = useRecoilState(OpeningState);
  const blinkRef = useRef(false);
  const isLargeScreen = window.innerWidth >= 768;
  const handleScroll = () => {
    if (window.scrollY > 50 && window.scrollY < 100 && blinkRef.current  === false) {
      const vh = isLargeScreen ? window.innerHeight - 106 : window.innerHeight - 40;
      window.scrollTo({top:  vh, behavior: 'smooth'});
      blinkRef.current = true;
    }
    
  }
    
useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);

  return (
    <div>
      { !openingstate &&   (
          <BlinkerBar direction={true}/>
    )}
      <div className=' h-[calc(100vh-164px)] lg:h-[calc(100vh-254px)] w-full flex overflow-hidden '>
      <Hero_Carousel
        slides={[
          <div key={"carousel_1"}>
            { !openingstate &&  paletteIndex === 0 && (
              <Slide_1/>
            )}
          </div>, 

          <div key={"carousel_2"} className=' overflow-hidden '>
            { !openingstate &&  paletteIndex === 1 && (
              <Slide_2/>
            )}
          </div>,

          <div key={"carousel_3"} className=' overflow-hidden '>
          { !openingstate &&  paletteIndex === 2 && (
            <Slide_3/>
          )}
          </div>,
          <div key={"carousel_4"} className=' overflow-hidden '>
          { !openingstate &&  paletteIndex === 3 && (
            <Slide_4/>
          )}
        </div>
        ]}
        options={{
          align: "start",
          loop: true,
          skipSnaps: false,
          inViewThreshold: 0.7,
          dragFree: false,
          draggable: window.innerWidth < 768
        }}
      />
    </div>
    { !openingstate &&   (
          <BlinkerBar direction={false}/>
    )}    </div>
    
  );
}