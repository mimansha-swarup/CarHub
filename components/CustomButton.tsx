"use client";
import { CHButtonProps } from "@/types";
import Image from "next/image";
// import React from "react";
// TODO: add Liskov Substitution Principle
const CustomButton = ({
  title,
  containerStyle,
  handleClick,
}: CHButtonProps) => {
  return (
    <button
      disabled={false}
      type="button"
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
