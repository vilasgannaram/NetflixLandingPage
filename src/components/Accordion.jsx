import React, { useState } from 'react';

import open from '../assets/open.svg';
import close from '../assets/close.svg';

const Accordion = ({ faq }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleShowDes = () => {
    setShowDescription((prevState) => !prevState);
  };

  return (
    <>
      <div
        onClick={handleShowDes}
        className='mt-2 flex items-center justify-between bg-[#303030] py-4 px-6 font-medium md:text-lg lg:text-2xl'
      >
        <h3>{faq.title}</h3>

        <figure>
          <img
            src={!showDescription ? open : close}
            alt={!showDescription ? 'open' : 'close'}
          />
        </figure>
      </div>

      {showDescription && (
        <div className='mt-[2px] bg-[#303030] py-5 px-6 text-base font-normal'>
          {faq.description.map((des, index) => (
            <p className='mt-3 text-sm md:text-base lg:text-lg' key={index}>
              {des}
            </p>
          ))}
        </div>
      )}
    </>
  );
};

export default Accordion;
