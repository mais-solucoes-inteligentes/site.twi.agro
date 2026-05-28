# 4. Otimização para Mecanismos de Busca (SEO Técnico)

O SEO técnico é uma prioridade para garantir que produtores locais encontrem os serviços da T.W.I Agro ao pesquisar no Google por "Pulverização por drone", "Agricultura de precisão" ou "Assessoria de crédito rural".

## Metadados e OpenGraph
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

## Dados Estruturados (JSON-LD LocalBusiness)
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
