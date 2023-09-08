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
    <div className='sticky top-0 bg-bodyColor z-50 px-4'>
      <div className='flex justify-between px-4 py-3'>
        <h2 className='text-3xl font-semibold text-bgColor px-2'>
          <Link to='/'>Caffeine Chronicles</Link> 
        </h2>
        <div ref={menuRef}>
          <button 
            className='block lg:hidden pt-2 text-bgColor'
            onClick={handleMenuButtonClick}
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </button>
          
          {isMenuOpen && (
            <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden absolute top-16 left-0 w-full bg-bodyColor`}>
              <ul className='flex flex-col items-center font-titleFont gap-4 px-8 py-8 text-bgColor cursor-pointer'>
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
        
        <ul className='hidden lg:flex justify-center gap-6 text-bgColor text-[18px] font-titleFont'>
          <li>
            <Link to='/coffeeshops' className='cursor-pointer font-titleFont transition-all hover:text-mainColor'>Coffee Shops</Link>
          </li>
          <li>
            <Link to='/createCS' className='cursor-pointer font-titleFont transition-all hover:text-mainColor'>Create a Listing</Link>  
          </li>
        </ul>
      </div>
    </div>
  );
}