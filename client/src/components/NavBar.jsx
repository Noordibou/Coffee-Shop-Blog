import { useState, useRef, useEffect, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from '../context/UserContext';
import axios from 'axios';
import URL from '../URL'
import { useCookies } from 'react-cookie';

export default function Navbar() {

  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);
  const [cookies, setCookie] = useCookies(['token']);


  const handleMenuButtonClick = () => {
    setIsMenuOpen(prev => !prev);
  };


  const handleLogout = async () => {
    try {
      setCookie('token', '', { path: '/', expires: new Date(0) });
      const res = await axios.get(URL + `/auth/logout`, { withCredentials: true });
      console.log("logging out... on frontend hoome screen")
      console.log(res)
      setUser(null);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const handleClickOutside = e => {
      if (isMenuOpen && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen, cookies, setCookie]);

  return (
    <div className='sticky top-0 bg-gray-100 z-50 md:px-4 shadow'>
      <div className='flex md:justify-around justify-between px-4 py-2'>
        <h2 className='lg:text-3xl md:text-2xl text-xl pt-3 font-semibold font-titleFont text-bodyColor px-2'>
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
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-12 left-0 w-full bg-gray-100`}>
              <ul className='flex flex-col items-center font-titleFont gap-4 px-8 py-8 text-bodyColor cursor-pointer'>
                <li><Link to='/coffeeshops' onClick={() => setIsMenuOpen(false)}>Coffee Shops</Link></li>
                {!user && <li><Link to='/login' onClick={() => setIsMenuOpen(false)}>Login</Link></li>}

                {!user ? <li><Link to='/register' onClick={() => setIsMenuOpen(false)}>Register</Link></li>
                  : <li><Link to='/create' onClick={() => setIsMenuOpen(false)}>Create a Listing</Link></li>}
                {user && <li><Link to={"/myblogs/" + user._id} onClick={() => setIsMenuOpen(false)}>My blogs</Link></li>}
                {user && <li onClick={handleLogout}>Logout</li>}

              </ul>
            </div>
          )}
        </div>

        <ul className='hidden md:flex justify-center gap-6 text-bodyColor lg:text-[18px] font-titleFont pt-4 '>
          <li><Link to='/coffeeshops' className='cursor-pointer font-titleFont transition-all hover:text-gray-400  '>Coffee Shops</Link></li>
          {!user && <li><Link to='/login' className='cursor-pointer font-titleFont transition-all hover:text-gray-400  '>Login</Link></li>}

          {!user ? <li><Link to='/register' className='cursor-pointer font-titleFont transition-all hover:text-gray-400  '>Register</Link></li>
            : <li><Link to='/create' className='cursor-pointer font-titleFont transition-all hover:text-gray-400'>Create a Listing</Link></li>}
          {user && <h3 className="cursor-pointer font-titleFont transition-all hover:text-gray-400"><Link to={"/myblogs/" + user._id}>My Listing</Link></h3>}
          {user && <li onClick={handleLogout} className='cursor-pointer font-titleFont transition-all hover:text-gray-400'>Logout</li>}
        </ul>
      </div>
    </div>
  );
}