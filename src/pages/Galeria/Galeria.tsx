import { faker } from "@faker-js/faker"
import { Box, Typography } from "@mui/material"
import type { GalleryItem } from "./Galeria.types"

faker.seed(28)

const layouts = [
  { colSpan: 1, rowSpan: 2 },
  { colSpan: 1, rowSpan: 2 },
  { colSpan: 1, rowSpan: 2 },
  { colSpan: 2, rowSpan: 2 },
  { colSpan: 1, rowSpan: 2 },
  { colSpan: 1, rowSpan: 2 },
  { colSpan: 2, rowSpan: 2 },
  { colSpan: 1, rowSpan: 2 },
  { colSpan: 1, rowSpan: 2 },
  { colSpan: 1, rowSpan: 2 },
  { colSpan: 1, rowSpan: 2 },
  { colSpan: 1, rowSpan: 2 },
  { colSpan: 1, rowSpan: 2 },



]

const captions = [
  "Aulas ao amanhecer",
  "Treino em mar calmo",
  "Encontro da comunidade",
  "Pôr do sol na praia",
  "Dia de ondas perfeitas",
  "Surf em família",
  "Explorando a costa",
  "Aventura nas ondas",
]

const createImageSize = (rowSpan: number, colSpan: number) => {
  const width = colSpan === 2 ? 980 : 460
  const height = rowSpan >= 4 ? 820 : rowSpan === 3 ? 620 : 380
  return { width, height }
}

const surfImages = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
  "https://images.unsplash.com/photo-1502680390469-be75c86b636f",
  "https://images.unsplash.com/photo-1473116763249-2faaef81ccda",
  "https://images.unsplash.com/photo-1519046904884-53103b34b206",
  "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
  "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
  "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86",
]

const galleryItems: GalleryItem[] = layouts.map((layout, index) => {
  const location = `${faker.location.city()}, ${faker.location.state({ abbreviated: true })}`
  const description = captions[index] ?? captions[0]
  const { width, height } = createImageSize(layout.rowSpan, layout.colSpan)

  return {
    id: faker.string.uuid(),
    src: `${surfImages[index % surfImages.length]}?w=${width}&h=${height}&fit=crop`,
    location,
    description,
    colSpan: layout.colSpan,
    rowSpan: layout.rowSpan,
  }
})
export const Galeria = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: 1180, mx: "auto" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(0, 1fr))",
            md: "repeat(3, minmax(0, 1fr))",
          },
          gridAutoRows: {
            xs: 190,
            sm: 170,
            md: 180,
          },
          gap: { xs: 2.5, sm: 3 },
        }}
      >
        {galleryItems.map((item) => (
          <Box
            key={item.id}
            component="article"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              gridColumnEnd: {
                xs: "span 1",
                sm: "span 1",
                md: `span ${item.colSpan}`,
              },
              gridRowEnd: {
                xs: "span 2",
                sm: `span ${Math.max(2, item.rowSpan - 1)}`,
                md: `span ${item.rowSpan}`,
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 2,
                backgroundColor: "rgba(0, 0, 0, 0.08)",
                flex: 1,
                minHeight: 0,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.12)",
                transition: "transform 0.4s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                }
              }}
            >
              <Box
                component="img"
                src={item.src}
                alt={`Foto de ${item.location}`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",

                }}
              />
            </Box>

            <Box sx={{ px: 0.5 }}>
              <Typography variant="caption" color="text.secondary" component="p">
                {item.location}
              </Typography>
              <Typography variant="body2" component="p">
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
