import React from 'react';
import Image from 'next/image';
import images from '../../../public/design2.png';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"




const MainSection = () => {

    useEffect(() => {
        AOS.init({
          once: false,
          duration: 800
        });
      }, []);


    return (
        <div className='h-72 mt-8 text-center'>
             <h3 className='border-4 w-52  text-center shadow-xl font-bold text-2xl mx-auto text-[#FFCE67] bg-gray-600 rounded py-2'>Our Productions</h3>
            <div className='mx-20 mt-6 flex justify-around gap-x-6 text-center' data-aos='fade-up'>
               
                <div className='shadow-2xl w-1/2'>
               
                    <p className='text-sm p-12 font-bold text-cyan-600'>Once the producer and writer have sold their approach to the desired subject matter they begin to work. However many writers and producers usually pass before a particular concept is realized in a way that is awarded a green light to production. Production of Unforgiven which earned Oscars for its Director/Star Clint Eastwood as well as its screenwriter David Webb Peoples required fifteen years. Powers related that The Italian Job took approximately eight years from concept to screen which as Powers added And most concepts turned into paid screenplays wind up gathering dust on some never to see production.</p>
                </div>
                <div className='w-1/2'>
                    <Image src={images} alt=''/>
                </div>
            </div>
        </div>
    );
};

export default MainSection;