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
    <div className="flex flex-col items-center lg:items-start justify-center pt-4 md:pt-6 lg:pt-0">
      <div className="max-w-xl text-center lg:text-left p-4">
        <h2 className="text-3xl md:text-5xl font-pertama font-bold">
          HEY THERE!
        </h2>

        <h1 className="text-3xl md:text-5xl font-pertama font-bold">
          I&apos;M{" "}
          <span className="text-4xl md:text-6xl font-pertama font-bold">
            RIZKY PUTRA
          </span>
        </h1>

        <p className="text-xl md:text-3xl font-pertama font-bold">
          INDEPENDENT{" "}
          <span className="font-pertama font-bold">FRONT-END DEVELOPER</span>
        </p>
      </div>

      <div className="p-2 lg:p-4">
        <div className="flex items-center justify-center gap-6">
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
