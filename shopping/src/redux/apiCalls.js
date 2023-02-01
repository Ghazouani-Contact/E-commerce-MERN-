import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";
import { deleteCartFailure, deleteCartStart, deleteCartSuccess } from "./cartRedux";
import {toast} from 'react-toastify'
export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        localStorage.setItem('access_token', res.data.accesToken)
        dispatch(loginSuccess(res.data));
        toast('Wilcome :)', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    } catch (err) {
        dispatch(loginFailure());
        toast('Something went wrong... :)', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
};
export const deleteCart = async (produit, dispatch) => {
    dispatch(deleteCartStart());
    try {
        // const res = await userRequest.delete(`/products/${id}`);
        dispatch(deleteCartSuccess(produit));
    } catch (err) {
        dispatch(deleteCartFailure());
    }
};