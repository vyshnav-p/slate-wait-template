import { IHero, IHeroBadge, IHeroSocialProof } from "@/type";
import { CgWebsite } from "react-icons/cg";

export const heroBadge: IHeroBadge = {
  icon: CgWebsite,
  text: "AI powered",
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
    "Create pixel-perfect websites with the power of AI. Just drag, drop, and go live.",
  socialProof: heroSocialProof,
  heroImage: "/dashboard.png",
};
