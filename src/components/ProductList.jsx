import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cartSlice'

const ProductList = () => {
    const dispatch = useDispatch();
    const products =[
        {
            id: 1,
            name: 'iPhone 16 Pro Max',
            price: 144999,
            image: 'https://m.media-amazon.com/images/I/3164xgZ11EL._SY445_SX342_QL70_FMwebp_.jpg',
        },
        {
            id: 2,
            name: 'Casio Edifice',
            price: 9999,
            image: 'https://m.media-amazon.com/images/I/61nBn455hlL._SX522_.jpg',
        },
        {
            id: 3,
            name: 'Samsung Odyssey Monitor',
            price: 24499,
            image: 'https://m.media-amazon.com/images/I/41KhryXjB9S._SY300_SX300_QL70_FMwebp_.jpg',
        },
        {
            id: 4,
            name: 'Adidas Yeezy Boost 350',
            price: 18499,
            image: 'https://crepdogcrew.com/cdn/shop/files/EditsbyAhmar01_57b3126b-b12c-4e01-8c82-6afac5cbed48.png?v=1716190605&width=700',
        },
        {
            id: 5,
            name: 'Nvidia GeForce RTX 4070 Super',
            price: 68799,
            image: 'https://m.media-amazon.com/images/I/41lEjwNYnYL._SY300_SX300_QL70_FMwebp_.jpg',
        },
        {
            id: 6,
            name: 'Intel Core i9',
            price: 78299,
            image: 'https://m.media-amazon.com/images/I/41mf+FfowUL._SY300_SX300_.jpg',
        },
    ];

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
    }
    return (
        <div className='product-list'>
            <h2>PRODUCTS</h2>

            <div className='products'>
                {products.map ((product) => (
                    <div className='product-card' key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>₹{product.price.toFixed(2)}</p>

                        <button onClick={() => handleAddToCart(product)}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList