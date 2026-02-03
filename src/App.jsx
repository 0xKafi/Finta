import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {
  return (
    <div className='bg-linear-to-b from-[#f5faff] to-[#bdd8fc] px-4'>
        <div className='max-w-4xl mx-auto h-screen relative px-4'>
          <div className='absolute w-px left-0 inset-y-0 h-full bg-neutral-300'></div>
          <div className='absolute w-px right-0 inset-y-0 h-full bg-neutral-300'></div>
            <Navbar></Navbar>
            <Hero></Hero>
        </div>
    </div>
  );
};

export default App;