import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'MyCartSlice',
    initialState: {
        value: []
    },
    reducers: {
        allCart: (state, action) => {
            if (window.confirm('We are adding this product for you or if already added then adding quantity for you !!')) {
                let newObj = { ...action.payload, qty: 1 }
                if (state.value.some(e => e.id === action.payload.id)) {
                    state.value = state.value.map(e => e.id === action.payload.id ? { ...e, qty: e.qty + 1 } : e)
                }
                else {
                    state.value = [...state.value, newObj]
                }
            }
            else {
                return;
            }
        },
        addQty: (state, action) => {
            state.value = state.value.map(e => e.id === action.payload.id ? { ...e, qty: e.qty + 1 } : e)
        },
        removeQty: (state, action) => {
            if (action.payload.qty > 1) {
                state.value = state.value.map(e => e.id === action.payload.id ? { ...e, qty: e.qty - 1 } : e)
            }
            else {
                state.value = state.value.filter(e => e.id !== action.payload.id)
            }
        },
        deleteCart: (state, action) => {
            state.value = state.value.filter(e => e.id !== action.payload.id)
        }
    }
})

export const { allCart, addQty, removeQty, deleteCart } = slice.actions;
export default slice.reducer;