import { MouseEventHandler } from "react";

export interface CHButtonProps {
  title: string;
  containerStyle: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}
