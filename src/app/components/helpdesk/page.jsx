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

export default function HelpDesk() {
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
  console.log(user);

  return (
    <div className="min-h-screen">
      <div className="shadow-md backdrop-blur-2xl in-dark:bg-accent border-b-2">
        <nav className="flex items-center justify-between w-full max-w-11/12 mx-auto py-3">
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
              className="rounded-full"
            />
          </div>
        </nav>
      </div>
      <div className="grid grid-cols-12 min-h-screen">
        <div className="bg-yellow-500 col-span-2">hello</div>
        <div className=" col-span-8">
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
                    <div className="flex flex-col items-center justify-center pt-2">
                      <Textarea
                        className="h-full placeholder:text-xl w-full max-w-96 min-h-96 rounded-md p-2"
                        placeholder={`Whats Your Mind ${user?.name}`}
                      />
                    </div>
                    <div className="flex flex-col  pt-3">
                      <Button className="w-full max-w-96 mx-auto cursor-pointer">
                        Post
                      </Button>
                    </div>
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
                    <div className="flex items-center justify-center mt-3 ">
                      <Textarea
                        type="text"
                        className="w-full max-w-96"
                        placeholder={`Whats Your Mind ${user?.name}`}
                      />
                    </div>
                    <div>
                      <div className="flex  items-center justify-center border-2 w-full max-w-96 min-h-96 mx-auto rounded-md relative mt-3">
                        <Input
                          alt="Photo Uploade"
                          type="file"
                          className="absolute w-full h-full opacity-0 cursor-pointer"
                        />
                        <IoImages size={30} />{" "}
                        <span className="font-bold ml-2">Upload Photo</span>
                      </div>
                    </div>
                    <div className="flex flex-col  pt-3">
                      <Button className="w-full max-w-96 mx-auto cursor-pointer">
                        Post
                      </Button>
                    </div>
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
                    <div className="flex items-center justify-center mt-3 ">
                      <Textarea
                        type="text"
                        className="w-full max-w-96"
                        placeholder={`Whats Your Mind ${user?.name}`}
                      />
                    </div>
                    <div>
                      <div className="flex  items-center justify-center border-2 w-full max-w-96 min-h-96 mx-auto rounded-md relative mt-3">
                        <Input
                          alt="Photo Uploade"
                          type="file"
                          className="absolute w-full h-full opacity-0 cursor-pointer"
                        />
                        <IoImages size={30} />{" "}
                        <span className="font-bold ml-2">Upload Video</span>
                      </div>
                    </div>
                    <div className="flex flex-col  pt-3">
                      <Button className="w-full max-w-96 mx-auto cursor-pointer">
                        Post
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </Card>
        </div>
        <div className="bg-pink-200 col-span-2">hello</div>
      </div>
    </div>
  );
}
