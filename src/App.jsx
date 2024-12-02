import React from 'react';
import './style.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
    return(
        <div>
            <h1>SHOPPING CART - REDUX</h1>
            <ProductList />
            <Cart />
        </div>
    )
}

export default App