import React from "react";
import Plus from "../background/Plus";
import {
  IconBrandNextjs,
  IconBrandNuxt,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandVue,
} from "@tabler/icons-react";

const Artwork = () => {
  const sampulArtwork = [
    "/bg/kiri.jpg",

    "https://fastly.picsum.photos/id/907/450/800.jpg?hmac=gvL8sb4Dlt2h1pgn59onT0pf-_KUQ_FAluzrA_oYWf0",

    "/bg/kanan.jpg",
  ];

  const penjelasan = [
    {
      judul: "01",
      deskripsi:
        "Welcome to my Artwork page! I specialize in creating unique and detailed websites or landing pages, with a focus on creating the look of the website.",
    },

    {
      judul: "02",
      deskripsi:
        "Why do I call the Front-End field a Artwork like the title above? In my opinion, because it involves creativity, beauty, visual and attractive design that can be felt by users.",
    },

    {
      judul: "03",
      deskripsi:
        "In the process of creating a website or landing page, I use several frameworks that I often use namely. Next Js, React Js, Nuxt Js, and Vue Js. to set the style I use Tailwind CSS.",
    },
  ];

  const iconsData = [
    {
      link: "https://nextjs.org/",
      icon: (
        <IconBrandNextjs className="w-12 h-12 md:w-20 md:h-20 stroke-[0.6]" />
      ),
    },

    {
      link: "https://react.dev/",
      icon: (
        <IconBrandReact className="w-12 h-12 md:w-20 md:h-20 stroke-[0.6]" />
      ),
    },

    {
      link: "https://nuxt.com/",
      icon: (
        <IconBrandNuxt className="w-12 h-12 md:w-20 md:h-20 stroke-[0.6]" />
      ),
    },

    {
      link: "https://vuejs.org/",
      icon: <IconBrandVue className="w-12 h-12 md:w-20 md:h-20 stroke-[0.6]" />,
    },

    {
      link: "https://tailwindcss.com/",
      icon: (
        <IconBrandTailwind className="w-12 h-12 md:w-20 md:h-20 stroke-[0.6]" />
      ),
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full px-4 xl:px-24 2xl:px-72">
        <div className="flex items-center justify-between gap-2 md:gap-4 xl:gap-0">
          {sampulArtwork.map((sampul, urutan) => (
            <div
              className="w-full h-full xl:w-[350px] xl:h-[750px]"
              key={urutan}
            >
              <img
                src={sampul}
                alt="Me"
                className="object-cover w-full h-full -z-10"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full px-4 md:px-10 lg:px-16 xl:px-24 2xl:px-80 mb-4">
        <div className="self-start flex items-center">
          <div className="p-2 text-center">
            <h1 className="font-kedua font-extrabold text-3xl">ARTWORK</h1>
          </div>

          <div className="relative p-4">
            <div className="max-w-xs p-4 border-l border-black">
              <p className="font-pertama">
                I call the Front-End field an art or Artwork.
              </p>
            </div>

            <div className="w-6 h-16 border-l border-t border-black absolute left-2 top-6"></div>
          </div>
        </div>
      </div>

      <div>
        <Plus />
      </div>

      <div className="my-2">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center mb-10 md:mb-14 lg:mb-20 md:px-4">
          {penjelasan.map((about, urutan) => (
            <div className="p-4" key={urutan}>
              <div className="p-2">
                <h2 className="font-ketiga font-extrabold text-lg">
                  {about.judul}
                </h2>
              </div>
              <div className="max-w-md p-2">
                <p className="font-pertama">{about.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-5 self-start md:self-center justify-center mb-8">
        {iconsData.map((data, urutan) => (
          <div className="px-2 md:px-4 xl:px-6" key={urutan}>
            <a href={data.link} target="_blank" rel="noopener noreferrer">
              {data.icon}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artwork;
