import { Stack, Typography } from "@mui/material";
import * as styled from "./Footer.styled";
// import { LogoCultiva } from "../../assets/index";

export const Footer = () => {
    return (
        <styled.ContainerFooter >
            <Stack sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: { xs: "center", sm: "stretch" }, textAlign: { xs: "center", sm: "left" }, justifyContent: "space-around", gap: 4 }}>
                <Stack sx={{ alignItems: { xs: "center", sm: "stretch" } }}>
                    {/* <img src={LogoCultiva} alt="Logo Cultiva" width={150} /> */}
                    <Typography variant="body2" color="text.secondary" >
                        Conectando quem planta com quem consome.
                    </Typography>
                </Stack>

                <Stack>
                    <Typography variant="subtitle1">Contato</Typography>
                    <Typography variant="body2" color="text.secondary" >Email cultivahortas@gmail.com</Typography>
                    <Typography variant="body2" color="text.secondary" >Telefone: (11) 95383-7190</Typography>
                </Stack>

                <Stack >
                    <Typography variant="subtitle1">Links Úteis</Typography>
                    <Typography variant="body2" color="text.secondary" >Política de Privacidade</Typography>
                    <Typography variant="body2" color="text.secondary" >Termos de Uso</Typography>
                    <Typography variant="body2" color="text.secondary" >Ajuda</Typography>
                </Stack>
            </Stack>

            <hr style={{ width: "100%", margin: '1.5% 0', border: "1px solid #dcdcdc" }} />

            <Stack sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography variant="body2" sx={{ textAlign: "center" }}>
                    Projeto desenvolvido para conectar produtores e consumidores locais
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    © 2025 Cultiva+. Todos os direitos reservados.
                </Typography>
            </Stack>
        </styled.ContainerFooter >
    );
};
