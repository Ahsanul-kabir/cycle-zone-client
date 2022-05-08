import { useEffect, useState } from 'react';

const useProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://afternoon-ridge-55411.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    return [products, setProducts]
};

export default useProduct;