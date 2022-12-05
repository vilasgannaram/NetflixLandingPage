import React from 'react';

import devices from '../../assets/devices.png';
import video from '../../assets/video-devices-in.mp4';

const WatchEveryWhere = () => {
  return (
    <div className='border-b-[8px] border-[#222]'>
      <div className='mx-auto w-[90%] items-center justify-between py-10 md:w-[80%] lg:flex lg:w-[72%]'>
        <div className='mx-auto text-center md:w-[90%] lg:ml-0 lg:w-[50%] lg:text-start'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
            Watch everywhere.
          </h2>
          <p className='mt-3 text-lg font-medium md:mt-4 lg:mt-6 lg:text-xl'>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>

        <figure className='relative mt-4 lg:mt-0 lg:w-[45%]'>
          <img className='z-10 w-full' src={devices} alt='devices pile' />
          <video
            className='absolute top-[8%] left-[17%] -z-10 w-[63%]'
            autoPlay
            src={video}
          ></video>
        </figure>
      </div>
    </div>
  );
};

export default WatchEveryWhere;
