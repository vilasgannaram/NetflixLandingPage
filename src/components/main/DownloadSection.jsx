import React from 'react';

import mobile from '../../assets/mobile.jpg';
import boxShot from '../../assets/boxshot.png';
import download from '../../assets/download.gif';

const DownloadSection = () => {
  return (
    <div className='border-b-[8px] border-[#222]'>
      <div className='mx-auto w-[90%] flex-row-reverse items-center justify-between py-10 md:w-[80%] lg:flex lg:w-[72%]'>
        {/* text container */}
        <div className='text-center lg:w-[50%] lg:text-start'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
            Download your shows to watch offline.
          </h2>
          <p className='mt-3 text-lg font-medium md:mt-4 lg:mt-6 lg:text-xl'>
            Save your favourites easily and always have something to watch.
          </p>
        </div>

        {/* image container */}
        <figure className='relative mt-4 lg:mt-0 lg:w-[45%]'>
          <img className='z-10 w-full' src={mobile} alt='mobile frame' />
          <div className='absolute bottom-0 left-[15%] flex w-[70%] items-center justify-between rounded-xl border-[3px] border-[#222] bg-[black] p-2 md:p-3'>
            <figure className='w-[34px] md:w-[48px] lg:w-[55px]'>
              <img
                className='w-full'
                src={boxShot}
                alt='stranger things poster'
              />
            </figure>

            <div>
              <h3 className='text-sm md:text-base'>Stranger Things</h3>
              <p className='text-sm font-normal text-[#004ea4]'>
                Downloading...
              </p>
            </div>

            <figure className='w-[48px]'>
              <img className='w-full' src={download} alt='download gif' />
            </figure>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default DownloadSection;
