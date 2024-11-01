import React, { ComponentPropsWithoutRef } from "react";
import GrainTexture from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";
const Card = ({
  className,
  children,
  ...otherProps
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={twMerge(
        "bg-gray-800 rounded-3xl relative after:content-[''] z-0 after:absolute after:inset-0 after:z-10 overflow-hidden after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 p-6 after:pointer-events-none",
        className
      )}
      {...otherProps}
    >
      <div
        className="absolute inset-0 -z-20 opacity-5"
        style={{
          background: `url(${GrainTexture.src})`,
        }}
      ></div>
      {children}
    </div>
  );
};

export default Card;
