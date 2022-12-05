import React from 'react';
import children from '../../assets/children.png';

const ChildrenSection = () => {
  return (
    <div className='border-b-[8px] border-[#222]'>
      <div className='mx-auto w-[90%] flex-row-reverse items-center justify-between py-10 md:w-[80%] lg:flex lg:w-[72%]'>
        <div className='mx-auto text-center md:w-[90%] lg:ml-0 lg:w-[50%] lg:text-start'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
            Create profiles for children.
          </h2>
          <p className='mt-3 text-lg font-medium md:mt-4 lg:mt-6 lg:text-xl'>
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>

        <figure className='mt-4 lg:mt-0 lg:w-[45%]'>
          <img className='z-10 w-full' src={children} alt='children' />
        </figure>
      </div>
    </div>
  );
};

export default ChildrenSection;
