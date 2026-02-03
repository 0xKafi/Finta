import React from 'react';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='bg-linear-to-b from-[#f5faff] to-[#bdd8fc] px-4'>
        <div className='max-w-4xl mx-auto h-screen relative px-4'>
            <Navbar></Navbar>
        </div>
    </div>
  );
};

export default App;