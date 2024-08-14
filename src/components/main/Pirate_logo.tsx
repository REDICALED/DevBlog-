'use client';
import Pirate_circle from "@/assets/pirate_circle.svg";
import { motion } from 'framer-motion';
import { colorIndexState } from "@/Atoms/ColorAtom";
import { useRecoilState } from "recoil";

export function updateTheme(bgColor: string, textColor: string) {
    document.documentElement.style.setProperty('--bg-color', bgColor);
    document.documentElement.style.setProperty('--text-color', textColor);
  }

  const palettes = [
    { bg: "#ede8e4", text: "#000000" },
    { bg: "#040f49", text: "#E06E12" },
    { bg: "#272727", text: "#D3FF25" },
    { bg: "#226246", text: "#FDBCD2" },
    { bg: "#4F4D27", text: "#E8FF26" },
  ];

export default function Pirate_logo() {
    const LgimageStyle = {
        width: '25vh',
        height: '25vh',
        fill: 'var(--text-color)'


    }

    const imageStyle = {
        width: '10vh',
        height: '10vh',
        fill: 'var(--text-color)'
    }
    const [paletteIndex, setPaletteIndex] = useRecoilState(colorIndexState);
    const handleClick = () => {
        const newIndex = (paletteIndex + 1) % palettes.length;
        setPaletteIndex(newIndex);
        const { bg, text } = palettes[newIndex];
        updateTheme(bg, text);
        console.log("clcici");
      };
    return (
        <>
        <button onClick={()=>{handleClick();}} className=" hidden lg:block">
            <motion.div
            animate={{ rotate: 360 }} // 360도 회전
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }} // 무한 반복, 3초에 한 번 회전
            style={LgimageStyle}
            >
                <Pirate_circle alt="Pirate_circle" style={LgimageStyle} width={800} height={800}/>
            </motion.div>
        </button>
        <button onClick={()=>{handleClick();}} className=" lg:hidden">
            <motion.div
            animate={{ rotate: 360 }} // 360도 회전
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }} // 무한 반복, 3초에 한 번 회전
            style={imageStyle}
            >
                <Pirate_circle alt="Pirate_circle" style={imageStyle} width={800} height={800}/>
            </motion.div>
        </button>
        </>

    );
}
