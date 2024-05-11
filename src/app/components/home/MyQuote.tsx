import { IconArrowsUpDown } from "@tabler/icons-react";
import React from "react";
import Plus from "../background/Plus";

const MyQuote = () => {
  return (
    <div className="w-full mx-4 lg:mx-24 xl:mx-56 2xl:mx-80">
      <div className="flex flex-col md:flex-row items-center  justify-center md:justify-between">
        <div className="flex items-center justify-center relative">
          <div className="max-w-sm md:max-w-md 2xl:max-w-2xl p-4">
            <div className="p-4 text-left border-l border-black">
              <h1 className="font-ketiga font-extrabold text-xl p-1">
                RIZPUTRA
              </h1>
              <p className="font-pertama p-1">
                Every process must have a purpose, every code has a meaning be
                it an error or a bug. And every time I love I am self-aware.
              </p>

              <p className="font-pertama p-1">
                Stay focused on the main goal, other things will follow by
                themselves.
              </p>
            </div>
          </div>

          <div className="w-8 h-36 md:h-28 border-l border-t border-black absolute left-2 top-[28px]"></div>
        </div>

        <div className="block md:hidden">
          <Plus />
        </div>

        <div className="p-4">
          <div className="w-64 h-64 xl:w-80 xl:h-80">
            <img
              src="https://fastly.picsum.photos/id/155/200/200.jpg?hmac=D_Tf9XAIteS9U6InmFX2j3DXYkvhlEOOkGGiWuMwU9Q"
              alt="Me"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyQuote;
