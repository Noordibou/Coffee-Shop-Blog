import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Add = () => {
    const { user } = useContext(UserContext);
    const [file, setFile] = useState(null);
    const [shop, setShop] = useState({
        name: '',
        location: '',
        featuredItems: '',
        description: '',
        website: '',
        rating: 0,
        image: '',
        cityState: '',
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setShop({
            ...shop,
            [name]: value
        });
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // const formData = new FormData();
        // formData.append('file', file);
        
        try {
            // const imgUploadResponse = await axios.post("http://localhost:3001/upload", formData);
            // const filename = imgUploadResponse.data.filename;

            const postData = {
                ...shop,
                // photo: filename,
                author: user.username,
                userId: user._id,
            };

            const postResponse = await axios.post('http://localhost:3001/coffeeshops/create', postData, { withCredentials: true });

            console.log(postResponse);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="pt-4 min-h-screen px-8 flex flex-col">
            <h1 className="text-2xl font-bold mb-4 px-4">Create A Coffee Shop Listing</h1>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Coffee Shop Name:
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
                        Image Upload:
                    </label>
                    <input
                        type="file"
                        name="image"
                        id="image"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="mt-1 p-2 w-full rounded-md border-gray-300 focus:ring"
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