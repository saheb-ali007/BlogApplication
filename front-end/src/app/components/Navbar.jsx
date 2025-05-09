      
"use client"; 

import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link'




function Login() { 
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here (e.g., API call)
  };

  return (
    // Mobile: Full width, padding, centered content
    // Medium screens and up: Wider container, two columns
    <div className='flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-4'>
      <div className='bg-white w-full max-w-4xl md:flex shadow-xl rounded-lg overflow-hidden'>

        {/* Form Section */}
        {/* Mobile: Full width, takes all space */}
        {/* Medium screens and up: Takes 3/5 width */}
        <div className='w-full md:w-3/5 p-6 md:p-10'>
          <h1 className='font-semibold text-3xl mb-4 bg-gradient-to-r text-transparent from-blue-500 to-purple-500 bg-clip-text'>
            Team-B
          </h1>

          <div className='text-center mb-6'>
            <h2 className='text-2xl font-semibold text-green-500'>
              Welcome Back!
            </h2>
            <p className='text-sm text-gray-600 mt-2'>Enter your credentials to access your account</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-1'>Email Address</label>
              <input
                type="email"
                id="email" // Good practice to link label and input with id
                placeholder='Enter Your Email'
                className={`w-full px-4 py-2 border rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                {...register(
                  'email',
                  {
                    required: 'Email is required',
                    pattern: { // Basic email pattern validation
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  }
                )}
              />
              {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email.message}</p>}
            </div>

            {/* Password Input */}
            <div>
               <label htmlFor="password" className='block text-sm font-medium text-gray-700 mb-1'>Password</label>
               <input
                 type="password"
                 id="password"
                 placeholder='Password'
                 className={`w-full px-4 py-2 border rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                 {...register(
                   "password",
                   {
                     required: 'Password is required'
                     // Add minLength etc. if needed
                   }
                 )}
               />
                {errors.password && <p className='text-red-500 text-xs mt-1'>{errors.password.message}</p>}
            </div>

             {/* Forgot Password Link */}
             <div className='text-right text-sm'>
                <Link href='#' className='text-blue-500 hover:underline'>Forgot password?</Link>
             </div>

             {/* Submit Button */}
             {/* Note: The button inside the Link was incorrect. The form's onSubmit handles submission. */}
             {/* If you want the button to *look* like a link, style it accordingly. */}
             {/* If you want navigation *after* successful login, handle it in onSubmit */}
            <button
                type='submit'
                className='w-full rounded-full px-4 py-2 mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold transition duration-200'
              >
                Login
            </button>

          </form>
        </div>

       
        <div className=' md:flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 text-white w-full md:w-2/5 p-5 text-center'>
            <h2 className='text-xl lg:text-2xl font-semibold mb-4 italic'>"Failure is not the opposite of Success, It's part of Success"</h2>
            <p className='text-sm mb-6'>Fill up personal information and start your journey with us.</p>
            <Link href="/registration">
              <span className="block w-full md:w-auto bg-white text-purple-600 rounded-full px-6 py-2 font-semibold hover:bg-gray-100 transition duration-200 cursor-pointer">
                  Sign Up
              </span>
            </Link>
        </div>

      </div>
    </div>
  );
}

export default Login; // Use uppercase for component name