import React from 'react';
import { Card } from 'react-bootstrap';
import './GoodReasons.css';

const GoodReasons = () => {
    return (
        <div className="py-5 poppins-font">
            <div className="container">
                <div className="text-center pb-3">
                    <h1>SOME <span className="text-danger">GOOD</span> REASONS</h1>
                    <p>Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur consequat.</p>
                </div>
                <div className="row good-reasons text-center">
                    <div className="col-md-4">
                        <Card className="m-3 p-3 shadow">
                            <div className="d-flex justify-content-center align-items-center">
                                <i class="fas fa-globe-asia"></i>
                            </div>
                            <Card.Body>
                                <Card.Title> <span className="text-danger">+50</span> Premium Collection</Card.Title>
                                <Card.Text>
                                    Premium Collection full fill daily needs from customers ends. This is the best way to get our customers.
                                </Card.Text>
                                <button className="btn btn-outline-danger">Read more</button>
                            </Card.Body>
                        </Card>

                    </div>
                    <div className="col-md-4">
                        <Card className="m-3 p-3 shadow">
                            <div className="">
                                <i class="fas fa-running"></i>
                            </div>
                            <Card.Body>
                                <Card.Title> <span className="text-danger">+1200</span> Customers</Card.Title>
                                <Card.Text>
                                    Customers play a significant role in any business. · Loyal customers are the most important segment.
                                </Card.Text>
                                <button className="btn btn-outline-danger">Read more</button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card className="m-3 p-3 shadow">
                            <div className="">
                                <i class="fas fa-headset"></i>
                            </div>
                            <Card.Body>
                                <Card.Title> <span className="text-danger">H24</span> Support</Card.Title>
                                <Card.Text>
                                    To support something, as a structure or heavy load, is to bear it or hold it up to support a person.
                                </Card.Text>
                                <button className="btn btn-outline-danger">Read more</button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoodReasons;