import type { Metadata, Viewport } from "next";
import "./globals.css";
import RecoilRootWrapper from "@/components/Recoil/RecoilWrapper";
import CustomCursor from "@/components/CustomCursor";
import dynamic from "next/dynamic";

const Mainheader = dynamic(() => import('@/components/main/Main_header')
, {
  ssr: false, // 클라이언트 사이드에서만 렌더링하도록 설정
  });

  const CheckingModal = dynamic(() => import('@/components/modal/CheckingModal')
  , {
    ssr: false, // 클라이언트 사이드에서만 렌더링하도록 설정
    });
  

export const metadata: Metadata = {
  title: "kob3krnl.0.1-rt24.11",
  description: "Kobemom's warehouse",
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
    <html className="scroll-smooth">
      <body className=" font-custom ">
        <RecoilRootWrapper>
      <CustomCursor />
      <Mainheader />
      <CheckingModal />
      {children}
				</RecoilRootWrapper>
      </body>
    </html>
  );
}
