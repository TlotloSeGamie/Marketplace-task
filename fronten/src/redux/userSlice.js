import { createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc,getDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';


const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {
        registerStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        registerSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },
        registerFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { registerStart, registerSuccess, registerFailure, loginStart, loginSuccess, loginFailure  } = userSlice.actions;
export default userSlice.reducer;

export const registerUser = async (email, password, userName, contact) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const userId = userCredential.user.uid;

        const userRef = doc(db, 'users', userId, 'profile', 'profileInfo');
        await setDoc(userRef, { userName, email, contact });

        return { userId, email, contact, userName }; 
    } catch (error) {
        throw new Error(error.message); 
    }
};

export const loginUser = (email, password) => async (dispatch) => {
    dispatch(loginStart());
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const userId = userCredential.user.uid;

        const userRef = doc(db, 'users', userId, 'profile', 'profileInfo');
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
            const userData = { userId, ...docSnap.data() };
            dispatch(loginSuccess(userData)); 
        } else {
            throw new Error("User profile not found in Firestore.");
        }
    } catch (error) {
        dispatch(loginFailure(error.message)); 
    }
};