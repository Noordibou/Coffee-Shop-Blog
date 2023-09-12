import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [shop, setShop] = useState({
        name: '',
        location: '',
        featuredItems: '',
        description: '',
        website: '',
        rating: 0,
        image: '',
        cityState: '',
        writer: ''
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        setShop({ ...shop, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post('/coffeeshops', shop)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));

        navigate('/coffeeshops');
    };

    return (
        <div className="pt-4 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Create A Coffee Shop Listing</h1>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name:
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="mt-1 p-2 w-full rounded-md border-gray-300 focus:ring "
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="writer" className="block text-sm font-medium text-gray-700">
                        Author:
                    </label>
                    <input
                        type="text"
                        name="writer"
                        id="writer"
                        className="mt-1 p-2 w-full rounded-md border-gray-300 focus:ring  "
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description:
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        className="mt-1 p-2 w-full rounded-md border-gray-300 focus:ring  "
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="featuredItems" className="block text-sm font-medium text-gray-700">
                        Featured Items:
                    </label>
                    <input
                        type="text"
                        name="featuredItems"
                        id="featuredItems"
                        className="mt-1 p-2 w-full rounded-md border-gray-300 focus:ring  "
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                        Website:
                    </label>
                    <input
                        type="text"
                        name="website"
                        id="website"
                        className="mt-1 p-2 w-full rounded-md border-gray-300 focus:ring  "
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                        Ratings:
                    </label>
                    <input
                        type="number"
                        name="rating"
                        id="rating"
                        className="mt-1 p-2 w-full rounded-md border-gray-300 focus:ring  "
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="cityState" className="block text-sm font-medium text-gray-700">
                        City, State:
                    </label>
                    <input
                        type="text"
                        name="cityState"
                        id="cityState"
                        className="mt-1 p-2 w-full rounded-md border-gray-300 focus:ring  "
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                        Address:
                    </label>
                    <input
                        type="text"
                        name="location"
                        id="location"
                        className="mt-1 p-2 w-full rounded-md border-gray-300 focus:ring  "
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                        Image URL:
                    </label>
                    <input
                        type="text"
                        name="image"
                        id="image"
                        className="mt-1 p-2 w-full rounded-md border-gray-300 focus:ring  "
                        onChange={handleChange}
                    />
                </div>

                <div className="col-span-2">
                    <button type="submit" className="px-4 py-2 bg-bodyColor text-bgColor rounded-md hover:bg-gray-600">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Add;
