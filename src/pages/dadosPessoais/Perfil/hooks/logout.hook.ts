import { useCallback } from "react";

export const useLogout = () => {
    const handleLogout = useCallback(() => {
        window.location.href = "/Login";
    }, []);

    return { handleLogout };
};