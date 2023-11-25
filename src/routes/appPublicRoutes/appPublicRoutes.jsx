import { Route, Routes } from "react-router-dom";
import { appPublicRoutes } from "./publicRoutes";
import { LoginScreen } from "../../pages/auth/loginScreen";

export const AppPublicRoutes = () => {

    return (
        <Routes>
            <Route index={true} element={<LoginScreen />} />
            {appPublicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
        </Routes>
    );
}