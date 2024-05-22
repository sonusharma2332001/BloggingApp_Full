import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser:null,
  error:null,
  loading:false
}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart:(state) =>{
        state.loading = true;
        state.error = null;
    },
    signInSccess:(state,action)=>{
        state.currentUser = action.payload;
        state.loading = false;
        state.error = null;
        
        console.log(state.currentUser);
    },
    signInFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    updateStart:(state)=>{
      state.loading=true;
      state.error=null
    },
    updateSuccess:(state,action)=>{
      state.currentUser=action.payload;
      state.loading=false;
      state.error=null
    },
    updateFail:(state,action)=>{
      state.loading=false;
      state.error=action.payload
    },
    deleteStart:(state)=>{
      state.loading=true;
      state.error=null
    },
    deleteSuccess:(state)=>{
      state.currentUser=null;
      state.loading=false;
      state.error=null
    },
    deleteFail:(state,action)=>{
      state.loading=false;
      state.error=action.payload
    },
    signoutSuccess:(state)=>{
      state.currentUser=null;
      state.loading=false;
      state.error=null;
    },
    signoutFail:(state,action)=>{
      state.loading=false;
      state.error=action.payload
    }
  },
})
export const { signInStart, signInSccess, signInFailure,updateFail,updateStart,updateSuccess,deleteFail,deleteStart,deleteSuccess,signoutSuccess,signoutFail} = UserSlice.actions

export default UserSlice.reducer;