import { IFooter, IFooterSocialLink } from "@/type";
import { siteDetails } from "./siteDetails";
import { TbBrandX } from "react-icons/tb";
import { TbBrandYoutube } from "react-icons/tb";

export const socialLinks: IFooterSocialLink[] = [
  {
    icon: TbBrandX,
    href: "https://twitter.com/",
    label: "Twitter",
  },
  {
    icon: TbBrandYoutube,
    href: "https://youtube.com/",
    label: "YouTube",
  },
];

export const footerDetails: IFooter = {
  copyrightNotice: `© 2025, ${siteDetails.siteName}`,
  socialLinks,
};
