import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allConfig: null,
    themeColor: 'blue',
    componentTheme: 'blue',
    menuMode: 'sidebar',
    ripple: true,
    colorScheme: 'dark',
};

export const configuracionTemaSlice = createSlice({
    name: "ui", initialState,
    reducers: {
        onChangeAllConfig: (state, { payload }) => {
            state.allConfig = payload;
        },
        onChangeThemeColor: (state, { payload }) => {
            state.themeColor = payload;
        },
        onChangeComponentTheme: (state, { payload }) => {
            state.componentTheme = payload;
        },
        onChangeMenuMode: (state, { payload }) => {
            state.menuMode = payload;
        },
        onChangeRipple: (state, { payload }) => {
            state.ripple = payload;
        },
        onChangeScheme: (state, { payload }) => {
            state.colorScheme = payload;
        },
        onResetConfTemplate: () => {
            return initialState;
        },
    },
})

export const { onChangeAllConfig, onChangeThemeColor, onChangeComponentTheme, onChangeMenuMode, onChangeRipple, onChangeScheme, onResetConfTemplate, } = configuracionTemaSlice.actions;