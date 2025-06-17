import urlJoin from "url-join";
interface Category {
  label: string;
  tag: string;
  description: string;
}

const categories: Category[] = [

  {
    label: "Blockchain Concepts",
    tag: "blockchain-concepts",
    description: "For learners who want to understand blockchain and decentralized technologies in plain, accessible English.",
  },
  {
    label: "Blockchain English",
    tag: "blockchain-english",
    description: "For professionals and learners who need to 'level up' their language skills for blockchain and decentralized technologies.",
  },

];

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://fluentdev.vercel.app/";

export const config = {
  blogId: process.env.NEXT_PUBLIC_BLOG_ID || "clvlugru90000o4g8ahxp069s",
  baseUrl,
  logoUrl: urlJoin(baseUrl, "logo.png"),
  organization: process.env.NEXT_PUBLIC_BLOG_ORGANIZATION || "fluentDev",
  title: process.env.NEXT_PUBLIC_BLOG_TITLE || "fluentDev",
  description:
    process.env.NEXT_PUBLIC_BLOG_DESCRIPTION ||
    "Let's build something amazing!",
  categories,
};
