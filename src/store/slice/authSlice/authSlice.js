import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authUser: null,
    errorMessages: null,
    profileSelected: null,
    configTemplate: null,
    status: "not-authenticated",
};

export const authSlice = createSlice({
    name: "auth", initialState,
    reducers: {
        onChecking: state => {
            state.status = "checking";
            state.authUser = null;
            state.errorMessages = null;
        },
        onLogin: (state, { payload }) => {
            state.status = "authenticated";
            state.authUser = payload;
            state.errorMessages = null;
        },
        onLogout: (state, { payload }) => {
            state.status = "not-authenticated";
            state.user = {};
            state.errorMessages = payload;
        },
        clearErrorMessages: state => {
            state.errorMessages = [];
        },
        setProfileSelected: (state, { payload }) => {
            state.profileSelected = payload;
        },
        setConfigTemplate: (state, { payload }) => {
            state.configTemplate = payload;
        },
        clearConfigTemplate: state => {
            state.configTemplate = null;
        },
        clearValues: state => {
            state.authUser = null;
            state.errorMessages = null;
            state.profileSelected = null;
            state.configTemplate = null;
            state.status = "not-authenticated";
        },
    },
})

export const { onChecking, onLogin, onLogout, clearErrorMessages, setProfileSelected, setConfigTemplate, clearValues, clearConfigTemplate } = authSlice.actions;