import Link from "next/link";
import React from "react";
import Dropdown from "./Dropdown";

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
      judul: "BLOG",
      halaman: "/blogs",
    },
  ];

  return (
    <div className=" p-4 flex items-center flex-col md:flex-row justify-between w-full bg-white">
      <div className="px-4 max-w-7xl mx-auto flex items-center flex-col md:flex-row justify-between w-full">
        <Link href="/" onClick={pilihMenu}>
          <p className="text-3xl font-ketiga font-extrabold mb-12 md:mb-0">
            RIZPUTRA
          </p>
        </Link>

        <div className="flex items-center flex-col md:flex-row md:space-x-4">
          {urutanMenu.map((menu, urutan) => (
            <Link
              key={urutan}
              href={menu.halaman}
              onClick={mengaturMenuKlik}
              className="mb-4 md:mb-0 text-lg font-kedua"
            >
              {menu.judul}
            </Link>
          ))}

          <Dropdown pilihMenu={pilihMenu} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
