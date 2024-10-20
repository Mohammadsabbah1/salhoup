// src/common/SvgIcon/index.tsx
import React from "react";
import svgMap from "../../assets/svgMap"; // Adjust the import path accordingly
import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height }: SvgIconProps) => {
  const iconSrc = svgMap[src as keyof typeof svgMap]; // Ensure src is a key of svgMap

  return (
    <img src={iconSrc} alt={src} width={width} height={height} />
  );
};
