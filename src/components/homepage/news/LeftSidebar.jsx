import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({ categories, activeId }) => {

    return (
        <div>
            <div className="col-span-1 text-3xl font-bold">All categories
                <ul className="flex flex-col gap-5 font-medium text-lg">
                    {
                        categories.data.news_category.map((category, category_id) => {
                            return <Link href={`/category/${category.category_id}`} className={`${activeId === category.category_id && 'bg-pink-600 p-2 '} rounded-2xl `} key={category_id} >

                                {category.category_name} </Link>
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default LeftSidebar;