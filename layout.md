# Especificação de Layout - LP Convads

**Copy Aprovada:** `copy.md`
**Design Base:** `index.html` (V1)
**Paleta:**
- Primary: `#0bae6e`
- Dark: `#1a1a1a`
- Light: `#f0fff0`
- White: `#ffffff`
**Fontes:**
- Display: `Clash Display` (Semibold/Bold)
- Body: `General Sans` (Regular/Medium)

---

## Seção 1: Header

### Arquétipo e Constraints
- **Arquétipo:** Sticky Header
- **Constraints:** Glassmorphism, Auto-hide on scroll down / Show on scroll up
- **Justificativa:** Mantém a navegação acessível sem poluir o visual.

### Conteudo
- Logo: "Convads."
- Nav: Método, Diferenciais, Resultados
- CTA: "Falar com Especialista"

### Layout
- **Container:** Max-width 1200px, Padding inline 24px.
- **Flexbox:** `justify-content: space-between`, `align-items: center`.
- **Altura:** 80px (reduz para 70px no scroll).
- **Z-Index:** 1000.

### Cores
- **Background:** `rgba(255, 255, 255, 0.8)` com `backdrop-filter: blur(12px)`.
- **Border-bottom:** `1px solid rgba(0, 0, 0, 0.05)`.
- **Text:** `#1a1a1a`. `Hover: #0bae6e`.

### Interatividade
- **Scroll:** Header fixa no topo. Ao rolar para baixo > 200px, header desliza para cima (hide). Ao rolar para cima, header desliza para baixo (show).
- **Hover Nav:** Sublinhado animado da esquerda para a direita (`scaleX`).
- **CTA:** Botão outline sm. Hover: preenchimento verde sólido.

---

## Seção 2: Hero

### Arquétipo e Constraints
- **Arquétipo:** Hero Dominante / Split Assimetrico (Texto Esq / Visual Dir)
- **Constraints:** Floating Elements, Rotating Text (Keywords), Gradient Orbs
- **Justificativa:** Foco na promessa de valor. A animação das palavras-chave atende ao pedido de dinamismo imediato.

### Conteudo
- **Badge:** Especialistas em Tráfego Pago
- **Headline:** Escalamos seu negócio através de [PALAVRA-CHAVE-ANIMADA].
- **Keywords (Loop):** "Leads Qualificados", "ROI Positivo", "Previsibilidade", "Demanda Crescente", "Base Consciente".
- **Subheadline:** Somos uma assessoria de marketing especializada em escalar Profissionais Liberais e Negócios Locais através de estratégias digitais. Já ajudamos +150 empresas a venderem mais.
- **CTA:** Quero Aumentar Minhas Vendas!
- **Trust:** +150 Empresas Impactadas

### Layout
- **Grid:** 1fr (Texto) | 1fr (Visual) em Desktop. Stack vertical em Mobile.
- **Min-Height:** 100vh ou 800px.
- **Alinhamento:** `align-items: center`.

### Cores
- **Background:** `#ffffff` com orbs de luz em `#e6f7ef` e `#e0f2fe`.
- **Highlight:** `#0bae6e` (nas keywords animadas).

### Animacoes e Variações (Solicitação do Usuário)
- **Keywords Animation:**
    - O trecho "estratégias eficientes" (da copy original) será substituído dinamicamente pelas keywords solicitadas.
    - **Efeito:** Vertical Slide-up + Fade (estilo "Slot Machine" suave ou Typewriter delete/retype).
    - **Timing:** 2s por palavra, transição de 0.5s.
- **Entrada:**
    - Headline: Fade Up, delay 0.
    - Subhead: Fade Up, delay 100ms.
    - CTA: Fade Up, delay 200ms.
    - **IMPORTANTE:** Loading "Eager". Sem opacity:0 no CSS base (usar classe de animação ou script que não cause CLS).

### Visual (Direita)
- **Composição:** Imagem principal (Hero shot de dashboard ou profissional confiante) com **Glass Cards** flutuando ao redor.
- **Movimento:** "Mouse Parallax" suave na imagem e nos cards. Movem-se levemente contra o movimento do mouse.

---

## Seção 3: Método 4 Fases (Solicitação: Carrossel)

### Arquétipo e Constraints
- **Arquétipo:** Carousel Horizontal (Snap Scroll)
- **Constraints:** Card Stack visual, Progress Bar interativa
- **Justificativa:** O usuário pediu um carrossel para as fases. Isso guia a narrativa de forma sequencial (fase 1 leva à 2, etc).

### Conteudo
- **Título:** Como impulsionamos o crescimento do seu negócio
- **Subtítulo:** Nós já ajudamos +100 empresas com vendas na internet através de um método validado.
- **Cards (4):**
  1. **Posicionamento:** Mantemos seus clientes engajados...
  2. **Atração:** Definimos exatamente quem é seu público-alvo...
  3. **Aquisição:** Nosso foco é transformar interesse...
  4. **Escala:** Maximizamos o valor de cada cliente...

### Layout
- **Desktop:** Layout "Track" horizontal. Os cards ficam visíveis parcialmente.
    - Container overflow-x: scroll.
    - Scroll-snap-type: x mandatory.
- **Mobile:** Carrossel clássico com "dots" de navegação.

### Estilo dos Cards
- **Tamanho:** Largura fixa (ex: 350px ou 30vw). Altura igual.
- **Design:** Fundo Branco, Borda sutil `#0bae6e` (ou cinza claro com hover verde).
- **Numeração:** Gigante, fonte `Clash Display`, opacidade 0.1, no fundo do card.
- **Icone:** Icone minimalista colorido no topo.

### Interatividade
- **Hover:** O card sobe (`translateY(-10px)`) e a sombra aumenta. A borda fica verde.
- **Drag:** Cursor "Grab" ao passar o mouse sobre a área de cards.

---

## Seção 4: O Funnel de Vendas (Solicitação: Animação Específica)

### Arquétipo e Constraints
- **Arquétipo:** Visual Storytelling / Scroll Triggered Animation
- **Constraints:** SVG Paths animados, Particle Flow, Dark Mode Section
- **Justificativa:** O usuário pediu explicitamente uma animação demonstrando o fluxo: Leads -> Comercial -> Vendas (Dinheiro). Uma seção escura dará destaque a essa animação luminosa.

### Conteudo (Conceitual Visual)
- **Topo:** "Leads Qualificados" (Ícones de usuários/avatar entrando no funil).
- **Meio:** "Comercial" (Ícone de time/headset filtrando/conversando).
- **Fundo:** "Vendas" (Ícones de cifrão/dinheiro saindo).
- **Texto de Apoio:** "Do clique ao fechamento: previsibilidade total."

### Layout
- **Fundo:** `#1a1a1a` (Dark mode para contraste).
- **Estrutura:** Coluna centralizada.
- **SVG Flow:** Um caminho curvo (Bézier) conectando os 3 estágios.

### Animacoes (Complexa)
1.  **Partículas (Leads):** Círculos pequenos brancos/verdes descem pelo topo.
2.  **Processamento (Comercial):** Ao passar pelo meio, as partículas mudam de cor (ex: branco para verde neon) e diminuem em quantidade (filtro).
3.  **Conversão (Dinheiro):** Ao chegar no final, as partículas viram ícones de `$` que se acumulam ou "saltam" (bounce).
4.  **Trigger:** A animação acontece enquanto o usuário faz scroll (`scroll-timeline` ou `IntersectionObserver` threshold).

---

## Seção 5: Diferenciais

### Arquétipo e Constraints
- **Arquétipo:** Bento Box / Grid Assimétrico
- **Constraints:** Icons 3D ou Ilustrativos, Hover Reveal
- **Justificativa:** Quebrar o ritmo do carrossel e da animação vertical. Mostrar solidez.

### Conteudo
- **Título:** Por que escolher a Agência Convads?
- **Item 1 (Grande):** Análise Precisa - Utilizamos dados para ajustar e otimizar anúncios...
- **Item 2 (Médio):** Estratégia Personalizada - Cada empresa é única...
- **Item 3 (Médio):** Suporte Completo - Estamos ao seu lado...

### Layout
- **Grid:**
    - Desktop: Grid 2 colunas. Item 1 ocupa 1 coluna inteira (altura dupla). Item 2 e 3 empilhados na segunda coluna.
    - Mobile: Stack vertical.

### Interatividade
- **Hover:** O fundo do card muda de Branco para Verde Bem Claro (`#f0fff0`). O ícone escala (`scale(1.1)`).

---

## Seção 6: Soluções e Resultados

### Arquétipo e Constraints
- **Arquétipo:** Split com Lista Interativa + Big Numbers
- **Constraints:** Checkmarks animados
- **Justificativa:** Combinar "O que fazemos" com "O que geramos".

### Conteudo
- **Col Esq (Soluções):** "Como podemos te ajudar a vender mais" + Lista (Ads, GMN, CRM, Posicionamento).
- **Col Dir (Resultados):** "Resultados Comprovados" + Texto + CTA.

### Layout
- **Lista:** Cada item tem um checkmark verde.
- **Highlight:** Fundo cinza muito claro `#f8f9fa`.

---

## Seção 7: CTA Final + Pop-up (Solicitação: WhatsApp Button)

### Arquétipo e Constraints
- **Arquétipo:** Modal / Overlay
- **Constraints:** Focus Trap, Multi-step Form (opcional visualmente, mas funcionalmente simples)
- **Justificativa:** O usuário pediu especificamente: Botão -> Pop-up -> Captura de Dados.

### Elementos na Página
- **Texto Final:** "Pronto para escalar?"
- **Botão Trigger:** "Quero Aumentar Minhas Vendas Agora" (Botão Grande, Pulsante).
- **Fab Flutuante (Opcional):** Ícone do WhatsApp fixo no canto inferior direito que TAMBÉM abre o modal.

### O Modal (Pop-up)
- **Background:** Overlay escuro (`rgba(0,0,0,0.8)`).
- **Container:** Card branco centralizado, border-radius 24px.
- **Header Modal:** "Estamos quase lá!" + Botão Fechar (X).
- **Formulário Interno:**
  1.  **Nome** (Input text)
  2.  **WhatsApp** (Input tel com máscara)
  3.  **Instagram** (Input text @)
  4.  **Faturamento Atual** (Select: <10k, 10k-50k, 50k+)
  5.  **Urgência** (Radio/Select: Imediata, Próximo mês, Apenas pesquisando)
  6.  **Botão Enviar:** "Receber Consultoria Gratuita"

### Fluxo de Conversão
1.  Usuário clica no Botão.
2.  Modal abre com animação `Scale Up` + `Fade In`.
3.  Usuário preenche.
4.  Ao enviar:
    - Redireciona para página de Obrigado (via Netlify Forms).
    - OU envia para API do WhatsApp (link `wa.me`) com texto pré-preenchido (depende da preferência de implementação, mas Netlify Forms é mais seguro para capturar o lead ANTES de enviar pro 'zap'). *Decisão: Capturar no Netlify Forms primeiro para garantir o lead, depois redirecionar.*

---

## Rodapé
- Simples. Copyright, Links sociais. Logo monocromática.

---
