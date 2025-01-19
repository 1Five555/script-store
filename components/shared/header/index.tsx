import React from "react";
import Image from "next/image";
import Link from "next/link";
import { META_DATA } from "@/lib";
import Menu from "@/components/shared/header/menu";

const Header = () => {
  return (
    <header className={"w-full border-b"}>
      <div className={"wrapper flex-between"}>
        <div className={`flex-start`}>
          <Link href="/" className={"flex-start"}>
            <Image
              src={"/images/logo.svg"}
              alt={`${META_DATA.APP_NAME}`}
              width={48}
              height={48}
              priority={true}
            />
            <span className={"hidden lg:block font-bold text-2xl ml-3"}>
              {META_DATA.APP_NAME}
            </span>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
