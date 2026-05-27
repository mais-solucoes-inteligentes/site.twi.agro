# Front-End Specification: T.W.I Agro Website

Esta especificação define o sistema de design visual, componentes de interface, animações e o wireframe estrutural do website da **T.W.I Agro**. O objetivo é garantir um visual sofisticado, premium, responsivo e com alta velocidade de carregamento em qualquer dispositivo.

---

## 1. Sistema de Design (Design System Tokens)

Todo o site será estilizado utilizando variáveis CSS nativas (`:root`), assegurando consistência total e facilidade de manutenção sem dependências externas.

### 1.1. Paleta de Cores (Premium HSL Scale)
```css
:root {
  /* Cores Principais - Agronegócio & Tecnologia */
  --color-obsidian-green: hsl(162, 53%, 7%);    /* #081c15 - Fundo escuro premium */
  --color-forest-green: hsl(154, 42%, 18%);      /* #1b4332 - Identidade base */
  --color-eucalyptus-green: hsl(154, 38%, 34%);  /* #40916c - Tons médios */
  --color-mint-light: hsl(152, 24%, 60%);        /* #74c69d - Elementos de apoio */
  --color-golden-harvest: hsl(43, 100%, 51%);    /* #ffb703 - Destaques, CTAs, Precisão */
  
  /* Tons Neutros */
  --color-alabaster: hsl(0, 0%, 98%);            /* #f8f9fa - Fundo claro suave */
  --color-snow-white: hsl(0, 0%, 100%);          /* #ffffff - Textos claros */
  --color-charcoal-dark: hsl(160, 20%, 15%);     /* #1e2825 - Texto escuro base */
  --color-gray-muted: hsl(0, 0%, 65%);           /* #a5a5a5 - Legendas e textos secundários */

  /* Degradês Premium */
  --gradient-obsidian: linear-gradient(135deg, var(--color-obsidian-green) 0%, hsl(162, 50%, 4%) 100%);
  --gradient-forest: linear-gradient(135deg, var(--color-forest-green) 0%, var(--color-obsidian-green) 100%);
  --gradient-harvest: linear-gradient(90deg, var(--color-golden-harvest) 0%, hsl(36, 100%, 50%) 100%);
}
```

### 1.2. Tipografia & Escala de Fontes
Utilizaremos fontes do Google Fonts importadas diretamente na folha de estilos:
*   **Família Primária (Títulos e Elementos de Destaque):** `Outfit`, sans-serif.
*   **Família Secundária (Textos de Apoio e Parágrafos):** `Inter`, sans-serif.

```css
:root {
  --font-primary: 'Outfit', sans-serif;
  --font-secondary: 'Inter', sans-serif;

  /* Escala de Tamanhos (Responsiva) */
  --text-xs: clamp(0.75rem, 0.7rem + 0.2vw, 0.875rem);
  --text-sm: clamp(0.875rem, 0.8rem + 0.3vw, 1rem);
  --text-base: clamp(1rem, 0.95rem + 0.4vw, 1.125rem);
  --text-md: clamp(1.125rem, 1.05rem + 0.5vw, 1.25rem);
  --text-lg: clamp(1.25rem, 1.15rem + 0.6vw, 1.5rem);
  --text-xl: clamp(1.5rem, 1.3rem + 1vw, 2rem);
  --text-xxl: clamp(2rem, 1.7rem + 1.5vw, 3rem);
  --text-giant: clamp(2.5rem, 2rem + 2.5vw, 4.5rem);
}
```

### 1.3. Efeitos de Vidro Fosco (Glassmorphism Tokens)
Os cartões flutuantes de serviços e formulários usarão o efeito *glassmorphism* premium para transmitir modernidade:
```css
.glass-card {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  border-radius: 16px;
}
```

### 1.4. Espaçamentos & Grid
*   **Grid de Layout:** Espaçamentos entre seções de `clamp(4rem, 3rem + 4vw, 8rem)` para dar respiração visual elegante.
*   **Bordas Suaves:** Cantos arredondados padrão de `8px` para botões e inputs, e `16px`/`24px` para blocos principais e cards.

---

## 2. Componentes de Interface (UI Components)

### 2.1. Header & Menu de Navegação (Navigation Bar)
*   **Comportamento:** Fixo no topo (`position: fixed`), fundo translúcido (`rgba(8, 28, 21, 0.8)` com *backdrop-filter: blur(8px)*) e borda inferior sutil de `rgba(255,255,255,0.05)`.
*   **Interações:** O item ativo do menu e os hovers ganham sublinhados sutis com transição suave a partir do centro e cor dourada.
*   **Versão Mobile:** Menu Hamburguer moderno que desliza de forma fluida a partir do canto direito.

### 2.2. Seção Hero (Hero Showcase)
*   **Fundo:** Imagem aérea imersiva cobrindo `100vh` (com overlay gradiente escuro de `rgba(8,28,21,0.7)` para preencher o contraste com o texto branco).
*   **Texto de Destaque:** Título em fonte *Outfit* extra-bold com efeito gradiente de Dourado Colheita para Branco.
*   **Botoes CTA:**
    *   *Primário (Solicitar Orçamento):* Fundo gradiente Dourado Colheita, texto escuro em peso 600, sombra dourada no hover.
    *   *Secundário (Ver Serviços):* Estilo transparente com borda branca, texto branco, fundo ganha cor sólida no hover.

### 2.3. Painel de Serviços (Services Grid)
*   **Layout:** Grid de 3 colunas que colapsa para 1 coluna no celular.
*   **Cards de Serviços:** Estrutura *glass-card* escura.
*   **Ícones:** Utilização de ícones SVG estilizados com gradiente dourado/verde.
*   **Efeito Hover:** O card eleva-se suavemente (`transform: translateY(-8px)`) e o brilho da borda se acentua de `rgba(255,255,255,0.08)` para `rgba(255,255,255,0.2)`.

### 2.4. Seção de Eficiência & ROI
*   **Painel Comparativo:** Exibição lado a lado de ícones ilustrando a diferença mecânica.
*   **Selo de Conformidade:** Grade contendo selos minimalistas em tons de cinza claro/transparente dos órgãos de aviação e agrícolas (ANAC, DECEA, MAPA). Ao passar o mouse, o selo ganha brilho e sua cor original.

### 2.5. Formulário de Orçamento (Lead Capture Form)
*   **Layout:** Envolto em um grande *glass-card* centralizado.
*   **Inputs:** Fundo escuro translúcido com borda cinza sutil. Ao focar no campo (`:focus`), a borda brilha em Dourado Colheita com transição suave.
*   **Botão de Envio:** Botão robusto Dourado Colheita ocupando largura total, com animação de loading integrada para simulação.

---

## 3. Guia de Micro-Animações (Micro-Animations & Transitions)

O site deve parecer "vivo" e responsivo através de animações sutis de micro-interações:

```css
/* Transição Padrão para Hovers */
.transition-smooth {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* Efeito de Elevação de Card */
.card-hover:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 28, 21, 0.5);
  border-color: rgba(255, 183, 3, 0.3); /* Realce dourado na borda */
}

/* Pulsação do Botão do WhatsApp */
@keyframes whatsapp-pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
}

.whatsapp-button {
  animation: whatsapp-pulse 2s infinite;
}
```

---

## 4. Estrutura de Wireframe (DOM Hierarchy)

O HTML do site seguirá estritamente a hierarquia semântica abaixo:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>T.W.I Agro | Assessoria, Precisão e Pulverização por Drone</title>
</head>
<body class="bg-obsidian">

  <!-- CABEÇALHO FIXO -->
  <header class="header">
    <div class="container header-container">
      <div class="logo">T.W.I <span>Agro</span></div>
      <nav class="nav-menu">
        <a href="#home">Home</a>
        <a href="#sobre">Quem Somos</a>
        <a href="#servicos">Serviços</a>
        <a href="#roi">Eficiência</a>
        <a href="#contato">Orçamento</a>
      </nav>
      <a href="#contato" class="btn btn-secondary nav-cta">Fale Conosco</a>
    </div>
  </header>

  <main>
    <!-- HERO SECTION -->
    <section id="home" class="hero-section">
      <div class="container hero-container">
        <h1>A força da sua terra <br>potencializada por <span>alta tecnologia</span>.</h1>
        <p>Soluções integradas de Assessoria Rural, Agricultura de Precisão e Pulverização Aérea por Drones.</p>
        <div class="hero-actions">
          <a href="#contato" class="btn btn-primary">Solicitar Orçamento</a>
          <a href="#servicos" class="btn btn-outline">Ver Serviços</a>
        </div>
      </div>
    </section>

    <!-- SOBRE NÓS -->
    <section id="sobre" class="section-about">
      ...
    </section>

    <!-- SERVIÇOS -->
    <section id="servicos" class="section-services">
      ...
    </section>

    <!-- ROI / DIFERENCIAIS -->
    <section id="roi" class="section-roi">
      ...
    </section>

    <!-- FORMULÁRIO DE CONTATO -->
    <section id="contato" class="section-contact">
      ...
    </section>
  </main>

  <!-- RODAPÉ -->
  <footer class="footer">
    ...
  </footer>

  <!-- BOTÃO DO WHATSAPP -->
  <a href="..." class="whatsapp-btn">
    <!-- Ícone SVG -->
  </a>

</body>
</html>
```
