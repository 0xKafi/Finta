import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className='flex flex-col items-center w-full mt-20'>
                <button className='border border-neutral-200 bg-[#ebebfb] text-neutral-700 rounded-full px-4 py-1 font-medium text-sm hover:bg-gray-200 transition duration-200 cursor-pointer'>What are early stage tax requirements?</button>

                <div className='mt-8'>
                    <h1 className='font-semibold text-center text-6xl tracking-tight'>Magically simplify <br /> accounting and taxes</h1>
                    <p className='font-medium max-w-md mx-auto mt-10 text-center text-md text-neutral-500'>Automated bookkeeping. Effortless tax filing. Financial clarity. Set up in 10 mins. Back to building by 3:08am.</p>
                </div>

                <div className='mt-6 flex gap-5 '>
                    <button className='bg-[#2579f4] text-white px-4 py-1 font-medium rounded-md shadow-lg text-shadow-sm cursor-pointer'>Start free trail</button>
                    <button className=' text-black px-4 py-1 font-medium rounded-md text-shadow-xs cursor-pointer'>Pricing &rarr;</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;