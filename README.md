# INSIGHT — Jogo de Mímica e Desenho

PWA (Progressive Web App) standalone, sem build step, funciona 100% offline depois do primeiro carregamento.

## Estrutura

```
insight-pwa/
├── index.html          → página principal
├── app.js              → toda a lógica do jogo (React puro, sem JSX/build)
├── styles.css           → estilos
├── manifest.json        → configuração do PWA (nome, ícone, cor)
├── sw.js                → service worker (cache offline)
├── icons/                → ícones em vários tamanhos (gerados do seu icon.png)
└── vendor/               → React e ReactDOM (local, sem depender de CDN)
```

## Como publicar no GitHub Pages

1. Crie um repositório novo no GitHub (ex: `insight-game`).
2. Suba **todo o conteúdo da pasta `insight-pwa/`** para a raiz do repositório (não a pasta em si, o conteúdo dela).
3. No repositório: Settings → Pages → Source → selecione a branch `main` e a pasta `/ (root)`.
4. Aguarde alguns minutos. O GitHub vai te dar uma URL tipo:
   `https://seu-usuario.github.io/insight-game/`

## Como instalar no celular como app

1. Abra a URL do GitHub Pages no navegador do celular (Chrome no Android, Safari no iPhone).
2. **Android (Chrome):** toque no menu (⋮) → "Adicionar à tela inicial" ou "Instalar app".
3. **iPhone (Safari):** toque no ícone de compartilhar (□↑) → "Adicionar à Tela de Início".
4. O ícone do INSIGHT vai aparecer na tela inicial como um app normal, abrindo em tela cheia.

## Funcionamento offline

Na primeira vez que o app é aberto (com internet), o service worker (`sw.js`) guarda em cache todos os arquivos necessários — HTML, CSS, JS, React e ícones. Depois disso, o app abre e funciona normalmente mesmo sem conexão, já que nada depende de servidor: todas as 907 cartas estão embutidas no próprio `app.js`.

## Observação técnica

Não há processo de build (Webpack/Vite/etc.) — o `app.js` usa `React.createElement` diretamente em vez de JSX, então roda no navegador sem qualquer compilação. Isso facilita hospedar como arquivo estático puro no GitHub Pages.
