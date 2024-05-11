import React from "react";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandInstagram,
  IconBrandTiktok,
} from "@tabler/icons-react";

const IconLink = () => {
  const icons = [
    {
      Icon: IconBrandInstagram,
      key: "instagram",
      link: "https://www.instagram.com/kyrzkyp/",
    },
    {
      Icon: IconBrandGithub,
      key: "github",
      link: "https://github.com/rochmadrizky",
    },
    {
      Icon: IconBrandTiktok,
      key: "tiktok",
      link: "https://www.tiktok.com/@rizkysemar",
    },
    {
      Icon: IconBrandGmail,
      key: "gmail",
      link: "mailto:rochmadrizkyputra@gmail.com",
    },
  ];

  return (
    <div className="flex flex-row md:flex-col items-center justify-center">
      <div className="flex flex-row md:flex-col items-center justify-center">
        {icons.map(({ Icon, key, link }) => (
          <div key={key} className="p-2">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Icon />
            </a>
          </div>
        ))}
      </div>

      <div className="my-2">
        <div className="w-14 md:w-0 md:h-20 lg:h-0 xl:h-20 border-b md:border-b-0 md:border-l border-black"></div>
      </div>
    </div>
  );
};

export default IconLink;
