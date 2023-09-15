import { useState, useEffect } from 'react';

const Edit = ({ shop, onEditSubmit }) => {
  const [editedShop, setEditedShop] = useState({});
  const [isFormOpen, setIsFormOpen] = useState(false); 

  useEffect(() => {
    setEditedShop(shop);
  }, [shop]);

  const handleChange = (e) => {
    setEditedShop({ ...editedShop, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      const response = await fetch(`https://coffee-shop-blog.vercel.app/coffeeshops/${editedShop.id}`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedShop),
      });

      if (response.ok) {
        onEditSubmit(editedShop);
        setIsFormOpen(false);
      } else {
        console.error('Update failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
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
