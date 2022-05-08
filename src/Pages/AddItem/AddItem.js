import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './AddItem.css';

const AddItem = () => {
    const [user] = useAuthState(auth);

    const handleAddUser = (event) => {
        event.preventDefault();

        const email = user.email
        const name = event.target.name.value
        const image = event.target.imgLink.value
        const description = event.target.description.value
        const price = event.target.price.value
        const quantity = event.target.quantity.value
        const supplier = event.target.supplier.value
        const product = { email, name, image, description, price, quantity, supplier }

        // Send data to server
        fetch('https://afternoon-ridge-55411.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success', data)
                alert('Product Added Successfully')
                event.target.reset()
            })
    }
    return (
        <div className="newTravel poppins-font">
            <div className="py-5 container">
                <div className="row my-5">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-5 shadow px-4 py-5 rounded rounded-2 bg-white">
                        <h1 className="text-center text-uppercase pb-4"><span className="text-danger">Add a new</span> Product</h1>
                        <form onSubmit={handleAddUser}>
                            <input type="text" class="form-control" name="name" placeholder="Product Name" required />
                            <br />
                            <p className='text-muted'><small>Image link sample: https://i.ibb.co/qybLQhg/6.png</small></p>
                            <input type="text" class="form-control" name="imgLink" placeholder="Image Link" required />
                            <br />
                            <textarea type="text" class="form-control" name="description" placeholder="Description" required />
                            <br />
                            <input type="number" class="form-control" name="price" placeholder="Price" required />
                            <br />
                            <input type="number" class="form-control" name="quantity" placeholder="Quantity" required />
                            <br />
                            <input type="text" class="form-control" name="supplier" placeholder="Supplier" required />
                            <br />
                            <input type="submit" value="Add Product" class="btn btn-info text-white  w-100 mx-auto" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddItem;