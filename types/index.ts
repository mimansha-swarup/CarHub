import { MouseEventHandler } from "react";

export interface ZCButtonProps {
  title: string;
  containerStyle: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
