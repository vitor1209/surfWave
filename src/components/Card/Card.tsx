import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import * as Styled from "./Card.styled.ts";
import { Button } from "../../components/Button/Button";
import { ShoppingCart, Trash2, Pencil } from 'lucide-react';
import type { CardProps } from "./Card.types.ts";
import { Box, Stack } from '@mui/material';
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
    const ehCardDeProduto = tipoCard === "Produto" || tipoCard === "semLogin";

    const renderizarPorTipo = () => {
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

    const precoFormatado =
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

                {ehCardDeProduto ? (
                    <CardContent className="productContent">
                        <Typography className="productTag" level="body-xs">
                            {String(lugar).toUpperCase()}
                        </Typography>

                        <Typography
                            className="productTitle"
           
                            color="neutral"
                        >
                            {name}
                        </Typography>

                        {descricao && (
                            <Typography className="productDescription" level="body-sm">
                                {descricao}
                            </Typography>
                        )}

                        <div className="productFooter">
                            <Typography className="productPrice" level="title-lg">
                                R${precoFormatado}
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

                {!ehCardDeProduto && renderizarPorTipo()}
            </Styled.ProductCardStyled>
        </>
    );
}
