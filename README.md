# INSIGHT — Jogo de Mímica e Desenho

PWA standalone, sem build step, funciona 100% offline depois do primeiro carregamento.

## Como publicar no GitHub Pages

1. No seu repositório, apague os arquivos antigos.
2. Suba TODOS os arquivos desta pasta direto pra raiz do repositório.
3. Confirme o commit.
4. Settings → Pages → Source → branch `main` → pasta `/ (root)`.
5. Aguarde 1-2 minutos e acesse a URL do GitHub Pages.

## Importante: cache do navegador

O service worker foi atualizado para v5 — isso já força a atualização automática
em quem já tinha instalado uma versão anterior.

## Funcionamento offline

Fontes de sistema + logo + todas as cartas embutidas no app.js — funciona
100% offline desde a primeira instalação.
