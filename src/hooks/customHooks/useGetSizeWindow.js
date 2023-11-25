//Funcion para obtener el tamaño de la ventana

import { useEffect } from "react";

export const useGetSizeWindow = () => {

    function getSizeWindow() {
        const { width } = window.screen;
        if (width < 768) {
            return "sm";
        } else if (width < 993) {
            return "md";
        } else if (width < 1200) {
            return "lg";
        } else {
            return "xl";
        }
    }
    useEffect(() => {
        getSizeWindow();
    }, [])

    return { getSizeWindow };
}