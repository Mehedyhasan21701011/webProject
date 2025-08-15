import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddProducts() {
    const navigate = useNavigate();

    const [value , setValue] = useState({
        ProductName:'',
        Price:'',
        PCategoryID:'',
        Img: '' // Corrected initial state for Img
    });
    const [categories , setCategories] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        axios.get('http://localhost:8081/category')
        .then(res => {
            setCategories(res.data); // Update state with fetched data
            setLoading(false); // Set loading to false after data is fetched
        })
        .catch(err => {
            console.log(err);
            setLoading(false); // Set loading to false in case of error
        });
    }, []);

    
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Handle file input
        const image = event.target.files[0];
        const formData = new FormData();
        formData.append("image", image);
    
        const url = `https://api.imgbb.com/1/upload?key=923e6d07a9e12eb3a0f083c30cbac37d`;
    
        try {
            const imgResponse = await fetch(url, {
                method: "POST",
                body: formData
            });
    
            if (!imgResponse.ok) {
                throw new Error("Image upload failed");
            }
    
            const imgData = await imgResponse.json();
    
            // Debugging: Log the imgData to see its structure
            console.log("Image Data:", imgData);
    
            // Check if imgData contains the URL of the uploaded image
            if (imgData.data && imgData.data.url) {
                // Update Img value with the uploaded image URL
                setValue({ ...value, Img: imgData.data.url });
                console.log("Image URL:", imgData.data.url);
            } else {
                throw new Error("Invalid image data received");
            }
    
            // Once the image is uploaded and Img value is updated, proceed to submit the form
            axios.post('http://localhost:8081/product', value)
                .then(res => {
                    console.log(res);
                    navigate('/');
                })
                .catch(err => console.log(err));
    
        } catch (error) {
            console.log("Image upload error:", error);
        }
    };
    
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>add product</h1>
                    <div>
                        <label htmlFor="ProductName">ProductName</label>
                        <input type="text" placeholder='Enter your name' className="input input-bordered w-full bg-blue-100" onChange={e => setValue({ ...value , ProductName: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="Price">Price</label>
                        <input type="number" placeholder='Enter your Price' className="input input-bordered w-full bg-blue-100" onChange={e => setValue({ ...value , Price: e.target.value })} />
                    </div>
                    {loading ? (
                        <p>Loading categories...</p>
                    ) : (
                        <select className="select select-bordered bg-orange-100 w-full max-w-xs" onChange={e => setValue({ ...value , PCategoryID: e.target.value })}>
                            <option value="">Select a Category</option>
                            {categories.map((category) => (
                                <option key={category.CategoryID} value={category.CategoryID}>{category.CategoryName}</option>
                            ))}
                        </select>
                    )}
                    <div>
                        <label htmlFor="Img">image</label>
                        <input type="file" placeholder='Enter your Email' className="input input-bordered p-2 bg-yellow-100 w-full" onChange={e => setValue({ ...value , Img: e.target.files[0] })} /> {/* Handle file input */}
                    </div>
                    <div>
                        <button type='submit' className="btn w-full mt-5">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddProducts;
