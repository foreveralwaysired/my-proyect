import { useDispatch, useSelector } from "react-redux";
import { alertNotification } from "../../helpers/helpers";
import { getLstRegisteredUsers, postAddNewUser } from "../../service/userService";
import { onClearAllValues, onLoadLstRegisteredUsers, onLoadUserData } from "../../store/slice/user/userSlice";

export const useUserStore = () => {
    const { userData, selectedRegister, lstRegisteredUsers } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    //Obtener La lista de Usuarios registrados
    const startGetLstRegisteredUsers = () => {
        getLstRegisteredUsers().then((response) => {
            if (response.data.status === "success") {
                const newData = response.data.user.map((item, idex) => {
                    return {
                        id: idex + 1,
                        ...item,
                    };
                });
                dispatch(onLoadLstRegisteredUsers(newData));
            }
        }).catch((error) => {
            alertNotification({
                title: `Ha ocurrido un error al obtener los usuarios registrados`,
                text: error?.response?.data?.error_msg,
                icon: "error",
                confirmButtonText: "Aceptar",
                confirmButtonColor: "#6e7881",
                html: `<h5>${error?.response?.data?.error_msg || "Hubo un problema"
                    }</h5>
                    <div id="lista-errores"></div>
                   `,
            });
            // dispatch(onClearValuesCatalogos());
            // startLoadin(false);
        });
    }

    /** Agragar un nuevo usuario
    * @param {String} name
    * @param {String} firtsLastName
    * @param {String} secondLastName
    * @param {String} body.password
    * @param {String} body.email
    */
    const startAddNewUser = (body) => {
        postAddNewUser(body).then((response) => {
            if (response.data.status === "success") {
                alertNotification({
                    title: "Correcto",
                    text: "Se Agrego Correctamente el Usuario",
                    icon: "success",
                    confirmButtonText: "Aceptar",
                    confirmButtonColor: "#9b0000",
                });
                dispatch(onLoadUserData(response.data));
            }
        }).catch((error) => {
            alertNotification({
                title: `Ha ocurrido un error al obtener los usuarios registrados`,
                text: error?.response?.data?.error_msg,
                icon: "error",
                confirmButtonText: "Aceptar",
                confirmButtonColor: "#6e7881",
                html: `<h5>${error?.response?.data?.error_msg || "Hubo un problema"
                    }</h5>
                    <div id="lista-errores"></div>
                   `,
            });
            // dispatch(onClearValuesCatalogos());
            // startLoadin(false);
        });
    }

    /**
    * Limpiar los valores del store de user
    */
    const onClearUserData = () => {
        dispatch(onClearAllValues());
    }

    return {
        /**Propiedades **/
        userData,
        selectedRegister,
        lstRegisteredUsers,
        /** Métodos **/
        startGetLstRegisteredUsers,
        startAddNewUser,
        onClearUserData,
    };
}
