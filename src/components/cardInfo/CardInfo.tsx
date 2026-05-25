import Link from "@mui/joy/Link"
import { Stack, Typography } from "@mui/material"

import * as styled from "./CardInfo.styled"
import type { CardInfoProps } from "./CardInfo.types"

export default function CardInfo({
    name,
    valor,
    color,
    acrescimo,
    to,
    tamanho,
    icon: Icon,
}: CardInfoProps) {
    return (
        <styled.CardInfo tamanho={tamanho}>
            <styled.StackIcon colorKey={color}>
                <Icon stroke="#FFFFFF" size={40} />
            </styled.StackIcon>

            <Stack sx={{ alignItems: "center", textAlign: "center", gap: 0.75 }}>
                {tamanho === "lg" ? (
                    <Typography variant="h1"  >


                        {name}
                    </Typography>
                ) : (
                    <Link
                        href={to}
                        color="neutral"
                        fontSize="1.4rem"
                        sx={{
                            justifyContent: "center",
                            color: "#18324C",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            textDecoration: "none",
                            fontFamily: 'Amatica SC, sans-serif',
                            fontWeight: "bold"
                        }}
                        overlay
                    >
                        {name}
                    </Link>
                )}

                <Typography variant="body1">
                    {valor}
                </Typography>

                {acrescimo ? (
                    <Typography variant="h2">
                        {acrescimo}
                    </Typography>
                ) : null}
            </Stack>
        </styled.CardInfo>
    )
}
