import React from "react";
import { META_DATA } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={"border-t"}>
      <div className={"p-5 flex-center"}>
        {`${currentYear} - ${META_DATA.APP_NAME}. All Rights Reserved`}
      </div>
    </footer>
  );
};

export default Footer;
