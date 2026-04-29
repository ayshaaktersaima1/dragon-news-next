'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()



    const handleRegisterFunc = async (data) => {
        const { name, email, photoUrl, password } = data;
        console.log(name, email, photoUrl, password);


        const { data: res, error } = await authClient.signUp.email({
            name: data.name,
            email: data.email,
            password: data.password,
            image: data.photoUrl,
            callbackURL: "/",
        });
        console.log(res, error)
        if (error) {
            alert(error.message)
        }
        if (res) {
            alert('signup successful')
        }
    }

    return (
        <div>
            <h1>Register page</h1>

            <form onSubmit={handleSubmit(handleRegisterFunc)}>

                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Name</legend>
                    <input {...register('name', { required: true })} type="text" className="input" placeholder="name" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Photo url</legend>
                    <input {...register('photoUrl', { required: true })} type="text" className="input" placeholder="Photo Url" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Email</legend>
                    <input {...register("email", { required: 'email is required' })} type="email" className="input" placeholder="Email" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Password</legend>
                    <input
                        {...register("password", {
                            required: 'Password is required',
                            minLength: {
                                value: 8,
                                message: 'Password must be at least 8 characters'
                            }
                        })}
                        type="password"
                        className="input"
                        placeholder="Password"
                    />
                </fieldset>
                <button className='btn bg-red-400'>Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;