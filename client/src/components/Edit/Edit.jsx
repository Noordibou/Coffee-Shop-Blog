import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios to use it for making HTTP requests

const Edit = ({ shop, handleEditSubmit }) => {
    const [editedShop, setEditedShop] = useState({});
    const [isFormOpen, setIsFormOpen] = useState(false);

    // Move the onEditSubmit function inside the component
    handleEditSubmit = async () => {
        try {
            // Replace ${id} with the actual ID of the shop you want to edit
            const response = await axios.post(
                `https://coffee-shop-blog-server.vercel.app/coffeeshops/${shop.id}/`,
                editedShop
            );

            // Handle the response as needed (e.g., show a success message)
            console.log('Shop edited successfully:', response.data);
        } catch (error) {
            // Handle errors (e.g., display an error message)
            console.error('Error editing shop:', error);
        }
    };

    useEffect(() => {
        setEditedShop(shop);
    }, [shop]);

    const handleChange = (e) => {
        setEditedShop({ ...editedShop, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleEditSubmit(); // Call the handleEditSubmit function
        setIsFormOpen(false);
    };

    return (
        <>
            <button
                onClick={() => setIsFormOpen(!isFormOpen)}
                className="text-bodyColor hover:underline cursor-pointer"
            >
                {isFormOpen ? 'Close Edit Form' : 'Edit Coffee Shop'}
            </button>

            {isFormOpen && (
                <div className="p-2 border rounded-lg border-gray-300">
                    <summary className="text-lg font-semibold">Edit Coffee Shop</summary>
                    <form onSubmit={handleSubmit}>
                        <div className="mt-4 space-y-4">
                            <input
                                type="text"
                                placeholder="Name"
                                value={editedShop.name}
                                name="name"
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md border-gray-300 focus:ring focus:ring-indigo-200"
                            />
                            <input
                                type="text"
                                placeholder="Author"
                                value={editedShop.writer}
                                name="writer"
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md border-gray-300 focus:ring focus:ring-indigo-200"
                            />
                            <textarea
                                type="text"
                                placeholder="Description"
                                value={editedShop.description}
                                name="description"
                                onChange={handleChange}
                                className="w-full px-4 py-2 h-[200px] border rounded-md border-gray-300 focus:ring focus:ring-indigo-200"
                            />
                            <input
                                type="text"
                                placeholder="Featured Items"
                                value={editedShop.featuredItems}
                                name="featuredItems"
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md border-gray-300 focus:ring focus:ring-indigo-200"
                            />
                            <input
                                type="text"
                                placeholder="Website"
                                value={editedShop.website}
                                name="website"
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md border-gray-300 focus:ring focus:ring-indigo-200"
                            />
                            <input
                                type="text"
                                placeholder="City, State"
                                value={editedShop.cityState}
                                name="cityState"
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md border-gray-300 focus:ring focus:ring-indigo-200"
                            />
                            <input
                                type="text"
                                placeholder="Location"
                                value={editedShop.location}
                                name="location"
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md border-gray-300 focus:ring focus:ring-indigo-200"
                            />
                            <input
                                type="number"
                                placeholder="Ratings"
                                value={editedShop.rating}
                                name="rating"
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md border-gray-300 focus:ring focus:ring-indigo-200"
                            />
                            <input
                                type="text"
                                placeholder="Image"
                                value={editedShop.image}
                                name="image"
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md border-gray-300 focus:ring focus:ring-indigo-200"
                            />
                            <input
                                type="submit"
                                value="Submit"
                                className="px-4 py-2 bg-bodyColor text-white rounded-md hover:bg-gray-600 cursor-pointer"
                            />
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default Edit;
