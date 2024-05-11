import Link from "next/link";
import React from "react";

const IPage = () => {
  const kumpulan = [
    {
      foto: "https://fastly.picsum.photos/id/1031/450/800.jpg?hmac=_kCrMGQbOzYIo6Wa8ldrZpoNJeRKtRwigzN2mhsFoDg",
      link: "/about-me",
    },

    {
      foto: "https://fastly.picsum.photos/id/907/450/800.jpg?hmac=gvL8sb4Dlt2h1pgn59onT0pf-_KUQ_FAluzrA_oYWf0",
      link: "/gallery",
    },

    {
      foto: "https://fastly.picsum.photos/id/842/450/800.jpg?hmac=pq7l4koxScV85cmKrFgCIfOyVPqBcZpE01giefemM4Q",
      link: "/blogs",
    },
  ];

  return (
    <div className="w-full mx-4 md:mx-10 lg:mx-16 xl:mx-24 2xl:mx-80">
      <div className="flex items-center justify-between gap-4 xl:gap-0">
        {kumpulan.map((urutan, konten) => (
          <Link
            href={urutan.link}
            className="w-full h-full xl:w-[350px] xl:h-[750px] flex items-center justify-center bg-black bg-opacity-50 hover:bg-white hover:bg-opacity-10"
            key={konten}
          >
            <img
              src={urutan.foto}
              alt="Me"
              className="object-cover w-full h-full -z-10"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default IPage;
