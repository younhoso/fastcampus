import type { ReactNode } from "react";
import { pretendard } from "../libs/fonts";
import type { Metadata, Viewport } from "next";
import CustomThemeProvider from "@/provider/CustomThemeProvider";
import ReactQueryProvider from "@/provider/ReactQueryProvider";
import "./globals.css"; // 전역 CSS 불러오기

const metaTitle = "GBC-SYS front boilerplate | Next";

export const metadata: Metadata = {
  title: {
    template: metaTitle + " | %s",
    default: metaTitle,
  },
  description: "GBC-SYS front boilerplate | Next",
  icons: {
    icon: [{ url: "/favicon.ico", rel: "shortcut icon" }],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "naver-site-verification": "3d3e995da88e72e6",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" data-theme="dark">
      <body className={pretendard.className}>
        <CustomThemeProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </CustomThemeProvider>
        <div id="modalPortal" />
      </body>
    </html>
  );
}
