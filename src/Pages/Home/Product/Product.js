import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Products/Products.css'

const Product = ({ product }) => {
    const { name, _id, description, image, price, quantity, supplier } = product;

    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/inventory/${id}`);
    }
    return (

        <div className="col">
            <div className="card h-100 shadow-sm">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="clearfix mb-3">
                        <span className="float-start badge rounded-pill bg-info">{quantity} available</span>
                        <span className="float-end price-hp">{price}$</span>
                    </div>
                    <h4 className="card-title">{description}</h4>
                    <h6>Supplier - {supplier}</h6>
                    <div className="text-center my-4">
                        <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-warning'>Stock Update</button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Product;