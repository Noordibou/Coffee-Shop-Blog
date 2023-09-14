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

  const handleEditSubmit = (editedShop) => {
    axios.put(`/coffeeshops/${id}`, editedShop)
      .then(res => {
        setCoffeeShop(res.data);
      })
  }
  
  useEffect(() => {
    axios
      .get(`http://localhost:3000/coffeeshops/${id}/`)
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
                className="w-full lg:w-4/6 rounded-lg  object-center"
              />
              <div className="mt-6">
                <p className="text-gray-700 my-2">{coffeeShop.description}</p>
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
                  className=" text-bodyColor underline hover:text-blue-600 "
                >
                  <strong>View Location</strong>
                </a>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="text-center mb-8 flex flex-col m-4">
               <div>
                <Edit shop={coffeeShop}
                  onEditSubmit={handleEditSubmit}
                />
                </div>
                <div className='py-2'> 
                <button
                  onClick={handleDelete}
                  className=" text-bodyColor hover:underline px-2 py-2"
                >
                  Delete
                </button>
                <button>
                  <Link to="/coffeeshops" className="text-bodyColor hover:underline px-2 py-2">
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