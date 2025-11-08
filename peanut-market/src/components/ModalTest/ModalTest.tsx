import clsx from "clsx";
import { ModalTestStyled } from "./styled";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ModalTest({ children }: Props) {
  return (
    <ModalTestStyled className={clsx("ModalTest")}>{children}</ModalTestStyled>
  );
}
