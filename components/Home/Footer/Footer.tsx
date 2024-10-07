/** @format */

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaHouse } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='pt-20 pb-12 bg-black'>
      <div className='w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20'>
        <div>
          <div className='flex items-center space-x-2 '>
            <div className=' md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white flex items-center justify-center flex-col '>
              <FaHouse />
            </div>
            <h1 className='text-white font-bold text-sm sm:text-base md:text-xl'>
              HomeHub
            </h1>
          </div>
          <p className='text-gray-300 mt-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eos
            esse explicabo minima maxime
          </p>
          <p className='text-gray-300 mt-4 font-semibold'>example@gmail.com</p>
          <p className='text-gray-300 mt-2 font-semibold'>+012 34567 890</p>
          <div className='flex items-center space-x-4 mt-6'>
            <FaFacebookF className='w-6 h-6 text-blue-600' />
            <FaTwitter className='w-6 h-6 text-blue-600' />
            <FaYoutube className='w-6 h-6 text-blue-600' />
            <FaInstagram className='w-6 h-6 text-blue-600' />
          </div>
        </div>
        <div className='md:mx-auto'>
          <h1 className='footer-heading'>Popular Search</h1>
          <p className='footer-link'>Apartment for Rent</p>
          <p className='footer-link'>Apartment Low to Hide</p>
          <p className='footer-link'>Offices for Buy</p>
          <p className='footer-link'>Offices for Rent</p>
        </div>
        <div className='lg:mx-auto'>
          <h1 className='footer-heading'>Quick Link</h1>
          <p className='footer-link'> Terms of Use</p>
          <p className='footer-link'>Privacy Policy</p>
          <p className='footer-link'>Pricing Plans</p>
          <p className='footer-link'>Our Services</p>
          <p className='footer-link'>Contact Support</p>
          <p className='footer-link'>Careers</p>
          <p className='footer-link'> FAQs</p>
        </div>
        <div className='md:mx-auto'>
          <h1 className='footer-heading'>Discover</h1>
          <p className='footer-link'>Miami</p>
          <p className='footer-link'>Los Angeles</p>
          <p className='footer-link'>Chicago</p>
          <p className='footer-link'> New York</p>
          <p className='footer-link'>London</p>
        </div>
      </div>
      <p className='text-center mt-4 text-base text-white opacity-70'>
        ©Copyright 2024 by Ahad
      </p>
    </div>
  );
};

export default Footer;
