import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {

    const news = [
        {
            id: 1,
            title: "Global Tech Companies Invest Billions in AI Development    "
        },
        {
            id: 2,
            title: "Scientists Discover New Method to Improve Renewable Energy Storage    "
        },
        {
            id: 3,
            title: "Major Cities Announce Plans to Expand Public Transportation Networks   "
        }
    ];


    return (
        <div className='flex bg-gray-400 py-2'>
            <button className='btn bg-red-500 text-white'>Latest news</button>
            <Marquee pauseOnHover={true} speed={80}>
                {
                    news.map(n => {
                        return <span key={n.id} className='mr-8'>{n.title}</span>
                    })
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;