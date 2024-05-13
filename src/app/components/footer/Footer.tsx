import React from "react";

const Footer = () => {
  const Tahun = new Date().getFullYear();
  return (
    <div className="p-4 flex items-center justify-center">
      <div className="relative">
        <div className="max-w-xs text-center p-2 border-t border-black">
          <h1 className="font-pertama text-lg">
            Copyright &copy; {Tahun}{" "}
            <span className="font-ketiga text-extraold text-xl">KYRIZKYP</span>,
          </h1>
          <p className="font-pertama text-lg">All rights reserved.</p>
        </div>

        <div className="absolute top-6 -left-6">
          <p className="font-ketiga text-extrabold text-xl">{"/"}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
