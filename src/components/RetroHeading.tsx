import React from "react";

interface RetroHeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3;
  className?: string;
}

export const RetroHeading = ({ children, level = 1, className = "" }: RetroHeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const baseStyles = "font-pixel text-retro-black";
  const sizeStyles = {
    1: "text-4xl md:text-5xl mb-8",
    2: "text-2xl md:text-3xl mb-6",
    3: "text-xl md:text-2xl mb-4",
  }[level];

  return (
    <Tag className={`${baseStyles} ${sizeStyles} ${className}`}>
      {children}
    </Tag>
  );
};