"use client";
import Image from "next/image";
import Link from "next/link";
import { GoHome } from "react-icons/go";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { useAuth } from "@/context/AuthContext";
import { BsMessenger } from "react-icons/bs";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { IoMdPhotos } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { IoImages } from "react-icons/io5";
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa6";
import { FaShare } from "react-icons/fa";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "react-toastify";

//theme import
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function HelpDesk() {
  const { setTheme } = useTheme();
  const [photo, setPhoto] = useState();
  const [video, setVideo] = useState();
  const [uploading, setUploading] = useState(false);
  const [Data, setData] = useState();
  const [videoOpen, setVideoOpen] = useState(false);
  const [openImage, setOpenImage] = useState(false);
  const [TextOpem, setTextOpem] = useState(false);

  const link = (
    <div className="md:flex items-center space-x-10">
      <Link href={""}>
        <GoHome size={20} />
      </Link>
      <Link href={""}>
        <MdOutlineOndemandVideo size={20} />
      </Link>
      <Link href={""}>
        <IoMdNotifications size={20} />
      </Link>
      <Link href={""}>
        <BsMessenger size={20} />
      </Link>
    </div>
  );
  const { user } = useAuth();

  // IMage cloudornay upload

  const imageCloude = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "course_pailot");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dqjuyj19t/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const uploadData = await res.json();
    const photoURl = uploadData.secure_url;
    setPhoto(photoURl);
    setUploading(false); // Upload done

    console.log("Uploaded Image URL:", photoURl);
  };

  //mongodb image post api
  // const handaleImageUpload = async (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const imageText = form.imageText.value;
  //   console.log(imageText);

  //   const postInfo = {
  //     user: user?.name,
  //     Image: user?.image,
  //     email: user?.email,
  //     text: imageText,
  //     photo: photo,
  //     time: new Date(),
  //   };
  //   try {
  //     const res = await fetch(`http://localhost:9000/imageupload`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(postInfo),
  //     });
  //     const data = await res.json();
  //     toast.success("Successfully Posted");
  //     setOpenImage(false);
  //     // console.log(data);
  //   } catch (error) {
  //     toast.error("Post Failed", error);
  //   }
  // };

  //
  // Video Cloudornary Upload
  const VideoClaoud = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true); // Start uploading

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "course_pailot");
    data.append("resource_type", "video");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dqjuyj19t/video/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const uploadData = await res.json();
    const videoURL = uploadData.secure_url;
    setVideo(videoURL);
    setUploading(false); // Upload done
  };

  const handalUpload = async (e) => {
    e.preventDefault();

    // Ensure e.target is a form
    const form = e.target;
    const text = form.elements.text?.value.trim() || "";
    const imageText = form.elements.imageText?.value.trim() || "";
    const videoText = form.elements.videoText?.value.trim() || "";

    const postInfo = {
      user: user?.name || "Anonymous",
      Image: user?.image || "",
      email: user?.email || "",
      photo: photo,
      video: video,
      text: text,
      ImageText: imageText,
      VideoText: videoText,
      time: new Date().toISOString(),
    };

    try {
      const res = await fetch(`http://localhost:9000/Upload`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postInfo),
      });

      if (!res.ok) {
        throw new Error("Failed to upload post.");
      }

      const data = await res.json();
      toast.success("Successfully Posted");
      setTextOpem(false);
      setOpenImage(false);
      setVideoOpen(false);
    } catch (error) {
      toast.error(`Post Failed: ${error.message}`);
    }
  };

  //vodeo get api
  fetch("http://localhost:9000/postData")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      setData(data);
    });

  // vidoe delete api
  const handleVideoDelete = (id) => {
    try {
      fetch(`http://localhost:9000/postDelete/${id}`, {
        method: "DELETE",
      }).then((res) =>
        res.json().then((data) => {
          console.log(data);
          toast.success("Video Delete Succesfully");
        })
      );
    } catch (error) {
      toast.error("Video Delete Failed");
    }
  };
  return (
    <div className="">
      <div className="shadow-md backdrop-blur-2xl border-b-2 bg-white dark:bg-gray-900">
        <nav className="flex items-center justify-between w-full max-w-11/12 mx-auto py-3 sticky z-10">
          <div>
            <Image
              src="/assats/logo.webp"
              alt="assats/logo.webp"
              width={150}
              height={50}
              className="dark:hidden"
            />
            <Image
              src="/assats/footer-logo.png"
              alt="/assats/footer-logo.png"
              width={150}
              height={50}
              className="hidden dark:block"
            />
          </div>
          <div>{link}</div>
          <div className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Image
              src={user?.image}
              width={50}
              height={50}
              alt={user?.image}
              unoptimized
              title={user?.name}
              className="rounded-full"
            />
          </div>
        </nav>
      </div>
      <div className="grid grid-cols-12 min-h-screen">
        <div className="col-span-4">
          <div>
            <Button></Button>
          </div>
        </div>
        <div className=" col-span-4 p-2 overflow-y-scroll">
          {/* text video and photo input filed */}
          <Card>
            <div className="flex items-center justify-center space-x-3">
              <Image
                src={user?.image}
                width={40}
                height={40}
                alt={user?.image}
                unoptimized
                className="rounded-full"
              />
              {/* text input post */}
              <Dialog open={TextOpem} onOpenChange={setTextOpem}>
                <DialogTrigger asChild>
                  <Input
                    type="text"
                    className="w-full max-w-4xl"
                    placeholder={`Whats Your Mind ${user?.name}`}
                  />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      <p className="text-center text-2xl">Create Post</p>
                    </DialogTitle>
                  </DialogHeader>
                  <div>
                    <div className="flex items-center space-x-2">
                      <Image
                        src={user?.image}
                        width={40}
                        height={40}
                        alt={user?.image}
                        unoptimized
                        className="rounded-full"
                      />
                      <p className="leading-3">
                        <span className="text-lg font-bold">{user?.name}</span>
                        <br /> public
                      </p>
                    </div>
                    <form onSubmit={handalUpload}>
                      <div className="flex flex-col items-center justify-center pt-2">
                        <Textarea
                          name="text"
                          className="h-full placeholder:text-xl w-full max-w-96 min-h-96 rounded-md p-2"
                          placeholder={`Whats Your Mind ${user?.name}`}
                        />
                      </div>
                      <div className="flex flex-col pt-3">
                        <Button className="w-full max-w-96 mx-auto cursor-pointer">
                          Post
                        </Button>
                      </div>
                    </form>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="flex items-center justify-center space-x-3.5">
              {/* Photo Input post */}
              <Dialog open={openImage} onOpenChange={setOpenImage}>
                <DialogTrigger asChild>
                  {/* <Button>Open Modal</Button> */}
                  <Button variant="outline">
                    <IoMdPhotos size={20} /> Upload Photo
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      <p className="text-center text-2xl">Creat Post</p>
                    </DialogTitle>
                  </DialogHeader>
                  <div>
                    <div className="flex items-center space-x-2">
                      <Image
                        src={user?.image}
                        width={40}
                        height={40}
                        alt={user?.image}
                        unoptimized
                        className="rounded-full"
                      />
                      <p className="leading-3">
                        <span className="text-lg font-bold">{user?.name}</span>
                        <br /> public
                      </p>
                    </div>
                    <form onSubmit={handalUpload}>
                      <div className="flex items-center justify-center mt-3 ">
                        <Textarea
                          type="text"
                          name="imageText"
                          className="w-full max-w-96"
                          placeholder={`Whats Your Mind ${user?.name}`}
                        />
                      </div>
                      <div>
                        <div className="flex items-center justify-center border-2 w-full max-w-96 min-h-96 mx-auto rounded-md relative mt-3">
                          <Input
                            alt="Photo Upload"
                            type="file"
                            onChange={imageCloude}
                            className="absolute w-full h-full opacity-0 cursor-pointer"
                          />
                          {uploading ? (
                            <span className="font-bold ml-2">Uploading...</span>
                          ) : photo ? (
                            <img
                              src={photo}
                              alt={photo}
                              className="absolute w-full h-full object-cover p-1"
                            />
                          ) : (
                            <>
                              <IoImages size={30} />
                              <span className="font-bold ml-2">
                                Upload Photo
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col  pt-3">
                        <Button className="w-full max-w-96 mx-auto cursor-pointer">
                          Post
                        </Button>
                      </div>
                    </form>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Video Input Post */}
              <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
                <DialogTrigger asChild>
                  {/* <Button>Open Modal</Button> */}
                  <Button variant="outline">
                    <FaVideo size={20} color="red" /> Upload Video
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      <p className="text-center text-2xl">Creat Post</p>
                    </DialogTitle>
                  </DialogHeader>
                  <div>
                    <div className="flex items-center space-x-2">
                      <Image
                        src={user?.image}
                        width={40}
                        height={40}
                        alt={user?.image}
                        unoptimized
                        className="rounded-full"
                      />
                      <p className="leading-3">
                        <span className="text-lg font-bold">{user?.name}</span>
                        <br /> public
                      </p>
                    </div>
                    <form onSubmit={handalUpload}>
                      <div className="flex items-center justify-center mt-3 ">
                        <Textarea
                          type="text"
                          name="videoText"
                          className="w-full max-w-96"
                          placeholder={`Whats Your Mind ${user?.name}`}
                        />
                      </div>
                      <div>
                        <div className="flex items-center justify-center border-2 w-full max-w-96 min-h-96 mx-auto rounded-md relative mt-3">
                          <input
                            type="file"
                            accept="video/*"
                            onChange={VideoClaoud}
                            className="absolute w-full h-full opacity-0 cursor-pointer"
                          />
                          {uploading ? (
                            <span className="font-bold ml-2">Uploading...</span>
                          ) : video ? (
                            <video
                              controls
                              src={video}
                              className="absolute w-full h-full object-cover"
                            ></video>
                          ) : (
                            <>
                              <FaVideo size={30} />
                              <span className="font-bold ml-2">
                                Upload Video
                              </span>
                              Maximum 2MB
                            </>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col  pt-3">
                        <Button className="w-full max-w-96 mx-auto cursor-pointer">
                          Post
                        </Button>
                      </div>
                    </form>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </Card>
          {/* Data get display */}
          <div className="mt-2 space-y-2">
            {Data
              ? Data.map((item, i) => (
                  <div key={i} className="">
                    <Card>
                      <div className="grid grid-cols-2">
                        <div className="flex">
                          <img
                            src={item?.Image}
                            alt={item?.Image}
                            referrerPolicy="no-referrer"
                            className="w-10 h-10 rounded-full mx-2"
                          />
                          <div>
                            <p className="font-bold ">{item?.user}</p>
                            <p>
                              post:
                              {new Date(item?.time).toLocaleString({
                                timeZone: "Asia/Dhaka",
                              })}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <p>...</p>
                          <Button
                            variant="gost"
                            className="cursor-pointer"
                            onClick={() => handleVideoDelete(item?._id)}
                          >
                            ❌
                          </Button>
                        </div>
                      </div>
                      <div>
                        <p
                          className={`px-5 pb-2 ${
                            item?.text === "" || (!item?.text && "hidden")
                          }`}
                        >
                          {item?.text}
                        </p>
                        <p
                          className={`px-5 pb-2 ${
                            item?.VideoText === "" ||
                            (!item?.VideoText && "hidden")
                          }`}
                        >
                          {item?.VideoText}
                        </p>
                        <p
                          className={`px-5 pb-2 ${
                            item?.ImageText === "" ||
                            (!item?.ImageText && "hidden")
                          }`}
                        >
                          {item?.ImageText}
                        </p>
                        <video
                          src={item?.video}
                          controls
                          className={`h-[400px] w-full object-cover ${
                            item?.video === "" || (!item?.video && "hidden")
                          }`}
                        ></video>
                        <img
                          src={item?.photo}
                          alt={item?.photo}
                          className={`h-[400px] w-full object-cover ${
                            item?.photo === "" || (!item?.photo && "hidden")
                          }`}
                        />
                      </div>
                    </Card>
                    <div className="py-2 flex justify-between items-center">
                      <Button size="sm" variant="gost">
                        <BiLike />
                        Like
                      </Button>
                      <Button size="sm" variant="gost">
                        <FaRegComment /> comment
                      </Button>
                      <Button size="sm" variant="gost">
                        <FaShare /> Share
                      </Button>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
        <div className="bg-pink-200 col-span-4">hello</div>
      </div>
    </div>
  );
}
