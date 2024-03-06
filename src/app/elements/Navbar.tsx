// components/Navbar.js 
import Link from 'next/link';
import React from 'react';
import { CiWarning } from 'react-icons/ci';

function Navbar() {
  return (
    <div className='h-16 fixed z-30 bg-black border-neutral-600 w-full border-b-2 border-dashed justify-between flex'>
      {/* Replace with logo when you have one */}
      <h2 className='flex flex-col ml-10 justify-center items-center text-2xl font-semibold'>@manthanindane</h2>
        <h2 className='flex text-xl mr-10 items-center font-semibold text-neutral-300'>
          <div className='flex items-center gap-2'> 
            <Link href='/mylife'>more bout me</Link>
            <CiWarning />
          </div>
        </h2>
    </div>
  );
}

export default Navbar;
