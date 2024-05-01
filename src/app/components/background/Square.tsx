import React from "react";

const Square = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="hidden lg:block">
        <div className="relative flex items-center justify-center">
          <div className="absolute -bottom-48 -right-10 w-96 h-72 border-b border-t border-black"></div>

          <div className="absolute -top-8 xl:-top-2 -left-24 w-96 h-[480px] xl:h-[450px] border-b border-t xl:border-l border-black"></div>
        </div>
      </div>

      <div className="block lg:hidden"></div>
    </div>
  );
};

export default Square;
