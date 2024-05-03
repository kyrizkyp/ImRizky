import { IconArrowsUpDown } from "@tabler/icons-react";
import React from "react";

const MyQuote = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        <div className="p-4">
          <div>
            <img
              src="https://fastly.picsum.photos/id/155/200/200.jpg?hmac=D_Tf9XAIteS9U6InmFX2j3DXYkvhlEOOkGGiWuMwU9Q"
              alt="Me"
            />
          </div>
        </div>

        <div className="block md:hidden p-4">
          <IconArrowsUpDown />
        </div>

        <div className="flex items-center justify-center relative">
          <div className="max-w-sm md:max-w-md p-4 md:p-6 text-center md:text-left border-l border-black">
            <h1 className="font-ketiga font-extrabold text-xl p-1">RIZPUTRA</h1>
            <p className="font-pertama p-1">
              Every process must have a purpose, every code has a meaning be it
              an error or a bug. And every time I love I am self-aware.
            </p>
          </div>

          <div className="w-8 h-20 border-l border-t border-black absolute -left-2 top-6"></div>
        </div>
      </div>
    </div>
  );
};

export default MyQuote;
