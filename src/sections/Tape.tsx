import StarIcon from "@/assets/icons/star.svg";
const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];
export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-20 overflow-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3">
            {words.map((word) => {
              return (
                <div className="inline-flex gap-4 items-center" key={word}>
                  <span className="text-gray-900 font-extrabold uppercase text-sm">
                    {word}
                  </span>
                  <StarIcon className="size-6 text-gray-900 -rotate-12" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
