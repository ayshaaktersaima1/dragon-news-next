'use client'

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye } from 'react-icons/fa';

const LoginPage = () => {

    const [isShowPassword, setIsShowPassword] = useState(false);

    // const handleLoginFunc = (e) => {
    //     e.preventDefault();

    //     const email = e.target.email.value;
    //     const password = e.target.password.value;

    //     console.log(email, password)
    // }
    const handleLoginFunc = async (data) => {
        // console.log(data)

        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: "/",
        });
        console.log(res, error)


        if (error) {
            alert(error.message)
        }
        if (res) {
            alert('Login successful')
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm()


    // console.log('heyy', errors);
    // console.log(watch('email'))
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1>LoginPage</h1>



            <form className='space-y-4 mx-[30%]' onSubmit={handleSubmit(handleLoginFunc)}>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Email</legend>
                    <input {...register('email', { required: true })} type="email" className="input" placeholder="Email" />
                </fieldset>

                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Password</legend>
                    <input {...register('password', { required: 'password is required' })} type={isShowPassword ? 'text' : 'password'} className="input" placeholder="Password" />
                    <span><FaEye onClick={() => setIsShowPassword(!isShowPassword)}></FaEye></span>
                    {errors.password && <p>{errors.password.message}</p>}
                </fieldset>

                <button className='btn bg-blue-400'>Login</button>
            </form>
            <p className='mt-4'>Dont have an accoount? <Link className='text-red-600' href={'/register'}>Register</Link></p>
        </div>
    );
};

export default LoginPage;