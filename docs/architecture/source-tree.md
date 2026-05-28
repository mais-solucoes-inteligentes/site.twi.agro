# 2. Estrutura de Diretórios (Source Directory Tree)

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
