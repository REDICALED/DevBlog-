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



export default function HeroHeader() {
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