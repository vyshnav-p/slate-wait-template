import { LuBolt, LuChartLine, LuSparkles, LuWand } from "react-icons/lu";

import { IAboutFeature, IAbout } from "@/type";
import { siteDetails } from "./siteDetails";

export const aboutFeatures: IAboutFeature[] = [
  {
    icon: LuSparkles,
    label: "AI Builder",
  },
  {
    icon: LuChartLine,
    label: "Insights",
  },
  {
    icon: LuBolt,
    label: "Fast Deploy",
  },
  {
    icon: LuWand,
    label: "No Code",
  },
];

export const aboutDetails: IAbout = {
  sectionId: "about",
  sectionLabel: `About ${siteDetails.siteName}`,
  description:
    "Toko is the fastest way to build a website. No templates. No drag and drop. No friction. Just tell Toko what you need, and it builds it for you. Instantly. Clean, responsive, and ready to go live.",
  features: aboutFeatures,
  videoSrc: "/videos/laptop.mp4",
};
