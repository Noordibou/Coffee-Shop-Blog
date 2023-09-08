import {useState} from 'react'


const Edit = (props) => {
  const [shop, setShop] = useState({...props.shop})

  const handleChange = (event) => {
    setShop({...shop, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleEdit(shop)
  }

  return (
    <>
      <details>
        <summary>Edit Coffee Shop</summary>
        <form onSubmit={handleSubmit}>
        <div>
            <input type='text' placeholder='Name' value={shop.name} name='name' onChange={handleChange}/>
            <br/><br/>
            <input type='text' placeholder='Author' value={shop.writer} name='writer' onChange={handleChange}/>
            <br/><br/>
            <input type='text' placeholder='Description' value={shop.description} name='description' onChange={handleChange}/>
            <br/><br/>
            <input type='text' placeholder='Featured Items' value={shop.featuredItems} name='featuredItems' onChange={handleChange}/>
            <br/><br/>
            <input type='text' placeholder='Website' value={shop.website} name='website' onChange={handleChange}/>
            <br/><br/>
            <input type='text' placeholder='City, State' value={shop.cityState} name='cityState' onChange={handleChange}/>
            <br/><br/>
            <input type='text' placeholder='Location' value={shop.location} name='location' onChange={handleChange}/>
            <br/><br/>
            <input type='number' placeholder='Ratings' value={shop.rating} name='rating' onChange={handleChange}/>
            <br/><br/>
            <input type='text' placeholder='Image' value={shop.image} name='image' onChange={handleChange}/>
            <br/><br/>
            <input type='submit' />
            </div>
        </form>
      </details>
    </>
  )
}

export default Edit