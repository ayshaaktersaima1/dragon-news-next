import { getIndividualNewsDetails } from '@/lib/data';
import Link from 'next/link';
import React from 'react';


export const generateMetadata = async ({ params }) => {
    const { id } = await params;
    const news = await getIndividualNewsDetails(id);


    return {
        title: news.data[0].title,
        description: news.data[0].details,
    }
}
const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const news = await getIndividualNewsDetails(id);
    // console.log(news.data[0].author.name)
    return (
        <div>
            <h1>{news.data[0].author.name}</h1>
            <Link href={`/category/${news.data[0].category_id}`}><button className='btn bg-red-500'>All news of this category</button></Link>
        </div>
    );
};

export default NewsDetailsPage;