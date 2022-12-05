import React from 'react';

import TVSection from './TVSection';
import DownloadSection from './DownloadSection';
import WatchEveryWhere from './WatchEveryWhere';
import ChildrenSection from './ChildrenSection';
import FAQ from './FAQ';

const Main = () => {
  return (
    <div className='border-b-[8px] border-[#222] pb-8 font-semibold text-[white] md:pb-12 lg:pb-16 '>
      <TVSection />
      <DownloadSection />
      <WatchEveryWhere />
      <ChildrenSection />
      <FAQ />
    </div>
  );
};

export default Main;
