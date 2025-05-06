import { axiosInstance } from './axios';


export const signUp = async (signUpData) => {
    const res = await axiosInstance.post('/auth/signup', signUpData);
    return res.data;
}


export const getAuthUser = async () => {
    try {
        const res = await axiosInstance.get("/auth/me");
        return res.data;
    } catch (error) {
        console.error("Error fetching auth user:", error);
        return null;
    }
}


export const completeVerfication = async (userData) => {
    const res = await axiosInstance.post("/auth/onboarding", userData);
    return res.data;
}

export const login = async (loginData) => {
    const res = await axiosInstance.post("/auth/login", loginData);
    return res.data;
}

export const logout = async () => {
    const res = await axiosInstance.post("/auth/logout");
    return res.data;
}