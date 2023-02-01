import { loginFailure, loginStart, loginSuccess,
     getUserFailure, getUserStart, getUserSuccess, 
     deleteUserFailure, deleteUserStart, deleteUserSuccess,
   
     } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {deleteProductFailure, deleteProductStart, deleteProductSuccess,
     getProductFailure, getProductStart, getProductSuccess ,
     updateProductStart,updateProductSuccess,updateProductFailure,
     addProductStart,addProductSuccess,addProductFailure 
 } from "./productRedux";
import { deleteOrderFailure, deleteOrderStart, deleteOrderSuccess, getOrderFailure, getOrderStart, getOrderSuccess } from "./orderRedux";
import { deleteCategorieFailure, deleteCategorieStart, deleteCategorieSuccess, getCategorieFailure, getCategorieStart, getCategorieSuccess, updateCategorieStart, updateCategorieFailure, updateCategorieSuccess, addCategorieFailure, addCategorieStart, addCategorieSuccess } from "./categoriesRedux";
import { deletecontactFailure, deletecontactStart, deletecontactSuccess, 
    getcontactFailure, getcontactStart, getcontactSuccess } from "./contactRedux";
import { deleteNewsletterFailure, deleteNewsletterStart, deleteNewsletterSuccess,
     getNewsletterStart,getNewsletterSuccess,getNewsletterFailure } from "./newsletterRedux";


export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};
//product
export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get("/products");
        dispatch(getProductSuccess(res.data));
    } catch (err) {
        dispatch(getProductFailure());
    }
};
export const deleteProduct = async (id,dispatch) => {
    dispatch(deleteProductStart());
    try {
    await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id));
    } catch (err) {
        dispatch(deleteProductFailure());
    }
};
export const updateProducts = async ( id, product, dispatch) => {

    dispatch(updateProductStart());
    try {
        await userRequest.put(`/products/${id}`, product);
        dispatch(updateProductSuccess({ id,product}));

    } catch (err) {
        dispatch(updateProductFailure());

    }
};
export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
        const res = await userRequest.post(`/products`,product);
        dispatch(addProductSuccess(res.data));
    } catch (err) { 
        dispatch(addProductFailure());
    }
};
//user
export const getUsers = async (dispatch) => {
    dispatch(getUserStart());
    try {
        const res = await userRequest.get("/users");
        dispatch(getUserSuccess(res.data));
    } catch (err) {
        dispatch(getUserFailure());
    }
};
export const deleteUser = async (id, dispatch) => {
    dispatch(deleteUserStart());
    try {
        await userRequest.delete(`/users/${id}`);
        dispatch(deleteUserSuccess(id));
    } catch (err) {
        dispatch(deleteUserFailure());
    }
};
//Order
export const getOrders = async (dispatch) => {
    dispatch(getOrderStart());
    try {
        const res = await userRequest.get("/orders");
        dispatch(getOrderSuccess(res.data));
    } catch (err) {
        dispatch(getOrderFailure());
    }
};

export const deleteOrders = async (id, dispatch) => {
    dispatch(deleteOrderStart());
    try {
        await userRequest.delete(`/orders/${id}`);
        dispatch(deleteOrderSuccess(id));
        
    } catch (err) {
        dispatch(deleteOrderFailure());
    }
};
//Categories
export const getCategories = async (dispatch) => {
    dispatch(getCategorieStart());
    try {
        const res = await publicRequest.get("/categories");
        dispatch(getCategorieSuccess(res.data));
    } catch (err) {
        dispatch(getCategorieFailure());
    }
};
export const deleteCategories = async (id, dispatch) => {
    dispatch(deleteCategorieStart());
    try {
        await userRequest.delete(`/categories/${id}`);
        dispatch(deleteCategorieSuccess(id));
    } catch (err) {
        dispatch(deleteCategorieFailure());
    }
};
export const updateCategories = async (id, categorie, dispatch) => {
    dispatch(updateCategorieStart());
    try {
        await userRequest.put(`/categories/${id}`, categorie);
        dispatch(updateCategorieSuccess({ id, categorie }));
    } catch (err) {
        console.log(err);
        dispatch(updateCategorieFailure());
    }
};
export const addCategories = async (categorie, dispatch) => {
    dispatch(addCategorieStart());
    try {
        const res = await userRequest.post(`/categories`, categorie);
        dispatch(addCategorieSuccess(res.data));
    } catch (err) {
        dispatch(addCategorieFailure());
    }
};
//contact
export const getContacts = async (dispatch) => {
    dispatch(getcontactStart());
    try {
        const res = await userRequest.get("/contacts");
        dispatch(getcontactSuccess(res.data));
    } catch (err) {
        dispatch(getcontactFailure());
    }
};
export const deleteContacts = async (id, dispatch) => {
    dispatch(deletecontactStart());
    try {
        await userRequest.delete(`/contacts/${id}`);
        dispatch(deletecontactSuccess(id));
    } catch (err) {
        dispatch(deletecontactFailure());
    }
};
//newsletter
export const getNewsletters = async (dispatch) => {
    dispatch(getNewsletterStart());
    try {
        const res = await userRequest.get("/newsletters");
        dispatch(getNewsletterSuccess(res.data));
    } catch (err) {
        dispatch(getNewsletterFailure());
    }
};
export const deleteNewsletters = async (id, dispatch) => {
    dispatch(deleteNewsletterStart());
    try {
        await userRequest.delete(`/newsletters/${id}`);
        dispatch(deleteNewsletterSuccess(id));
    } catch (err) {
        
        dispatch(deleteNewsletterFailure());
    }
};


