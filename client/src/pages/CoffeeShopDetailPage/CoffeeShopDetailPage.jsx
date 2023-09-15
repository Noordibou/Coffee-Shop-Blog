import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Edit from '../../components/Edit/Edit';
import StarRating from '../../components/StarRating/StarRating';

export default function CoffeeShopDetailPage() {
  const { id } = useParams();
  const [coffeeShop, setCoffeeShop] = useState({});
  const navigate = useNavigate();


  const handleDelete = () => {
    axios
      .delete(`https://coffee-shop-blog-server.vercel.app/coffeeshops/${id}/`)
      .then(() => navigate('/coffeeshops'))
      .catch((err) => console.log(err));
  };

  const handleEditSubmit = (editedShop) => {
    axios.put(`hhttps://coffee-shop-blog-server.vercel.app/coffeeshops/${id}`, editedShop)
      .then(res => {
        setCoffeeShop(res.data);
      })
  }

  useEffect(() => {
    axios
      .get(`https://coffee-shop-blog-server.vercel.app/coffeeshops/${id}/`)
      .then((res) => setCoffeeShop(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const makeGoogleMapsLink = (locationString) => {
    if (locationString && locationString.startsWith("https://www.google.com/maps")) {
      return locationString;
    } else {
      const locationEncoded = encodeURIComponent(locationString);
      return `https://www.google.com/maps?q=${locationEncoded}`;
    }
  };

  const googleMapsLink = makeGoogleMapsLink(coffeeShop.location);


  return (
    <>
      <div className=" min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="md:flex justify-center items-center">
            <div className="md:w-4/5 pr-8">
              <h1 className="text-3xl font-bold mb-2">{coffeeShop.name}</h1>
              <p className="text-gray-700 font-semibold">
                {coffeeShop.cityState}
              </p>
              <h5 className="text-gray-600 pb-4 font-semibold ">Written by {coffeeShop.writer}</h5>
              <img
                src={coffeeShop.image}
                alt={coffeeShop.name}
                className="w-full lg:w-5/6 h-96 rounded-lg object-cover"
              />
              <div className="mt-6">
                <p className="text-gray-700 my-2">{coffeeShop.description}</p>
                <p className="text-gray-700">
                  <strong>Featured Items:</strong> {coffeeShop.featuredItems}
                </p>
                <p className="text-gray-700 flex gap-2">
                  <strong>Rating:</strong> <StarRating rating={coffeeShop.rating} />
                </p>
                {coffeeShop.website && (
                  <p className="text-gray-700">
                    <strong>Website:</strong>{" "}
                    <a
                      href={coffeeShop.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {coffeeShop.website}
                    </a>
                  </p>
                )}
                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-bodyColor underline hover:text-blue-600 "
                >
                  <strong>View Location</strong>
                </a>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="text-center mb-8 flex flex-col  ">
                <div className='px-4 py-2 bg-gray-200 text-white hover:bg-gray-400 rounded-lg'>
                  <Edit shop={coffeeShop} onEditSubmit={handleEditSubmit} />
                </div>
                <div className="py-4 space-x-4">
                  <button
                    onClick={handleDelete}
                    className="px-4 py-2 bg-gray-600 text-white hover:bg-gray-800  rounded-lg"
                  >
                    Delete
                  </button>
                  <button>
                    <Link
                      to="/coffeeshops"
                      className="px-4 py-3 bg-gray-600 text-white hover:bg-gray-800  rounded-lg"
                    >
                      Back
                    </Link>
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  );
}
