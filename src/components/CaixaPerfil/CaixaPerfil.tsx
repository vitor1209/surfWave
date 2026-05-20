
import { Paper, Avatar, Box, Typography, Stack, IconButton } from '@mui/material';
import type { CaixaPerfilProp } from './CaixaPerfil.types';
import { CircleUser, LogOut } from 'lucide-react';
import { useLogout } from '../../pages/dadosPessoais/Perfil/hooks/logout.hook';

export const CaixaPerfil = (
  { nome, perfil }: CaixaPerfilProp

) => {

const { handleLogout } = useLogout()

  return (
    // a caixa branca com sombra
    <Paper
      sx={{
        p: 4,
        mt: 3,
        mb: 5,
        ml: 5,
        mr: 5,
        borderRadius: '8px',
      }}
    >

      <Stack sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>

        <Stack sx={{ display: "flex", flexDirection: "row", gap: 2, alignItems: "center" }}>

          {/* O Avatar/Ícone de Perfil */}
          <Avatar sx={{ bgcolor: 'rgba(56, 142, 60, 0.1)', color: 'success.main', width: 48, height: 48 }}>
            <CircleUser size={20} />
          </Avatar>


          <Box>
            <Typography variant="h6" component="div" sx={{ fontWeight: 600, lineHeight: 1.2, fontFamily: '"Anybody", "Inter", sans-serif' }}>
              {nome}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: "start" }}>
              {perfil}
            </Typography>
          </Box>
        </Stack>


        <Stack sx={{ display: "flex", flexDirection: "row", gap: 0.5, alignItems: "center" }}>
          <IconButton onClick={handleLogout}>
            <LogOut size={18} />
          </IconButton>

        </Stack>
      </Stack>
    </Paper>
  );
};

