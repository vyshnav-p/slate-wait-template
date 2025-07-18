import { LuChartNoAxesColumn, LuSparkles, LuZap } from "react-icons/lu";

import { IAboutFeature, IAbout } from "@/type";
import { siteDetails } from "./siteDetails";

export const aboutFeatures: IAboutFeature[] = [
  {
    icon: <LuSparkles className="size-6" />,
    label: "Advanced ML & NLP",
  },
  {
    icon: <LuChartNoAxesColumn className="size-6" />,
    label: "Easy Analytics",
  },
  {
    icon: <LuZap className="size-6" />,
    label: "10x Faster",
  },
  {
    icon: <LuZap className="size-6" />,
    label: "10x Faster",
  },
];

export const aboutDetails: IAbout = {
  sectionId:'about',
  sectionLabel: `About ${siteDetails.siteName}`,
  description:
    "Toko is the fastest way to build a website. No templates. No drag and drop. No friction. Just tell Toko what you need, and it builds it for you. Instantly. Clean, responsive, and ready to go live.",
  features: aboutFeatures,
  videoSrc: "/videos/team.mp4",
};
