"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({ href, children, className }) => {

    const pathName = usePathname();
    // console.log(pathName)
    const isActive = pathName === href;
    return (
        <Link className={`${isActive ? 'bg-amber-500 font-extrabold' : ''}  ${className}`} href={href}>{children}</Link>
    );
};

export default Navlink;