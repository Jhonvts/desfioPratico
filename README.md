# Desafio Pior UX

Projeto desenvolvido para a atividade de criação da pior interface
de usuário possível.

## Sobre o Projeto

O objetivo deste projeto é criar uma interface propositalmente ruim,
confusa e irritante, mas que continue sendo funcional.

O usuário precisa passar por três etapas até chegar à mensagem final:

> "Parabéns, você chegou ao final da pior experiência de usuário."

A proposta é compreender, na prática, por que determinadas boas
práticas de UX e UI são importantes.

---

# Princípios e Heurísticas Violados

## 1. Botões com funções invertidas

Os botões possuem textos que não correspondem às suas funções.

Por exemplo:

- "AVANÇAR" funciona como cancelar.
- "Cancelar" funciona como avançar.

### Heurística violada

**Consistência e padrões**

O usuário espera que elementos semelhantes tenham comportamentos
previsíveis.

### Como deveria ser

Os botões deveriam utilizar textos claros:

- Voltar
- Avançar
- Cancelar
- Finalizar

---

## 2. Baixo contraste

O projeto utiliza propositalmente textos em cinza claro sobre fundos
claros.

### Princípio violado

**Acessibilidade e contraste visual.**

Interfaces reais devem possuir contraste suficiente para facilitar
a leitura.

### Como deveria ser

Utilizar cores com contraste adequado entre texto e fundo, seguindo
as recomendações das WCAG.

---

## 3. Mensagens de erro confusas

Algumas mensagens não explicam claramente o problema e algumas
contradizem a situação apresentada.

Exemplo:

> "Tudo certo! Seu e-mail parece completamente errado."

### Heurística violada

**Visibilidade do status do sistema.**

O sistema deve informar claramente o que aconteceu e como o usuário
pode corrigir o problema.

### Como deveria ser

Uma mensagem adequada seria:

> "Digite um endereço de e-mail válido."

---

## 4. Validação contraditória

A interface apresenta regras confusas para a criação da senha.

### Problema

O usuário recebe uma instrução difícil de interpretar.

### Como deveria ser

A interface deveria informar claramente:

> "A senha deve possuir entre 8 e 20 caracteres."

---

## 5. Campos sem orientação adequada

Alguns campos possuem instruções pouco claras ou desnecessárias.

### Heurística violada

**Correspondência entre o sistema e o mundo real.**

As informações devem utilizar uma linguagem que faça sentido para
o usuário.

---

## 6. Elementos visualmente escondidos

Os elementos possuem pouco contraste e podem passar despercebidos.

### Problema

O usuário pode não identificar facilmente os controles disponíveis.

### Como deveria ser

Os elementos importantes deveriam possuir:

- contraste adequado;
- tamanho apropriado;
- hierarquia visual;
- posicionamento previsível.

---

# Proposta de Correção

Uma versão profissional da interface deveria:

- Utilizar botões com funções claras;
- Apresentar mensagens de erro objetivas;
- Utilizar contraste adequado;
- Fornecer instruções claras;
- Manter padrões consistentes;
- Facilitar a navegação;
- Possuir acessibilidade;
- Informar claramente o progresso do usuário.

---

# Como Executar

## Execução local

Baixe ou clone o repositório:

```bash
git clone URL_DO_REPOSITORIO