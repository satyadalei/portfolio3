import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import ReactIcon from "@/assets/icons/react.svg";
import TechIcon from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import SmileEmoji from "@/assets/images/memoji-smile.png";

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
  },
  {
    title: "Photography",
    emoji: "📷",
  },
  {
    title: "Gaming",
    emoji: "🎮",
  },
  {
    title: "Hiking",
    emoji: "👞",
  },
  {
    title: "Music",
    emoji: "🎵",
  },
  {
    title: "Fitness",
    emoji: "🏋️",
  },
  {
    title: "Reading",
    emoji: "📚",
  },
];

export const AboutSection = () => {
  return (
    <div className="pb-[1200px]">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div>
          <Card>
            <StarIcon />
            <h3>My reads</h3>
            <p>Explore the books shaping my perspectives.</p>
            <Image
              src={bookImage.src}
              alt="Book named Atomic Habits"
              width="500"
              height={500}
            />
          </Card>
          <Card>
            <StarIcon />
            <h3>My Toolbox</h3>
            <p>
              Explore the technologies and tools I use to craft exceptional
              digital experience.
            </p>
            <div>
              {toolboxItems.map((item, i) => {
                return (
                  <div key={item.title}>
                    <TechIcon component={item.iconType} />
                    <div>{item.title}</div>
                  </div>
                );
              })}
            </div>
          </Card>

          <Card>
            <StarIcon />
            <h3>Beyond Code</h3>
            <p>Explore my interest and hobbies beyond digital realm.</p>
            <div>
              {hobbies.map((hobby, i) => {
                return (
                  <div key={hobby.title}>
                    <span>{hobby.emoji}</span>
                    <span>{hobby.title}</span>
                  </div>
                );
              })}
            </div>
          </Card>

          <Card>
            <Image width={400} height={400} src={mapImage.src} alt="Map" />
            <Image width={40} height={40} src={SmileEmoji.src} alt="Map" />
          </Card>
        </div>
      </div>
    </div>
  );
};
