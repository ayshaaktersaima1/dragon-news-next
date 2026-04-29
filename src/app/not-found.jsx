import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-6xl text-center font-extrabold text-red-600'>Sorryyyyyyyy</h1>
            <Link href='/'>
                <button className='btn bg-amber-400'>back to home</button>
            </Link>
        </div>
    );
};

export default NotFound;