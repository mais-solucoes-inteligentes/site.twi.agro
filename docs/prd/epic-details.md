# 6. Detalhamento dos Épicos (Epic Details)

## Épico 1: Setup da Infraestrutura e Base do Layout (Foundation)
*   *Objetivo:* Definir a base estrutural e o sistema de design visual do website.

### Story 1.1: Configuração do Design System em CSS
*   *Como* desenvolvedor,
*   *Eu quero* estruturar o arquivo de estilos globais (`index.css`) com variáveis CSS baseadas no sistema de design (cores, espaçamento, fontes),
*   *Para que* o restante das seções mantenha consistência estética rígida.
*   *Critérios de Aceitação:*
    1. O arquivo `index.css` deve conter as variáveis CSS oficiais para as cores: Verde Obsidian, Verde Floresta, Verde Eucalyptus, Dourado Colheita e Alabaster.
    2. Importar as fontes *Outfit* (títulos) e *Inter* (texto) do Google Fonts.
    3. Definir estilos resets consistentes para margens, preenchimentos e box-sizing em todos os navegadores.

### Story 1.2: Estrutura do Header e Menu de Navegação Semântico
*   *Como* visitante do site,
*   *Eu quero* visualizar um cabeçalho fixo com o logotipo e menu de links rápidos de navegação,
*   *Para que* eu possa acessar qualquer seção do site de forma ágil e intuitiva.
*   *Critérios de Aceitação:*
    1. O cabeçalho deve usar a tag HTML5 `<header>` e ser fixado no topo da tela (`position: fixed`) com transparência fosca e desfoque de fundo (*backdrop-filter*).
    2. O menu de navegação (`<nav>`) deve conter links ancorados (`#home`, `#sobre`, `#servicos`, `#roi`, `#contato`) que realizem rolagem suave (`scroll-behavior: smooth`).
    3. Incluir um botão CTA no lado direito do menu destacando a cor Dourado Colheita com efeito de hover.

---

## Épico 2: Seções de Conteúdo e Copywriting Especializado (Content & Visuals)
*   *Objetivo:* Implementar os blocos de conteúdo da T.W.I Agro com os textos especializados e a estética Premium.

### Story 2.1: Desenvolvimento da Seção Hero e "Sobre Nós"
*   *Como* produtor rural acessando o site,
*   *Eu quero* ser recebido por uma imagem impactante com uma mensagem de valor clara e conhecer a história/missão da T.W.I Agro,
*   *Para que* eu compreenda imediatamente a proposta inovadora da empresa e sinta segurança institucional.
*   *Critérios de Aceitação:*
    1. A seção Hero deve possuir uma imagem de fundo otimizada (alta definição de drones em lavouras) e incluir o título: **"A força da sua terra potencializada por alta tecnologia."**
    2. Exibir dois botões de conversão na Hero com variações visuais (primário sólido e secundário outline).
    3. A seção "Sobre Nós" deve conter o texto de posicionamento da empresa, destacando os valores de Confiança, Inovação e Sustentabilidade.

### Story 2.2: Painel Dinâmico de Serviços com Textos Especializados (Glassmorphism)
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

## Épico 3: Calculadora de ROI e Captação de Leads (Interactions & Conversion)
*   *Objetivo:* Fornecer prova de conceito financeira e canais de contato robustos e fáceis de usar.

### Story 3.1: Seção de Diferenciais e Visualização de ROI Técnico
*   *Como* agricultor tradicional,
*   *Eu quero* ver dados objetivos demonstrando os benefícios do uso dos drones e inteligência de dados,
*   *Para que* eu possa justificar a contratação do serviço perante o planejamento da safra.
*   *Critérios de Aceitação:*
    1. A seção deve apresentar um infográfico limpo demonstrando as três principais métricas de ROI:
        *   **+10% de Produtividade:** Graças ao amassamento zero nas faixas de pulverização aérea.
        *   **Até 90% de Economia de Água:** Utilização inteligente de ultra-baixo volume (calda concentrada).
        *   **Aplicação Cirúrgica:** Redução substancial de defensivos aplicando apenas nas reboleiras/focos mapeados por NDVI.
    2. Exibir de forma proeminente o bloco de **"Segurança e Conformidade Regulamentar"**, citando as licenças obrigatórias (MAPA, ANAC, DECEA, ANATEL) com logos em escala de cinza/suaves que ganham cor no hover.

### Story 3.2: Formulário de Simulação de Orçamento e Integração WhatsApp
*   *Como* lead comercial em potencial,
*   *Eu quero* preencher um formulário simples com os dados da minha fazenda ou iniciar uma conversa instantânea por WhatsApp,
*   *Para que* eu possa receber uma proposta comercial personalizada sem atritos operacionais.
*   *Critérios de Aceitação:*
    1. O formulário de contato deve conter campos validados: Nome (obrigatório), WhatsApp (obrigatório com máscara), Cidade/Estado (obrigatório), Área em Hectares (numérico obrigatório), Cultura Principal (select com opções principais) e campo de texto de observações (opcional).
    2. A validação via JavaScript deve impedir envios com campos em branco e exibir mensagens amigáveis em vermelho.
    3. Ao preencher, o site deve simular um envio bem-sucedido exibindo uma tela/modal de confirmação premium ("Proposta recebida com sucesso! Um de nossos consultores entrará em contato em até 24 horas.").
    4. Implementar o botão flutuante de WhatsApp comercial persistente no canto inferior direito com pulso de animação suave para atrair a atenção sem incomodar a leitura.
