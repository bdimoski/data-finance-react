import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setIsOpen(!isOpen);
  };
  
  useEffect(() => {
    const handleCloseNav = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleCloseNav);
    return () => window.removeEventListener('resize', handleCloseNav);
  }, []);

  return (
    <div className='flex justify-between items-center h-18 max-w-[1240px] mx-auto px-10 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 hover:text-[#00df9a]'>Home</li>
        <li className='p-4 hover:text-[#00df9a]'>Company</li>
        <li className='p-4 hover:text-[#00df9a]'>About</li>
        <li className='p-4 hover:text-[#00df9a]'>Contact</li>
      </ul>


      <div onClick={handleNav} className='block md:hidden'>
        {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>


      <ul className={isOpen ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
        <li className='p-4 border-b border-gray-600'>Home</li>
        <li className='p-4 border-b border-gray-600'>Company</li>
        <li className='p-4 border-b border-gray-600'>Resources</li>
        <li className='p-4 border-b border-gray-600'>About</li>
        <li className='p-4'>Contact</li>
      </ul>


    </div>
  );
};

export default Navbar;