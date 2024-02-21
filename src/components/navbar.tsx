import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <nav className='bg-emerald-400 p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <div>
          <Link className='text-white text-2xl font-bold' href='/'>
            PSI Fulana ✨
          </Link>
        </div>
        <div className='hidden md:block'>
          <Link className='text-white mr-4 font-bold' href='/about'>
            Sobre mim
          </Link>
          <Link className='text-white mr-4 font-bold' href='/testimony'>
            Depoimentos
          </Link>
          <Link className='text-white font-bold' href='/contact'>
            Contato
          </Link>
        </div>
        <div className='md:hidden'>
          <button
            className='text-white focus:outline-none'
            onClick={() => handleToggle()}
          >
            {isOpen ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-8 h-8'
              >
                <path
                  fillRule='evenodd'
                  d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z'
                  clipRule='evenodd'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-8 h-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden bg-emerald-500  text-2xl rounded-md m-2 p-2'>
          <Link className='block text-white p-2 font-bold' href='/about' onClick={() => handleToggle()}>
            Sobre mim
          </Link>
          <Link className='block text-white p-2 font-bold' href='/testimony' onClick={() => handleToggle()}>
            Depoimentos
          </Link>
          <Link className='block text-white p-2 font-bold' href='/contact' onClick={() => handleToggle()}>
            Contato
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
