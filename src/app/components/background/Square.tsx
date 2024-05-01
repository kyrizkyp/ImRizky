import React from "react";

const Square = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="hidden lg:block">
        <div className="relative flex items-center justify-center">
          <div className="absolute -bottom-96 xl:-bottom-72 -right-10 w-96 h-[500px] xl:h-96 border-b border-t border-black"></div>

          <div className="absolute -top-8 xl:-top-2 -left-24 w-96 h-[490px] xl:h-[450px] border-b border-t xl:border-l border-black"></div>
        </div>
      </div>

      <div className="block lg:hidden">
        <div className="relative flex items-center justify-center">
          <div className="absolute -left-[180px] md:-bottom-60 h-96 w-12 border-l border-black"></div>

          <div className="absolute -left-[200px] md:-left-40 -bottom-[142px] md:-bottom-[250px] h-12 w-96 border-t border-r border-black"></div>
        </div>
      </div>
    </div>
  );
};

export default Square;
