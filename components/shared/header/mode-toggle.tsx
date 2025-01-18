"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon, SunMoon } from "lucide-react";
enum ThemeType {
  System = "system",
  Dark = "dark",
  Light = "light",
}

type Theme = {
  theme: ThemeType;
  label: string;
};
const ModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const themeList: Theme[] = [
    {
      theme: ThemeType.System,
      label: "System",
    },
    {
      theme: ThemeType.Dark,
      label: "Dark",
    },
    {
      theme: ThemeType.Light,
      label: "Light",
    },
  ];
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={`focus-visible:ring-0 focus-visible:ring-offset-0`}
        >
          {theme === "system" && <SunMoon />}
          {theme === "dark" && <MoonIcon />}
          {theme === "light" && <SunIcon />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {themeList.map((item) => (
          <DropdownMenuCheckboxItem
            key={item.theme}
            checked={item.label === theme}
            onClick={() => {
              setTheme(item.theme);
            }}
          >
            {item.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModeToggle;
