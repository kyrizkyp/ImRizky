import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface MenuNavProps {
  pilihMenu: () => void;
}

const Dropdown = ({ pilihMenu }: MenuNavProps) => {
  const mengaturMenuKlik = () => {
    pilihMenu();
    mengaturTampilkanDropdown(false);
  };

  const [tampilkanDropdown, mengaturTampilkanDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const tombolDropdown = () => {
    mengaturTampilkanDropdown(!tampilkanDropdown);
  };

  const menutupKlikLuar: EventListener = (klikLuar) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(klikLuar.target as Node)
    ) {
      mengaturTampilkanDropdown(false);
    }
  };

  const menutupKlikEsc = (klikEsc: KeyboardEvent) => {
    if (klikEsc.key === "Escape") {
      mengaturTampilkanDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", menutupKlikLuar);
    document.addEventListener("keydown", menutupKlikEsc);
    return () => {
      document.removeEventListener("mousedown", menutupKlikLuar);
      document.removeEventListener("keydown", menutupKlikEsc);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={tombolDropdown} className="text-lg font-kedua">
        ALL
      </button>

      <div
        className={`absolute -z-20 right-0 left-0 flex items-center justify-center transform ${
          tampilkanDropdown
            ? "translate-y-4 transition-transform duration-500"
            : "-translate-y-full duration-500"
        }`}
      >
        <div className="p-4 bg-black text-white flex flex-col items-center justify-center">
          <Link
            href="/gallery"
            className="text-lg font-kedua mb-4"
            onClick={mengaturMenuKlik}
          >
            GALLERY
          </Link>

          <Link
            href=""
            className="text-lg font-kedua"
            onClick={mengaturMenuKlik}
          >
            PORTOFOLIO
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
