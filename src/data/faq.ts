import { IFAQ } from "@/type";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
  {
    question: `Is ${siteDetails.siteName} free to use?`,
    answer: `${siteDetails.siteName} offers a free tier so you can start building immediately. Premium plans with more features are available when you're ready to scale.`,
  },
  {
    question: `Do I need to know how to code to use ${siteDetails.siteName}?`,
    answer: `Not at all. ${siteDetails.siteName} is designed for everyone. Just describe your website idea in plain English, and our AI will handle the design and structure.`,
  },
  {
    question: `How fast can I publish a website with ${siteDetails.siteName}?`,
    answer: `With ${siteDetails.siteName}, you can go from idea to live site in less than a minute. No templates, no drag and drop—just instant results.`,
  },
  {
    question: `Can I customize the website after it's generated?`,
    answer: `Yes! After AI generates your site, you can easily tweak the content, layout, and style to make it your own—all without touching code.`,
  },
  {
    question: `Will my site work on mobile and tablet?`,
    answer: `Absolutely. Every site built with ${siteDetails.siteName} is fully responsive and optimized for all devices by default.`,
  },
  {
    question: `Is my data safe with ${siteDetails.siteName}?`,
    answer: `${siteDetails.siteName} follows best practices in security and privacy. We don’t store sensitive content and your site data is protected with industry-standard encryption.`,
  }
];
