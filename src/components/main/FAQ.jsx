import React from 'react';
import Accordion from '../Accordion';
import Subscribe from '../Subscribe';

const faqs = [
  {
    title: 'What is Netflix?',
    description: [
      'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.',
      "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    ],
  },
  {
    title: 'How much does Netflix Costs?',
    description: [
      'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.',
    ],
  },
  {
    title: 'Where can I Watch?',
    description: [
      'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.',
      "You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    ],
  },
  {
    title: 'How do I Cancel?',
    description: [
      'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
    ],
  },
  {
    title: 'What can I watch on Netflix?',
    description: [
      'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
    ],
  },
  {
    title: 'Is Netflix? good for kids?',
    description: [
      'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.',
      `
      Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
    ],
  },
];

const FAQ = () => {
  return (
    <div className='mx-auto md:w-[80%] lg:w-[50%]'>
      <h2 className='mx-auto mt-8 w-[85%] text-center text-2xl md:mt-12 md:text-3xl lg:mt-16 lg:text-5xl'>
        Frequently Asked Questions
      </h2>

      <div className='mt-3 mb-12 md:mt-6 lg:mt-10'>
        {faqs.map((faq) => (
          <Accordion faq={faq} key={faq.title} />
        ))}
      </div>

      <div className='mx-auto w-[80%]'>
        <Subscribe />
      </div>
    </div>
  );
};

export default FAQ;
