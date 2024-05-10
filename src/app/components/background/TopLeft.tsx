import React from "react";

const TopLeft = () => {
  return (
    <div className="flex items-center justify-center relative -z-10">
      <div className="relative">
        <div className="w-72 h-12 border-t border-l border-black"></div>
      </div>

      <div className="absolute -bottom-8 -left-10">
        <div className="w-40 h-12 border-t xl:border-l border-black "></div>
      </div>
    </div>
  );
};

export default TopLeft;
