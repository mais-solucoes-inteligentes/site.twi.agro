# Product Requirements Document (PRD) - Website T.W.I Agro

## 1. Objetivos e Contexto (Goals and Background Context)

### Objetivos (Goals)
*   **Apresentar a marca:** Posicionar a T.W.I Agro como sinônimo de inovação, eficiência e segurança jurídica no campo.
*   **Facilitar a captação de leads:** Gerar contatos comerciais qualificados de produtores rurais de médio e grande porte.
*   **Educar o produtor:** Explicar o Retorno de Investimento (ROI) da pulverização inteligente por drones e agricultura de precisão de forma simples e pragmática.
*   **Demonstrar conformidade regulatória:** Informar as credenciais técnicas exigidas pelos órgãos fiscalizadores (ANAC, DECEA, MAPA).

### Contexto de Fundo (Background Context)
O agronegócio moderno exige precisão e sustentabilidade. Máquinas agrícolas pesadas geram custos crescentes e causam compactação do solo e danos mecânicos nas plantações (pisoteio), reduzindo em média de 2% a 12% a produtividade total por hectare. Ao mesmo tempo, a aplicação ineficiente de corretivos e defensivos sem mapeamento prévio de solo (taxa variável) resulta em desperdício financeiro para o agricultor. 
A **T.W.I Agro** surge para preencher esta lacuna na região, oferecendo o ciclo completo: assessoria para financiamento/crédito rural (para viabilizar a safra), agricultura de precisão (para mapear a fertilidade do solo) e pulverização inteligente por drones de alta capacidade (para aplicar insumos com zero amassamento). O site servirá como a vitrine tecnológica e ponto de captação central desse ecossistema.

### Histórico de Alterações (Change Log)
| Data | Versão | Descrição | Autor |
| :--- | :--- | :--- | :--- |
| 2026-05-26 | v1.0.0 | Versão inicial aprovada pelo usuário | Morgan (Product Manager) |

---

## 2. Requisitos (Requirements)

### Requisitos Funcionais (Functional Requirements)
*   **FR1 (Navegação Suave):** O site deve ser estruturado em página única (Single Page Premium) com menu âncora fixo que permita rolagem suave até cada seção.
*   **FR2 (Copywriting dos Serviços):** Apresentar detalhadamente os três serviços com abas/cards explicativos em formato expandido contendo os textos especializados fornecidos.
*   **FR3 (Calculadora de Simulação de ROI):** Exibir dados dinâmicos de impacto de produtividade e economia de recursos para reforçar a contratação do serviço de drones (ex: % de aumento de produtividade devido à ausência de amassamento mecânico).
*   **FR4 (Formulário de Contato Inteligente):** O formulário deve capturar Nome, Telefone/WhatsApp, Cidade/Estado, Tamanho da Propriedade (em hectares), Cultura Principal (Soja, Milho, Cana, Pastagem, etc.) e o Serviço de Interesse.
*   **FR5 (Botão do WhatsApp Flutuante):** Um link direto e persistente para o WhatsApp comercial da T.W.I Agro no canto inferior direito, com mensagem inicial automática pré-formatada.
*   **FR6 (Área de Conformidade):** Exibição clara dos logos/selos e explicações curtas de conformidade junto aos órgãos ANAC, DECEA, MAPA e ANATEL.

### Requisitos Não-Funcionais (Non-Functional Requirements)
*   **NFR1 (Performance Extrema):** O site deve atingir pontuação de performance acima de 90 no Google Lighthouse (especialmente em conexões móveis 3G/4G).
*   **NFR2 (Design Responsivo Premium):** O layout deve se adaptar e manter o apelo de alta qualidade visual em smartphones, tablets e desktops de telas ultra-wide.
*   **NFR3 (SEO Técnico Local):** O código deve possuir microdados de Schema.org estruturados (LocalBusiness), títulos e descrições semânticas ricas e tags alt em todas as imagens.
*   **NFR4 (Acessibilidade):** Seguir as diretrizes WCAG AA para contrastes e navegação via teclado.

---

## 3. Objetivos de Design da Interface (User Interface Design Goals)

### Visão Geral de UX (Overall UX Vision)
O site deve causar impacto visual imediato ("Efeito Uau"), unindo a seriedade e solidez do agronegócio tradicional (verde floresta escuro) ao aspecto tecnológico da robótica de precisão (dourado colheita brilhante e glassmorphism).

### Paradigmas de Interação
*   *Cards com efeito de vidro fosco (Glassmorphism):* Destaques de serviços que parecem flutuar sobre planos de fundo de plantações aéreas desfocadas.
*   *Efeitos de Hover Ativos:* Botões e cards aumentam ligeiramente de escala (1.02x) e ganham um brilho suave e difuso ao passar o mouse.
*   *Transições Suaves:* Rolagem automática inteligente ao clicar em itens do menu.

### Telas e Visualizações Principais (Core Views)
*   **Hero View:** Imagem aérea de alta resolução de um drone pulverizando sobre uma plantação perfeitamente geométrica. Contém título grande, texto de impacto e botões dual-action ("Solicitar Orçamento" e "Ver Serviços").
*   **Serviços View:** Painel modular dinâmico onde cada serviço tem seu espaço dedicado para detalhar sua inteligência e aplicabilidade.
*   **ROI View:** Um infográfico visual demonstrando números de eficiência (Economia de até 90% de água, aumento de até 10% na colheita por não amassar as plantas, e menor uso de defensivos).
*   **Form View:** Formulário integrado elegante envolto em moldura glassmorphic contrastando com fundos escuros.

### Identidade de Cores e Tipografia (Branding & Typography)
*   **Cores Principais:**
    *   Verde Obsidian (`#081C15` / HSL `162°, 53%, 7%`): Fundo de cabeçalhos, rodapés e seções escuras.
    *   Verde Floresta (`#1B4332` / HSL `154°, 42%, 18%`): Bordas, acentos de seção e degradês.
    *   Dourado Colheita (`#FFB703` / HSL `43°, 100%, 51%`): Botões primários de CTA e marcas de precisão técnica.
*   **Tipografia:**
    *   Títulos: *Outfit* (Font-family do Google Fonts, peso 700 para força e presença moderna).
    *   Corpo: *Inter* (Font-family do Google Fonts, peso 400 e 500 para legibilidade e clareza).

---

## 4. Suposições Técnicas (Technical Assumptions)

*   **Estrutura de Repositório:** Monorepo.
*   **Arquitetura do Projeto:** Single Page Application estática e leve (HTML, CSS customizado e Vanilla JS moderno).
*   **Estratégia de Testes:** Testes manuais de responsividade em múltiplos navegadores (Chrome, Safari, Firefox, Edge) e dispositivos móveis reais, além de validação estática de SEO e acessibilidade (Lighthouse).

---

## 5. Lista de Épicos (Epic List)

*   **Épico 1: Setup da Infraestrutura e Base do Layout (Foundation)**
    *   *Objetivo:* Estabelecer os tokens de CSS, importar as fontes do Google, estruturar o HTML semântico inicial e o cabeçalho/menu fixo.
*   **Épico 2: Seções de Conteúdo e Copywriting Especializado (Content & Visuals)**
    *   *Objetivo:* Desenvolver as seções de "Sobre Nós" e "Serviços", incorporando o copywriting detalhado de Assessoria Rural, Agricultura de Precisão e Pulverização por Drone com efeitos de Glassmorphism.
*   **Épico 3: Calculadora de ROI e Captação de Leads (Interactions & Conversion)**
    *   *Objetivo:* Criar a seção de estatísticas e diferenciais de eficiência (ROI), integrar o formulário de simulação de orçamento com validações em JavaScript e configurar os botões de ação e WhatsApp comercial.

---

## 6. Detalhamento dos Épicos (Epic Details)

### Épico 1: Setup da Infraestrutura e Base do Layout (Foundation)
*   *Objetivo:* Definir a base estrutural e o sistema de design visual do website.

#### Story 1.1: Configuração do Design System em CSS
*   *Como* desenvolvedor,
*   *Eu quero* estruturar o arquivo de estilos globais (`index.css`) com variáveis CSS baseadas no sistema de design (cores, espaçamento, fontes),
*   *Para que* o restante das seções mantenha consistência estética rígida.
*   *Critérios de Aceitação:*
    1. O arquivo `index.css` deve conter as variáveis CSS oficiais para as cores: Verde Obsidian, Verde Floresta, Verde Eucalyptus, Dourado Colheita e Alabaster.
    2. Importar as fontes *Outfit* (títulos) e *Inter* (texto) do Google Fonts.
    3. Definir estilos resets consistentes para margens, preenchimentos e box-sizing em todos os navegadores.

#### Story 1.2: Estrutura do Header e Menu de Navegação Semântico
*   *Como* visitante do site,
*   *Eu quero* visualizar um cabeçalho fixo com o logotipo e menu de links rápidos de navegação,
*   *Para que* eu possa acessar qualquer seção do site de forma ágil e intuitiva.
*   *Critérios de Aceitação:*
    1. O cabeçalho deve usar a tag HTML5 `<header>` e ser fixado no topo da tela (`position: fixed`) com transparência fosca e desfoque de fundo (*backdrop-filter*).
    2. O menu de navegação (`<nav>`) deve conter links ancorados (`#home`, `#sobre`, `#servicos`, `#roi`, `#contato`) que realizem rolagem suave (`scroll-behavior: smooth`).
    3. Incluir um botão CTA no lado direito do menu destacando a cor Dourado Colheita com efeito de hover.

---

### Épico 2: Seções de Conteúdo e Copywriting Especializado (Content & Visuals)
*   *Objetivo:* Implementar os blocos de conteúdo da T.W.I Agro com os textos especializados e a estética Premium.

#### Story 2.1: Desenvolvimento da Seção Hero e "Sobre Nós"
*   *Como* produtor rural acessando o site,
*   *Eu quero* ser recebido por uma imagem impactante com uma mensagem de valor clara e conhecer a história/missão da T.W.I Agro,
*   *Para que* eu compreenda imediatamente a proposta inovadora da empresa e sinta segurança institucional.
*   *Critérios de Aceitação:*
    1. A seção Hero deve possuir uma imagem de fundo otimizada (alta definição de drones em lavouras) e incluir o título: **"A força da sua terra potencializada por alta tecnologia."**
    2. Exibir dois botões de conversão na Hero com variações visuais (primário sólido e secundário outline).
    3. A seção "Sobre Nós" deve conter o texto de posicionamento da empresa, destacando os valores de Confiança, Inovação e Sustentabilidade.

#### Story 2.2: Painel Dinâmico de Serviços com Textos Especializados (Glassmorphism)
*   *Como* visitante interessado em soluções agronômicas,
*   *Eu quero* visualizar a divisão clara dos serviços executados pela T.W.I Agro com explicações detalhadas e profissionais,
*   *Para que* eu possa entender a aplicação prática de cada serviço na minha fazenda.
*   *Critérios de Aceitação:*
    1. Exibir três cards de serviços em grid responsivo utilizando o efeito visual de *glassmorphism* (fundo translúcido com borda suave branca e sombra sutil).
    2. **Card 1 (Assessoria Rural):** Título do serviço, texto destaque e detalhamento em tópicos (Crédito Rural, Planejamento de Safra, Regularização Ambiental).
    3. **Card 2 (Agricultura de Precisão):** Título do serviço, texto destaque e detalhamento em tópicos (Amostragem de Solo Georreferenciada, Aplicação em Taxa Variável, Mapeamento NDVI).
    4. **Card 3 (Pulverização por Drone):** Título do serviço, texto destaque e detalhamento em tópicos (Aplicação Ultra-Localizada, Amassamento Zero de Lavouras, Acesso a Áreas Complexas).
    5. Cada card deve possuir um ícone moderno correspondente ao serviço.

---

### Épico 3: Calculadora de ROI e Captação de Leads (Interactions & Conversion)
*   *Objetivo:* Fornecer prova de conceito financeira e canais de contato robustos e fáceis de usar.

#### Story 3.1: Seção de Diferenciais e Visualização de ROI Técnico
*   *Como* agricultor tradicional,
*   *Eu quero* ver dados objetivos demonstrando os benefícios do uso dos drones e inteligência de dados,
*   *Para que* eu possa justificar a contratação do serviço perante o planejamento da safra.
*   *Critérios de Aceitação:*
    1. A seção deve apresentar um infográfico limpo demonstrando as três principais métricas de ROI:
        *   **+10% de Produtividade:** Graças ao amassamento zero nas faixas de pulverização aérea.
        *   **Até 90% de Economia de Água:** Utilização inteligente de ultra-baixo volume (calda concentrada).
        *   **Aplicação Cirúrgica:** Redução substancial de defensivos aplicando apenas nas reboleiras/focos mapeados por NDVI.
    2. Exibir de forma proeminente o bloco de **"Segurança e Conformidade Regulamentar"**, citando as licenças obrigatórias (MAPA, ANAC, DECEA, ANATEL) com logos em escala de cinza/suaves que ganham cor no hover.

#### Story 3.2: Formulário de Simulação de Orçamento e Integração WhatsApp
*   *Como* lead comercial em potencial,
*   *Eu quero* preencher um formulário simples com os dados da minha fazenda ou iniciar uma conversa instantânea por WhatsApp,
*   *Para que* eu possa receber uma proposta comercial personalizada sem atritos operacionais.
*   *Critérios de Aceitação:*
    1. O formulário de contato deve conter campos validados: Nome (obrigatório), WhatsApp (obrigatório com máscara), Cidade/Estado (obrigatório), Área em Hectares (numérico obrigatório), Cultura Principal (select com opções principais) e campo de texto de observações (opcional).
    2. A validação via JavaScript deve impedir envios com campos em branco e exibir mensagens amigáveis em vermelho.
    3. Ao preencher, o site deve simular um envio bem-sucedido exibindo uma tela/modal de confirmação premium ("Proposta recebida com sucesso! Um de nossos consultores entrará em contato em até 24 horas.").
    4. Implementar o botão flutuante de WhatsApp comercial persistente no canto inferior direito com pulso de animação suave para atrair a atenção sem incomodar a leitura.

---

## 7. Próximos Passos (Next Steps)

### UX Expert Prompt
> Analise este PRD da T.W.I Agro e elabore o documento `docs/front-end-spec.md` definindo o sistema de design completo, grid de espaçamentos, tokens visuais exatos para as propriedades glassmorphism, classes utilitárias em CSS para os efeitos de hover/micro-animações e o wireframe estrutural do layout da Single Page Premium.

### Architect Prompt
> Revise o PRD e crie o documento `docs/fullstack-architecture.md` detalhando as tecnologias específicas do frontend, a árvore de diretórios do repositório, os scripts de compilação/otimização de ativos, o plano de SEO técnico (incluindo JSON-LD estruturado para LocalBusiness), configurações de cache e estratégias para garantir performance móvel extrema (Score >90 no Lighthouse).
