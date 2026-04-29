import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import avatar from '@/assets/user.png'
import Navlink from './Navlink';
const Navbar = () => {
    return (
        <div className='flex justify-between my-5 items-center'>
            <div></div>
            <ul className='flex justify-center gap-4 items-center'>
                <li><Navlink href='/'>Home</Navlink></li>
                <li><Navlink className={'bg-blue-500'} href='/aboutus'>About</Navlink></li>
                <li><Navlink href='/carrier'>Carrier</Navlink></li>
            </ul>
            <div className='flex gap-3 justify-center items-center'>
                <Image src={avatar} alt='user' width={60} height={60}></Image>
                <Link href='/login'>
                    <button className='btn bg-amber-200'> Login</button></Link>
            </div>
        </div>
    );
};

export default Navbar;