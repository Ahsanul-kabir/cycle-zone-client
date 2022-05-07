import React from 'react';
import { Link } from 'react-router-dom';
import useProduct from '../../../hooks/useProduct';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products] = useProduct();
    return (
        <div className='products'>
            <div className="text-center py-5 poppins-font">
                <small className="text-danger fw-bold">Find Your Items</small>
                <h1>CHOOSE BEST ONE </h1>
            </div>

            <div className="container-fluid bg-trasparent my-4 p-3" style={{ position: "relative" }}>
                <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-3 g-3">
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Products;