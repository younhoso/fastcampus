"use client";
import { ReactNode } from "react";
import { TemplateStyled } from "@/styles/pageStyled/TemplateStyled";
import clsx from "clsx";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function CommonTemplate({ children }: { children: ReactNode }) {
  return (
    <TemplateStyled className={clsx("template")}>
      <Header />
      {children}
      <Footer />
    </TemplateStyled>
  );
}
