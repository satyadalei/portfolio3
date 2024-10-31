import ArrowRightUpIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "YouTube",
    href: "",
  },
  {
    title: "Twitter",
    href: "",
  },
  {
    title: "Instagram",
    href: "",
  },
  {
    title: "LinkedIn",
    href: "",
  },
];
export const Footer = () => {
  return (
    <footer className="pt-24 relative overflow-clip z-10">
      <div className="absolute h-[400px] w-[1600px] bg-emerald-300 left-1/2 bottom-0 -translate-x-1/2 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] opacity-20 md:opacity-30 -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between gap-10 items-center">
          <p className="text-white/40">&copy; 2024. All rights reserved.</p>
          <nav className="flex flex-col md:flex-row items-center gap-6 text-white/60">
            {footerLinks.map((link, _) => {
              return (
                <a
                  className="inline-flex gap-1.5 font-semibold cursor-pointer"
                  key={link.title}
                  href={link.href}
                >
                  <span>{link.title}</span>
                  <ArrowRightUpIcon />
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
};
