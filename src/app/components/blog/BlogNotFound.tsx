import Link from "next/link";
import React from "react";

const BlogNotFound = () => {
  return (
    <div className="w-full mb-20">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="w-60 h-60 xl:w-96 xl:h-96 border border-black rounded-full flex items-center justify-center">
          <div className="text-center font-kedua font-extrabold">
            <h1 className="text-6xl">404</h1>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-4">
          <div className="max-w-md">
            <h2 className="font-kedua text-2xl p-2">PAGE NOT FOUND</h2>
            <p className="font-pertama p-2">
              Oops! The page you are looking for does not exist. It might have
              been moved or deleted.
            </p>
          </div>

          <div className="self-start my-4 mx-2">
            <Link
              href="/blogs"
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

export default BlogNotFound;
