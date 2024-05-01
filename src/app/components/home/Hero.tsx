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
    <div className="flex flex-col items-center lg:items-start xl:items-center justify-center pt-6 lg:pt-0">
      <div className="max-w-xl xl:max-w-2xl text-center lg:text-left xl:text-center md:border-l xl:border-r md:border-black p-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-ketiga font-extrabold">
          INTRODUCE
        </h2>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-ketiga">
          I AM{" "}
          <span className="text-4xl md:text-5xl lg:text-6xl font-ketiga font-extrabold">
            RIZKY PUTRA
          </span>
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl font-ketiga">
          INDEPENDENT{" "}
          <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
            FRONT-END DEVELOPER
          </span>
        </p>
      </div>

      <div className="p-2 lg:p-4 border-b border-l lg:border-l-0 lg:border-r border-black">
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
