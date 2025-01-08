import type { Config } from "tailwindcss";

const tailwindCSSAnimista = require("tailwindcss-animistacss");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      keyframes: {
        'slide-left-parent': {
          '0%': { transform: 'translateX(0)', position: 'absolute', left: '0' }, // 왼쪽 끝에 고정
          '100%': { transform: 'translateX(0)', position: 'absolute', left: '0' }, // 왼쪽 끝에 고정된 상태 유지
        },
        'slide-right-parent': {
          '0%': { transform: 'translateX(0)', position: 'absolute', right: '0' }, // 초기 상태 (오른쪽 끝)
          '100%': { transform: 'translateX(0)', position: 'absolute', right: '0' }, // 애니메이션 완료 상태 (오른쪽 끝)
        },
      },
      animation: {
        'slide-left-parent': 'slide-left-parent 1s ease-in-out forwards', // forwards 추가
        'slide-right-parent': 'slide-right-parent 1s ease-in-out forwards', // forwards 추가

      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'xs': '360px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: { // 폰트패밀리
        custom: ['CustomFont', 'sans-serif'],
      },
    },
  },
  plugins: [
    tailwindCSSAnimista({
      classes: ['animate__slide-in-top', 'animate__slide-in-bottom', 'animate__flicker-3',
        'animate__slide-in-left','animate__slide-in-right','animate__bounce-in-top','animate__bounce-in-bottom', 
        'animate__roll-in-left', 'animate__swing-in-top-bck'], // 사용할 애니메이션 클래스 명시
      settings: {
        'animate__slide-in-top': {
          duration: 850,   // 애니메이션 지속 시간
          delay: 600,      // 애니메이션 지연 시간
          iterationCounts: 1, // 애니메이션 반복 횟수
          isInfinite: false,  // 반복 무한 여부
        },
        
        'animate__slide-in-bottom': {
          duration: 850,   // 애니메이션 지속 시간
          delay: 600,      // 애니메이션 지연 시간
          iterationCounts: 1, // 애니메이션 반복 횟수
          isInfinite: false,  // 반복 무한 여부
        },
        'animate__slide-in-left': {
          duration: 850,   // 애니메이션 지속 시간
          delay: 600,      // 애니메이션 지연 시간
          iterationCounts: 1, // 애니메이션 반복 횟수
          isInfinite: false,  // 반복 무한 여부
        },
        'animate__slide-in-right': {
          duration: 850,   // 애니메이션 지속 시간
          delay: 600,      // 애니메이션 지연 시간
          iterationCounts: 1, // 애니메이션 반복 횟수
          isInfinite: false,  // 반복 무한 여부
        },

        'animate__flicker-3': {
          duration: 200,   // 애니메이션 지속 시간
          delay: 0,      // 애니메이션 지연 시간
          iterationCounts: 3, // 애니메이션 반복 횟수
          isInfinite: false,  // 반복 무한 여부
          timingFunction: 'linear', // 애니메이션 타이밍 함수
          direction: 'normal', // 애니메이션 방향
          fillMode: 'both', // 애니메이션 상태
        },


        'animate__bounce-in-top': {
          duration: 1100,   // 애니메이션 지속 시간
          delay: 0,      // 애니메이션 지연 시간
          isInfinite: false,  // 반복 무한 여부
          direction: 'normal', // 애니메이션 방향
          fillMode: 'both', // 애니메이션 상태
        },

        'animate__bounce-in-bottom': {
          duration: 1100,   // 애니메이션 지속 시간
          delay: 0,      // 애니메이션 지연 시간
          isInfinite: false,  // 반복 무한 여부
          direction: 'normal', // 애니메이션 방향
          fillMode: 'both', // 애니메이션 상태
        },

        'animate__roll-in-left': {
          duration: 300,   // 애니메이션 지속 시간
          delay: 0,      // 애니메이션 지연 시간
          isInfinite: false,  // 반복 무한 여부
          timingFunction: 'linear', // 애니메이션 타이밍 함수
          direction: 'normal', // 애니메이션 방향
          fillMode: 'both', // 애니메이션 상태
        },

        'animate__swing-in-top-bck': {
          duration: 1.8,   // 애니메이션 지속 시간
          delay: 100,      // 애니메이션 지연 시간
          iterationCounts: 1, // 애니메이션 반복 횟수
          isInfinite: false,  // 반복 무한 여부
          timingFunction: 'linear',
        },
      },
      variants: ['responsive', 'hover'],  // 다양한 variant 추가 가능
    }),
  ],
};
export default config;
