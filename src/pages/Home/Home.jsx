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
                    <div className="container mx-auto">
                        <div className="px-4 my-4 md:flex">
                            <div className="">
                                <img
                                    src="https://e1.pxfuel.com/desktop-wallpaper/250/941/desktop-wallpaper-cozy-coffee-shop-ambience-with-relaxing-jazz-music-rain-sounds-and-crackling-fireplace-cozy-autumn-cafe-window.jpg"
                                    alt="Coffee Shops"
                                    className="w-full md:w-5/6 md:h-auto rounded-lg"
                                />
                            </div>
                            <div className="md:w-1/3 px-4 md:px-8 py-4">
                                <h1 className="text-xl md:text-3xl text-center md:text-left font-semibold mb-4">Coffee Shops</h1>
                                <p className="mt-4 text-gray-700 text-center md:text-base text-sm md:text-left">
                                    Welcome to Caffeine Chronicles, the ultimate app for all coffee enthusiasts and cafe connoisseurs! Our platform is dedicated to providing comprehensive reviews and insights about coffee shops from around the world. Whether you're a seasoned coffee aficionado or just beginning your journey into the world of specialty brews, Caffeine Chronicles is your trusted companion for discovering the perfect coffee shop for your unique taste.

                                    At Caffeine Chronicles, we understand the importance of a perfect cup of coffee, and our community of passionate reviewers shares their firsthand experiences to guide you on your coffee adventures. From quaint hidden gems to bustling urban hangouts, we've meticulously curated a diverse range of coffee shop profiles to suit every mood and preference.
                                </p>
                                <Link
                                    to="/create"
                                    className="mt-4 md:ml-auto block px-4 py-2 bg-bodyColor text-white rounded-md"
                                >
                                    Create Listing
                                </Link>
                            </div>
                        </div>
                        <div className="md:flex justify-center mt-8">
                            <div className="md:w-2/3 px-4 ">
                                <div className="bg-gray-300 text-center py-4 rounded-md">
                                    <p className="text-gray-700">
                                        Embrace the aroma of each review, as our passionate contributors unravel the true essence of every coffee shop, sip by sip.
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
                                                    className="mt-2 inline-block px-4 py-2 bg-bodyColor text-bgColor hover:bg-gray-700 rounded-md transition duration-300 ease-in-out"
                                                >
                                                    Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </main>

                <footer className="bg-bodyColor text-bgColor text-center py-4">
                    <div className="container mx-auto px-4">
                        &copy; Caffeine Chronicles 2023
                    </div>
                </footer>

            </div>
        </>
    );
}