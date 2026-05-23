import { Box, Divider, Stack, Typography } from "@mui/material"

export type SeaConditionsProps = {
    temperatura?: string
    alturaOndas?: string
    periodo?: string
    direcao?: string
}

const ITEM_LABEL_SX = {
    fontSize: 14,
    opacity: 0.7,
}

const ITEM_VALUE_SX = {
    fontSize: 14,
    fontWeight: 600,
}

export const SeaConditions = ({
    temperatura = "24°",
    alturaOndas = "1.2m",
    periodo = "12s",
    direcao = "SE",
}: SeaConditionsProps) => {
    return (
        <Box
            sx={{
                p: 3,
                borderRadius: 4,
                backgroundColor: "#FFF8EE",
                border: "1px solid rgba(0,0,0,0.06)",
                backdropFilter: "blur(12px)",
            }}
        >
            <Typography
                sx={{
                    fontSize: 18,
                    fontWeight: 700,
                    mb: 2,
                }}
            >
                Condições do mar
            </Typography>

            <Stack divider={<Divider flexItem />} spacing={1.5}>
                <Stack
                    direction="row"
                    sx={{
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography sx={ITEM_LABEL_SX}>
                        Temperatura da água
                    </Typography>

                    <Typography sx={ITEM_VALUE_SX}>
                        {temperatura}
                    </Typography>
                </Stack>

                <Stack
                    direction="row"
                    sx={{
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography sx={ITEM_LABEL_SX}>
                        Altura das ondas
                    </Typography>

                    <Typography sx={ITEM_VALUE_SX}>
                        {alturaOndas}
                    </Typography>
                </Stack>

                <Stack
                    direction="row"
                    sx={{
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography sx={ITEM_LABEL_SX}>
                        Período
                    </Typography>

                    <Typography sx={ITEM_VALUE_SX}>
                        {periodo}
                    </Typography>
                </Stack>

                <Stack
                    direction="row"
                    sx={{
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography sx={ITEM_LABEL_SX}>
                        Direção
                    </Typography>

                    <Typography sx={ITEM_VALUE_SX}>
                        {direcao}
                    </Typography>
                </Stack>
            </Stack>
        </Box>
    )
}