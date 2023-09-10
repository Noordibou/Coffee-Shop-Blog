import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function CoffeeShopsPage() {
  const [coffeeShop, setCoffeeShop] = useState([]);

  const getCoffeeShop = () => {
    axios
      .get('http://localhost:3000/coffeeshops')
      .then((response) => setCoffeeShop(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCoffeeShop();
  }, []);

  return (
    <>
      <div>
        <main className="bg-gray-100 min-h-screen">
          <h2 className="text-xl md:text-2xl font-bold px-4 md:px-8 py-4 text-center">
            Coffee Shop Listings
          </h2>
          <div className="px-4 md:px-8 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {coffeeShop.map((shop) => (
                <Link to={`/details/${shop._id}`} className="group" key={shop._id}>
                  <div className="mb-4 transition-transform transform-gpu group-hover:scale-105">
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={shop.image}
                        alt={shop.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-xl font-semibold">{shop.name}</h3>
                        <p className="text-gray-700">
                          {shop.cityState}
                          <br />
                          By: {shop.writer}
                          <br />
                          Rating: {shop.rating}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>
        <footer className="py-4 bg-gray-800 text-white text-center">
          <div className="container mx-auto px-4">
            <p>&copy; 2023 Caffeine Chronicles</p>
          </div>
        </footer>
      </div>
    </>
  );
}
