import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='text-center py-10 space-y-2'>
            <Image src={logo} alt='logo' width={300} height={200} className='mx-auto'></Image>

            <p>Journalism without fear</p>
            <p>{format(new Date(), "EEEE,MMM dd,yyyy")}</p>
        </div>
    );
};

export default Header;