import React from 'react';
import Image from 'next/image'
import image1 from '../../../public/card11.png';
import image2 from '../../../public/card22.png';
import image3 from '../../../public/card33.png';
import image4 from '../../../public/card44.png';
import image5 from '../../../public/card55.png';
import image6 from '../../../public/card66.png';
import image7 from '../../../public/card77.png';
import image8 from '../../../public/card88.png';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Card = () => {


    useEffect(() => {
        AOS.init({
          once: false,
          duration: 800
        });
      }, []);

    return (
        <div className='mt-32 mx-auto text-center mb-4'>
          
          <h3 className='mt-10 text-2xl mx-auto text-center font-bold text-[#FFCE67] border-4 shadow-xl w-80 py-2 mb-8 bg-gray-600 rounded'>Our Modern Technologies</h3>
          
            <div data-aos="fade-up" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-20 text-center'>
                <div className='w-25% bg-gray-200 text-center shadow-xl'>
                    <Image className='sm:w-full' src={image1} alt="" width={300}/>
                    <p className='font-bold text-gray-500 px-2 text-left'><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consectetur consequuntur, illum itaque deleniti magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consectetur consequuntur, illum itaque deleniti magnam?</small></p>
                    <button className='mt-2 px-6 py-1 mb-1 bg-[#FFCE67] text-gray-600  font-bold text-center rounded'><small>View Details</small></button>
                </div>
                <div className='w-25% bg-gray-200 text-center shadow-xl'>
                    <Image src={image2} alt="" width={300}/>
                    <p className='font-bold text-gray-500 px-2 text-left'><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consectetur consequuntur, illum itaque deleniti magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consectetur consequuntur, illum itaque deleniti magnam?</small></p>
                    <button className='mt-2 px-6 py-1 mb-1 bg-[#FFCE67]  text-gray-600  font-bold text-center rounded'><small>View Details</small></button>
                </div>
                <div className='w-25% bg-gray-200 text-center shadow-xl'>
                    <Image src={image3} alt="" width={300}/>
                    <p className='font-bold text-gray-500 px-2 text-left'><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consectetur consequuntur, illum itaque deleniti magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consectetur consequuntur, illum itaque deleniti magnam?</small></p>
                    <button className='mt-2 px-6 py-1 mb-1 bg-[#FFCE67]  text-gray-600  font-bold text-center rounded'><small>View Details</small></button>
                </div>
                <div className='w-25% bg-gray-200 text-center shadow-xl'>
                    <Image src={image4} alt="" width={300}/>
                    <p className='font-bold text-gray-500 px-2 text-left'><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consectetur consequuntur, illum itaque deleniti magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consectetur consequuntur, illum itaque deleniti magnam?</small></p>
                    <button className='mt-2 px-6 py-1 mb-1 bg-[#FFCE67]  text-gray-600  font-bold text-center rounded'><small>View Details</small></button>
                </div>
            </div>
            <div data-aos="fade-up" className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-20 text-center'>
                <div className='w-25% bg-gray-200 text-center shadow-xl'>
                    <Image src={image5} alt="" width={300}/>
                    <p className='font-bold text-gray-500 px-2 text-left'><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consectetur consequuntur, illum itaque deleniti magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consectetur consequuntur, illum itaque deleniti magnam?</small></p>
                    <button className='mt-2 px-6 py-1 mb-1 bg-[#FFCE67]  text-gray-600  font-bold text-center rounded'><small>View Details</small></button>
                </div>
                <div className='w-25% bg-gray-200 text-center shadow-xl'>
                    <Image src={image6} alt="" width={300}/>
                    <p className='font-bold text-gray-500 px-2 text-left'><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consectetur consequuntur, illum itaque deleniti magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consectetur consequuntur, illum itaque deleniti magnam?</small></p>
                    <button className='mt-2 px-6 py-1 mb-1 bg-[#FFCE67]  text-gray-600  font-bold text-center rounded'><small>View Details</small></button>
                </div>
                <div className='w-25% bg-gray-200 text-center shadow-xl'>
                    <Image src={image7} alt="" width={300}/>
                    <p className='font-bold text-gray-500 px-2 text-left'><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consectetur consequuntur, illum itaque deleniti magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consectetur consequuntur, illum itaque deleniti magnam?</small></p>
                    <button className='mt-2 px-6 py-1 mb-1 bg-[#FFCE67]  text-gray-600  font-bold text-center rounded'><small>View Details</small></button>
                </div>
                <div className='w-25% bg-gray-200 text-center shadow-xl'>
                    <Image src={image8} alt="" width={300}/>
                    <p className='font-bold text-gray-500 px-2 text-left'><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consectetur consequuntur, illum itaque deleniti magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consectetur consequuntur, illum itaque deleniti magnam?</small></p>
                    <button className='mt-2 px-6 py-1 mb-1 bg-[#FFCE67]  text-gray-600 font-bold text-center rounded'><small>View Details</small></button>
                </div>
            </div>
        </div>
    );
};

export default Card;