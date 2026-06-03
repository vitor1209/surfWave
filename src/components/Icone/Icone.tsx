import { useState } from "react"
import { Box, Modal, Typography, IconButton } from "@mui/material"
import { X, MapPin } from "lucide-react"
import { FaInstagram, FaWhatsapp } from "react-icons/fa"

import {
  floatingContainer,
  floatingButton,
  modalBackdrop,
  modalContent,
} from "./Icone.styles"

import { CONTACT_INFO } from "./Icone.constants"

export default function Flutuanteicon() {

  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Box sx={floatingContainer}>
        <Box
          onClick={() =>
            window.open("https://wa.me/SEU_NUMERO", "_blank")
          }
          sx={floatingButton("#25D366")}
        >
          <FaWhatsapp size={22} color="white" />
        </Box>

        <Box
          onClick={() =>
            window.open(
              "https://instagram.com/SEU_PERFIL",
              "_blank"
            )
          }
          sx={floatingButton(
            "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)"
          )}
        >
          <FaInstagram size={22} color="white" />
        </Box>

        <Box
          onClick={() => setModalOpen(true)}
          sx={floatingButton("#6ea2f7")}
        >
          <MapPin size={22} color="white" />
        </Box>
      </Box>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <Box
          onClick={() => setModalOpen(false)}
          sx={modalBackdrop}
        >
          <Box
            onClick={(e) => e.stopPropagation()}
            sx={modalContent}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                mb: 2,
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    fontFamily: '"Raleway", sans-serif',
                  }}
                >
                  Nossa localização
                </Typography>

                <Typography
                  variant="caption"
                  color="text.secondary"
                >
                  Praia do Surfista, 123 – Florianópolis, SC
                </Typography>
              </Box>

              <IconButton
                onClick={() => setModalOpen(false)}
                size="small"
              >
                <X size={18} />
              </IconButton>
            </Box>

            {/* restante do modal */}
            <Box
              sx={{
                width: "100%",
                height: 300,
                borderRadius: 3,
                overflow: "hidden",
                mb: 3,
              }}
            >
              <iframe
                title="Google Maps"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps?q=-27.5949,-48.5482&z=15&output=embed"
              />
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 2,

                alignItems: "start",

              }}
            >
              {CONTACT_INFO.map(
                ({ icon, label, value }) => (
                  <Box
                    key={label}
                    sx={{
                      display: "flex",
                      gap: 1,

                      alignItems: "flex-start"
                    }}
                  >
                    {icon}

                    <Box>
                      <Typography variant="caption">
                        {label}
                      </Typography>

                      <Typography variant="caption">
                        {value}
                      </Typography>
                    </Box>
                  </Box>
                )
              )}
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  )
}