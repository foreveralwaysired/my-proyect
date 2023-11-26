import { clientAxios } from "../config/axiosConfig";

export const getLstRegisteredUsers = async () => {
    let url = "/user";
    return await clientAxios.get(url);
}
export const postAddNewUser = async (body) => {
    let url = "/user";
    return await clientAxios.post(url, body);
}