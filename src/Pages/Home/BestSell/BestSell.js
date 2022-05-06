import React from 'react';
import './BestSell.css';

const BestSell = () => {
    return (
        <div className="pb-5 poppins-font">
            <div className="container">
                <div className="text-center py-5">
                    <small className="text-danger fs-6">Sells</small>
                    <h1>BEST COLLECTION</h1>
                </div>
                <div className="row team-container text-center">
                    <div className="col-md-3">
                        <div className="border pt-4 pb-2 mb-5 px-2">
                            <img className="img-fluid" src={'https://i.ibb.co/K939pFq/1.png'} alt="" />
                            <small className="text-danger">SINTERO PLUS</small>
                            <p>Allant+ 8S Stagger is a performance e-bike built.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="border pt-4 pb-2 mb-5 px-2">
                            <img className="img-fluid" src={'https://i.ibb.co/J3BwCTk/4.jpg'} alt="" />
                            <small className="text-danger">RIMINI</small>
                            <p>Swagtron EB-6 T Bandit All-Mountain Bike 7-Speed</p>
                        </div>
                    </div>
                    <div className="col-md-3 ">
                        <div className="border pt-4 pb-2 mb-5 px-2">
                            <img className="img-fluid" src={'https://i.ibb.co/qybLQhg/6.png'} alt="" />
                            <small className="text-danger">SHOCKBLAZE</small>
                            <p>Electric folding bicycles are sprouting up on city.</p>
                        </div>
                    </div>
                    <div className="col-md-3 ">
                        <div className="border pt-4 pb-2 mb-5 px-2">
                            <img className="img-fluid" src={'https://i.ibb.co/ZN2KNtx/2.jpg'} alt="" />
                            <small className="text-danger">SPRINT E-ADVENTURE</small>
                            <p>The best electric bike in the world, you could own!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSell;