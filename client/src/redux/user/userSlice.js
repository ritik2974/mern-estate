import { createSlice } from "@reduxjs/toolkit";

const initialState={
    currentUser:null, 
    error:null,
    loading:false,
    // in initial state our user is null before sign in after sign in we will get our user

}

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        signInstart:(state)=>{
            state.loading=true;
        },
        signInSuccess:(state,action)=>{
            state.currentUser=action.payload;
            state.loading=false;
            state.error=null
            //action is the data we get from database//

        } ,
        signInFailure:(state,action)=>{
            state.error=action.payload;
            state.loading=false;
        },
        updateUserStart:(state)=>{
            state.loading=true;
        },
        updateUserSuccess:(state,action)=>{
            state.currentUser=action.payload;
            state.loading=false;
            state.error=null;
        },
        updateUserFailure:(state,action)=>{
            state.error=action.payload;
            state.loading=false;
        },
        deleteUserStart:(state)=>{
            state.loading=true;
        },
        deleteUserSuccess:(state)=>{
            state.currentUser=null;
            state.loading=false;
            state.error=null;
        },
        deleteUserFailure:(state,action)=>{
            state.error=action.payload;
            state.loading=false;
        },

    },
})

export const {signInstart,signInSuccess,signInFailure,updateUserStart,updateUserSuccess,updateUserFailure,deleteUserFailure,deleteUserSuccess,deleteUserStart}=userSlice.actions;

export default userSlice.reducer;