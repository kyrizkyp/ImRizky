import React from "react";

interface GalleryProps {
  batasGambar: number | null;
  tampilkanSampul: boolean;
}

const Gallery = ({
  batasGambar = null,
  tampilkanSampul = true,
}: GalleryProps) => {
  const sampulGaleri = [
    "https://fastly.picsum.photos/id/1031/450/800.jpg?hmac=_kCrMGQbOzYIo6Wa8ldrZpoNJeRKtRwigzN2mhsFoDg",

    "https://fastly.picsum.photos/id/907/450/800.jpg?hmac=gvL8sb4Dlt2h1pgn59onT0pf-_KUQ_FAluzrA_oYWf0",

    "https://fastly.picsum.photos/id/842/450/800.jpg?hmac=pq7l4koxScV85cmKrFgCIfOyVPqBcZpE01giefemM4Q",
  ];

  const fotoGaleri = [
    "https://fastly.picsum.photos/id/880/400/400.jpg?hmac=Eoe6bEjFUkr-C09uoHVdB8m0Ovh5xlx9V2O27ztIQv8",

    "https://fastly.picsum.photos/id/942/400/400.jpg?hmac=y355j1CfhI2JqFP_f0sI2sfBkcAepP6ioOxgln5jIhg",

    "https://fastly.picsum.photos/id/882/400/400.jpg?hmac=xebvS4Wti6aPClqy96FywD_kgKvrdiIfXTsSMTxFXC8",

    "https://fastly.picsum.photos/id/872/400/400.jpg?hmac=wM1qrHayxf8WMj6Tmpz_GcNb8n7n9-XQdETTN3BaDz0",

    "https://fastly.picsum.photos/id/19/400/400.jpg?hmac=v2_t0RlKnDVx_OlDdbfL5SzRrBPOxzYMOYLbqWjour0",

    "https://fastly.picsum.photos/id/670/400/400.jpg?hmac=HYybLQYwTT1ci14shwpLCkn6OJIATpmcBct9fr_LCOU",

    "https://fastly.picsum.photos/id/800/400/400.jpg?hmac=PWaSsJDkkyf4X86EcFWyc0ip6UADHEOOanJZbIba0qU",

    "https://fastly.picsum.photos/id/496/400/400.jpg?hmac=8or0mw_rugRSBRDFhLAj770EHslVmfHZEu0a_NKkxoY",

    "https://fastly.picsum.photos/id/573/400/400.jpg?hmac=UJuahx_SMzEr-lOyuAi7l9K2APmQrMT7EHhiyNT7Q8M",
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        {tampilkanSampul && (
          <div className="w-full mb-6">
            <div className="flex items-center justify-between gap-2 md:gap-6 xl:gap-10">
              {sampulGaleri.map((sampul, urutan) => (
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
              <div className="max-w-md p-4 border-l border-black">
                <p className="font-pertama">
                  Photo galleries are like love revealing beauty in the details.
                  Each image is a memory, recording a precious moment. Like
                  relationships, composition and lighting build a story.
                </p>
              </div>

              <div className="w-8 h-24 border-l border-t border-black absolute left-2 top-6"></div>
            </div>
          </div>
        )}

        <div className="flex flex-col items-center justify-center">
          <div className="p-4 max-w-2xl text-center">
            <h1 className="font-kedua font-extrabold text-3xl">MY GALLERY</h1>
            <p className="font-pertama text-lg p-2">
              A collection of my photos.
            </p>
          </div>

          <div className="flex items-center justify-center p-2">
            <div className="grid grid-cols-3">
              {(batasGambar
                ? fotoGaleri.slice(0, batasGambar)
                : fotoGaleri
              ).map((kumpulan, urutan) => (
                <div
                  key={urutan}
                  className="w-28 h-28 md:w-52 md:h-52 lg:w-60 lg:h-60 xl:w-72 xl:h-72 p-1"
                >
                  <img src={kumpulan} alt="galeri" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
