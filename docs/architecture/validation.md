# 5. Estratégia de Validação (Quality Gates)

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
