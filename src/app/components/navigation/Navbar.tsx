"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Menu from "./Menu";

const Navbar = () => {
  const [bukaMenu, mengaturMenuTerbuka] = useState(false);
  const [animasiPutar, mengaturAnimasiPutar] = useState(false);

  const klikMenuIcon = () => {
    mengaturMenuTerbuka(!bukaMenu);
    mengaturAnimasiPutar(!animasiPutar);
  };

  const pilihMenu = () => {
    mengaturMenuTerbuka(false);
    mengaturAnimasiPutar(false);
  };

  useEffect(() => {
    const klikEsc = (klik: { keyCode: number }) => {
      if (klik.keyCode === 27 && bukaMenu) {
        mengaturMenuTerbuka(false);
        mengaturAnimasiPutar(false);
      }
    };

    document.addEventListener("keydown", klikEsc);

    return () => {
      document.removeEventListener("keydown", klikEsc);
    };
  }, [bukaMenu]);

  const bukaSidbar = `fixed flex flex-col top-0 left-0 w-56 md:w-full h-full bg-white p-4 transform transition-transform duration-500 ease-in-out z-50${
    bukaMenu ? " translate-x-0" : " -translate-x-full"
  }`;

  return (
    <header className="p-4 sticky top-0 left-0 right-0 z-10 bg-white">
      <div className="hidden md:block">
        <div className="flex items-center justify-between px-4 xl:px-12 2xl:px-24">
          <Link href="/" onClick={pilihMenu}>
            <p className="text-3xl font-ketiga font-extrabold mb-12 md:mb-0">
              KYRIZKYP
            </p>
          </Link>

          <div>
            <Menu pilihMenu={pilihMenu} />
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <div className="flex items-center justify-between px-4">
          <Link href="/">
            <p className="text-3xl font-ketiga font-extrabold">KYRIZKYP</p>
          </Link>

          <div>
            <button
              onClick={klikMenuIcon}
              className={`transform ${
                animasiPutar ? "rotate-180" : ""
              } transition duration-300`}
            >
              {bukaMenu ? <IconX /> : <IconMenu2 />}
            </button>
          </div>
        </div>
      </div>

      {bukaMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-40  "
          onClick={klikMenuIcon}
        />
      )}

      <div className={bukaSidbar}>
        <div className="flex min-h-screen flex-col items-center justify-center">
          <Menu pilihMenu={pilihMenu} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
