import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employees:null,
    loading: false,
    error: null
}

const employeeSlice = createSlice({
    name:'employee',
    initialState:initialState,
    reducers:{
        setEmployees:(state,action)=>{
            state.employees = action.payload
        },
        setLoading :(state,action)=>{
            state.loading = action.payload
        },
        setError :(state, action) =>{
            state.error = action.payload
        }
    }
})


export const {setEmployees,setLoading,setError} = employeeSlice.actions

export default employeeSlice.reducer