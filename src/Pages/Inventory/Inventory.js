import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Inventory = () => {
    const [product, setProduct] = useState([]);

    const { id } = useParams();

    const url = `http://localhost:5000/products/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

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
                                <button className='btn btn-danger'>Delivered</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-4">
                    <h2>Restock</h2>
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