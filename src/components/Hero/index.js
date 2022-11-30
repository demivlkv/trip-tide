import React from 'react';
import Video from '../../assets/hero.mov';

const Hero = () => {
  return (
    <div className="hero w-full h-screen relative text-white z-[-5]">
        <video autoPlay loop muted id="video" className="w-full h-full object-cover">
            <source src={Video} type="video/mp4" />
        </video>

        <div className="overlay w-full h-full bg-[#00000016] absolute top-0 left-0"></div>

        <div className="content w-full h-full m-auto p-4 absolute top-0 flex flex-col justify-center items-center">
            <h1 className="mb-4 text-2xl md:text-5xl font-semibold uppercase tracking-widest">An ocean of possibilities</h1>
            <h2 className="py-4 text-3xl md:text-4xl">The whole world awaits</h2>
            <form className="form w-full flex justify-center">
                <input type="text" placeholder="Search destinations" className="w-[80%] md:w-[45%] mt-4" />
            </form>
        </div>
    </div>
  );
};

export default Hero;