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
        <div>
            <main className="bg-gray-100 min-h-screen">
                <div className="mx-auto flex flex-col justify-center px-8 md:px-0  md:w-5/6">
                    <div className='px-12'>
                        <h1 className="text-xl md:text-2xl text-center font-semibold my-4 ">
                            Welcome to Caffeine Chronicles, the ultimate app for all coffee enthusiasts and cafe connoisseurs!
                        </h1>
                    </div>

                    <div className="my-4 flex flex-col items-center  md:px-0 justify-center">
                        <img
                            src="https://e1.pxfuel.com/desktop-wallpaper/250/941/desktop-wallpaper-cozy-coffee-shop-ambience-with-relaxing-jazz-music-rain-sounds-and-crackling-fireplace-cozy-autumn-cafe-window.jpg"
                            alt="Coffee Shops"
                            className="w-full md:h-96"
                        />
                    </div>
                    <div>
                        <div className="flex flex-row">
                            <p className="mt-2 text-gray-700 text-center md:text-base text-sm md:text-left md:basis-2/3">
                                Welcome to Caffeine Chronicles, the ultimate app for
                                all coffee enthusiasts and cafe connoisseurs! Our
                                platform is dedicated to providing comprehensive
                                reviews and insights about coffee shops from around
                                the world.

                            </p>
                            {/* <Link
                                to="/create"
                                className="mt-4 md:ml-auto block px-4 py-2 bg-bodyColor text-white rounded-md"
                            >
                                Create Listing
                            </Link> */}
                        </div>
                    </div>
                    <div className="flex flex-row md:justify-end justify-center">
                        <p className="md:mt-2 text-gray-700 text-center font-semibold text-xs md:text-right md:basis-1/3">
                            Welcome to Caffeine Chronicles, the ultimate app for
                            all coffee enthusiasts and cafe connoisseurs!
                        </p>
                    </div>
                    <div className="py-4 flex flex-row justify-center md:justify-end">
                        <img
                            src="https://e1.pxfuel.com/desktop-wallpaper/250/941/desktop-wallpaper-cozy-coffee-shop-ambience-with-relaxing-jazz-music-rain-sounds-and-crackling-fireplace-cozy-autumn-cafe-window.jpg"
                            alt="Coffee Shops"
                            className="w-full md:w-3/5 md:h-72 lg:w-3/5 "
                        />
                    </div>
                    <div className="flex flex-row md:justify-end justify-center">
                        <p className="text-gray-700 text-center md:text-base text-sm md:text-right md:basis-1/2">
                            Welcome to Caffeine Chronicles, the ultimate app for
                            all coffee enthusiasts and cafe connoisseurs! Our
                            platform is dedicated to providing comprehensive
                            reviews and insights about coffee shops from around
                            the world.

                        </p>
                    </div>
                    <div className="flex flex-row md:justify-start justify-center">
                        <p className="md:mt-2 text-gray-700 text-center font-semibold text-xs md:text-left md:basis-1/3">
                            Welcome to Caffeine Chronicles, the ultimate app for
                            all coffee enthusiasts and cafe connoisseurs!
                        </p>
                    </div>
                    <div className="py-4 flex flex-row justify-center md:justify-start">
                        <img
                            src="https://e1.pxfuel.com/desktop-wallpaper/250/941/desktop-wallpaper-cozy-coffee-shop-ambience-with-relaxing-jazz-music-rain-sounds-and-crackling-fireplace-cozy-autumn-cafe-window.jpg"
                            alt="Coffee Shops"
                            className="w-full md:w-3/5 md:h-72 "
                        />
                    </div>
                    <div className="flex flex-row md:justify-start justify-center">
                        <p className="text-gray-700 text-center md:text-base text-sm md:text-left md:basis-1/2">
                            Welcome to Caffeine Chronicles, the ultimate app for
                            all coffee enthusiasts and cafe connoisseurs! Our
                            platform is dedicated to providing comprehensive
                            reviews and insights about coffee shops from around
                            the world.

                        </p>
                    </div>
                    <div className="flex flex-row md:justify-end justify-center">
                        <p className="md:mt-2 text-gray-700 text-center font-semibold text-xs md:text-right md:basis-1/3">
                            Welcome to Caffeine Chronicles, the ultimate app for
                            all coffee enthusiasts and cafe connoisseurs!
                        </p>
                    </div>
                    <div className="py-4 flex flex-row justify-center md:justify-end">
                        <img
                            src="https://e1.pxfuel.com/desktop-wallpaper/250/941/desktop-wallpaper-cozy-coffee-shop-ambience-with-relaxing-jazz-music-rain-sounds-and-crackling-fireplace-cozy-autumn-cafe-window.jpg"
                            alt="Coffee Shops"
                            className="w-full md:w-3/5 md:h-72 "
                        />
                    </div>
                    <div className="flex flex-row md:justify-end justify-center">
                        <p className="text-gray-700 text-center md:text-base text-sm md:text-right md:basis-1/2">
                            Welcome to Caffeine Chronicles, the ultimate app for
                            all coffee enthusiasts and cafe connoisseurs! Our
                            platform is dedicated to providing comprehensive
                            reviews and insights about coffee shops from around
                            the world.

                        </p>
                    </div>

                    <div className="px-4 py-4 flex flex-col ">
                        <div className=" px-4 ">
                            <div className="bg-gray-300 text-center py-4 rounded-md">
                                <p className="text-gray-700">
                                    Embrace the aroma of each review, as our passionate
                                    contributors unravel the true essence of every coffee
                                    shop, sip by sip.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
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
            <footer className="bg-bodyColor text-bgColor text-center py-4">
                <div className="container mx-auto px-4">
                    &copy; Caffeine Chronicles 2023
                </div>
            </footer>
        </div>
    );
}
