import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../features/cartSlice';
const Cart = () => {

    const cart = useSelector((state) => state.cart);
    const dispatch= useDispatch();

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
    };

    return (
        <div className='cart'>
            <h2>CART</h2>
            {cart.items.length === 0 ? (
                <p> Cart is Empty</p>
            ) : (
                <div>
                    {cart.items.map((item) => (
                        <div key={item.id} style={{marginBottom: '15px'}}>
                            
                            <span>
                                <strong>{item.name}</strong> - ₹{item.totalPrice.toFixed(2)}
                            </span>

                            <button  onClick={() => handleRemoveItem(item.id)} style={{marginLeft:'10px'}}>
                                Remove
                            </button>

                        </div>
                    ))}

                    <p><strong>Total Items: </strong>{cart.totalQuantity}</p>
                    <p><strong>Price: </strong> ₹{cart.totalPrice.toFixed(2)}</p>
                </div>
            )}
        </div>
    )
}

export default Cart