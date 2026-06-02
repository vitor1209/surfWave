import { Box, IconButton, Modal, Typography } from "@mui/material"
import { Clock, Mail, MapPin, Phone, X } from "lucide-react"
import type { ContactInfo } from "../FloatingContacts.types"
import {
  infoIconSx,
  mapBoxSx,
  mapsButtonSx,
  modalCardSx,
  modalOverlaySx,
} from "../FloatingContacts.styles"

interface LocationModalProps {
  open: boolean
  onClose: () => void
  info: ContactInfo
}

const infoRows = (info: ContactInfo) => [
  { icon: <Clock size={20} />, label: "Horário", value: info.hours },
  { icon: <Mail size={20} />, label: "Email", value: info.email },
  { icon: <Phone size={20} />, label: "Telefone", value: info.phone },
]

export const LocationModal = ({ open, onClose, info }: LocationModalProps) => (
  <Modal open={open} onClose={onClose}>
    <Box onClick={onClose} sx={modalOverlaySx}>
      <Box onClick={(e) => e.stopPropagation()} sx={modalCardSx}>

        {/* Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: '"Raleway", sans-serif' }}>
              Nossa localização
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {info.address} – {info.city}
            </Typography>
          </Box>
          <IconButton onClick={onClose} size="small">
            <X size={18} />
          </IconButton>
        </Box>

        {/* Mapa */}
        <Box sx={mapBoxSx}>
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={info.mapsEmbedUrl}
          />
        </Box>

        {/* Botão Maps */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <Box
            component="a"
            href={info.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={mapsButtonSx}
          >
            Abrir no Google Maps ↗
          </Box>
        </Box>

        {/* Infos */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
            borderTop: "1px solid",
            borderColor: "divider",
            pt: 2,
          }}
        >
          {infoRows(info).map(({ icon, label, value }) => (
            <Box key={label} sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
              <Box sx={infoIconSx}>{icon}</Box>
              <Box>
                <Typography variant="caption" color="text.secondary" display="block">
                  {label}
                </Typography>
                <Typography variant="caption" sx={{ fontWeight: 600, fontSize: "0.7rem" }}>
                  {value}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

      </Box>
    </Box>
  </Modal>
)