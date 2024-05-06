import React from "react";

const Blog = () => {
  const sampulBlog = [
    "https://fastly.picsum.photos/id/1031/450/800.jpg?hmac=_kCrMGQbOzYIo6Wa8ldrZpoNJeRKtRwigzN2mhsFoDg",

    "https://fastly.picsum.photos/id/907/450/800.jpg?hmac=gvL8sb4Dlt2h1pgn59onT0pf-_KUQ_FAluzrA_oYWf0",

    "https://fastly.picsum.photos/id/842/450/800.jpg?hmac=pq7l4koxScV85cmKrFgCIfOyVPqBcZpE01giefemM4Q",
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full mb-6">
          <div className="flex items-center justify-between gap-2 md:gap-6 xl:gap-10 mb-6">
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

          <div className="relative p-4 self-start">
            <div className="max-w-xs p-4 border-l border-black">
              <p className="font-pertama">
                I recorded all the activities, whether ideas, quotes or about
                joys or sorrows here.
              </p>
            </div>

            <div className="w-8 h-20 border-l border-t border-black absolute left-2 top-6"></div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="p-4 max-w-2xl text-center">
            <h1 className="font-kedua font-extrabold text-3xl">BLOGS</h1>
            <p className="font-pertama text-lg p-2">
              Collection of my diaries.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start justify-center">
            <div className="p-4">
              <div className="p-2">
                <h1 className="font-ketiga font-extrabold text-lg">
                  BETWEEN LOVE AND CODE
                </h1>
              </div>

              <div className="max-w-md p-2">
                <p className="font-pertama">
                  Destiny is the structure in the code of life, life is a
                  dynamic interface, and love is a design element that gives
                  color to every experience.
                </p>
              </div>
            </div>

            <div className="p-4">
              <div className="p-2">
                <h1 className="font-ketiga font-extrabold text-lg">
                  SHINE YOURSELF
                </h1>
              </div>

              <div className="max-w-md p-2">
                <p className="font-pertama">
                  Sometimes, we have to be a source of strength for ourselves.
                  Start today with the belief that you have the power to change
                  the world around you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
