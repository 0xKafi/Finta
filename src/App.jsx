import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import image from './assets/hero-ui-v6.webp'

const App = () => {
  return (
    <div>
      <div className='bg-linear-to-b from-[#f5faff] via-[#bdd8fc] to-[#f5faff] relative'>
        <div className='absolute max-w-5xl mx-auto inset-x-0 h-full w-full'>
          <div className='absolute z-20 w-px left-0 inset-y-0 h-full bg-linear-to-b to-[#f5faff] via-neutral-300 from-neutral-300'></div>
          <div className='absolute z-20 w-px right-0 inset-y-0 h-full bg-linear-to-b to-[#f5faff] via-neutral-300 from-neutral-300'></div>
      </div>
        <div className='container max-w-5xl mx-auto px-4'>
            <Navbar></Navbar>
            <Hero></Hero>
        </div>
        <div className='relative w-full mt-20'>
          <div className='absolute h-px top-0 w-full bg-neutral-400'></div>
          <div className='max-w-5xl mx-auto p-4'>
            <img className='rounded-lg object-fit mask-b-from-0% to-100%' src={image} alt="banner-image" />
          </div>
        </div>
        <div className='mt-20'></div>
      </div>
    </div>
  );
};

export default App;