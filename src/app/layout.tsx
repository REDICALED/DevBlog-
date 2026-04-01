import type { Metadata, Viewport } from "next";
import "./globals.css";
import RecoilRootWrapper from "@/components/Recoil/RecoilWrapper";
import CustomCursor from "@/components/CustomCursor";
import dynamic from "next/dynamic";
import { Toaster } from "sonner";
import Script from "next/script";

const Mainheader = dynamic(() => import("@/components/main/Main_header"), {
  ssr: false,
});

const CheckingModal = dynamic(() => import("@/components/modal/CheckingModal"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Project-自記",
  description: "Bckim's warehouse",
  openGraph: {
    title: "Project-自記",
    description: "Bckim's warehouse",
    images: [
      {
        url: "/thumbnail.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "utf-8",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth">
      <body className="font-custom main_scrollbar">
        <RecoilRootWrapper>
          <CustomCursor />
          <Mainheader />
          <CheckingModal />
          {children}
          <Toaster position="top-center" richColors />
        </RecoilRootWrapper>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SR54J9G9JY"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-SR54J9G9JY');
          `}
        </Script>
      </body>
    </html>
  );
}