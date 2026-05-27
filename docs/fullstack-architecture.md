# Full-Stack Architecture: T.W.I Agro Website

Este documento detalha as definições de arquitetura técnica, estrutura de arquivos, otimizações de performance móvel, segurança e especificações de SEO técnico para o website da **T.W.I Agro**.

---

## 1. Escolha Tecnológica (Tech Stack Selection)

Para atender ao requisito crítico de **máxima performance móvel (Lighthouse Score >90)** em ambientes rurais com conexões instáveis (3G/4G), optamos por uma arquitetura ultra-leve e sem dependências pesadas de frameworks (como Next.js ou React, que adicionam grande overhead de Hydration de JS).

*   **Front-End Core:** HTML5 Semântico para estruturação pura e acessível.
*   **Estilização:** CSS3 Vanilla customizado, estruturado de forma modular com variáveis CSS.
*   **Lógica de Interações:** Vanilla Javascript moderno (ES6+) assíncrono para manipulação do DOM, efeitos de rolagem suave e simulação de envio de formulários.
*   **Carregamento de Fontes:** Google Fonts (`Outfit` e `Inter`) carregadas com instruções assíncronas de `preconnect` e `dns-prefetch` para reduzir latência de DNS.
*   **Assets Visuais:**
    *   *Imagens rasterizadas (drones/campo):* Otimizadas no formato moderno WebP com taxa de compressão inteligente de 75%.
    *   *Ícones e Ilustrações:* Vetoriais nativos em formato SVG ultra-leves incorporados diretamente no HTML (inline) para reduzir requisições HTTP adicionais.

---

## 2. Estrutura de Diretórios (Source Directory Tree)

A estrutura de arquivos do projeto é limpa, modular e auto-contida, facilitando o desenvolvimento sequencial pelas ferramentas de IA:

```
twi-agro-site/
├── .aios/                      # Configurações locais do AIOS
├── docs/                       # Documentação técnica e planejamento (Fase 1)
│   ├── project-brief.md
│   ├── prd.md
│   ├── front-end-spec.md
│   └── fullstack-architecture.md
├── assets/                     # Recursos estáticos
│   ├── css/
│   │   └── index.css           # Estilos estruturais e design system
│   ├── js/
│   │   └── index.js            # Validações, animações e lógica de formulário
│   └── img/
│       ├── hero-drone.webp     # Imagem WebP de alta definição
│       └── symbols.svg         # Sprites e ícones de conformidade
├── index.html                  # Ponto de entrada HTML semântico da SPA
├── package.json                # Configurações do projeto Node
└── README.md                   # Instruções de execução local
```

---

## 3. Otimizações de Performance (Performance Blueprint)

Para atingir a nota máxima nos critérios de performance do Google Core Web Vitals, implementaremos as seguintes regras arquiteturais:

1.  **Minimização de Bloqueio de Renderização:** O script `index.js` será carregado com a tag `defer` no final da tag `<head>` para garantir que a renderização do HTML e do CSS ocorra sem interrupções.
2.  **Otimização de Carregamento de Fontes:**
    *   Usar a diretiva `font-display: swap` no carregamento das fontes do Google Fonts para exibir imediatamente uma fonte do sistema enquanto as fontes proprietárias são baixadas.
3.  **Preconnect de Terceiros:**
    ```html
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    ```
4.  **Compressão de Imagens:** Todas as imagens estáticas no formato WebP devem ser geradas com dimensões exatas correspondentes aos contêineres de destino para evitar oscilações cumulativas de layout (CLS).
5.  **Inline SVGs:** Ícones cruciais no cabeçalho e na seção de serviços serão inseridos diretamente como tags `<svg>` inline. Isso elimina tempos de ida e volta (RTT) de requisições de rede para carregar arquivos de imagem adicionais.

---

## 4. Otimização para Mecanismos de Busca (SEO Técnico)

O SEO técnico é uma prioridade para garantir que produtores locais encontrem os serviços da T.W.I Agro ao pesquisar no Google por "Pulverização por drone", "Agricultura de precisão" ou "Assessoria de crédito rural".

### 4.1. Metadados e OpenGraph
O cabeçalho do `index.html` deve conter tags meta completas e atrativas:

```html
<!-- Metadados de busca -->
<title>T.W.I Agro | Assessoria Rural, Agricultura de Precisão e Pulverização por Drone</title>
<meta name="description" content="A T.W.I Agro oferece soluções de tecnologia no campo: assessoria para crédito rural, mapeamento inteligente de fertilidade do solo e pulverização ultra-precisa com drones de alta capacidade.">

<!-- OpenGraph (Compartilhamento em Redes Sociais/WhatsApp) -->
<meta property="og:type" content="website">
<meta property="og:title" content="T.W.I Agro | Tecnologia Agrícola Inteligente">
<meta property="og:description" content="Assessoria rural estratégica, agricultura de precisão e pulverização de alta eficiência com drones agrícolas.">
<meta property="og:image" content="assets/img/og-preview.jpg">
<meta property="og:url" content="https://twiagro.com.br">
```

### 4.2. Dados Estruturados (JSON-LD LocalBusiness)
Para auxiliar na indexação local do Google Maps e buscas locais geográficas, inseriremos o seguinte script de Schema.org na tag `<head>`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "T.W.I Agro",
  "image": "https://twiagro.com.br/assets/img/logo.jpg",
  "@id": "https://twiagro.com.br/#organization",
  "url": "https://twiagro.com.br",
  "telephone": "+55-XX-XXXXX-XXXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Endereço da Empresa",
    "addressLocality": "Cidade",
    "addressRegion": "UF",
    "postalCode": "XXXXX-XXX",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -XX.XXXXXX,
    "longitude": -XX.XXXXXX
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://instagram.com/twiagro",
    "https://facebook.com/twiagro"
  ]
}
</script>
```

---

## 5. Estratégia de Validação (Quality Gates)

Antes de considerar a entrega do website como finalizada, executaremos testes em três frentes:

1.  **Lighthouse Audit:** Executar auditoria direta pelo navegador para atestar pontuações superiores a 90 em:
    *   *Performance:* >90
    *   *Acessibilidade:* >90
    *   *Melhores Práticas:* >90
    *   *SEO:* >90
2.  **Validação de Responsividade (Chrome DevTools):**
    *   Testar visualmente em layouts móveis populares (iPhone SE, iPhone 12/14 Pro, Samsung Galaxy S20, iPad Air e iPad Mini).
3.  **Validação de Formulário e Integrações:**
    *   Inserir cenários de teste com campos vazios para validar as mensagens de erro em JavaScript.
    *   Verificar se a ação do botão flutuante de WhatsApp dispara a URL correta com texto codificado em URI (`encodeURIComponent`).
