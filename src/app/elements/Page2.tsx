import React from 'react';
import background1 from '/public/background1.jpg';

function page2() {
  return (
    <div className='flex flex-col justify-center mt-10 items-center h-screen w-full gap-10'>
      <h1 className='text-5xl font-bold bg-clip-text bg-cover bg-center text-center z-10'> 
        I build stuff.<br/>Really amazing stuff
      </h1>
      <div className='mt-10 w-full flex justify-center gap-6'>
        <input type="email" placeholder='you@email.com' className='bg-transparent outline-dashed outline-neutral-600 outline-1 p-4 w-1/3'/>
        <button className='p-3 bg-white text-slate-950 hover:bg-neutral-300'>Get Notified</button>
        </div>
    </div>
  );
}

export default page2;
