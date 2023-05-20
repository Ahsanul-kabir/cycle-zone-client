import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useProduct from '../../hooks/useProduct';

const MyItems = () => {
    const [products, setProducts] = useProduct();

    const [user] = useAuthState(auth);

    const handleUserDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            // console.log('deleting user with id, ', id);

            const url = `https://cycle-zone-server.onrender.com/products/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        console.log('Successfully deleted');
                        const remaining = products.filter(product => product._id !== id)
                        setProducts(remaining)
                    }
                })
        }
    }

    // match products to user
    const myItems = products.filter(product => product.email === user.email)

    let data;
    if (myItems.length > 0) {
        data = <>
            <Container className="py-5">
                <h2 className="text-center pb-4 text-uppercase text-danger"> Your Added Products</h2>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr className="bg-info text-white">
                            <th>#</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Supplier</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myItems.map((product, index) => <tr>

                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td><img src={product.image} alt="" style={{ width: "200px", height: '100px' }} /></td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.supplier}</td>
                                <td><button className="btn btn-danger" onClick={() => handleUserDelete(product._id)}>Delete</button></td>
                            </tr>
                            )
                        }

                    </tbody>
                </Table>
            </Container>
        </>
    }
    else {
        data = <>
            <h1 className="text-center text-primary">Please add products</h1>
        </>
    }

    return (
        <div className="manage-order poppins-font" style={{ margin: '100px 0' }}>
            {data}
        </div >
    );
};

export default MyItems;