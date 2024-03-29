import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import StarRating from '../components/StarRating';
import URL from '../URL';
import { UserContext } from '../context/UserContext';

export default function MyBlogPage() {
  const [coffeeShops, setCoffeeShops] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${URL}/coffeeshops/user/${user._id}`);
          setCoffeeShops(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }
  }, [user]);
  
  return (
    <>
      <div>
        <main className="bg-gray-100 min-h-screen">
          <h2 className="text-xl md:text-2xl font-bold px-4 md:px-8 py-4 text-center">
            My Coffee Shop Listings
          </h2>
          <div className="py-4 mx-auto flex flex-col justify-center max-w-7xl px-8 md:px-6 lg:w-4/5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {Array.isArray(coffeeShops) && coffeeShops.length > 0 ? (
                coffeeShops.map((shop) => (
                  <Link to={`/details/${shop._id}`} className="group" key={shop._id}>
                    <div className="h-full mb-4 transition-transform transform-gpu group-hover:scale-105">
                      <div className="bg-white h-full rounded overflow-hidden shadow-lg">
                        <img
                          src={shop.image}
                          alt={shop.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="px-6 pt-4 h-full">
                          <h3 className="font-bold text-xl mb-2 lg:h-12">{shop.name}</h3>
                          <p className="text-gray-700 text-base lg:h-14">
                            {shop.cityState} <br />
                            <StarRating rating={shop.rating} />
                          </p>
                          <div className="flex space-x-3 pt-2 text-gray-500">
                            <p>{new Date(shop.createdAt).toString().slice(0, 15)}</p>
                            <p>{new Date(shop.createdAt).toString().slice(16, 24)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <p>No blog were posted</p>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}