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
import Slide_3 from "@/components/herocards/Slide_3";
import Slide_4 from "@/components/herocards/Slide_4";


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
      { !openingstate &&   (
          <BlinkerBar direction={true}/>
    )}
      <div className=' h-[500px] lg:h-[600px] w-full flex overflow-hidden '>
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
        }}
      />
    </div>
    { !openingstate &&   (
          <BlinkerBar direction={false}/>
    )}    </div>
    
  );
}