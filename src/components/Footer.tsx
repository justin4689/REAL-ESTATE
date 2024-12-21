import React from 'react'
import { assets } from '../assets/assets'
const Footer = () => {
  return (
    <div className='bg-gray-900 text-white py-10'>
      <div className='flex flex-col md:flex-row justify-between items-center  mb-2 md:space-x-10 md:px-32 px-10'>
        <div className='md:w-1/3 w-full'>
            <img src={assets.logo_dark} alt="logo" className='mb-4  '/>
            <p className='text-gray-400'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
        </div>
        <div className='md:w-1/3 w-full'>
            <h3 className='text-xl font-bold'>Company</h3>
           <ul className='flex flex-col gap-2'>
            <li className='text-gray-400'>Home</li>
            <li className='text-gray-400'>About us</li>
            <li className='text-gray-400'>Contact us</li>
            <li className='text-gray-400'>Privacy Policy</li>
           
           </ul>
        </div>
        <div className='md:w-1/3 w-full'>
            <h3 className='text-xl font-bold'>Subscribe to our newsletter</h3>
            <p className='text-gray-400'>The latest news, articles, and resources, sent to your inbox weekly.</p>
            <input type="email" placeholder='Enter your email' className='w-full border bg-slate-600 border-black rounded py-2 px-4 mt-2' />
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md mt-2'>Subscribe</button>
        </div>
       
      </div>
      <hr className='border-gray-700 md:max-w-6xl mx-auto ' />
      <div className='flex justify-between items-center px-10'>
        <p className='text-gray-400'>© 2024 Company Name. All rights reserved.</p>
        <p className='text-gray-400'>Privacy Policy</p>
      </div>
    </div>
  )
}

export default Footer
