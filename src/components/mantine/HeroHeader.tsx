'use client';

import Image from 'next/image';
import { IconCaretRightFilled, IconCaretLeftFilled } from '@tabler/icons-react';
import classes from './HeroBullets.module.css';
import dynamic from 'next/dynamic';
import { SVGProps } from 'react';
import Kobe_run from '@/assets/kobe_run.png'
import {Hero_Carousel} from "@/components/mantine/Hero_Carousel";
import SlideupTextLoop from "@/components/main/SlideupTextLoop";
import SlideupText from "@/components/main/SlideupText";

import Slide_1 from "@/components/herocards/Slide_1";
import Slide_2 from "@/components/herocards/Slide_2";

import Bc_sit from '@/assets/bc_sit.jpg'
import budda from '@/assets/budda.png'
import kobe_run from '@/assets/kobe_run.png'
import soba from '@/assets/soba.png'
import table from '@/assets/table.png'
import trash from '@/assets/trash.png'
import zebra from '@/assets/zebra.png'
import { motion,AnimatePresence } from 'framer-motion';
import { colorIndexState } from '@/Atoms/ColorAtom';
import { useRecoilState } from 'recoil';
import { OpeningState } from '@/Atoms/OpeningAtom';
import BlinkerBar from '../main/BlinkerBar';



export function HeroHeader() {
  const [paletteIndex, setPaletteIndex] = useRecoilState(colorIndexState);
  const [openingstate, setOpeningState] = useRecoilState(OpeningState);

  return (
    <div>
      <BlinkerBar direction={true}/>
      <div className=' h-[60vh] lg:h-[60vh] w-full flex overflow-hidden '>
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

          <div key={"carousel_3"}className=' overflow-hidden '>
            {paletteIndex === 2 && (
              <img
              key={0}
              src={budda.src}
              alt="Image"
              className="object-contain rounded-md w-[30vw] animate__slide-in-top"
            />
            )}
          </div>,
          <div key={"carousel_4"}className=' overflow-hidden '>
          {paletteIndex === 3 && (
            <img
            key={0}
            src={budda.src}
            alt="Image"
            className="object-contain rounded-md w-[30vw] animate__slide-in-top"
          />
          )}
        </div>,
        <div key={"carousel_5"}className=' overflow-hidden '>
        {paletteIndex === 4 && (
          <img
          key={0}
          src={budda.src}
          alt="Image"
          className="object-contain rounded-md w-[30vw] animate__slide-in-top"
        />
        )}
      </div>
        ]}
        options={{
          align: "start",
          loop: true,
          skipSnaps: false,
          inViewThreshold: 0.7,
        }}
      />
    </div>
    <BlinkerBar direction={false}/>
    </div>
    
  );
}