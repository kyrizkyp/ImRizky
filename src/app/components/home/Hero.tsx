import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandInstagram,
  IconBrandTiktok,
} from "@tabler/icons-react";

import React from "react";

const Hero = () => {
  const social = [
    {
      icon: <IconBrandGithub />,
      link: "https://github.com/rochmadrizky",
    },

    {
      icon: <IconBrandInstagram />,
      link: "https://www.instagram.com/rizkyevers/",
    },

    {
      icon: <IconBrandTiktok />,
      link: "https://www.tiktok.com/@rizkysemar",
    },

    {
      icon: <IconBrandGmail />,
      link: "mailto:rochmadrizkyputra@gmail.com",
    },
  ];

  return (
    <div className="flex flex-col items-center lg:items-start xl:items-center justify-center pt-4 md:pt-6 lg:pt-0">
      <div className="max-w-xl xl:max-w-2xl text-center lg:text-left xl:text-center md:border-l xl:border-r md:border-black p-4">
        <h2 className="text-3xl md:text-5xl xl:text-6xl font-pertama font-bold">
          HEY THERE!
        </h2>

        <h1 className="text-3xl md:text-5xl xl:text-6xl font-pertama font-bold">
          I&apos;M{" "}
          <span className="text-4xl md:text-6xl xl:text-7xl font-pertama font-bold">
            RIZKY PUTRA
          </span>
        </h1>

        <p className="text-xl md:text-3xl xl:text-4xl font-pertama font-bold">
          INDEPENDENT{" "}
          <span className="font-pertama font-bold">FRONT-END DEVELOPER</span>
        </p>
      </div>

      <div className="p-2 lg:p-4 border-b border-r border-black">
        <div className="flex items-center justify-center gap-6 mb-2 lg:mb-0">
          {social.map((media, order) => (
            <a key={order} href={media.link} target="_blank">
              {media.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
