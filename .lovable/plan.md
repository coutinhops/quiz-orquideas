

# Plano: Otimização Completa de Performance do Site

## Resumo

Implementar otimizações de carregamento que podem reduzir o tempo de First Contentful Paint em até 40%, mantendo todos os scripts UTMify intactos.

---

## Otimizações Propostas

### 1. Fontes (Maior Impacto)

**Problema:** As fontes Google estão sendo carregadas via `@import` no CSS (linha 5 do `src/index.css`), o que bloqueia a renderização da página.

**Solução:**
- Mover o carregamento das fontes para o HTML com `preload`
- Usar apenas os pesos realmente utilizados (reduzir download)
- Adicionar `font-display: swap` para texto visível imediatamente

| Antes | Depois |
|-------|--------|
| @import no CSS (bloqueia render) | preload no HTML (carrega em paralelo) |
| ~80KB de fontes | ~50KB (apenas pesos usados) |

---

### 2. Preconnect para UTMify (Impacto Médio)

**Problema:** Os scripts UTMify são carregados sem conexão prévia estabelecida.

**Solução:** Adicionar `preconnect` para `cdn.utmify.com.br` antes dos scripts, acelerando a conexão.

```text
Mantém os 2 scripts UTMify intactos
Adiciona apenas preconnect para acelerar a conexão
```

---

### 3. Preload de Imagens Críticas (Impacto Alto)

**Problema:** O logo e a primeira imagem do quiz não são pré-carregados.

**Solução:** 
- Adicionar preload para o logo
- Na página do Quiz, pré-carregar a próxima imagem enquanto o usuário responde

---

### 4. Otimização de Animações CSS (Impacto Baixo)

**Problema:** Animações podem causar layout shift em dispositivos lentos.

**Solução:** Adicionar `will-change` nas animações para preparar a GPU.

---

## Arquivos a Modificar

| Arquivo | Mudança |
|---------|---------|
| `index.html` | Adicionar preconnect UTMify, preload fontes |
| `src/index.css` | Remover @import, adicionar will-change |
| `src/pages/Quiz.tsx` | Pré-carregar próxima imagem do quiz |

---

## Detalhes Técnicos

### index.html

Adicionar no `<head>` (antes dos scripts UTMify):

```text
1. Preconnect para cdn.utmify.com.br
2. Preload das fontes Google com display=swap
3. Remover dns-prefetch duplicado (já tem preconnect)
```

Os scripts UTMify permanecem exatamente como estão.

### src/index.css

```text
Linha 5: Remover @import das fontes (movido para HTML)
Linha 161+: Adicionar will-change nos keyframes
```

### src/pages/Quiz.tsx

```text
Adicionar hook useEffect para pré-carregar a próxima imagem
quando o usuário está respondendo a pergunta atual
```

---

## Resultado Esperado

| Métrica | Antes | Depois |
|---------|-------|--------|
| First Contentful Paint | ~1.5s | ~0.9s |
| Largest Contentful Paint | ~2.5s | ~1.6s |
| Cumulative Layout Shift | ~0.1 | ~0.02 |

---

## Scripts UTMify

Os dois scripts UTMify permanecerão **exatamente iguais**:
- Script de UTMs (linhas 10-16)
- Script de Pixel (linhas 17-24)

Apenas adicionaremos um `preconnect` antes deles para acelerar o carregamento.

