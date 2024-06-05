/* eslint-disable prettier/prettier */
import React from "react";

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

import Image from "next/image";
import logoo from "../assets/unlevered_logo.jpg";

export const Hero = () => {
  return (
    <section className="flex items-center pb-5 justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>We build products that&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>democratize&nbsp;</h1>
        <br />
        <h1 className={title()}>
          equity research.
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          For the everyday investor.
        </h2>
      </div>

      <Image alt="" src={logoo} width="200" height="200" />
    </section>
  );
};
