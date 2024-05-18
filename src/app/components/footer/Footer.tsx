import React from "react";

const Footer = () => {
  const Tahun = new Date().getFullYear();
  return (
    <div className="p-4 flex items-center justify-center">
      <div className="text-center p-2 text-base lg:text-lg flex flex-col md:flex-row md:gap-2 items-center justify-center">
        <h1 className="font-pertama">
          Copyright &copy; {Tahun}{" "}
          <span className="font-ketiga text-extraold">KYRIZKYP</span>,
        </h1>
        <h2 className="font-pertama">Everything rights reserved.</h2>
      </div>
    </div>
  );
};

export default Footer;
