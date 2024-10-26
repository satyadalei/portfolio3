import React from "react";

const SectionHeader = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) => {
  return (
    <div>
      <p className="text-center uppercase font-semibold tracking-wider bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent mx-auto w-fit bg-clip-text md:text-lg">
        {eyebrow}
      </p>
      <h1 className="text-center font-serif text-3xl mt-4 md:text-5xl">
        {title}
      </h1>
      <p className="text-center mt-3 md:mt-5 md:text-lg text-white/50 md:max-w-md md:mx-auto">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
