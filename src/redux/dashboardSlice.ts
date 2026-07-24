import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({

 name:"dashboard",

 initialState:{
   department:"All",
   role:"All",
   location:"All"
 },

 reducers:{

  setDepartment:(state,action)=>{
    state.department = action.payload;
  },

  setRole:(state,action)=>{
    state.role = action.payload;
  },

  setLocation:(state,action)=>{
    state.location = action.payload;
  }

 }

});


export const {
 setDepartment,
 setRole,
 setLocation
}=dashboardSlice.actions;


export default dashboardSlice.reducer;
