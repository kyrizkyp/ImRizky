import DetailGallery from "@/app/components/gallery/DetailGallery";
import React from "react";

interface DetailType {
  detail: string;
}

const page: React.FC<{ params: DetailType }> = ({ params }) => {
  return (
    <div>
      <div>
        <DetailGallery galeriId={params.detail} />
      </div>
    </div>
  );
};

export default page;
