'use client';
import Pirate_circle from "@/assets/pirate_circle.svg";
import { motion } from 'framer-motion';
import { colorIndexState } from "@/Atoms/ColorAtom";
import { useRecoilState } from "recoil";
import { useState } from "react";

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
        fill: 'var(--text-color)'

    }
    const [paletteIndex, setPaletteIndex] = useRecoilState(colorIndexState);
    const [currentColor, setCurrentColor] = useState<string>('var(--text-color)');
    const [hoverColor, sethoverColor] = useState('#E06E12');

    const handleClick = () => {
        const newIndex = (paletteIndex + 1) % palettes.length;
        setPaletteIndex(newIndex);
        sethoverColor(palettes[(paletteIndex + 2) % palettes.length].text);
        setCurrentColor(palettes[newIndex].text);
        const { bg, text } = palettes[newIndex];
        updateTheme(bg, text);
      };
    return (
        <>
        <button onClick={()=>{handleClick();}} className="">
            <motion.div
            animate={{ rotate: 360 }} // 360도 회전
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }} // 무한 반복, 3초에 한 번 회전
            style={LgimageStyle}
            onMouseEnter={() => setCurrentColor(hoverColor)}
            onMouseLeave={() => setCurrentColor('var(--text-color)')}
            >
                <Pirate_circle alt="Pirate_circle" className="pirate-logo" style={{ fill: currentColor }} width={800} height={800}/>
            </motion.div>
        </button>

        </>

    );
}
