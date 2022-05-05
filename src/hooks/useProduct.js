import { useState } from 'react';

const useProduct = () => {
    const [products, setProducts] = useState([]);

    fetch('services.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    return [products]
};

export default useProduct;