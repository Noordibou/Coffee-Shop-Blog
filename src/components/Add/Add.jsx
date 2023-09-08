import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add = (props) => {
    const [shop, setShop] = useState({ name: '', location: '', featuredItems: '', description: '', website: '', rating: 0, image: '', cityState: '', writer: '' });

    const navigate = useNavigate()

    const handleChange = (event) => {
        setShop({ ...shop, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3000/coffeeshops', shop)
        .then((response) => console.log(response))
        .catch((error) => console.log(error))

        navigate('/coffeeshops')
    }
    return (
        <>
            <h1 className="p-4" >Create A Coffee Shop Listing </h1>

            <div>
                <div className='align-items-center'>
                    <form class="row g-3 " onSubmit={handleSubmit}>
                        <div class="col-md-6">
                            <label for="name" class="form-label">Name:</label>
                            <input class="form-control" type='text' name='name' id="name" onChange={handleChange} />
                        </div>
                        <div class="col-md-6">
                            <label for="writer" class="form-label">Author:</label>
                            <input class="form-control" type='text' name='writer' id="writer" onChange={handleChange} />
                        </div>
                        <div class="col-md-6">
                            <label for="description" class="form-label">Description:</label>
                            <textarea class="form-control" type='text' name='description' id='description' onChange={handleChange} />
                        </div>
                        <div class="col-md-6">
                            <label for="featuredItems" class="form-label">Featured Items:</label>
                            <input class="form-control" type='text' name='featuredItems' id='featuredItems' onChange={handleChange} />
                        </div>
                        <div class="col-md-6">
                            <label for="website" class="form-label">Website:</label>
                            <input class="form-control" type='text' name='website' id='website' onChange={handleChange} />
                        </div>
                        <div class="col-md-6">
                            <label for="rating" class="form-label">Ratings:</label>
                            <input class="form-control" type='number' name='rating' id='rating' onChange={handleChange} />
                        </div>
                        <div class="col-md-6">
                            <label for="cityState" class="form-label">City, State:</label>
                            <input class="form-control" type='text' name='cityState' id='cityState' onChange={handleChange} />
                        </div>
                        <div class="col-md-6">
                            <label for="location" class="form-label">Address:</label>
                            <input class="form-control" type='text' name='location' id='location' onChange={handleChange} />
                        </div>
                        <div class="col-md-6">
                            <label for="image" class="form-label">Image URL:</label>
                            <input class="form-control" type='text' name='image' id='image' onChange={handleChange} />
                        </div>

                        <div class="col-md-6">
                            <button type="submit" class="btn btn-dark">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Add