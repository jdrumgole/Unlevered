/* eslint-disable prettier/prettier */
import Image from "next/image";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import {Divider} from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import logoo from "../assets/unlevered_logo.jpg";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, SearchIcon } from "@/components/icons";

export const Navbar2 = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  
  return (
    <NextUINavbar  isBordered maxWidth="2xl" position="sticky" >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <ul className="hidden lg:flex gap-14 justify-start ml-2">
          <NavbarItem>
          <Link color="foreground">
            Portfolio
          </Link>
          </NavbarItem>
          <NavbarItem >
          <Link color="foreground" href="/market">
            Market
          </Link>
          </NavbarItem>
          <NavbarItem>
          <Link color="foreground" href="/news" >
            News
          </Link>
        </NavbarItem>
          
          
        </ul>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
       />

     

      
    </NextUINavbar>
  );
};
