"use client"
import React from 'react';
import LotieAnimation from './LotieAnimation';



const HeroSection = () => {
    return (
        <div className='w-full h-82 bg-cyan-200 shadow-xl'>
           <div className='flex justify-between items-center mx-20 gap-8'>
            <div className='w-1/2'>
                <p className='text-center text-sm font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias distinctio, reprehenderit harum ducimus deserunt blanditiis saepe voluptatem corporis voluptatum est! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias distinctio, reprehenderit harum ducimus deserunt blanditiis saepe voluptatem corporis voluptatum est!</p>
               <div className='text-center mx-auto mt-4'>
               <button className='text-gray-600 font-bold px-8 py-1 bg-[#FFCE67] rounded text-center'>Details</button>
               </div>
            </div>
            <div className='w-1/2'>
                <LotieAnimation/>
            </div>
           </div>
        
        </div>
    );
};

export default HeroSection;