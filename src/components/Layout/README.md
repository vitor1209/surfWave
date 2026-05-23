# Container Layout Component

Componente global de layout responsável por envolver todas as páginas do sistema.

## Características

- 🌊 **Animações de ondas** usando Framer Motion
- 📱 **Responsivo** para desktop e mobile
- 🎨 **Design moderno** com MUI v7
- ⚡ **Performance otimizada** com CSS-in-JS
- 🎯 **Fácil de usar** com props simples

## Estrutura

```
src/components/Layout/
├── Container.tsx          # Componente principal
├── Container.types.ts     # Interfaces TypeScript
├── Container.styles.ts    # Estilos com MUI sx
├── Container.hook.ts      # Hooks customizados
└── index.ts              # Exportações
```

## Props

| Prop       | Tipo        | Obrigatório | Descrição                          |
|-----------|-------------|-------------|-----------------------------------|
| `title`   | `string`    | ✅         | Título do header                  |
| `subtitle`| `string`    | ✅         | Subtítulo do header               |
| `children`| `ReactNode` | ✅         | Conteúdo da página                |

## Uso

```tsx
import { Container } from "@/components/Layout"

export const MyPage = () => {
  return (
    <Container title="Título da Página" subtitle="Subtítulo">
      <Box>
        <Typography>Conteúdo da página aqui</Typography>
      </Box>
    </Container>
  )
}
```

## Design

O componente é inspirado no design do SurfWave com:

- **Header azul** com gradiente oceânico
- **Animações de ondas** contínuas e suaves
- **Área de conteúdo em tom areia/praia**
- **Transições fluidas** entre seções

## Animações

### Ondas

Três camadas de ondas animadas simultaneamente:
- Wave 1: 15s de duração
- Wave 2: 15s de duração (defasada 7.5s)
- Wave 3: 20s de duração (defasada 3s)

### Títulos

Fade-in com movimento vertical suave:
- Título: 0.6s de duração
- Subtítulo: 0.6s + 0.2s de delay

### Conteúdo

Stagger animation para conteúdo com delay de 0.3s.

## Performance

- ✅ Sem bibliotecas CSS externas
- ✅ SVG nativo para ondas (não usa imagens)
- ✅ GPU-accelerated animations com Framer Motion
- ✅ Cleanup automático de estilos globais

## Compatibilidade

- React 19+
- TypeScript
- MUI v7+
- Framer Motion 11+
