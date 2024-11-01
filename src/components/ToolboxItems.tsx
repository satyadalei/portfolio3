import React, { Fragment } from "react";
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
        className={twMerge("flex flex-none py-1 gap-6 mr-6", itemsWrapperClass)}
      >
        {[...new Array(2)].map((_, idx) => {
          return (
            <Fragment key={idx}>
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
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default ToolboxItems;
