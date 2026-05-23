import { Stack, Typography } from "@mui/material";
import { CheckCircle, Trash2 } from "lucide-react";

import {
    ProductCard,
    Image,
    InfoWrapper,
    Price,
    TrashButton
} from "./CardCarrinho.styled";
import { QuantidadeSelector } from "../selectQuant/QuantidadeSelector";
import type { ProductCardComponentProps } from "./CardCarrinho.types";
import { PadraoModal } from "../Modal/Modal";

export default function ProductCardComponent({
    title,
    farm,
    price,
    quantity,
    imageUrl,
    onIncrease,
    onDecrease,
}: ProductCardComponentProps) {

    return (
        <>
            <ProductCard>
                <Stack sx={{ display: "flex", flexDirection: "row", gap: 3, alignItems: "flex-start" }}>
                    <Image src={imageUrl} alt={title} />
                    <InfoWrapper sx={{ textAlign: "start" }}>
                        <Typography variant="h6">{title}</Typography>
                        <Typography
                            variant="body2"
                            color="gray"
                            sx={{
                                maxWidth: 450,
                                whiteSpace: "wrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                        >
                            {farm}
                        </Typography>
                        <Price variant="h6">R$ {price.toFixed(2)}</Price>
                    </InfoWrapper>
                </Stack>

                <Stack sx={{ display: "flex", gap: 1, alignItems: { sm: "center", md: "flex-end" } }}>
                    <TrashButton onClick={() => { }}>
                        <Trash2 />
                    </TrashButton>

                    <QuantidadeSelector
                        txt={null}
                        quantidade={quantity}
                        onIncrease={onIncrease}
                        onDecrease={onDecrease}
                    />

                    <Typography sx={{ fontWeight: 600 }}>
                        Subtotal: R$ {(price * quantity).toFixed(2)}
                    </Typography>
                </Stack>
            </ProductCard>

            <PadraoModal
                open={false}
                onClose={() => { }}
                title="Item removido!"
                description={""}
                buttonText="Concluir"
                color="#dc2626"
                to="/FinalizarCarrinho"
                Icon={CheckCircle}
            />
        </>
    );
}
