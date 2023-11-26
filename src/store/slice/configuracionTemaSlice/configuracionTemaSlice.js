import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allConfig: null,
    menuMode: 'static',
    colorScheme: 'light',
    inputStyle: 'outlined',
    ripple: true,
    menuTheme: 'layout-sidebar-white',
    componentTheme: 'blue'
};

export const configuracionTemaSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        onChangeAllConfig: (state, { payload }) => {
            state.allConfig = payload;
        },
        onChangeMenuMode: (state, { payload }) => {
            state.menuMode = payload;
        },
        onChangeScheme: (state, { payload }) => {
            state.colorScheme = payload;
        },
        onChangeInputStyle: (state, { payload }) => {
            state.inputStyle = payload;
        },
        onChangeRipple: (state, { payload }) => {
            state.ripple = payload;
        },
        onChangeMenuTheme: (state, { payload }) => {
            state.menuTheme = payload;
        },
        onChangeComponentTheme: (state, { payload }) => {
            state.componentTheme = payload;
        },
        onResetConfTemplate: () => {
            return initialState;
        }
    }
});

export const { onChangeAllConfig, onChangeMenuMode, onChangeScheme, onChangeInputStyle, onChangeRipple, onChangeMenuTheme, onChangeComponentTheme, onResetConfTemplate } = configuracionTemaSlice.actions;
