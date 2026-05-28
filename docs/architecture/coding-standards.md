# 3. Otimizações de Performance (Performance Blueprint)

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
