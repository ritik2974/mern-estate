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
        }
    }
})

export const {signInstart,signInSuccess,signInFailure}=userSlice.actions;

export default userSlice.reducer;