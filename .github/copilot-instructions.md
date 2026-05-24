````md
# Project Instructions

## Princípios Gerais

- Sempre seguir o design system existente, hierarquia visual e consistência visual.
- Manter a UI limpa, acessível e amigável ao usuário.
- Todo texto voltado ao usuário deve estar em **Português Brasileiro (pt-BR)**.
- Entregar soluções robustas, seguras, manuteníveis e prontas para produção.
- Usar apenas bibliotecas modernas, estáveis e amplamente adotadas.
- Nunca adivinhar implementações ou comportamentos.
- Responder de forma objetiva e concisa.
- Não usar Lodash ou bibliotecas derivadas.
- Preferir APIs nativas do JavaScript/TypeScript.
- Priorizar simplicidade e legibilidade ao invés de abstrações excessivas.
- Evitar overengineering.

---

# Stack Técnica

## Frontend

- React 19
- TypeScript
- Vite
- MUI v7
- React Hook Form
- Zod v4
- TanStack Query v5
- Axios
- Jotai
- date-fns
- Framer Motion
- Faker.js para mocks

---

# Convenções de Código

## Regras Gerais

- Não usar `useCallback`, `useMemo` ou `memo`.
- Não usar `forwardRef`.
- Não usar comentários desnecessários.
- Corrigir erros de TypeScript e lint antes de finalizar.
- Sempre preferir funções pequenas e reutilizáveis.
- Evitar arquivos gigantes.

---

# Estrutura de Pastas

```plaintext
src/
├── assets/
├── components/
├── hooks/
├── lib/
├── pages/
├── routes/
├── services/
├── store/
├── types/
├── utils/
└── main.tsx
````

---

# Estrutura de Página

```plaintext
NomePagina/
├── NomePagina.tsx
├── NomePagina.hook.ts
├── NomePagina.types.ts
├── NomePagina.schema.ts
├── NomePagina.utils.ts
├── components/
├── modals/
└── drawers/
```

---

# Responsabilidade dos Arquivos

| Arquivo      | Responsabilidade                   |
| ------------ | ---------------------------------- |
| `.tsx`       | Estrutura visual                   |
| `.hook.ts`   | Estados, queries e handlers        |
| `.types.ts`  | Types/interfaces/enums             |
| `.schema.ts` | Validação Zod                      |
| `.utils.ts`  | Helpers, constantes e formatadores |

---

# Nomenclatura

## Arquivos

| Tipo        | Convenção           | Exemplo           |
| ----------- | ------------------- | ----------------- |
| Componentes | PascalCase          | `UserCard.tsx`    |
| Hooks       | camelCase com `use` | `useLogin.ts`     |
| Types       | camelCase           | `login.types.ts`  |
| Utils       | camelCase           | `login.utils.ts`  |
| Schemas     | camelCase           | `login.schema.ts` |

## Código

| Tipo             | Convenção            |
| ---------------- | -------------------- |
| Componentes      | PascalCase           |
| Hooks            | camelCase com `use`  |
| Funções          | camelCase            |
| Constantes       | SCREAMING_SNAKE_CASE |
| Enums            | PascalCase           |
| Types/Interfaces | PascalCase           |

---

# React Hook Form

* Sempre usar React Hook Form para formulários.
* Não usar `useState` para controlar inputs de formulário.
* Utilizar `zodResolver` com Zod.
* Campos devem ser desabilitados durante `isPending`.

## Exemplo

```tsx
const {
    control,
    handleSubmit,
    formState: { errors },
} = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: INITIAL_VALUES,
})
```

---

# Zod

* Usar mensagens em português.
* Preferir `.trim().nonempty()` para strings obrigatórias.
* Usar `refine` para validações complexas.

## Exemplo

```ts
export const loginSchema = z.object({
    email: z.string().trim().email("E-mail inválido"),
    senha: z.string().trim().nonempty("Senha obrigatória"),
})
```

---

# TanStack Query

## Queries

* Sempre usar `queryKey`.
* Queries dependentes devem usar `enabled`.
* Não fazer fetch diretamente em componentes.

## Mutations

* Não usar `mutationKey`.
* Sempre tratar erro.
* Invalidar queries relacionadas após sucesso.

## Exemplo

```ts
export const useObterUsuarios = () => {
    return useQuery({
        queryKey: ["usuarios"],
        queryFn: async () => {
            const { data } = await api.get("/users")
            return data
        },
    })
}
```

---

# Axios

* Centralizar configuração em `src/lib/axios.ts`.
* Não repetir baseURL.
* Sempre tipar request e response.

---

# Estado Global

* Usar Jotai.
* Evitar estados globais desnecessários.
* Priorizar estado local quando possível.

---

# MUI

* Utilizar MUI como biblioteca base.
* Preferir `sx` para estilos locais.
* Evitar styled components desnecessários.
* Manter consistência visual.

## Componentes Base

```tsx
import { Stack, Box, Typography } from "@mui/material"
```

---

# Estilos

* Evitar CSS inline complexo.
* Evitar valores mágicos repetidos.
* Usar spacing do tema MUI.
* Respeitar responsividade.

---

# Componentes

* Componentes devem possuir responsabilidade única.
* Evitar lógica complexa dentro do JSX.
* Extrair trechos reutilizáveis.

---

# Botões

* Conteúdo sempre via `children`.
* Botões apenas com ícone devem possuir tooltip.

## Exemplo

```tsx
<Button>
    <Plus />
    Adicionar
</Button>
```

---

# Modais

## Estrutura

```plaintext
modals/
└── ConfirmarExclusao/
    ├── ConfirmarExclusao.tsx
    └── ConfirmarExclusao.types.ts
```

---

# Drawers

## Estrutura

```plaintext
drawers/
└── Filtrar/
    ├── Filtrar.tsx
    ├── Filtrar.hook.ts
    ├── Filtrar.types.ts
    └── Filtrar.schema.ts
```

---

# Mocks

* Todas as telas devem possuir mock utilizando Faker.js.
* Mockar responses completas da API.
* Não deixar telas dependentes exclusivamente do backend.

---

# Path Alias

* Usar `@/` para imports internos.

## Correto

```ts
import { Button } from "@/components/Button"
```

## Evitar

```ts
import { Button } from "../../../components/Button"
```

---

# Navegação

* Priorizar UX fluida.
* Sempre tratar loading e erro.
* Evitar navegações quebradas.
* Utilizar View Transitions quando disponível.

---

# Acessibilidade

* Usar HTML semântico.
* Garantir navegação por teclado.
* Adicionar aria-label quando necessário.
* Tooltips obrigatórios para botões sem texto.

---

# Git

## Commits

* Commits em Português Brasileiro.
* Seguir Semantic Commit.

## Exemplos

```plaintext
feat(login): adiciona validação de autenticação

fix(usuario): corrige erro ao carregar perfil

refactor(header): simplifica estrutura do menu
```

---

# Regras Importantes

* Não criar abstrações sem necessidade.
* Não duplicar lógica.
* Não deixar código morto.
* Não adicionar dependências sem justificativa.
* Sempre considerar manutenção futura.
* Priorizar clareza sobre esperteza.

```
```
