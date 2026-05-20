import { Stack } from "@mui/material"
import { LinhaProduto, NomeProduto, SubtituloProdutor, ValorProduto } from "./ResumoPedido.styled"

type ResumoLinhaProps = {
    quantidade: number
    nome: string
    produtor: string
    preco: number
}

export const ResumoLinha = ({ quantidade, nome, produtor, preco }: ResumoLinhaProps) => {
    return (
        <LinhaProduto>
            <Stack sx={{ display: "flex", flexDirection: "row", gap: 2, alignItems: "center" }}>
                <span>{quantidade}x</span>

                <Stack sx={{ display: "flex", flexDirection: "row", gap: 2, alignItems: "center" }}>
                    <NomeProduto>{nome}</NomeProduto>
                    <SubtituloProdutor>({produtor})</SubtituloProdutor>
                </Stack>
            </Stack>

            <ValorProduto>R$ {preco.toFixed(2)}</ValorProduto>
        </LinhaProduto>
    )
}
