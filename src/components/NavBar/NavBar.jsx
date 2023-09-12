import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = e => {
      if (isMenuOpen && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const handleMenuButtonClick = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <div className='sticky top-0 bg-gray-100 z-50 md:px-4 shadow'>
      <div className='flex md:justify-around justify-between px-4 py-2'>
        <h2 className='text-3xl font-semibold font-titleFont text-bodyColor px-2'>
          <Link to='/'>Caffeine Chronicles</Link> 
        </h2>
        <div ref={menuRef}>
          <button 
            className='block md:hidden pt-2 text-bodyColor'
            onClick={handleMenuButtonClick}
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </button>
          
          {isMenuOpen && (
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-16 left-0 w-full bg-gray-100`}>
              <ul className='flex flex-col items-center font-titleFont gap-4 px-8 py-8 text-bodyColor cursor-pointer'>
                <li>
                  <Link to='/coffeeshops' onClick={() => setIsMenuOpen(false)}>Coffee Shops</Link>
                </li>
                <li>
                  <Link to='/createCS' onClick={() => setIsMenuOpen(false)}>Create a Listing</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        
        <ul className='hidden md:flex justify-center gap-6 text-bodyColor text-[18px] font-titleFont pt-2'>
          <li>
            <Link to='/coffeeshops' className='cursor-pointer font-titleFont transition-all hover:text-gray-600'>Coffee Shops</Link>
          </li>
          <li>
            <Link to='/createCS' className='cursor-pointer font-titleFont transition-all hover:text-gray-600'>Create a Listing</Link>  
          </li>
        </ul>
      </div>
    </div>
  );
}