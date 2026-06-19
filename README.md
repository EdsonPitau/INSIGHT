# INSIGHT — Jogo de Mímica e Desenho

PWA standalone, sem build step, funciona 100% offline depois do primeiro carregamento.
Todos os arquivos ficam na raiz (sem subpastas), prontos pra subir direto no GitHub.

## Como publicar no GitHub Pages

1. No seu repositório (ex: EdsonPitau/INSIGHT), **apague os arquivos antigos** (os que estão quebrados).
2. Suba TODOS os arquivos desta pasta direto pra raiz do repositório (arraste e solte todos juntos no GitHub, via "Add file" → "Upload files").
3. Confirme o commit.
4. Settings → Pages → Source → branch `main` → pasta `/ (root)` (se ainda não estiver configurado).
5. Aguarde 1-2 minutos e acesse a URL do GitHub Pages.

## Importante: cache do navegador

Se você já tinha aberto a versão quebrada no celular, o navegador pode ter guardado em cache a página antiga. Depois de subir os arquivos corrigidos:
- Feche a aba e abra de novo, ou
- Force um recarregamento completo (no Chrome: menu → Configurações do site → Limpar dados, ou simplesmente aguarde — o service worker novo (v2) já força a atualização automática).

## Funcionamento offline

Depois do primeiro carregamento com internet, o app funciona 100% offline — todas as 907 cartas estão embutidas no `app.js`, sem depender de servidor.
