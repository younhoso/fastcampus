import clsx from "clsx";
import { FooterStyled } from "./styled";

export default function Footer() {
  return (
    <FooterStyled className={clsx("Footer")}>
      <div>
        <span>triplexstudio</span> / Company Profile
      </div>
      <div>Copyright © 2024 triplexstudio. All rights reserved.</div>
    </FooterStyled>
  );
}
