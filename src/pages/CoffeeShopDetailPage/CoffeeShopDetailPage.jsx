import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Edit from '../../components/Edit/Edit';

export default function CoffeeShopDetailPage() {
  const { id } = useParams();
  const [coffeeShop, setCoffeeShop] = useState({});
  const navigate = useNavigate();

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/coffeeshops/${id}/`)
      .then(() => navigate('/coffeeshops'))
      .catch((err) => console.log(err));
  };

  const handleEdit = (editedShop) => {
    axios
      .put(`http://localhost:3000/coffeeshops/${id}/`, editedShop)
      .then((res) => setCoffeeShop(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/coffeeshops/${id}/`)
      .then((res) => setCoffeeShop(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  // Function to convert location string to Google Maps link
  const makeGoogleMapsLink = (locationString) => {
    if (locationString && locationString.startsWith("https://www.google.com/maps")) {
      return locationString;
    } else {
      const locationEncoded = encodeURIComponent(locationString);
      return `https://www.google.com/maps?q=${locationEncoded}`;
    }
  };

  // Get the Google Maps link for the location field
  const googleMapsLink = makeGoogleMapsLink(coffeeShop.location);

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold">{coffeeShop.name}</h1>
        <h5 className="text-gray-600">Written by {coffeeShop.writer}</h5>
        <div className="flex justify-center items-center mt-4">
          <img
            src={coffeeShop.image}
            alt={coffeeShop.name}
            className="w-full md:w-1/2 md:h-auto rounded-lg"
          />
        </div>
        <div className="mt-4 md:flex justify-between items-start">
          <div className="md:w-1/2">
            <p className="text-gray-700">
              Located in <strong>{coffeeShop.cityState}</strong>
            </p>
            <p className="text-gray-700">{coffeeShop.description}</p>
            <p className="text-gray-700">
              <strong>Featured Items:</strong> {coffeeShop.featuredItems}
            </p>
            <p className="text-gray-700">
              <strong>Rating:</strong> {coffeeShop.rating}
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
              className="text-blue-600 hover:underline"
            >
              View Location
            </a>
            <hr className="my-4 border-t border-gray-300" />
            <Edit coffeeShop={coffeeShop} handleEdit={handleEdit} />
          </div>
          <div className="mt-4 md:mt-0 md:w-1/4">
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <Link
          to="/coffeeshops"
          className="text-blue-600 hover:underline"
        >
          Back
        </Link>
      </div>
    </>
  );
}
