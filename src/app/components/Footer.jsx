import React from 'react';
import image from '../../../public/fox-logo-removebg.png'
import Image from 'next/image'
import { FaFacebook, FaTwitter, FaInstagram, FaDribbble } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-gray-800 text-white w-full h-80 mt-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-6'>
                <div className='mx-20'>
                <div>
                <Image src={image} alt='logo' width={100} height={70}/>
               </div>
               <h2 className=''>Social Contacts</h2><br/>
               <div className='flex gap-2'>
               
               <span className='text-xl'><FaFacebook></FaFacebook></span> 
                <span className='text-xl'><FaTwitter></FaTwitter></span>
                <span className='text-xl'><FaInstagram></FaInstagram></span>
                <span className='text-xl'><FaDribbble></FaDribbble></span>
               </div>
                </div>
                <div>
                <h2 className='text-lg font-bold'>Contact Us</h2><br/>
                <div className='flex flex-col'>
                <p><small>Main Office</small></p>
                <p><small>Branch Office</small></p>
                <p><small>Local Office</small></p>
                <p><small>International Office</small></p>
                </div>
                </div>
                <div className=''>
                    <p className='text-lg font-bold'>Contact Form</p><br/>
                    <input className='text-black mt-2 p-1 rounded' type="search" placeholder='name' value="" /><br/>
                    <input className='text-black mt-2 p-1 rounded' placeholder='email' type="text" value="" />
                    <input className='text-black mt-2 p-1 rounded' type="text" placeholder='message' value="" />
                    <button className='rounded mt-2 px-6 py-1 bg-red-500 text-white'>Submit</button>
                </div>
                <div>
                    <h2>Main Office Address</h2><br/>
                    <p><small>
                    Level-7, 34, Dhaka Centre, Banani, Dhaka<br/>
                    Support: web@getprogrammer-future.com<br/>
                    Helpline: 013258963 , 0123659811<br/>
                    (Available : Sat - Thu, 10:00 AM to 7:00 PM)</small></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;