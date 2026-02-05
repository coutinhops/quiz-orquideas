
# Plano: Otimizar layout do resultado para exibir botão sem scroll no mobile

## Objetivo

Reorganizar e compactar o layout da tela de resultado do quiz para que o botão "Quero entender como funciona" apareça visível imediatamente, sem necessidade de rolar a tela em dispositivos móveis.

---

## Estratégia

Reduzir espaçamentos, tamanhos e reorganizar elementos para economizar espaço vertical no mobile, mantendo o design atrativo.

---

## Mudanças Propostas

### Arquivo: `src/components/quiz/QuizResult.tsx`

| Elemento | Antes | Depois |
|----------|-------|--------|
| Ícone de sucesso | `w-16 h-16`, `mb-4` | `w-12 h-12 md:w-16 md:h-16`, `mb-2 md:mb-4` |
| Título | `text-2xl md:text-3xl`, `mb-2` | `text-lg md:text-2xl`, `mb-1 md:mb-2` |
| Subtítulo | `text-base`, `mb-6` | `text-sm md:text-base`, `mb-3 md:mb-6` |
| Card da oferta | `p-5`, `mb-6` | `p-3 md:p-5`, `mb-3 md:mb-6` |
| Trust indicators | Grid 2x2, `gap-3`, `p-3`, `mb-6` | `hidden md:grid` (ocultar no mobile) |
| Nota explicativa | `p-4`, `mb-5` | `p-2 md:p-4`, `mb-3 md:mb-5`, texto menor no mobile |
| Botão CTA | `size="xl"` | `size="lg" md:size="xl"` |

### Decisão de Design

**Ocultar os 4 indicadores de confiança no mobile** - São informações secundárias que ocupam muito espaço vertical. O usuário verá esses detalhes na landing page após clicar no botão. No desktop, continuam visíveis.

---

## Resultado Esperado

O botão CTA ficará visível imediatamente ao carregar a tela de resultado no mobile, sem necessidade de scroll. O layout permanece completo e atrativo no desktop.
