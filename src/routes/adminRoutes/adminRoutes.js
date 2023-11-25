import { UserScreen } from "../../pages/user/userScreen";

export const adminRoutes = [
    {
        to: "principal",
        path: "/",
        Component: "",
    },
    {
        to: "Usuarios",
        path: "/user",
        Component: UserScreen,
    },
];
