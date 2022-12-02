import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Video from '../../assets/hero.mov';

const Hero = () => {
  return (
    <div className="hero w-full h-screen relative text-white">
        <video autoPlay loop muted id="video" className="w-full h-full object-cover z-[-5]">
            <source src={Video} type="video/mp4" />
        </video>

        <div className="overlay bg-[#00000016]"></div>

        <div className="content w-full h-full m-auto p-4 absolute top-0 flex flex-col justify-center items-center">
            <h1 className="text-2xl md:text-5xl">An ocean of possibilities</h1>
            <h2 className="my-4 text-xl md:text-4xl">The whole world awaits</h2>
            <form className="max-w-[700px] w-full bg-[#ffffffcc] mt-4 p-1 flex justify-between items-center rounded-md">
                <div>
                    <input type="text" name="search" placeholder="Search destinations" className="w-[360px] md:w-[550px] text-gray-800 focus:outline-none" />
                </div>
                <div>
                    <button className="rounded"><MagnifyingGlassIcon width={25} /></button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default Hero;