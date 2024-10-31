import React from "react";
import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={twMerge("px-6 pt-6", className)}>
      <div className="flex items-center gap-4">
        <StarIcon className="size-10 text-emerald-300" />
        <h3 className="text-3xl font-serif">{title}</h3>
      </div>
      <p className="text-white/60 mt-2 text-sm">{description}</p>
    </div>
  );
};

export default CardHeader;
