import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="pt-5 px-3">
                            <h5>NEED HELP?</h5>
                            <p>+8801758493</p>
                            <p>cyclezone@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="pt-5 px-3">
                            <h5>ABOUT</h5>
                            <p>About us</p>
                            <p>FAQ</p>
                            <p>Register</p>
                            <p>Login</p>
                            <p>Terms and condition</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="pt-5 px-3">
                            <h5>DISCOVER</h5>
                            <p>Community blog</p>
                            <p>Tour guide</p>
                            <p>Wishlist</p>
                            <p>Gallery</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="pt-5 px-3">
                            <h5>SETTINGS</h5>
                            <input className="form-control" type="email" placeholder="Your Email" /><br />
                            <textarea className="form-control" name="" id="" cols="30" rows="2" placeholder="Message"></textarea><br />
                            <button className="btn btn-outline-light">Send message</button>
                        </div>
                    </div>
                </div>
                <hr className="mt-5" />
                <small className="text-center d-block text-muted">© CycleZone 2022</small>
            </div>
        </div>
    );
};

export default Footer;