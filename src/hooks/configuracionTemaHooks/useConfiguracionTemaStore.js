import { useDispatch, useSelector } from "react-redux";
import { onChangeAllConfig, onChangeMenuMode, onChangeScheme, onChangeInputStyle, onChangeRipple, onChangeMenuTheme, onChangeComponentTheme, onResetConfTemplate } from "../../store/slice/configuracionTemaSlice/configuracionTemaSlice";

export const useConfiguracionTemaStore = () => {
    const dispatch = useDispatch();
    const { allConfig, menuMode, colorScheme, inputStyle, ripple, menuTheme, componentTheme, } = useSelector((state) => state.configuracionTema);

    const setMenuMode = (mode) => {
        dispatch(onChangeMenuMode(mode));
    };

    const setColorScheme = (color) => {
        dispatch(onChangeScheme(color));
    };

    const setInputStyle = (inputStyle) => {
    dispatch(onChangeInputStyle(inputStyle));
    };

    const setRipple = (value) => {
        dispatch(onChangeRipple(value));
    };
    
    const setMenuTheme = (nameColor) => {
        dispatch(onChangeMenuTheme(nameColor));
    };

    const setComponentTheme = (nameColor) => {
        dispatch(onChangeComponentTheme(nameColor));
    };

    return {
        /**Propiedades **/
        allConfig,
        menuMode,
        colorScheme,
        inputStyle,
        ripple,
        menuTheme,
        componentTheme,
        /** Métodos **/
        setMenuMode,
        setColorScheme,
        setInputStyle,
        setRipple,
        setMenuTheme,
        setComponentTheme
    };

};
