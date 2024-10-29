import React from "react";
import TechIcon from "@/components/TechIcon";
import { twMerge } from "tailwind-merge";

function ToolboxItems({
  items,
  className,
  itemsWrapperClass,
}: {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  itemsWrapperClass?: string;
}) {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none px-2 py-1 gap-6 pr-6",
          itemsWrapperClass
        )}
      >
        {items.map((item, i) => {
          return (
            <div
              className="inline-flex items-center gap-4 py-2 px-3 outline outline-white/10 outline-2 rounded-lg"
              key={item.title}
            >
              <TechIcon component={item.iconType} />
              <div>{item.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ToolboxItems;
