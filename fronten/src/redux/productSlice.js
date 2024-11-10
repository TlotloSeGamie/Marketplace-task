import { createSlice } from '@reduxjs/toolkit';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import store from './store';

const initialState = {
    products: [],
    loading: false,
    error: null,
    successMessage: null,
    errorMessage: null
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProductStart: (state) => {
            state.loading = true;
            state.error = null;
            state.successMessage = null;
            state.errorMessage = null;
        },
        addProductSuccess: (state, action) => {
            state.loading = false;
            state.products.push(action.payload);
            state.successMessage = 'Product added successfully!';
        },
        addProductFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.errorMessage = 'Failed to add product: ' + action.payload;
        },
        setProducts: (state, action) => {
            state.products = action.payload;
            state.loading = false;
        },
        deleteProductSuccess: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        },
        updateProductSuccess: (state, action) => {
            const index = state.products.findIndex(product => product.id === action.payload.id);
            if (index !== -1) {
                state.products[index] = action.payload;
            }
        }
    }
});

export const { addProductStart, addProductSuccess, addProductFailure, setProducts, deleteProductSuccess, updateProductSuccess } = productSlice.actions;

export default productSlice.reducer;

export const addProduct = async (productData) => {
    store.dispatch(addProductStart());
    try {
        const docRef = await addDoc(collection(db, "shoe"), productData);
        const newProduct = { id: docRef.id, ...productData };
        store.dispatch(addProductSuccess(newProduct));
    } catch (error) {
        store.dispatch(addProductFailure(error.message));
    }
};
