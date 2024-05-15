import React from "react";
import { SocialIcon } from "react-social-icons";

interface SocialLinkProp {
  id: number;
  url: string;
  link: string;
}

export const socialLinks: SocialLinkProp[] = [
  {
    id: 1,
    url: "https://github.com/",
    link: "https://github.com/Mohamed-safras",
  },
  {
    id: 2,
    url: "https://www.linkedin.com",
    link: "https://www.linkedin.com/in/a-w-mohamed-safras/",
  },
  {
    id: 3,
    url: "https://www.instagram.com/",
    link: "https://www.instagram.com/aw_safras/",
  },
  {
    id: 4,
    url: "https://www.facebook.com/",
    link: "https://www.facebook.com/profile.php?id=100024690610908",
  },
];

const SocialLink = ({ url, link }: SocialLinkProp) => {
  return (
    <SocialIcon
      url={url}
      href={link}
      fgColor="currentColor"
      bgColor="transparent"
      style={{ height: 50, width: 50 }}
      className="text-gray-700 hover:text-red-500"
    />
  );
};

export default SocialLink;
