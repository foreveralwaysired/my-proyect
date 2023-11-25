import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { clientAxios } from "../config/axiosConfig";
import { AppAdminRoutes } from "./adminRoutes/appAdminRoutes";
import { PrivateRoutes } from "./privateRoutes";
import { PublicRoutes } from "./publicRoutes";
import { AppPublicRoutes } from "./appPublicRoutes/appPublicRoutes";


export const AppRoutes = () => {
    // clientAxios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    // const { startValidateToken, status, } = useAuthStore();
    // const { allConfig, onSchemeChange, onThemeChange, scheme, themeColor } = useUiStore();
    // const { loading, } = useLoadingStore();
    clientAxios.defaults.headers.common['Authorization'] = `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTNmMTE1MzYyMmQ5NTRkZTVjNzBkMCIsImlhdCI6MTY3NTk2ODgwMiwiZXhwIjoxNjc1OTcyNDAyfQ.iYQMuE39hxRjRwS0xCnk6PbrXTgx8O3IjuWT3Bwcl2E'}`;

    return (
        <BrowserRouter>
            {/* {loading && (
                <Loading />
            )} */}
            <Routes>
                <Route
                    path="inicio/*"
                    element={
                        <PublicRoutes>
                            <AppPublicRoutes />
                        </PublicRoutes>
                    }
                />
                <Route
                    path="/*"
                    element={
                        <PrivateRoutes>
                            <AppAdminRoutes />
                        </PrivateRoutes>
                    }
                />
                <Route path="/*" element={<Navigate to={"/"} />} />
            </Routes>
        </BrowserRouter>
    );
};
