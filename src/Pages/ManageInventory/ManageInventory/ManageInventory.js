import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProduct from '../../../hooks/useProduct';

const ManageInventory = () => {
    const [products, setProducts] = useProduct();

    const handleUserDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            // console.log('deleting user with id, ', id);

            const url = `https://afternoon-ridge-55411.herokuapp.com/products/${id}`
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

    return (
        <div className="manage-order poppins-font" style={{ margin: '100px 0' }}>
            <Container className="py-5">
                <Link to="/addItem"><button className='btn btn-info w-25'>Add new Item</button></Link>

                <h2 className="text-center pb-4 text-uppercase text-danger"> Manage inventory</h2>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr className="bg-primary text-white">
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
                            products.map((product, index) => <tr>

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
        </div >
    );
};

export default ManageInventory;