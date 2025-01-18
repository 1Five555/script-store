"use client";
import { META_DATA } from "@/lib";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className={"flex-colCenter min-h-screen"}>
      <Image
        src="/images/logo.svg"
        width={48}
        height={48}
        alt={`${META_DATA.APP_NAME} logo`}
        priority={true}
      />
      <div className={"p-6 w-1/3 rounded-lg shadow-md text-center"}>
        <h1 className={"text-3xl font-bold mb-4"}>Not Found</h1>
        <p className={"text-destructive"}>Could not find requested page</p>
        <Button
          variant={"outline"}
          className={"mt-4 ml-2"}
          onClick={() => (window.location.href = "/")}
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
