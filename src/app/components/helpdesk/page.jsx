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

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function HelpDesk() {
  const [photo, setPhoto] = useState();
  const [video, setVideo] = useState();
  const [getVideo, setGetVideo] = useState();
  const [getText, setGetTaxt] = useState();
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
    console.log("Uploaded Image URL:", photoURl);
  };

  //mongodb image post api
  const handaleImageUpload = async (e) => {
    e.preventDefault();
    const form = e.target;
    const imageText = form.imageText.value;
    console.log(imageText);

    const postInfo = {
      user: user?.name,
      Image: user?.image,
      email: user?.email,
      text: imageText,
      photo: photo,
    };
    try {
      const res = await fetch(`http://localhost:9000/imageupload`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postInfo),
      });
      const data = await res.json();
      toast.success("Successfully Posted");

      // console.log(data);
    } catch (error) {
      toast.error("Post Failed", error);
    }
  };

  //
  // Video Cloudornary Upload
  const VideoClaoud = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

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
  };
  //sierver side video upload
  const handaleVideoUpload = async (e) => {
    e.preventDefault();
    const form = e.target;
    const videoText = form.videoText.value;
    // console.log(text);
    const postInfo = {
      user: user?.name,
      Image: user?.image,
      email: user?.email,
      text: videoText,
      video: video,
      time: new Date(),
    };

    try {
      const res = await fetch(`http://localhost:9000/videoUpload`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postInfo),
      });
      const data = await res.json();
      toast.success("Successfully Posted");
    } catch (error) {
      toast.error("Post Failed", error);
    }
  };

  //text post mongodb
  const handalTextUpload = async (e) => {
    e.preventDefault();
    const form = e.target;
    const text = form.text.value;
    if (!text) {
      return toast.error("Input Fild requeared Please type hear");
    }
    // console.log(text);
    const postInfo = {
      user: user?.name,
      Image: user?.image,
      email: user?.email,
      text: text,
      time: new Date(),
    };
    try {
      const res = await fetch(`http://localhost:9000/textUpload`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postInfo),
      });
      const data = await res.json();
      toast.success("Successfully Posted");
    } catch (error) {
      toast.error("Post Failed", error);
    }
  };

  //text post get api
  fetch("http://localhost:9000/text")
    .then((res) => res.json())
    .then((data) => {
      setGetTaxt(data);
    });
  //text post delete api
  const handleTextDelete = (id) => {
    // console.log(id);
    try {
      fetch(`http://localhost:9000/textDelete/${id}`, {
        method: "DELETE",
      }).then((res) =>
        res.json().then((data) => {
          console.log(data);
          toast.success("post Delete Succesfully");
        })
      );
    } catch (error) {
      toast.error("post Delete Failed");
    }
  };

  //vodeo get api
  fetch("http://localhost:9000/video")
    .then((res) => res.json())
    .then((data) => {
      setGetVideo(data);
      console.log(data);
    });

  // vidoe delete api
  const handleVideoDelete = (id) => {
    try {
      fetch(`http://localhost:9000/videoDelete/${id}`, {
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
      <div className="shadow-md backdrop-blur-2xl in-dark:bg-accent border-b-2">
        <nav className="flex items-center justify-between w-full max-w-11/12 mx-auto py-3 sticky z-10">
          <div>
            <Image
              src="/assats/logo.webp"
              alt="assats/logo.webp"
              width={150}
              height={50}
              className="in-dark:hidden"
            />
            <Image
              src="/assats/footer-logo.png"
              alt="/assats/footer-logo.png"
              width={150}
              height={50}
              className="not-dark:hidden"
            />
          </div>
          <div>{link}</div>
          <div>
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
        <div className="bg-yellow-500 col-span-4">hello</div>
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
              <Dialog>
                <DialogTrigger asChild>
                  {/* <Button>Open Modal</Button> */}
                  <Input
                    // variant="default"
                    type="text"
                    className="w-full max-w-4xl"
                    placeholder={`Whats Your Mind ${user?.name}`}
                  />
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
                    <form onSubmit={handalTextUpload}>
                      <div className="flex flex-col items-center justify-center pt-2">
                        <Textarea
                          name="text"
                          className="h-full placeholder:text-xl w-full max-w-96 min-h-96 rounded-md p-2"
                          placeholder={`Whats Your Mind ${user?.name}`}
                        />
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
            <div className="flex items-center justify-center space-x-3.5">
              {/* Photo Input post */}
              <Dialog>
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
                    <form onSubmit={handaleImageUpload}>
                      <div className="flex items-center justify-center mt-3 ">
                        <Textarea
                          type="text"
                          name="imageText"
                          className="w-full max-w-96"
                          placeholder={`Whats Your Mind ${user?.name}`}
                        />
                      </div>
                      <div>
                        <div className="flex  items-center justify-center border-2 w-full max-w-96 min-h-96 mx-auto rounded-md relative mt-3">
                          <Input
                            alt="Photo Uploade"
                            type="file"
                            onChange={imageCloude}
                            className="absolute w-full h-full opacity-0 cursor-pointer"
                          />
                          <IoImages size={30} />
                          <span className="font-bold ml-2">Upload Photo</span>
                          {photo && (
                            <img
                              src={photo}
                              alt={photo}
                              className="absolute w-full h-full object-cover p-1"
                            />
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
              <Dialog>
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
                    <form onSubmit={handaleVideoUpload}>
                      <div className="flex items-center justify-center mt-3 ">
                        <Textarea
                          type="text"
                          name="videoText"
                          className="w-full max-w-96"
                          placeholder={`Whats Your Mind ${user?.name}`}
                        />
                      </div>
                      <div>
                        <div className="flex  items-center justify-center border-2 w-full max-w-96 min-h-96 mx-auto rounded-md relative mt-3">
                          <input
                            type="file"
                            accept="video/*"
                            onChange={VideoClaoud}
                            className="absolute w-full h-full opacity-0 cursor-pointer"
                          />
                          <FaVideo size={30} />
                          <span className="font-bold ml-2">Upload Video</span>  Maximum 2mb
                          {video ? (
                            <video
                              src={video}
                              alt={video}
                              className="absolute w-full h-full"
                            />
                          ) : (
                            video && "Loading...."
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
          {/* video get display */}
          <div className="mt-2 space-y-2">
            {getVideo
              ? getVideo.map((item, i) => (
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
                        <p className="px-5 pb-2">{item?.text}</p>
                        <video
                          src={item?.video}
                          controls
                          className="h-[400px] w-full object-cover"
                        ></video>
                      </div>
                    </Card>
                  </div>
                ))
              : ""}
          </div>
          {/* text get display */}
          <div className="pt-2 space-y-2">
            {getText ? (
              getText.map((item, i) => (
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
                          onClick={() => handleTextDelete(item?._id)}
                        >
                          ❌
                        </Button>
                      </div>
                    </div>
                    <div className="p-3 h-96 flex flex-col justify-center items-center font-bold text-2xl border-2 bg-gradient-to-r from-blue-500 to-green-500 text-white">
                      <p>{item?.text}</p>
                    </div>
                  </Card>
                </div>
              ))
            ) : (
              <p className="text-xl font-bold animate-ping h-full flex items-center justify-center min-h-[50vh]">
                Help Desk
              </p>
            )}
          </div>
        </div>
        <div className="bg-pink-200 col-span-4">hello</div>
      </div>
    </div>
  );
}
