import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: null,
    selectedRegister: null,
    lstRegisteredUsers: [],
};

export const userSlice = createSlice({
    name: "user", initialState,
    reducers: {
        onLoadLstRegisteredUsers: (state, { payload }) => {
            state.lstRegisteredUsers = payload;
        },
        onLoadSelectedRegister: (state, { payload }) => {
            state.selectedRegister = payload;
        },
        onLoadUserData: (state, { payload }) => {
            state.userData = payload;
        },
        onClearSelectedRegister: state => {
            state.selectedRegister = null;
        },
        onClearAllValues: state => {
            state.userData = null;
            state.selectedRegister = null;
            state.lstRegisteredUsers = [];
        },
    },
})

export const {
    onLoadLstRegisteredUsers,
    onLoadSelectedRegister,
    onLoadUserData,
    onClearSelectedRegister,
    onClearAllValues
} = userSlice.actions;