import Link from 'next/link';
import React from 'react';

const Nav = () => {
    return (
        <nav>
            <div>
                <ul className='flex justify-evenly items-center gap-x-4'>
                    <li className='text-[15px] text-[#FFCE67] font-bold hover:text-yellow-500'>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li className='text-[15px] font-bold text-[#FFCE67] hover:text-yellow-500'>
                        <Link href={'/about'}>About</Link>
                    </li>
                    <li className='text-[15px] font-bold text-[#FFCE67] hover:text-yellow-500'>
                        <Link href={'/movie'}>Movie</Link>
                    </li>
                    <li className='text-[15px] font-bold text-[#FFCE67] hover:text-yellow-500'>
                        <Link href={'/contact'}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;