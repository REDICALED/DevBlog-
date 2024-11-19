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

export function HeroHeader() {
  const [paletteIndex, setPaletteIndex] = useRecoilState(colorIndexState);

  return (
    <div className='h-[55vh] w-full flex'>
      <Hero_Carousel 
        slides={[
          <div>
            {paletteIndex === 0 && (
              <div className=' grid grid-cols-3 h-[55vh]'>
                <div className=' grid grid-rows-2'>
                    <div className=' row-span-2 '>
                      <img
                        key={0}
                        src={Bc_sit.src}
                        alt="Image"
                        className="object-contain h-[55vh] rounded-md animate__slide-in-top  "
                      />
                    </div>
                </div>

                <div className=' grid grid-rows-2'>
                  <div>a</div>
                  <div>a</div>
                </div>

                <div className=' grid grid-rows-2'>
                  <div>a</div>
                  <div>a</div>
                </div>

              </div>
            )}
          </div>,

          <div>
            {paletteIndex === 1 && (
              <img
              key={0}
              src={budda.src}
              alt="Image"
              className="object-contain rounded-md w-[10vw] animate__slide-in-top"
            />
            )}
          </div>,

          <div>
            {paletteIndex === 2 && (
              <img
              key={0}
              src={budda.src}
              alt="Image"
              className="object-contain rounded-md w-[30vw] animate__slide-in-top"
            />
            )}
          </div>,
          <div>
          {paletteIndex === 3 && (
            <img
            key={0}
            src={budda.src}
            alt="Image"
            className="object-contain rounded-md w-[30vw] animate__slide-in-top"
          />
          )}
        </div>,
        <div>
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