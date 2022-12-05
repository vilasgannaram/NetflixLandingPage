import React from 'react';

import Subscribe from '../Subscribe';

import image from '../../assets/background_2.jpg';
import logo from '../../assets/logo.png';

const HeroSection = () => {
  return (
    <header className='relative border-b-[8px] border-[#222]'>
      {/* background image */}
      <figure className='relative h-[480px] w-full sm:h-[520px] md:h-[600px] lg:h-[720px]'>
        <img
          className='h-full w-full object-cover'
          src={image}
          alt='Netflix movies poster 2022'
        />
        <div className='absolute top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.8)] opacity-80 lg:opacity-90' />
      </figure>

      {/* header content */}
      <div className='absolute top-0 left-0 right-0 bottom-0'>
        <div className='mx-auto w-[90%] text-[white] shadow-lg'>
          <nav className='mt-6 flex items-center justify-between md:mt-8 lg:mt-10'>
            <figure className='w-[88px] md:w-[134px] lg:w-[167px]'>
              <img
                className='w-full object-contain'
                src={logo}
                alt='netflix logo'
              />
            </figure>
            {/* logo and sign in button */}
            <div className='flex items-center text-sm md:text-base'>
              <select className='border-white border bg-[black] py-0.5 px-2 md:py-1 md:px-3 lg:px-4'>
                <option value='english'>English</option>
                <option value='hindi'>Hindi</option>
              </select>

              <button className='ml-5 rounded bg-red py-1 px-2 hover:opacity-80 md:ml-6 md:px-3 lg:ml-8 lg:px-4'>
                Sign In
              </button>
            </div>
          </nav>

          <div className='mx-auto mt-20 max-w-[450px] text-center md:mt-24 md:max-w-[600px] lg:mt-40 lg:max-w-[820px]'>
            <h1 className='text-3xl font-bold md:text-5xl lg:text-7xl'>
              Unlimited movies, TV shows and more.
            </h1>
            <p className='mt-3 text-sm font-semibold md:text-base lg:text-lg'>
              Watch anywhere. Cancel anytime.
            </p>

            <Subscribe />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
