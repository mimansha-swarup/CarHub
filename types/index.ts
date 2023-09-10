import { MouseEventHandler } from "react";

export interface ZCButtonProps {
  title: string;
  containerStyle: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
