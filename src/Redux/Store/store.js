import { configureStore } from '@reduxjs/toolkit'
import slice from '../Slice/slice'
import cartSlice from '../Slice/cartSlice'

const store = configureStore({
    reducer: {
        productList: slice,
        cartList: cartSlice
    }
})

export default store;