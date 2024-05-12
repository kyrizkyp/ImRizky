import Link from "next/link";
import React from "react";
import Plus from "../background/Plus";

interface MenuNavProps {
  pilihMenu: () => void;
}

const Menu = ({ pilihMenu }: MenuNavProps) => {
  const mengaturMenuKlik = () => {
    pilihMenu();
  };

  const urutanMenu = [
    {
      judul: "ABOUT ME",
      halaman: "/about-me",
    },

    {
      judul: "BLOGS",
      halaman: "/blogs",
    },

    {
      judul: "ARTWORK",
      halaman: "/artwork",
    },

    {
      judul: "GALLERY",
      halaman: "/gallery",
    },
  ];

  return (
    <div className="flex items-center flex-col md:flex-row justify-center w-full md:w-auto">
      <div className="flex items-center flex-col md:flex-row md:space-x-10 w-full md:w-auto">
        <Link
          href="/"
          onClick={mengaturMenuKlik}
          className="block md:hidden text-center py-2 text-4xl md:text-xl font-kedua w-full md:w-auto"
        >
          KYRIZKYP
        </Link>

        <div className="block md:hidden">
          <Plus />
        </div>

        {urutanMenu.map((menu, urutan) => (
          <Link
            key={urutan}
            href={menu.halaman}
            onClick={mengaturMenuKlik}
            className="py-2 mb-8 md:py-0 md:mb-0 text-4xl md:text-xl font-kedua w-full md:w-auto"
          >
            {menu.judul}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
