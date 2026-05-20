import { useCallback, useState } from "react";

type CarrinhoItem = {
    produto_id?: number;
    quantidade?: number;
};

export const useAddCarrinho = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage] = useState<string | null>("Item adicionado ao carrinho.");

    const handleAdd = useCallback((item: CarrinhoItem) => {
        void item;
        setModalOpen(true);
    }, []);

    return { handleAdd, modalMessage, modalOpen, setModalOpen };
};

export const useDelCarrinho = () => {
    const [modalOpenDel, setModalOpenDel] = useState(false);
    const [modalMessageDel] = useState<string | null>("Item removido do carrinho.");

    const handleDel = useCallback((id: number) => {
        void id;
        setModalOpenDel(true);
    }, []);

    return { handleDel, modalMessageDel, modalOpenDel, setModalOpenDel };
};