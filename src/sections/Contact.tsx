import ArrowIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
export const ContactSection = () => {
  return (
    <div className="pt-14 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-400 to-sky-300 rounded-3xl py-8 px-10 text-gray-900 text-center md:text-left relative overflow-hidden z-0 md:flex items-center gap-10 md:gap-16">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div>
            <h2 className="font-serif text-2xl md:text-3xl">
              Let&apos;s create something amazing together.
            </h2>
            <p className="mt-2 text-sm">
              Ready to bring your next project to live? Let&apos;s connect and
              discuss how I can help you achieve your goals.
            </p>
          </div>

          <div className="flex-none flex justify-center items-center">
            <button className="text-white bg-gray-900 px-6 py-4  rounded-xl inline-flex gap-4 mt-8 md:mt-0 items-center font-semibold">
              <span> Contact Me</span> <ArrowIcon className="size-4" />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
