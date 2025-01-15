import React from "react";

interface RetroContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const RetroContainer = ({ children, className = "" }: RetroContainerProps) => {
  return (
    <div className={`
      p-4 border-4 border-retro-black bg-retro-white
      relative before:absolute before:top-0 before:left-0 before:w-full before:h-full
      before:border-t-4 before:border-l-4 before:border-retro-white before:-translate-x-2 before:-translate-y-2
      ${className}
    `}>
      {children}
    </div>
  );
};