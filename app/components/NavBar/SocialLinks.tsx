import React from "react";
import SocialLink, { socialLinks } from "./SocialLink";

const SocialLinks = () => {
  return (
    <div className="flex justify-start items-center my-5">
      {socialLinks.map(({ id, link, url }) => (
        <SocialLink key={id} url={url} link={link} id={id} />
      ))}
    </div>
  );
};

export default SocialLinks;
