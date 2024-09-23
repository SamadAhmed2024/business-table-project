import {createSlice} from '@reduxjs/toolkit';

export const ProductSlice=createSlice({
    name: 'Product',
    initialState: {
        Total:0,
        AllProducts:[],
    },
    reducers:{
        SetTotal:(state,action)=>{
            state.Total=action.payload;
        },
        SetAllProducts:(state,action)=>{
            state.AllProducts=action.payload;
        }
    }

})

export const {SetTotal,SetAllProducts}=ProductSlice.actions;
export default ProductSlice.reducer;