import { IconArticleOff } from "@tabler/icons-react";
import React from "react";

const BlogBlank = () => {
  return (
    <div className="flex item-center justify-center gap-2 m-2">
      <div className="border border-gray-400 flex items-center justify-center p-4 gap-2">
        <IconArticleOff className="w-8 h-8 stroke-1 text-gray-400" />
        <h1 className="font-ketiga text-center text-gray-400 text-sm">
          NO NOTE
        </h1>
      </div>

      <div className="border border-gray-400 flex items-center justify-center p-4 gap-2">
        <IconArticleOff className="w-8 h-8 stroke-1 text-gray-400" />
        <h2 className="font-ketiga text-center text-gray-400 text-sm">
          NO NOTE
        </h2>
      </div>

      <div className="border border-gray-400 flex items-center justify-center p-4 gap-2">
        <IconArticleOff className="w-8 h-8 stroke-1 text-gray-400" />
        <h3 className="font-ketiga text-center text-gray-400 text-sm">
          NO NOTE
        </h3>
      </div>
    </div>
  );
};

export default BlogBlank;
