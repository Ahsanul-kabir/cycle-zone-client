import React from 'react';
import Banner from '../Banner/Banner';
import GoodReasons from '../GoodReasons/GoodReasons';
import BestSell from '../BestSell/BestSell';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner />
            <Products />
            <GoodReasons />
            <BestSell />
        </div>
    );
};

export default Home;