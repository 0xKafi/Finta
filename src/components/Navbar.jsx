import React from 'react';

const Navbar = () => {
    const links = [
        {
            title: 'Founders',
            href: '#'
        },
        {
            title: 'Guide',
            href: '#'
        },
        {
            title: 'Pricing',
            href: '#'
        },
        {
            title: 'Login',
            href: '#'
        }
    ]
    
    return (
        <div>
            {/* navbar root */}
            <div className='flex justify-between items-center py-4'>
                <div><img src="https://a-us.storyblok.com/f/1023015/68x24/8f586a9168/logo.svg" alt="finta-logo" /></div>
                <div className='flex gap-8 items-center'>
                    <div className='flex gap-4 font-medium'>
                        {links.map((link)=><a className='text-black/80 hover:text-black/60 transition duration-200' href={link.href}>{link.title}</a>)}
                    </div>
                    <button className='bg-[#2579f4] text-white px-4 py-1 font-medium rounded-md shadow-lg text-shadow-sm'>Start free trail</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;