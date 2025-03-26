import Image from "next/image";
import Link from "next/link";
import { GoHome } from "react-icons/go";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";

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
    </div>
  );

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
          <div>Right</div>
        </nav>
      </div>
    </div>
  );
}
