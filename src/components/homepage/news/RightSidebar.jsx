'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log('here', data)
    }

    const handleGithubSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "github"
        })

    }
    return (
        <div className='flex flex-col space-y-3'>
            <h2>Login with</h2>
            <button onClick={handleGoogleSignIn} className='btn btn-outline'><FaGoogle />Login with Google</button>
            <button onClick={handleGithubSignIn} className='btn btn-outline'><FaGithub />Login with github</button>
        </div>
    );
};

export default RightSidebar;