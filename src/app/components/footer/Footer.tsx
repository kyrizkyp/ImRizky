import React from "react";

const Footer = () => {
  const Tahun = new Date().getFullYear();
  return (
    <div className="p-4 flex items-center justify-center">
      <div className="max-w-xs text-center p-2 text-xs lg:text-base">
        <h1 className="font-pertama">
          Copyright &copy; {Tahun}{" "}
          <span className="font-ketiga text-extraold">KYRIZKYP</span>,
        </h1>
      </div>
    </div>
  );
};

export default Footer;
