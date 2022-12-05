import React from 'react';

const Footer = () => {
  return (
    <footer className='mx-auto w-[90%] text-[#676767] md:w-[80%] lg:w-[60%]'>
      <p className='mt-8 md:mt-12 lg:mt-16 lg:text-lg'>
        Questions? Call 000-800-040-1843
      </p>

      <div className='mt-6 grid grid-cols-2 text-sm md:mt-8 md:grid-cols-4 lg:mt-12 lg:text-base'>
        <ul>
          {['FAQ', 'Investor Relations', 'Privacy', 'Speed Test'].map((el) => (
            <li key={el} className='mt-2 md:mt-3'>
              <a href='#'>{el}</a>
            </li>
          ))}
        </ul>

        <ul>
          {['Help Center', 'Jobs', 'Cookie Preferences', 'Legal Notices'].map(
            (el) => (
              <li key={el} className='mt-2 md:mt-3'>
                <a href='#'>{el}</a>
              </li>
            )
          )}
        </ul>

        <ul>
          {[
            'Account',
            'Ways to Watch',
            'Corporate Informaion',
            'Only on Netflix',
          ].map((el) => (
            <li key={el} className='mt-2 md:mt-3'>
              <a href='#'>{el}</a>
            </li>
          ))}
        </ul>

        <ul>
          {['Media Center', 'Terms of Use', 'Contact Us'].map((el) => (
            <li key={el} className='mt-2 md:mt-3'>
              <a href='#'>{el}</a>
            </li>
          ))}
        </ul>
      </div>

      <select className='border-white mt-6 border bg-[black] py-0.5 px-2 md:mt-8 md:py-1 md:px-3 lg:mt-10 lg:px-4'>
        <option value='english'>English</option>
        <option value='hindi'>Hindi</option>
      </select>

      <p className='mt-6 mb-8 md:mt-8 lg:mt-10'>Netflix India</p>
    </footer>
  );
};

export default Footer;
