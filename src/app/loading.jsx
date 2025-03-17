import Image from "next/image";
import React from "react";

export default function loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[100vh]">
      <div className="flex items-center space-x-2">
        <Image
          src="/Loading-Gif-Img/LoadingGif.gif"
          alt="/Loading-Gif-Img/LoadingGif.gif"
          width={50}
          height={50}
        />
        <p className="text-xl">loading.....</p>
      </div>
    </div>
  );
}
