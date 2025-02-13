'use client';
import Pirate_circle from "@/assets/emergency-button.svg";
import { motion } from 'framer-motion';
import { useRecoilState } from "recoil";
import { OpeningState } from "@/Atoms/OpeningAtom";
import SlideupChildren from "@/components/main/SlideupChildren";
import { DarkmodeSwitchState } from "@/Atoms/DarkmodeSwitchAtom";
import { useEffect, useState } from "react";

export function updateTheme(bgColor: string, textColor: string) {
      document.documentElement.style.setProperty('--bg-color', bgColor);
      document.documentElement.style.setProperty('--text-color', textColor);
}

  // const palettes = [
  //   { bg: "#000000", text: "#000000" }, //Welcome!!! 저는 김병찬이구요 어쩌구 - 내 얼굴 모자이크로
  //   { bg: "#B1C1BC ", text: "#002E1E" }, //Welcome!!! 개발자 일 하고 있어요 - 불타는 컴터 명나라 그림
  //   { bg: "#FFEAEA ", text: "#450000" }, //일상 같은 거 올릴게요. - 코비, 일본 
  //   { bg: "#B5B8C3 ", text: "#020A2F" }, //웹 아트도 해볼게요 - lucien freud zebra
  //   { bg: "#FFF9EA ", text: "#453900" }, //여러가지 올릴 수도 있고 잘해봅시다잉 - 리애기공룡둘리애 또치
  // ];

export default function Pirate_logo() {
  
    const [openingstate, setOpeningState] = useRecoilState(OpeningState);
    const [DarkmodeSwitch, setDarkmodeSwitch] = useRecoilState(DarkmodeSwitchState);
    const [DocColor, SetDocColor] = useState<string[]>(['','']);
    const [clickcount, SetClickCount] = useState<boolean>(false);

    const handleClick = () => {
      let TextColor = '';
        let BgColor = '';
        SetClickCount(true);
  
      // 0부터 64 사이의 랜덤 숫자 3개를 생성하여 16진수로 변환하고, 동시에 hexColor와 hexColor2를 계산
        for (let i = 0; i < 3; i++) {
          const randomValue = Math.floor(Math.random() * 100);  // 0~ 사이의 랜덤 숫자
          const hexValue = randomValue.toString(16).padStart(2, '0'); // 16진수로 변환
          TextColor += hexValue;  // hexColor 생성
  
          // whiteColor에서 해당 값 빼기
          const difference = 255 - randomValue;
          BgColor += difference.toString(16).padStart(2, '0');  // hexColor2 생성
        }
        SetDocColor([TextColor,BgColor]);
      };

      useEffect(()=>{
        if (!DarkmodeSwitch) {
          updateTheme(`#${DocColor[1]}`, `#${DocColor[0]}`);
        }
        else {
          updateTheme(`#${DocColor[0]}`, `#${DocColor[1]}`);
        }
      },[DocColor]);
    
    return (
        <>
        { !openingstate && 
        <SlideupChildren  >
          <button onClick={()=>{handleClick();}} className=" grid place-items-center p-1">
            {
              !clickcount &&
              <motion.div
            animate={{ rotateX: 20, rotateY: 10 }} // 360도 회전
            transition={{ repeat: Infinity, type: "spring", bounce: 5.85, repeatDelay: 0.5, duration:2}} // 무한 반복, x초에 한 번 회전
            >
                <Pirate_circle alt="5억년 버튼" className="pirate-logo " width={100} height={100}/>
            </motion.div>}

            {
              clickcount &&
              <motion.div
            animate={{ rotateX: 20, rotateY: 5 }} // 360도 회전
            transition={{ repeat: Infinity, type: "spring", bounce: 0.85, repeatDelay: 2.5, duration:2}} // 무한 반복, x초에 한 번 회전
            >
                <Pirate_circle alt="5억년 버튼" className="pirate-logo " width={100} height={100}/>
            </motion.div>}
        </button>
        </SlideupChildren>
        }
        </>

    );
}
