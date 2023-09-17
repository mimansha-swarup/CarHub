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
  textStyle,
  rightIcon,
}: ZCButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyle}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="righTicon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default ZCButton;
