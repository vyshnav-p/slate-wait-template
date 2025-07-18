import { ReactElement } from "react";
import { IconType } from "react-icons";

export interface IFAQs {
  question: string;
  answer: string;
}

export interface IFAQDetails {
  sectionId: string;
  sectionLabel: string;
  faqs: IFAQs[];
}

export interface IAboutFeature {
  icon: ReactElement;
  label: string;
}

export interface IAbout {
  sectionId: string;
  sectionLabel: string;
  description: string;
  features: IAboutFeature[];
  videoSrc: string;
}

export interface IFooterSocialLink {
  icon: IconType;
  href: string;
}

export interface IFooter {
  copyrightNotice: string;
  socialLinks: IFooterSocialLink[];
}
