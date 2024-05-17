"use client";
import Image from "next/image";
import oneIMG from "./assets/photo_1.jpg";
import twoIMG from "./assets/photo_2.jpg";
import threeIMG from "./assets/photo_3.jpg";

import { Source_Code_Pro } from "next/font/google";
import { useState } from "react";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
});

export default function Home() {
  const [displayInfo, setDisplayInfo] = useState(false);
  return (
    <>
      <main className="min-h-screen relative overflow-hidden">
        <div className="flex w-screen h-screen animate-slide saturate-50">
          <Image src={oneIMG} width="w-1/3" height="auto" alt="" />
          <Image src={twoIMG} width="w-1/3" height="auto" alt="" />
          <Image src={threeIMG} width="w-1/3" height="auto" alt="" />
        </div>
        <h1 className="absolute font-semibold lg:text-[128px] text-yellow-200 top-[50%] left-[50%]  -translate-x-[50%] -translate-y-[50%] mix-blend-exclusion">
          Try new things
        </h1>
      </main>
      <div className="absolute bottom-5 right-8 opacity-95">
        <div
          className={` ${sourceCodePro.className} w-16 h-16 bg-white  text-black rounded-full flex justify-center items-center cursor-pointer shadow-md `}
          onMouseEnter={() => setDisplayInfo(true)}
          onMouseLeave={() => setDisplayInfo(false)}
        >
          i
        </div>
        {displayInfo && (
          <ul className="absolute bottom-[110%] right-0 w-[400px] bg-white rounded-xl p-5 text-sm list-disc pl-10">
            <li>
              Photo by Alex Staudinger:
              https://www.pexels.com/pl-pl/zdjecie/winnica-1731834/
            </li>
            <li>
              Photo by Chait Goli:
              https://www.pexels.com/pl-pl/zdjecie/kolorowe-budynki-1796731/
            </li>
            <li>
              Photo by Jeffrey Czum:
              https://www.pexels.com/pl-pl/zdjecie/zielone-drewniane-okno-na-bialej-betonowej-scianie-3750893/
            </li>
          </ul>
        )}
      </div>
    </>
  );
}
