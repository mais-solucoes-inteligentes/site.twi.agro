# 1. Escolha Tecnológica (Tech Stack Selection)

Para atender ao requisito crítico de **máxima performance móvel (Lighthouse Score >90)** em ambientes rurais com conexões instáveis (3G/4G), optamos por uma arquitetura ultra-leve e sem dependências pesadas de frameworks (como Next.js ou React, que adicionam grande overhead de Hydration de JS).

*   **Front-End Core:** HTML5 Semântico para estruturação pura e acessível.
*   **Estilização:** CSS3 Vanilla customizado, estruturado de forma modular com variáveis CSS.
*   **Lógica de Interações:** Vanilla Javascript moderno (ES6+) assíncrono para manipulação do DOM, efeitos de rolagem suave e simulação de envio de formulários.
*   **Carregamento de Fontes:** Google Fonts (`Outfit` e `Inter`) carregadas com instruções assíncronas de `preconnect` e `dns-prefetch` para reduzir latência de DNS.
*   **Assets Visuais:**
    *   *Imagens rasterizadas (drones/campo):* Otimizadas no formato moderno WebP com taxa de compressão inteligente de 75%.
    *   *Ícones e Ilustrações:* Vetoriais nativos em formato SVG ultra-leves incorporados diretamente no HTML (inline) para reduzir requisições HTTP adicionais.
