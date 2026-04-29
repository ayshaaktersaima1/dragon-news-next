import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';

const RightSidebar = () => {
    return (
        <div className='space-y-3'>
            <h2>Login with</h2>
            <button className='btn btn-outline'><FaFacebook />Login with facebook</button>
            <button className='btn btn-outline'><FaGithub />Login with github</button>
        </div>
    );
};

export default RightSidebar;