'use client';
import Pirate_circle from "@/assets/pirate_circle.svg";
import { motion } from 'framer-motion';
import { colorIndexState } from "@/Atoms/ColorAtom";
import { useRecoilState } from "recoil";
import { useState } from "react";

export function updateTheme(bgColor: string, textColor: string) {
  requestAnimationFrame(() => {
      document.documentElement.style.setProperty('--bg-color', bgColor);
      document.documentElement.style.setProperty('--text-color', textColor);
  });
}

  const palettes = [
    { bg: "#ede8e4", text: "#000000" }, //Welcome!!! 저는 김병찬이구요 어쩌구 - 내 얼굴 모자이크로
    { bg: "#B1C1BC ", text: "#002E1E" }, //Welcome!!! 개발자 일 하고 있어요 - 불타는 컴터 명나라 그림
    { bg: "#FFEAEA ", text: "#450000" }, //일상 같은 거 올릴게요. - 코비, 일본 
    { bg: "#B5B8C3 ", text: "#020A2F" }, //웹 아트도 해볼게요 - lucien freud zebra
    { bg: "#FFF9EA ", text: "#453900" }, //여러가지 올릴 수도 있고 잘해봅시다잉 - 리애기공룡둘리애 또치
  ];

export default function Pirate_logo() {
    const LgimageStyle = {
        fill: 'var(--text-color)'

    }
    const [paletteIndex, setPaletteIndex] = useRecoilState(colorIndexState);
    const [currentColor, setCurrentColor] = useState<string>('var(--text-color)');
    const [hoverColor, sethoverColor] = useState('#002E1E');

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
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }} // 무한 반복, x초에 한 번 회전
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
