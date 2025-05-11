import urlJoin from "url-join";
interface Category {
  label: string;
  tag: string;
  description: string;
}

const categories: Category[] = [

  {
    label: "Web3 Foundations",
    tag: "concepts",
    description: "For learners who want to understand blockchain and decentralized technologies in plain, accessible English.",
  },
  {
    label: "English for Web3 Professionals",
    tag: "english",
    description: "For developers and professionals who want to improve their English communication while mastering blockchain concepts.",
  },
  // {
  //   label: "Startups",
  //   tag: "startup",
  //   description: "Spotlight on innovative AI startups transforming industries.",
  // },
  // {
  //   label: "Ethics",
  //   tag: "ethics",
  //   description: "Promoting responsible AI for positive impact.",
  // },
];

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const config = {
  blogId: process.env.NEXT_PUBLIC_BLOG_ID || "clvlugru90000o4g8ahxp069s",
  baseUrl,
  logoUrl: urlJoin(baseUrl, "logo.png"),
  organization: process.env.NEXT_PUBLIC_BLOG_ORGANIZATION || "Example Org",
  title: process.env.NEXT_PUBLIC_BLOG_TITLE || "Launched",
  description:
    process.env.NEXT_PUBLIC_BLOG_DESCRIPTION ||
    "Let's build something amazing!",
  categories,
};
