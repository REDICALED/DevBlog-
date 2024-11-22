'use client';


import Image from 'next/image';
import { IconCaretRightFilled, IconCaretLeftFilled } from '@tabler/icons-react';
import classes from './HeroBullets.module.css';
import dynamic from 'next/dynamic';
import { SVGProps } from 'react';
import Kobe_run from '@/assets/kobe_run.png'
import {Hero_Carousel} from "@/components/mantine/Hero_Carousel";

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



export function HeroHeader() {
  const [paletteIndex, setPaletteIndex] = useRecoilState(colorIndexState);
  const [openingstate, setOpeningState] = useRecoilState(OpeningState);

  return (
    <div className='h-[55vh] w-full flex overflow-hidden '>
      <Hero_Carousel 
        slides={[
          <div key={"carousel_1"}>
            { !openingstate &&  paletteIndex === 0 && (
              <div className='lg:flex w-full h-[55vh]  '>
                <div className='lg:w-1/3 w-full '>
                    <div className='grid place-items-center'>
                      <img
                        key={0}
                        src={Bc_sit.src}
                        alt="Image"
                        className=" grid place-items-center object-contain h-[25vh] lg:h-[55vh] rounded-md animate__slide-in-top  "
                      />
                    </div>
                </div>

                <div className=" font-semibold lg:w-2/3 lg:text-[15.5vh] leading-none">
                <span>ByeongChan Kim .</span>
                <p className=" font-semibold lg:text-[7.5vh] " ></p>
                </div>

              </div>
            )}
          </div>,

          <div key={"carousel_2"} className=' overflow-hidden '>
            {paletteIndex === 1 && (
              <img
              key={0}
              src={budda.src}
              alt="Image"
              className="object-contain rounded-md w-[10vw] animate__slide-in-top"
            />
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
  );
}