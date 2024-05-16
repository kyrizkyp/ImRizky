import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center my-4 md:my-40 xl:my-20 2xl:my-40">
      <div className="flex flex-col xl:flex-row items-center justify-center md:gap-10 xl:gap-20">
        <div className="w-60 h-60 lg:w-80 lg:h-80 xl:w-[400px] xl:h-[400px] border border-black rounded-full flex items-center justify-center">
          <div className="text-center font-kedua font-extrabold">
            <h1 className="text-6xl">404</h1>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-4">
          <div className="max-w-md text-center xl:text-left">
            <h2 className="font-kedua text-4xl p-2">PAGE NOT FOUND</h2>
            <p className="font-pertama p-2">
              Oops! The page you are looking for does not exist. It might have
              been moved or deleted.
            </p>
          </div>

          <div className="xl:self-start my-4 mx-2">
            <Link
              href="/"
              className="px-6 py-2 bg-black text-white font-ketiga font-extrabold"
            >
              GO BACK
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
