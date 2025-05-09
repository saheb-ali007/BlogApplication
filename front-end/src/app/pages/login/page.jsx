"use client"

import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link'


function login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
    const onSubmit = (data) => {
      console.log(data);
    }
    
  return (
      <div className='flex items-center justify-center ml-50 m-20 bg-white w-2/3  shadow-2xl '>
        <div className='w-3/5 bg-white h-120 '>
          <h1 className='font-semibold pt-3 pl-3 text-4xl text-gradient-to-r from-purple-200 to-purple-200'>
            <span className='bg-gradient-to-r text-transparent from-blue-500 to-purple-500 bg-clip-text'>
              Team-B
            </span>
          </h1>
          <div className='py-5 text-center'>
            <h2 className='text-3xl font-semibold text-green-500'>
              Welcome Back!
            </h2>
            <p className='text-sm text-black mt-5'>Enter your Credentials to access your account</p>
          </div>
        
          <form action="" onSubmit={handleSubmit(onSubmit)}> 
            <div className='flex justify-baseline ml-26 mb-1'>
              <label htmlFor="email" className=' text-black '>Email Address</label>
            </div>
            <div className='flex justify-center'>
              <input type="email" name='email' placeholder='Enter Your Email' className='bg-gray-100 w-80 h-8 pl-4 rounded-full text-gray-500'
              {...register(
                'email', 
                { 
                  required: 'First name is required' 
                }
              )}
              />
            </div>

            <div className=' mt-6'>
              <div className='flex justify-baseline items-center mb-1 ml-26 '>
              
                  <label htmlFor="password" className='text-left text-black '>Password</label>
                
              </div>

              <div className='flex justify-center'>
                <input type="password" name='password' placeholder='Password' className='bg-gray-100 w-80 h-8 pl-4 rounded-full border-white text-gray-500 flex items-center'
                {...register(
                  "password"
                )}
                />
              </div>

              <div className='mt-5 flex justify-center'>
                <Link href="#">
                  <button className='rounded  px-4 py-1  mt-5 border-1 w-80 bg-blue-500 hover:bg-blue-400 text-white font-semibold hover:text-orange-500' type='submit'>
                    Login
                  </button>   
                </Link> 
              </div>
            </div>

            <div className='flex justify-end italic mt-3  md:justify-center'>
              <Link href='#'>Forgot password?</Link>
            </div>
         </form>
        </div>
           <div className='bg-gradient-to-r from-purple-100 via-purple-300 to-purple-200 px-6 text-2xl text-white items-center text-center w-2/5 h-120 rounded-tl-2xl rounded-bl-2xl md:block hidden'>
              <h2 className='text-indigo-900 mb-6 pt-20 leading-6'><i>"Failure is not the opposite of Success, It's part of Success"</i></h2>
              <p className='text-sm text-black inline-block pt-20'>Fill up personal information and journey with us.</p>

              <div className="bg-purple-300 rounded-full text-center px-4 py-1 hover:bg-purple-200 mt-5 border-1  inline-block">
                <Link href="/registration" className="text-gray-800">
                Sign Up
                </Link>
              </div>
            </div>
    </div>
  )
}

export default login