import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NewsCard = ({ n }) => {
    return (
        <div>
            <h1>{n.title}</h1>
            <Image src={n.author?.img} alt='img' height={40} width={30}></Image>
            <Link href={`/news/${n._id}`}>
                <button className='btn bg-amber-500'>See details</button>
            </Link>
        </div>
    );
};

export default NewsCard;