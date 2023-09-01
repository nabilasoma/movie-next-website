import React from 'react';
import image from '../../../public/fox-logo-removebg.png'
import Image from 'next/image'
import Nav from './Nav';

const Header = () => {
    return (
        
            <div className='h-24 shadow-xl border w-full bg-slate-200'>
            <div className='flex justify-between mx-20 items-center'>
            <div>
                <Image src={image} alt='logo' width={100} height={70}/>
            </div>
            <div>
                <Nav></Nav>
            </div>
            </div>
        </div>
    );
};

export default Header;