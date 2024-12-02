import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items: [],
        totalQuantity: 0,
        totalPrice: 0,
    },

    reducers: {
        //ADD ITEMS
        addItem: (state, action) => {
            const {id, name, price} = action. payload;
            const existingItem = state.items.find((item) => item.id === id);

            if(existingItem){
                existingItem.Quantity += 1;
                existingItem.totalPrice += price;
            }else{
                state.items.push({id, name, price, quantity:1, totalPrice: price});
            }

            state.totalQuantity += 1;
            state.totalPrice += price;
        },

        removeItem: (state, action) => {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);

            if(existingItem){
                state.totalQuantity -= existingItem.quantity;
                state.totalPrice -= existingItem.totalPrice;
                state.items = state.items.filter((item) => item.id !== id);
            }
        },
    },
});

export const {addItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer;