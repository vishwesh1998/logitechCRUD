import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'MySlice',
    initialState: {
        value: []
    },
    reducers: {
        allProduct: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { allProduct } = slice.actions;
export default slice.reducer;