import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandInstagram,
  IconBrandTiktok,
} from "@tabler/icons-react";

import React from "react";
import Me from "./Me";

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
    <div className="flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:relative">
        <div className="flex flex-col md:items-center lg:items-start justify-center order-2 lg:order-1 lg:absolute lg:z-10 lg:-left-52 xl:-left-72">
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
              <span className="font-pertama font-bold">
                FRONT-END DEVELOPER
              </span>
            </p>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-center gap-6">
              {social.map((media, order) => (
                <a key={order} href={media.link} target="_blank">
                  {media.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 mb-8 lg:mb-0 lg:relative lg:-right-36 xl:-right-72">
          <Me />
        </div>
      </div>
    </div>
  );
};

export default Hero;
