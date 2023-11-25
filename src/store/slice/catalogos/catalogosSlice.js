import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lstRegisters: [],
    registerSelected: null,
};

export const catalogosSlice = createSlice({
    name: "catalogos", initialState,
    reducers: {
        onGetLstRegisters: (state, { payload }) => {
            state.lstRegisters = payload;
        },
        onLoadRegisterSelected: (state, { payload }) => {
            state.registerSelected = payload;
        },
        onClearRegisterSelected: state => {
            state.registerSelected = null;
        },
        onClearValuesCatalogos: state => {
            state.lstRegisters = [];
            state.registerSelected = null;
        },
    },
})

export const { onGetLstRegisters, onLoadRegisterSelected, onClearRegisterSelected, onClearValuesCatalogos } = catalogosSlice.actions;