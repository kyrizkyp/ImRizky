import React from "react";
import Plus from "../background/Plus";
import HalamanData from "@/app/data/HalamanData";
import SampulData from "@/app/data/SampulData";

const About = () => {
  const fotoAboutMe = HalamanData.find(
    (data) => data.link === "/about-me"
  )?.foto;

  const sampulKiri = SampulData.find((data) => data.judul === "kiri")?.foto;

  const sampulKanan = SampulData.find((data) => data.judul === "kanan")?.foto;

  const sampulAbout = [sampulKiri, fotoAboutMe, sampulKanan];

  const aboutMe = [
    {
      judul: "01",
      deskripsi:
        "Hello! I am Rizky Putra, profession as a Front-End Web Developer. I have a passion for expressing my imagination into stunning visual works. Each type of code is a step towards a compelling visual masterpiece, where imagination meets technology to create an unforgettable experience.",
    },

    {
      judul: "02",
      deskripsi:
        "Fascinated by the world of Front-End Web Development for its ability to transform concepts into stunning visual masterpieces. For me, being a Front End Web Developer is an opportunity to combine creativity with technology, creating engaging and aesthetically pleasing online experiences.",
    },

    {
      judul: "MY GOAL",
      deskripsi:
        "My goal as a Front-End Web Developer is, with the aim of taking the user experience to the next level, creating harmony between beautiful design and flawless functionality, and inspiring through code that builds a bridge between imagination and digital reality.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full px-4 xl:px-24 2xl:px-72">
        <div className="flex items-center justify-between gap-2 md:gap-4 xl:gap-0">
          {sampulAbout.map((sampul, urutan) => (
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
        <div className="relative p-4 self-start">
          <div className="max-w-md p-4 border-l border-black">
            <p className="font-pertama">
              Here is my about page, and I welcome you. On this about me page.
            </p>
          </div>

          <div className="w-6 h-16 border-l border-t border-black absolute left-2 top-6"></div>
        </div>
      </div>

      <div>
        <Plus />
      </div>

      <div className="flex flex-col items-center justify-center my-4">
        <div className="p-4 max-w-2xl text-center md:mb-6">
          <h1 className="font-kedua font-extrabold text-3xl">ABOUT ME</h1>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center mb-10 md:mb-14 lg:mb-20 md:px-4">
          {aboutMe.map((about, urutan) => (
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

      <div className="w-full px-4 lg:px-20 xl:px-52 2xl:px-96">
        <div className="flex flex-col md:flex-row items-center  justify-center md:justify-between">
          <div className="p-6 mb-4 md:mb-0">
            <div className="p-4 relative">
              <div className="p-4 flex flex-col items-center justify-center border-l border-t border-black">
                <div className="p-2">
                  <p className="font-kedua font-extrabold text-xl">{"< / >"}</p>
                </div>

                <div className="p-2">
                  <h3 className="font-ketiga font-extrabold text-4xl">
                    KYRIZKYP
                  </h3>
                </div>
              </div>

              <div className="h-14 w-32 absolute top-0 right-8 border-t border-r border-black"></div>

              <div className="h-14 w-28 absolute top-28 -left-0 border-l border-b border-black"></div>
            </div>
          </div>

          <div className="max-w-[340px] md:max-w-md 2xl:max-w-xl p-4 relative">
            <div className="absolute top-0 -left-0 lg:-left-2">
              <p className="font-kedua font-extrabold text-2xl">{"/"}</p>
            </div>
            <p className="font-pertama">
              The minimalist design creates a focused and immersive atmosphere.
              Every time I open Visual Studio Code, it&apos;s the start of an
              artistic journey where I turn an idea into a stunning visual
              masterpiece. With meticulous attention to detail, I laid out every
              line of code and every pixel with dedication and joy, creating a
              charming harmony amidst the technical complexity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
