import clsx from "clsx";
import { MyCategoryStyled } from "./styled";

export default function MyCategory() {
  return (
    <MyCategoryStyled className={clsx("MyCategory")}>
      <>MyCategory component</>
    </MyCategoryStyled>
  );
}
