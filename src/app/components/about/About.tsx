import React from "react";

const About = () => {
  const sampulBlog = [
    "https://fastly.picsum.photos/id/1031/450/800.jpg?hmac=_kCrMGQbOzYIo6Wa8ldrZpoNJeRKtRwigzN2mhsFoDg",

    "https://fastly.picsum.photos/id/907/450/800.jpg?hmac=gvL8sb4Dlt2h1pgn59onT0pf-_KUQ_FAluzrA_oYWf0",

    "https://fastly.picsum.photos/id/842/450/800.jpg?hmac=pq7l4koxScV85cmKrFgCIfOyVPqBcZpE01giefemM4Q",
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full">
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

          <div className="flex flex-col md:flex-row items-center">
            <div className="p-2 md:p-6">
              <h1 className="font-kedua font-extrabold text-3xl">ABOUT ME</h1>
            </div>

            <div className="relative p-4 self-start">
              <div className="max-w-xs p-4 border-l border-black">
                <p className="font-pertama">
                  Here is my about page, and I welcome you. On this about me
                  page.
                </p>
              </div>

              <div className="w-8 h-20 border-l border-t border-black absolute left-2 top-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
