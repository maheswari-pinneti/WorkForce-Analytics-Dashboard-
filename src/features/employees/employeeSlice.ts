import {createSlice} from "@reduxjs/toolkit";


const employeeSlice=createSlice({

name:"employees",

initialState:{
data:[]
},

reducers:{

setEmployees:(state,action)=>{
state.data=action.payload;
}

}

});


export const {
setEmployees
}=employeeSlice.actions;


export default employeeSlice.reducer;
