import React from "react";

const Expression = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
        <div className="order-1 md:order-2">
          <div className="p-4">
            <div className="border-r border-b border-black h-52 w-52 flex items-center justify-center">
              <div className="flex items-center text-center p-4">
                <p className="font-pertama p-2">//</p>

                <h1 className="text-2xl font-ketiga font-extrabold p-2">
                  RIZPUTRA
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="order-2 md:order-1">
          <div className="max-w-xl p-4 text-center md:text-left">
            <p className="font-pertama p-2">
              Creating work through software is a joy, planning interface
              concepts and assembling codes is an exciting challenge. Every line
              of code is a step towards harmony between visual beauty and
              maximum functional performance.
            </p>

            <p className="font-pertama p-2">
              Front end developers are like keepers of the flame of digital
              love. Like a lover who cultivates a relationship with great care,
              he arranges every pixel with affection and delicacy. Every line of
              code is an expression of love for beauty, and every click is a
              promise to continue nurturing and perfecting this relationship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expression;
