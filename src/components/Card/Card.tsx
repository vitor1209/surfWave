import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import * as Styled from "./Card.styled.ts";
import { Button } from "../../components/Button/Button";
import { ShoppingCart, Trash2, Pencil, CheckCircle } from 'lucide-react';
import type { CardProps } from "./Card.types.ts";
import { Box, Stack } from '@mui/material';
import { useState } from 'react';
import { PadraoModal } from '../Modal/Modal.tsx';
// import { useNavigate as useNavigate } from "react-router-dom";
import Link from '@mui/joy/Link';
import { Person } from '@mui/icons-material';

export default function ProductCard({
    image,
    id,
    name,
    lugar,
    descricao,
    validade,
    preco,
    tipoCard,
    onReserve,
}: CardProps) {
    // const navigate = useNavigate();

    // const { handleAdd, modalMessage, modalOpen, setModalOpen } = useAddCarrinho();

    // const handleAdicionarCarrinho = () => {
    //     handleAdd({
    //         produto_id: id,
    //         quantidade: 1,
    //     });
    // };

    // const handleEdit = () => {
    //     navigate(`/EditarProdutoPage/${id}`);
    // };

    const [openModal, setOpenModal] = useState(false);
    // const deleteMutation = useDeleteProduto();

    // function handleDelete() {
    //     deleteMutation.mutate(id, {
    //         onSuccess: () => {
    //             setOpenModal(true);
    //         },
    //         onError: () => {
    //             setOpenModal(true);
    //         }
    //     });
    // }

    const isProductCard = tipoCard === "Produto" || tipoCard === "semLogin";

    const renderByType = () => {
        switch (tipoCard) {
            case "Horta":
                return (
                    <Box className="center">
                        <Button
                            variante="ButtonLinkBlack"
                            espacamento={70}
                            tamanho="sm"
                            sx={{ border: '1px solid', borderColor: 'grey.300' }}
                            onClick={() => {} }
                        >
                            Ver produtos
                        </Button>
                    </Box>
                );
            case "Produtor":
                return (
                    <Box className="center" sx={{ gap: 1 }}>
                        <Button onClick={()=> {}} variante="ButtonBlue" espacamento={60} tamanho="md" icon={Pencil}>
                            Editar
                        </Button>
                        <Button
                            variante="ButtonLinkRed"
                            icon={Trash2}
                            tamanho="xl"
                            // onClick={handleDelete}
                        />
                    </Box>
                );
            case "Produto":
                return (
                    <Box className="center">
                        <Button
                            variante="ButtonBlue"
                            espacamento={0}
                            tamanho="md"
                            icon={ShoppingCart}
                            onClick={() => onReserve?.(String(id))}
                        >
                            Reservar
                        </Button>
                    </Box>
                );

            case "semLogin":
                return (
                    <Box className="center">
                        <Button
                            variante="ButtonBlue"
                            espacamento={30}
                            tamanho="md"
                            icon={ShoppingCart}
                            to='/Login'
                        >
                            Reservar
                        </Button>
                    </Box>
                );
            default:
                return null;
        }
    };

    const formattedPrice =
        typeof preco === "number" ? preco.toFixed(0) : preco;

    return (
        <>
            <Styled.ProductCardStyled tipoCard={tipoCard}>
                <CardOverflow className="cardMedia">
                    <Stack sx={{ height: "100%", width: "100%" }}>
                        <img
                            src={image}
                            alt=""
                            loading="lazy"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </Stack>
                </CardOverflow>

                {isProductCard ? (
                    <CardContent className="productContent">
                        <Typography className="productTag" level="body-xs">
                            {String(lugar).toUpperCase()}
                        </Typography>

                        <Link
                            className="productTitle"
                            href={
                                tipoCard === "semLogin"
                                    ? "/Login"
                                    : `/Produto/${id}`
                            }
                            color="neutral"
                            underline="none"
                        >
                            {name}
                        </Link>

                        {descricao && (
                            <Typography className="productDescription" level="body-sm">
                                {descricao}
                            </Typography>
                        )}

                        <div className="productFooter">
                            <Typography className="productPrice" level="title-lg">
                                R${formattedPrice}
                                <span>/dia</span>
                            </Typography>

                            <Button
                                variante="ButtonBlue"
                                espacamento={30}
                                tamanho="md"
                                onClick={
                                    tipoCard === "Produto"
                                        ? () => onReserve?.(String(id))
                                        : undefined
                                }
                                to={tipoCard === "semLogin" ? "/Login" : undefined}
                            >
                                Reservar
                            </Button>
                        </div>
                    </CardContent>
                ) : (
                    <CardContent className="cardContainer">
                        <div className="inline-item">
                            <Link
                                href={
                                    tipoCard === "Produtor"
                                        ? "/Login"
                                        : tipoCard === "Horta"
                                            ? `/Horta/${id}`
                                            : undefined
                                }
                                color="neutral"
                                underline="none"
                                onClick={e => {
                                    if (tipoCard === "Horta") e.preventDefault();
                                }}
                            >
                                {name}
                            </Link>
                        </div>

                        <div>
                            <div className="inline-item">
                                <Typography startDecorator={<Person height={18} />} level="body-sm">
                                    {lugar}
                                </Typography>
                            </div>
                        </div>

                        {descricao && (
                            <div className="inline-item">
                                <Typography
                                    sx={{
                                        textAlign: "start",
                                        whiteSpace: "wrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                    }}
                                    level="body-sm"
                                >
                                    {descricao}
                                </Typography>
                            </div>
                        )}

                        {validade && (
                            <div className="inline-item">
                                <Typography level="body-xs" sx={{ opacity: 0.7 }}>
                                    Validade: {validade}
                                </Typography>
                            </div>
                        )}

                        {(tipoCard === "Horta" || tipoCard === "Produtor") && (
                            <div className="inline-item">
                                <Chip size="lg" color="success">
                                    R${preco}
                                </Chip>
                            </div>
                        )}
                    </CardContent>
                )}

                {!isProductCard && renderByType()}
            </Styled.ProductCardStyled>
            <PadraoModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                title="Produto removido!"
                description="Seu produto foi deletado com sucesso."
                buttonText="Concluir"
                Icon={CheckCircle}
                to="/HomeProdutor"
                color="#dc2626"
            />

            {/* <PadraoModal
                open={setModalOpen}
                onClose={() => setModalOpen(false)}
                title="Carrinho"
                // description={modalMessage ?? ""}
                buttonText="Concluir"
                to="/HomeConsumidor"
                Icon={CheckCircle}
            /> */}
        </>
    );
}
