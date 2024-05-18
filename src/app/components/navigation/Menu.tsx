import Link from "next/link";
import React from "react";
import { IconPlus } from "@tabler/icons-react";

interface MenuNavProps {
  pilihMenu: () => void;
}

const Menu = ({ pilihMenu }: MenuNavProps) => {
  const mengaturMenuKlik = () => {
    pilihMenu();
  };

  const urutanMenu = [
    {
      tag: "/ Introduction",
      judul: "ABOUT ME",
      halaman: "/about-me",
    },

    {
      tag: "/ Notes",
      judul: "BLOGS",
      halaman: "/blogs",
    },

    {
      tag: "/ Snapshot",
      judul: "GALLERY",
      halaman: "/gallery",
    },

    {
      tag: "/ Code art",
      judul: "ARTWORK",
      halaman: "/artwork",
    },
  ];

  return (
    <div className="flex items-center flex-col md:flex-row justify-center w-full md:w-auto">
      <div className="flex items-center flex-col md:flex-row md:space-x-10 w-full md:w-auto">
        <Link
          href="/"
          onClick={mengaturMenuKlik}
          className="block md:hidden text-center p-2 text-4xl md:text-xl font-ketiga font-extrabold w-full md:w-auto"
        >
          KYRIZKYP
        </Link>

        <div className="block md:hidden">
          <div className="my-6">
            <IconPlus className="stroke-1 text-gray-400" />
          </div>
        </div>

        {urutanMenu.map((menu, urutan) => (
          <Link
            key={urutan}
            href={menu.halaman}
            onClick={mengaturMenuKlik}
            className="w-full md:w-auto mb-4 md:mb-0"
          >
            <div className="block md:hidden">
              <div>
                <p className="font-pertama text-sm text-gray-400g">
                  {menu.tag}
                </p>
              </div>
            </div>

            <h1 className="text-2xl md:text-lg font-kedua px-2 md:px-0">
              {menu.judul}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
