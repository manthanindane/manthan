"use client";
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Spline from '@splinetool/react-spline';
import { MdOutlineArrowOutward } from 'react-icons/md';

function Heropage() {
  return (
    <div className=" flex justify-start items-center h-full overflow-hidden"> 
     <div className='absolute w-full overflow-clip ' >
      <Spline scene="https://prod.spline.design/UyRZr2vuKlGy0WTW/scene.splinecode" />
      </div>
      <div className="flex w-1/2 mt-20  flex-col p-8 gap-10 z-20">
        <h1 className="text-8xl font-bold">
          Hey, I am Manthan. <br /> The Coolest Person Alive.
        </h1>
        <div className="border-2 border-dashed border-neutral-600 p-2 w-1/2 flex justify-center items-center gap-2">
          <p className="text-xl text-neutral-400">
            <Link href="/Do">What I do for living?</Link>
          </p>
          <Link href="/Do">
            <MdOutlineArrowOutward className="text-xl text-neutral-400" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Heropage;
