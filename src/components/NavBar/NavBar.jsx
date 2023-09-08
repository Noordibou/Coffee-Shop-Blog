import React from 'react';

export default function NavBar() {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="/" className="text-white text-2xl font-bold">Caffeine Chronicles</a>
          <div className="hidden lg:block">
            <ul className="flex space-x-6">
              <li><a href="/coffeeshops" className="text-white hover:text-gray-300">Coffee Shops</a></li>
              <li><a href="/createCS" className="text-white hover:text-gray-300">Create A Coffee Shop Listing</a></li>
              {/* Add more menu items as needed */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
