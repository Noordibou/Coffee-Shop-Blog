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
          <h2 className="text-2xl font-bold mt-8 px-4">Coffee Shop Listings</h2>
          <div className="container mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {coffeeShop.map((shop) => {

              return (
                <div key={shop._id} className="mb-4">
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                      src={shop.image}
                      alt={shop.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold">{shop.name}</h3>
                      <p className="text-gray-700">
                        By: {shop.writer}
                        <br />
                        {shop.cityState}
                        <br />
                        Rating: {shop.rating}
                      </p>
                      <Link
                        to={`/details/${shop._id}`}
                        className="mt-2 inline-block px-4 py-2 bg-gray-800 text-white hover:bg-gray-700 rounded-md transition duration-300 ease-in-out"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
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
