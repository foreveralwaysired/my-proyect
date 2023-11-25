import { Navigate, /* useLocation */ } from "react-router-dom";
import { useAuthStore } from "../hooks/authHooks/useAuthStore";

export const PrivateRoutes = ({ children }) => {
    const { status } = useAuthStore();
    // const { pathname, search } = useLocation();
    // const lastPath = pathname + search;
    // localStorage.setItem("lastPath", lastPath);

    return (status === "authenticated") ? children : <Navigate to="/inicio" />;
}