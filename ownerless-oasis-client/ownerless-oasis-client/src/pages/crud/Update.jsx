import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [value, setValue] = useState({
        ProductName: '',
        StockStatus: '',
        Quantity: '',
        Barcode: '',
        Img: '',
        Price: '',
        PCategoryID: ''
    });

    useEffect(() => {
        axios.get(`http://localhost:8081/read/${id}`)
        .then(res => {
            const productData = res.data[0];
            setValue({
                ProductName: productData.ProductName,
                StockStatus: productData.StockStatus,
                Quantity: productData.Quantity,
                Barcode: productData.Barcode,
                Img: productData.Img,
                Price: productData.Price,
                PCategoryID: productData.PCategoryID
            });
        })
        .catch(err => console.log(err));
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8081/edit/${id}`, value)
        .then(res => {
            console.log(res);
            navigate('/dashboard');
        })
        .catch(err => console.log(err));
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-md w-full px-4 py-6 bg-white shadow-md rounded-md">
                <h1 className="text-lg font-semibold text-center mb-4">Update Product</h1>
                <form onSubmit={handleSubmit} className="space-y-2">
                    <div>
                        <label htmlFor="ProductName" className="block text-sm">Product Name</label>
                        <input type="text" placeholder="Product name" className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm" value={value.ProductName} onChange={e => setValue({ ...value, ProductName: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="StockStatus" className="block text-sm">Stock Status</label>
                        <input type="text" placeholder="Stock status" className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm" value={value.StockStatus} onChange={e => setValue({ ...value, StockStatus: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="Quantity" className="block text-sm">Quantity</label>
                        <input type="text" placeholder="Quantity" className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm" value={value.Quantity} onChange={e => setValue({ ...value, Quantity: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="Barcode" className="block text-sm">Barcode</label>
                        <input type="text" placeholder="Barcode" className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm" value={value.Barcode} onChange={e => setValue({ ...value, Barcode: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="Img" className="block text-sm">Image URL</label>
                        <input type="text" placeholder="Image URL" className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm" value={value.Img} onChange={e => setValue({ ...value, Img: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="Price" className="block text-sm">Price</label>
                        <input type="text" placeholder="Price" className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm" value={value.Price} onChange={e => setValue({ ...value, Price: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="PCategoryID" className="block text-sm">Category ID</label>
                        <input type="text" placeholder="Category ID" className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm" value={value.PCategoryID} onChange={e => setValue({ ...value, PCategoryID: e.target.value })} />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 text-sm">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Update;
