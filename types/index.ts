import { MouseEventHandler } from "react";

export interface ZCButtonProps {
  title: string;
  containerStyle: string;
  textStyle?: string;
  rightIcon?: string;
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface SearchManufacturerProps {
  selected: string;
  setSelected: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number,
  class: string,
  combination_mpg: number,
  cylinders: number,
  displacement: number,
  drive: string,
  fuel_type: string,
  highway_mpg: number,
  make: string,
  model: string,
  transmission: string,
  year: number
}

export interface filterProps {
  manufacturer: string,
  year: number,
  model: string,
  limit: number,
  fuel: string,
}


export interface OptionProps {
  title: string;
  value: string;
}

export interface ZCFilterProps {
  title: string;
  options: OptionProps[];
  setFilter : (value: any) => void
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit : (limit: number) => void
}