import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    
    name: "user",
    initialState: {
       users: [],
        currentUser: null,
        isFetching: false,
        error: false,
        
    },
    
    reducers: {
         
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            localStorage.setItem('access_token', action.payload.accesToken);
            if (state.currentUser.isAdmin){
                window.location.href = '/'
                alert('Login Success Click Ok to go to home Page');
            } else if(state.currentUser.isRstock){
                window.location.href = '/ProductList'
                alert('Login Success Click Ok to go to home Page RES');
              
            }else {
                window.location.href = '/login'
                alert('Mot de passe oublier');
}
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
            alert('CONNECTION REFUSED');
        },
        logout:(state)=>{
            
            state.currentUser =null;
            state.users= null;
            state.isFetching = false;
            state.error = false;
            localStorage.clear();
        },
        //getALL
        getUserStart: (state) => {
            state.isFetching = true;
            state.error = false
        },
        getUserSuccess: (state, action) => {
            state.isFetching = false;
            state.users = action.payload;
        },
        getUserFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //delete
        deleteUserStart: (state) => {
            state.isFetching = true;
            state.error = false
        },
        deleteUserSuccess: (state, action) => {
            state.isFetching = false;
            state.users.splice(
                state.users.findIndex((item) => item._id === action.payload),
                1
            );
        },
        deleteUserFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        
    },
});

export const { loginStart,
     loginSuccess,
      loginFailure,
    logout,
    getUserStart,
    getUserSuccess,
    getUserFailure, 
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailure,
} = userSlice.actions;
export default userSlice.reducer;