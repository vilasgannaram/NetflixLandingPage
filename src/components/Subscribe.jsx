import React from 'react';
import chevronRight from '../assets/chevron_right.svg';

const Subscribe = () => {
  return (
    <form className='mt-5 text-center text-sm md:mt-6 md:text-base lg:mt-8 lg:text-lg'>
      <label htmlFor='email' className='cursor-pointer font-semibold'>
        Ready to watch? Enter your email to create or restart your membership.
      </label>
      <div className='lg:mt-3 lg:flex'>
        <input
          className='mt-3 w-full px-2 py-2 text-[black] outline-none md:mt-5 md:px-3 md:py-3 lg:mt-0 lg:p-4'
          type='email'
          name='email'
          id='email'
          placeholder='Email address...'
        />
        <button
          className='mx-auto mt-3 flex items-center justify-center rounded border-0 bg-red px-2 py-1.5 outline-0 md:mt-5 md:px-4 md:py-3 lg:mt-0 lg:w-[220px] lg:p-4'
          type='submit'
        >
          <span>Get Started</span>
          <img src={chevronRight} alt='chevron right' />
        </button>
      </div>
    </form>
  );
};

export default Subscribe;
