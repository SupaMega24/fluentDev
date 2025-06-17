import { config } from "@/config";
// import { Button } from "./ui/button";
// import { Rss } from "lucide-react";
// import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXTwitter, faLinkedin, faDiscord, faYoutube } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (

    <div className="container mx-auto my-4 px-4 max-w-6xl ">
      <div className="flex justify-between items-center">
        <div className="text-sm mt-4">
          © {config.organization} {new Date().getFullYear()}
        </div>
        {/* <div className="hidden md:flex text-1xl gap-4 items-center">
          <Link href="https://x.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} className="text-black hover:text-blue-500" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-black hover:text-blue-500" />
          </Link>
          <Link href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faDiscord} className="text-black hover:text-blue-500" />
          </Link>
          <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} className="text-black hover:text-blue-500" />
          </Link>
        </div> */}
      </div>
    </div>
  );
};
