import React from "react";
import QuoteData from "@/app/data/QuoteData";

const Blog = () => {
  const sampulBlog = [
    "https://fastly.picsum.photos/id/1031/450/800.jpg?hmac=_kCrMGQbOzYIo6Wa8ldrZpoNJeRKtRwigzN2mhsFoDg",

    "https://fastly.picsum.photos/id/907/450/800.jpg?hmac=gvL8sb4Dlt2h1pgn59onT0pf-_KUQ_FAluzrA_oYWf0",

    "https://fastly.picsum.photos/id/842/450/800.jpg?hmac=pq7l4koxScV85cmKrFgCIfOyVPqBcZpE01giefemM4Q",
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="flex items-center justify-between gap-5 md:gap-10 xl:gap-10">
            {sampulBlog.map((sampul, urutan) => (
              <div
                className="w-[106px] h-52 md:w-48 md:h-72 lg:w-64 lg:h-[450px] xl:w-[350px] xl:h-[750px]"
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

          <div className="relative px-6 py-4 self-start">
            <div className="max-w-md p-4 border-l border-black">
              <p className="font-pertama">
                I recorded all the activities, whether ideas, quotes or about
                joys or sorrows here.
              </p>
            </div>

            <div className="w-6 h-16 border-l border-t border-black absolute left-4 top-6"></div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="p-4 max-w-2xl text-center mb-6">
            <h1 className="font-kedua font-extrabold text-3xl">BLOGS</h1>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:px-4">
            {QuoteData.map((quote, urutan) => (
              <div className="p-4" key={urutan}>
                <div className="p-2">
                  <h1 className="font-ketiga font-extrabold text-lg">
                    {quote.judul}
                  </h1>
                </div>
                <div className="max-w-md p-2">
                  <p className="font-pertama">{quote.deskripsi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
