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
        notoSansKr: ["var(--notoSansKr)"], // 다음과 같이 배열 안에 string으로 작성합니다.
      },
    },
  },
  plugins: [
    tailwindCSSAnimista({
      classes: ['animate__slide-in-top'], // 사용할 애니메이션 클래스 명시
      settings: {
        'animate__slide-in-top': {
          duration: 1200,   // 애니메이션 지속 시간
          delay: 0,      // 애니메이션 지연 시간
          iterationCounts: 1, // 애니메이션 반복 횟수
          isInfinite: false,  // 반복 무한 여부
        },
      },
      variants: ['responsive', 'hover'],  // 다양한 variant 추가 가능
    }),
  ],
};
export default config;
