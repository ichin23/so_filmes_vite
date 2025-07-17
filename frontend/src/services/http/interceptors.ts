
import { api } from "./axios";

let onLogout: (() => void) | null = null;

export function setupInterceptors(logoutCallback?: () => void) {
    onLogout = logoutCallback ?? null;

    api.interceptors.request.use((config) => {
        const user = localStorage.getItem("currentUser") // localStorage.getItem("token");
        if (user) {
            const token = JSON.parse(user)["access_token"]
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    })

    api.interceptors.response.use(
        (response) => response,
        (error) => {
            const status = error.response?.status;
            if (status === 401) {
                // localStorage.removeItem("token");
                // localStorage.removeItem("currentUser");
                localStorage.clear()
                if (onLogout) onLogout(); // redireciona para login
            }
            return Promise.reject(error);
        }
    );

}