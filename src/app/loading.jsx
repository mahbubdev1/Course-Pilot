import Image from "next/image";

export default function loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[100vh]">
      <div className="text-2xl font-bold animate-ping"> Course Pailot</div>
    </div>
  );
}
{
  /* <Image
          src="/Loading-Gif-Img/LoadingGif.gif"
          alt="Loading-Data"
          width={50}
          height={50}
        />
        <p className="text-xl">loading.....</p> */
}
