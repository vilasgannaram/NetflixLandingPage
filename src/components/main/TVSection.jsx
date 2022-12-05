import React from 'react';

import TV from '../../assets/tv.png';
import video from '../../assets/tv-video.mp4';

const TVSection = () => {
  return (
    <div className='border-b-[8px] border-[#222]'>
      <div className='mx-auto w-[90%] items-center justify-between py-10 md:w-[80%] lg:flex lg:w-[72%]'>
        <div className='mx-auto text-center md:w-[90%] lg:ml-0 lg:w-[50%] lg:text-start'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
            Enjoy on your TV.
          </h2>
          <p className='mt-3 text-lg font-medium md:mt-4 lg:mt-6 lg:text-xl'>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>

        <figure className='relative lg:w-[45%]'>
          <img className='z-10 w-full' src={TV} alt='TV frame' />
          <video
            className='absolute top-[20.5%] left-[13%] -z-10 w-[73%]'
            autoPlay
            src={video}
          ></video>
        </figure>
      </div>
    </div>
  );
};

export default TVSection;
