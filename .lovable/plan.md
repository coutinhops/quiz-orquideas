
# Plano: Corrigir visualização do botão CTA no resultado do quiz mobile

## Problema Identificado

A página de resultado do quiz não permite rolagem em dispositivos móveis. O botão "Quero entender como funciona" e outros elementos (indicadores de confiança, nota explicativa) ficam cortados e invisíveis.

**Causa raiz:** O layout usa altura fixa (`h-[100dvh]`) com `overflow-hidden`, impedindo o scroll do conteúdo quando ele excede a altura da tela.

---

## Solução Proposta

Há duas abordagens possíveis:

### Opção A: Permitir Scroll na Página de Resultado (Recomendada)

Modificar o layout para permitir scroll apenas na tela de resultado, mantendo o quiz fixo durante as perguntas.

**Mudanças em `src/pages/Quiz.tsx`:**

1. Remover `overflow-hidden` do container principal quando exibir resultado
2. Adicionar classes condicionais para permitir scroll do conteúdo completo
3. Garantir que o footer fique visível e o conteúdo seja scrollável

### Opção B: Botão Flutuante Fixo no Mobile

Adicionar um botão CTA fixo no rodapé da tela (similar ao da landing page) que aparece apenas na tela de resultado.

---

## Implementação Detalhada (Opção A)

### Arquivo: `src/pages/Quiz.tsx`

```text
Mudanças:
- Linha 106: Usar classe dinâmica baseada em `showResult`
- Quando showResult=true: permitir scroll vertical
- Quando showResult=false: manter layout fixo para o quiz
```

**Lógica:**
- Durante o quiz (perguntas): altura fixa sem scroll
- Na tela de resultado: altura mínima com scroll permitido

### Arquivo: `src/components/quiz/QuizResult.tsx`

```text
Mudanças:
- Ajustar padding bottom para garantir espaço adequado
- Remover o pb-24 desnecessário já que o scroll funcionará
```

---

## Resultado Esperado

Após a implementação:

1. O usuário completa o quiz normalmente (layout fixo)
2. Ao ver o resultado, pode rolar para baixo e ver:
   - Os 4 indicadores de confiança
   - A nota explicativa
   - O botão "Quero entender como funciona"
3. O botão será clicável e redirecionará para `/landing`

---

## Arquivos a Modificar

| Arquivo | Ação |
|---------|------|
| `src/pages/Quiz.tsx` | Ajustar classes CSS para permitir scroll no resultado |
| `src/components/quiz/QuizResult.tsx` | Ajustar padding e garantir visibilidade |
