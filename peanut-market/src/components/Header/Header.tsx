"use client";

import clsx from "clsx";
import { HeaderStyled } from "./styled";
import Link from "next/link";
import { Category } from "@/types/categories";

export type HeaderProps = {
  category?: Category[];
};

export default function Header({ category }: HeaderProps) {
  return (
    <HeaderStyled className={clsx("Header")}>
      <ul>
        {category?.map((item) => {
          const { pathname } = new URL(item.link);
          return (
            <li key={item.id} className={clsx("item")}>
              <Link href={pathname}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </HeaderStyled>
  );
}
