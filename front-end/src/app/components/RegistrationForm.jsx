"use client"

import React from 'react';
import { useForm } from 'react-hook-form';
import RoleDropdown from './RoleDropDown';

function RegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <div className="flex justify-center items-center  bg-gradient-to-tr from-indigo-700 to-100% h-130">
      <div className="bg-gray-100 p-8 rounded shadow-md w-120 ">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Registration</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className='flex flex-row'>
            <div className='mr-5'>
              <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-1 ">First Name</label>
              <input
                type="text"
                id="firstName"
                {...register(
                  'firstName', 
                  { 
                    required: 'First name is required' 
                  }
                )}
                className="shadow appearance-none border rounded w-50 py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName.message}</p>}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-1">Last Name</label>
              <input
                type="text"
                id="lastName"
                {...register('lastName', { required: 'Last name is required' })}
                className="shadow appearance-none border rounded w-50 py-1 px-3 text-gray-700 leading-tight focus:outlineune focus:shadow-outline"
              />
              {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName.message}</p>}
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-1">Email</label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className='flex flex-row'>
            <div className='mr-5'>
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-1">Password</label>
              <input
                type="password"
                id="password"
                {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
                className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-1">Confirm Password</label>
              <input
                type="password"
                id="password"
                {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
                className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
            </div>
          </div>

          {/* Country & Role */}
          <div className='flex flex-row'>
            <div className='mr-5'>
              <label htmlFor="text" className="block text-gray-700 text-sm font-bold mb-1">Country</label>
              <input
                type="text"
                id="country"
                {...register('country', { required: 'Country is required',  })}
                className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.country && <p className="text-red-500 text-xs italic">{errors.country.message}</p>}
            </div>
            <div>
              <RoleDropdown />

              {/* <label htmlFor="text" className="block text-gray-700 text-sm font-bold mb-2">Role</label>
              <input
                type="text"
                id="role"
                {...register('role', { required: 'Role is required',  })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.role && <p className="text-red-500 text-xs italic">{errors.role.message}</p>} */}
            </div>
          </div>

          {/* Bio & Occupation */}
          <div className='flex flex-row'>
            <div className='mr-5'>
              <label htmlFor="text" className="block text-gray-700 text-sm font-bold mb-1">Bio</label>
              <input
                type="text"
                id="bio"
                {...register('bio', { required: 'Bio is required',  })}
                className="shadow appearance-none border rounded w-50 py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.bio && <p className="text-red-500 text-xs italic">{errors.bio.message}</p>}
            </div>
            <div>
              <label htmlFor="occupation" className="block text-gray-700 text-sm font-bold mb-1">Occupation</label>
              <input
                type="text"
                id="occupation"
                {...register('occupation', { required: 'Occupation is required',  })}
                className="shadow appearance-none border rounded w-50 py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.occupation && <p className="text-red-500 text-xs italic">{errors.occupation.message}</p>}
            </div>
          </div>

          
          <div className='text-center'>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;