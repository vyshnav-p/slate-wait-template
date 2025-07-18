import { IHero, IHeroBadge, IHeroSocialProof } from "@/type";
import { LuSparkles } from "react-icons/lu";

export const heroBadge: IHeroBadge = {
  icon: LuSparkles,
  text: "AI Magic",
};

export const heroSocialProof: IHeroSocialProof = {
  images: [
    "/images/user_avatar_1.jpg",
    "/images/user_avatar_2.jpg",
    "/images/user_avatar_3.jpg",
  ],
  text: "1000 + already joined the waitlist",
};

export const heroDetails: IHero = {
  sectionId: "hero",
  badge: heroBadge,
  title: "Build Stunning Websites in Seconds",
  subtitle:
    "Just give a prompt and watch your site come to life.",
  socialProof: heroSocialProof,
  heroImage: "/images/hero_image.png",
};
