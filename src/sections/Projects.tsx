import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckedIcon from "@/assets/icons/check-circle.svg";
import ArrowUp from "@/assets/icons/arrow-up-right.svg";
import GrainTexture from "@/assets/images/grain.jpg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:pt-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />

        <div className="flex flex-col mt-12 md:mt-20 gap-20">
          {portfolioProjects.map((project, i) => {
            return (
              <Card
                key={project.title}
                className="px-8 pt-8 md:px-10 pb-0 lg:pt-16 lg:px-16 md:pt-10 sticky"
                style={{
                  top: `calc(64px + ${i * 20}px)`,
                }}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="flex">
                      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text inline-flex font-bold uppercase gap-2 tracking-widest text-sm md:text-lg">
                        <span>{project.company}</span>
                        <span>&bull;</span>
                        <span>{project.year}</span>
                      </div>
                    </div>
                    <h1 className="font-serif text-2xl md:text-4xl mt-2 md:mt-3">
                      {project.title}
                    </h1>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-6" />
                    <ul className="flex flex-col gap-4 mt-4">
                      {project.results.map((result, i) => {
                        return (
                          <li
                            className="flex gap-2 text-sm md:text-[18px] text-white/50 tracking-wide "
                            key={result.title}
                          >
                            <CheckedIcon className="size-5 md:size-6" />
                            <span>{result.title}</span>
                          </li>
                        );
                      })}
                    </ul>

                    <a href={project.link} className="">
                      <button className="bg-white text-gray-900 font-semibold text-lg md:max-w-fit px-5 h-12 rounded-xl w-full inline-flex items-center justify-center gap-1 mt-8">
                        <span>View Live Site</span>
                        <span>
                          <ArrowUp className="size-5" />
                        </span>
                      </button>
                    </a>
                  </div>

                  <div className="relative">
                    <Image
                      className="mt-8 lg:mt-0 -mb-4 lg:absolute lg:h-full lg:max-w-none lg:w-auto"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
