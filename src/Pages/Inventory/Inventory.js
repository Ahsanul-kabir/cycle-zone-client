import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Inventory = () => {
    const [product, setProduct] = useState([]);

    const { id } = useParams();
    const { quantity } = product;

    const url = `https://afternoon-ridge-55411.herokuapp.com/products/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])


    const handleReduceQuantity = () => {
        let newQuantity = quantity - 1;
        const newProduct = { ...product, quantity: newQuantity }
        //copy all previous data if exist in product and setup new quantity
        setProduct(newProduct);
        fetch(`https://afternoon-ridge-55411.herokuapp.com/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
    }


    const handleRestock = (event) => {
        event.preventDefault();

        const quantityAmount = parseInt(event.target.quantity.value)

        let newQuantity = quantity + quantityAmount;
        const newProduct = { ...product, quantity: newQuantity }
        setProduct(newProduct);
        // Send data to server
        const url = `https://afternoon-ridge-55411.herokuapp.com/products/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success', data)
                alert('Restock Successfully')
                event.target.reset()
            })
    }

    return (
        <div class="container">
            <div class="row" style={{ margin: '100px 0' }}>
                <div className="col-sm-12 col-md-12 col-lg-8">
                    <div className="card h-100 shadow-sm w-75">
                        <img src={product.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h6>Name - {product.name}</h6>
                            <div className="clearfix mb-3">
                                <span className="float-start badge rounded-pill bg-info">{product.quantity} available</span>
                                <span className="float-end price-hp">{product.price}$</span>
                            </div>
                            <h4 className="card-title">{product.description}</h4>
                            <h6>Supplier - {product.supplier}</h6>
                            <div className="text-center my-4">
                                <button onClick={() => handleReduceQuantity()} className='btn btn-danger'>Delivered</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-4">
                    <h2 className='text-center mt-2'>Restock Item</h2>
                    <form onSubmit={handleRestock} className='p-3' style={{ backgroundColor: "rgba(0,0,255,0.1)" }}>
                        <input type="number" name="quantity" className="form-control" placeholder='quantity' required />
                        <br />
                        <div className="mt-1 my-3 d-flex justify-content-center">
                            <input type="submit" value="Restock" className='btn btn-danger' />
                        </div>
                    </form>
                </div>
            </div>

            <div class="row" style={{ margin: '100px 0' }}>
                <div className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center align-items-center">
                    <Link to="/inventory" className="btn btn-danger">Manage Inventory</Link>
                </div>
            </div>
        </div>
    );
};

export default Inventory;