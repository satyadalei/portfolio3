"use client";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import ReactIcon from "@/assets/icons/react.svg";
import mapImage from "@/assets/images/map.png";
import SmileEmoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "GitHub",
    iconType: GitHubIcon,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📷",
    left: "50%",
    top: "5%",
  },
  {
    title: "Hiking",
    emoji: "👞",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "🏋️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  return (
    <div className="py-20 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My reads"
                description=" Explore the books shaping my perspectives."
              />
              <div className="w-40 mx-auto mt-8">
                <Image
                  src={bookImage.src}
                  alt="Book named Atomic Habits"
                  width="500"
                  height={500}
                />
              </div>
            </Card>
            <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional
              digital experience."
                className=""
              />
              <ToolboxItems
                itemsWrapperClass="animate-move-left [animation-duration:20s]"
                items={toolboxItems}
                className="mt-6"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClass="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="p-0 h-[320px] flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                className="px-6 py-6"
                title="Beyond Code"
                description="Explore my interest and hobbies beyond digital realm."
              />
              <div className="flex-1 relative" ref={ref}>
                {hobbies.map((hobby, i) => {
                  return (
                    <motion.div
                      className="inline-flex items-center gap-2 px-6 rounded-full py-1.5 bg-gradient-to-r from-emerald-300 to-sky-400 absolute"
                      key={hobby.title}
                      style={{
                        top: hobby.top,
                        left: hobby.left,
                      }}
                      drag
                      dragConstraints={ref}
                    >
                      <span className="font-medium text-gray-950">
                        {hobby.title}
                      </span>
                      <span>{hobby.emoji}</span>
                    </motion.div>
                  );
                })}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                width={400}
                height={400}
                src={mapImage.src}
                alt="Map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:outline after:outline-2 after:absolute after:inset-0 after-outline-offset-2 after:rounded-full after:-outline-offset-2 after:outline-gray-950/30">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-sky-300 rounded-full"></div>
                <div className="absolute inset-0 animate-ping [animation-duration:2s] bg-gradient-to-r from-emerald-400 to-sky-300 rounded-full"></div>
                <Image
                  width={40}
                  height={40}
                  src={SmileEmoji.src}
                  className="size-20 relative z-10"
                  alt="Map"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
