import Link from "next/link";
import React from "react";

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
    <div className="flex items-center flex-col md:flex-row mx-10 md:mx-0 gap-6">
      <div className="flex items-center flex-col md:flex-row md:gap-6">
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
      </div>
    </div>
  );
};

export default Menu;
