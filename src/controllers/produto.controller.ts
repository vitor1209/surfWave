import { useCallback } from "react";

type DeleteOptions = {
    onSuccess?: () => void;
    onError?: () => void;
};

export const useDeleteProduto = () => {
    const mutate = useCallback((id: number, options?: DeleteOptions) => {
        try {
            void id;
            options?.onSuccess?.();
        } catch {
            options?.onError?.();
        }
    }, []);

    return { mutate };
};