import { IconArrowsUpDown } from "@tabler/icons-react";
import React from "react";

const MyQuote = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center space-x-4">
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

        <div className="max-w-sm md:max-w-md p-4 md:p-6 text-center md:text-left">
          <h1 className="font-kedua text-lg md:text-2xl p-1">RIZPUTRA</h1>
          <p className="font-pertama text-sm md:text-lg p-1">
            Every process must have a purpose, Every code has a meaning be it an
            error or a bug, And every time I love I am self-aware.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyQuote;
