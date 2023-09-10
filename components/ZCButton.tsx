"use client";
import { ZCButtonProps } from "@/types";
import Image from "next/image";
// import React from "react";
// TODO: add Liskov Substitution Principle
const ZCButton = ({
  title,
  containerStyle,
  handleClick,
  btnType,
}: ZCButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default ZCButton;
