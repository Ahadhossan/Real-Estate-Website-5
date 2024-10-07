/** @format */

import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";
import { BsHeart, BsPlusSquare } from "react-icons/bs";
import { FaBath, FaBed, FaSquare } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";

type Props = {
  proprty: {
    id: number;
    propertyName: string;
    location: string;
    bedrooms: number;
    bathrooms: number;
    size: number;
    price: number;
    imageUrl: string;
  };
};

const PropertyCard = ({ proprty }: Props) => {
    return (
      <div className='bg-white overflow-hidden group rounded-lg cursor-pointer shadow-lg'>
        <div className='relative'>
          <Image
            src={proprty.imageUrl}
            alt={proprty.propertyName}
            width={300}
            height={300}
            className='w-full object-cover group-hover:scale-110 transition-all duration-300'
          />
          <h1 className='px-6 absolute bottom-4 left-4 py-1.5 text-sm bg-black w-fit text-white rounded-lg'>
            <span className=' text-base font-bold '>${proprty.price}</span> / mo
          </h1>
          <div className='flex items-center space-x-1 px-6 absolute top-4 left-4 py-2 text-sm bg-rose-600 w-fit text-white rounded-md font-bold'>
            <MdElectricBolt />
            <span> Featured</span>
          </div>
        </div>
        <div className='p-5'>
          <h1 className='mt-4 group-hover:underline text-gray-900 font-bold text-lg'>
            {proprty.propertyName}
          </h1>
          <p className='text-sm text-gray-500 mt-3 '>{proprty.location}</p>
          <div className='flex items-center mt-6 justify-between w-full lg:w-[80%]'>
            <div className='flex items-center  space-x-2'>
              <FaBed className='text-rose-500' />
              <p className='text-xs text-gray-600'> {proprty.bedrooms} Beds</p>
            </div>
            <div className='flex items-center  space-x-2'>
              <FaBath className='text-rose-500' />
              <p className='text-xs text-gray-600'>
                {' '}
                {proprty.bathrooms} Baths
              </p>
            </div>
            <div className='flex items-center  space-x-2'>
              <FaSquare className='text-rose-500' />
              <p className='text-xs text-gray-600'> {proprty.size} sqrt</p>
            </div>
          </div>
          <div className='w-full h-[1.2px] mt-4 mb-4 bg-gray-500 opacity-15'></div>
          <div className='flex items-center justify-between'>
            <h1 className='text-xs text-gray-600'>For Rent</h1>
            <div className='flex items-center space-x-4 text-gray-500'>
              <BiLinkExternal className='cursor-pointer' />
              <BsPlusSquare className='cursor-pointer' />
              <BsHeart className='cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
    );
};

export default PropertyCard;
