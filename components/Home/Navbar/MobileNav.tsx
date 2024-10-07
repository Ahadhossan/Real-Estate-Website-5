/** @format */

'use client';

import { navLinks } from '@/constant/Constant';
import Link from 'next/link';
import { CgClose } from 'react-icons/cg';

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const responsiveNav = showNav ? 'translate-x-0' : 'translate-x-[-100%]';

  return (
    <div>
      {/* overlay */}
      <div
        className={`transform ${responsiveNav} fixed  transition-all duration-500 fixed inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}></div>

      <div
        className={`text-white ${responsiveNav} transform transition-all duration-500 delay-300 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#c1205e] space-y-6 z-[10000]`}>
        {/* navlinks */}
        {navLinks.map((navlink) => {
          return (
            <Link href={navlink.url} key={navlink.id}>
              <p className='text-[20px] ml-12 border-b-[1.5px] pb-1 w-fit border-white sm:text-[30px]'>
                {navlink.label}
              </p>
            </Link>
          );
        })}

        {/* colseButton */}
        <CgClose
          onClick={closeNav}
          className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white'
        />
      </div>
    </div>
  );
};

export default MobileNav;
