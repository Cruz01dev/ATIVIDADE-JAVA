# SEO: Várzea Viva (futebol amador da região)

Domínio de exemplo usado em canonical, OG, sitemap e JSON-LD: `https://www.varzeaviva.com.br`. Troque pelo seu (busca e substituição em todos os arquivos).

## Palavras-chave
| Página | URL | Palavras-chave |
|---|---|---|
| Início | `/` | futebol amador, campeonato de várzea, times da região |
| Calendário | `/calendario-de-jogos/` | calendário de jogos, tabela do campeonato amador, jogos do fim de semana |

## Decisões tomadas
- **Title e description únicos** por página, com a palavra-chave principal no começo do title e description com cerca de 140 caracteres.
- **Canonical** absoluto em cada página; **Open Graph** completo com `og-image.jpg` 1200×630 (JPG porque WhatsApp, Facebook e X lidam melhor com JPG/PNG do que WebP no preview). Favicon em ICO, SVG e apple-touch-icon.
- **JSON-LD**: `SportsOrganization` + `WebSite` na home; `SportsEvent` na página de calendário (o tipo certo para um jogo com data, local e times). Os dados de exemplo precisam ser trocados pelos reais.
- **URLs amigáveis**: `/` e `/calendario-de-jogos/` (pasta com `index.html`, sem extensão na URL).
- **Links internos descritivos** entre as duas páginas ("calendário de jogos do campeonato amador", "campeonato de várzea e os times da região"), nunca "clique aqui".
- **Imagens**: WebP, `alt` descritivo, `width`/`height` para evitar CLS, `loading="lazy"` nas imagens abaixo da dobra e `fetchpriority="high"` na imagem da primeira tela (sem lazy).
- **Desempenho e acessibilidade**: sem frameworks nem fontes externas (fontes do sistema), CSS e JS pequenos, skip link, landmarks, `aria-current`, tabelas com `caption` e `scope`, foco visível, contraste alto, `prefers-reduced-motion` e modo escuro.
- **robots.txt** e **sitemap.xml** na raiz, com o sitemap referenciado no robots.

## Como medir (Lighthouse, celular)
1. "Antes": rode o Lighthouse (Chrome DevTools > Lighthouse > Mobile) em uma versão sem otimizações, por exemplo removendo meta tags, `alt` e `lazy`, ou use o seu rascunho anterior. Salve o print.
2. "Depois": rode no site publicado final, nas duas URLs. Salve o print.
3. Valide o JSON-LD em https://validator.schema.org (cole a URL publicada) e salve o print.

## Notas antes/depois (preencher com os resultados reais)
| Página | Categoria | Antes | Depois | Meta |
|---|---|---|---|---|
| `/` | SEO | | | ≥ 95 |
| `/` | Acessibilidade | | | ≥ 90 |
| `/` | Desempenho | | | (informativo) |
| `/calendario-de-jogos/` | SEO | | | ≥ 95 |
| `/calendario-de-jogos/` | Acessibilidade | | | ≥ 90 |
| `/calendario-de-jogos/` | Desempenho | | | (informativo) |

Observação: o Lighthouse só dá nota de SEO ≥ 95 em página acessível por HTTPS e sem `noindex`, então o teste "depois" deve ser feito no site publicado.
