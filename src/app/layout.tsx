import type { Metadata, Viewport } from "next";
import '@mantine/core/styles.css';
import { Inter } from "next/font/google";
import "./globals.css";
import RecoilRootWrapper from "@/components/Recoil/RecoilWrapper";
import { Montserrat, Noto_Sans_KR } from "next/font/google";
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import CustomCursor from "@/components/CustomCursor";

const montserrat = Montserrat({
  preload: true,
  subsets: ["latin"], // 또는 preload: false
  weight: ["100","200","300", "400","500","600", "700", "900"], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
});

const notoSansKr= Noto_Sans_KR({
  subsets: [], // preload에 사용할 subsets입니다.
  weight: ["100", "400", "700", "900"],
  variable: "--notoSansKr", // CSS 변수 방식으로 스타일을 지정할 경우에 사용합니다.
});

export const metadata: Metadata = {
  title: "rediMaid",
  description: "redicaled rockbottom",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${montserrat.className} ${notoSansKr.variable}`}>
      <RecoilRootWrapper>
      <MantineProvider>
      <CustomCursor />
      {children}
      </MantineProvider>
				</RecoilRootWrapper>
      </body>
    </html>
  );
}
