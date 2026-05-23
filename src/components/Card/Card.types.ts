export interface CardProps {
    image: string;
    id: string | number;
    name: string;
    lugar: string;
    descricao?: string;
    validade?: string;
    preco?: string | number;
    tipoCard: "Horta" | "Produtor" | "Produto" | 'semLogin';
    onReserve?: (id: string) => void;
}