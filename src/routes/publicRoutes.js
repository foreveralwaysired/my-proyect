import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../hooks/authHooks/useAuthStore';

export const PublicRoutes = ({ children }) => {
    const { status } = useAuthStore();

    return (status === "not-authenticated") ? children : <Navigate to="/" />;
}