import { useSelector } from "react-redux";

export const useAuthStore = () => {
    const { status, authUser, errorMessages, profileSelected, } = useSelector((state) => state.auth);
    
    return {
        /**Propiedades **/
        status,
        authUser,
        errorMessages,
        profileSelected,
        /** Métodos **/
    };

};
