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
                <div className="mx-auto flex flex-col justify-center max-w-7xl px-8 md:px-6 lg:w-4/5  ">
                    <div className='px-12'>
                        <h1 className="text-xl md:text-2xl text-center font-semibold my-4 ">
                            Welcome to Caffeine Chronicles, the ultimate app for all coffee enthusiasts and cafe connoisseurs!
                        </h1>
                    </div>

                    <div className="my-4 flex flex-col items-center max-w-8xl md:px-0 justify-center">
                        <img
                            src="https://images.pexels.com/photos/5812847/pexels-photo-5812847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Coffee Shops"
                            className="w-full md:h-[28rem] object-cover"
                        />
                    </div>
                    <div className=''>
                        <div className="flex flex-row">
                            <p className="mt-2 text-gray-700 text-center md:text-base text-sm md:text-left md:basis-1/2">
                                Welcome to Caffeine Chronicles, the ultimate app for
                                all coffee enthusiasts and cafe connoisseurs! Our
                                platform is dedicated to providing comprehensive
                                reviews and insights about coffee shops from around
                                the world.

                            </p>
                        </div>
                        <div className="flex flex-row md:justify-end justify-center">
                            <p className="md:mt-2 text-gray-700 text-center md:text-base text-sm md:text-right md:basis-1/3">
                                Welcome to Caffeine Chronicles, the ultimate app for
                                all coffee enthusiasts and cafe connoisseurs!
                            </p>
                        </div>
                        <div className="py-4 flex flex-row justify-center md:justify-end">
                            <img
                                src="https://images.pexels.com/photos/2775827/pexels-photo-2775827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Coffee Shops"
                                className="w-full md:w-3/5 max-w-2xl md:h-[22rem] object-cover "
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
                            <p className="md:mt-2 text-gray-700 text-center md:text-base text-sm md:text-left md:basis-1/3">
                                Welcome to Caffeine Chronicles, the ultimate app for
                                all coffee enthusiasts and cafe connoisseurs!
                            </p>
                        </div>
                        <div className="py-4 flex flex-row justify-center md:justify-start">
                            <img
                                src="https://images.unsplash.com/photo-1526547319484-63dce467060b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                alt="Coffee Shops"
                                className="w-full md:w-3/5 max-w-2xl md:h-[22rem] object-cover"
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
                            <p className="md:mt-2 text-gray-700 text-center md:text-base text-sm md:text-right md:basis-1/3">
                                Welcome to Caffeine Chronicles, the ultimate app for
                                all coffee enthusiasts and cafe connoisseurs!
                            </p>
                        </div>
                        <div className="py-4 flex flex-row justify-center md:justify-end">
                            <img
                                src="https://images.unsplash.com/photo-1524955638205-d0194538389d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                                alt="Coffee Shops"
                                className="w-full md:w-3/5 max-w-2xl md:h-[22rem] object-cover"
                            />
                        </div>
                        <div className="flex flex-row md:justify-end justify-center pt-8">
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
