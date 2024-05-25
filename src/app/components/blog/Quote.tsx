import React from "react";
import QuoteData from "@/app/data/QuoteData";

const Quote = () => {
  return (
    <div className="w-full px-4 xl:px-12 2xl:px-32 my-2">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between">
        {QuoteData.map((quote, urutan) => (
          <div className="p-4" key={urutan}>
            <h1 className="font-kedua font-extrabold text-xl mb-2">
              {quote.no}
            </h1>

            <h2 className="font-ketiga font-extrabold text-lg">
              {quote.judul}
            </h2>

            <div className="max-w-md">
              <p className="font-pertama">{quote.deskripsi}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quote;
