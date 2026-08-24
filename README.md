# Portfólio — André Luis da Silva

Página pessoal de portfólio de **André Luis da Silva**, Software Engineer e desenvolvedor Full-Stack. Reúne projetos, habilidades técnicas, experiência e contato em uma página única, responsiva e otimizada para SEO.

**Site:** https://andreluisdasilva.github.io/Portfolio/

---

## Índice

- [Visão geral](#visão-geral)
- [Destaques](#destaques)
- [Tecnologias](#tecnologias)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Como executar](#como-executar)
- [Personalização](#personalização)
- [Contato](#contato)
- [Licença](#licença)

---

## Visão geral

Portfólio de página única (single-page) com tema escuro em paleta verde/natureza, tipografia cuidada e animações sutis. Construído com HTML, CSS e JavaScript puro — sem frameworks e sem dependências de build.

## Destaques

- **SEO** — meta tags completas, Open Graph/Twitter Cards e dados estruturados (JSON-LD `Person`) para melhor indexação e exibição em buscas.
- **Animação em canvas** — malha de partículas conectadas no topo, no estilo de rede/constelação, em tons de verde.
- **Responsivo** — adapta-se de desktop a mobile.
- **Acessível** — foco de teclado visível e respeito a `prefers-reduced-motion` (as animações são desativadas para quem prefere menos movimento).
- **Sem inline CSS/JS** — estilos e scripts em arquivos externos.

## Tecnologias

- **HTML5** — estrutura semântica do conteúdo.
- **CSS3** — variáveis, `clamp()`, Grid e Flexbox para layout responsivo.
- **JavaScript (vanilla)** — animação em `<canvas>`, `IntersectionObserver` para revelações no scroll.
- **Google Fonts** — Sora, IBM Plex Sans e IBM Plex Mono.

## Estrutura do projeto

```
|-- index.html      # marcação da página
|-- styles.css      # todos os estilos
|-- main.js         # animação de partículas e revelações no scroll
|-- img/            # opcional — não é usada pelo layout atual
|-- README.md
```

## Como executar

Clone o repositório:

```bash
git clone https://github.com/AndreLuisdaSilva/Portfolio.git
```

Abra o `index.html` no navegador. Como o projeto carrega arquivos externos (`styles.css`, `main.js`) e fontes, o ideal é servir por um servidor local simples:

```bash
# Python 3
python -m http.server 8000
# depois acesse http://localhost:8000
```

## Personalização

- **Textos:** projetos, experiência e formação ficam diretamente no `index.html`.
- **Cores:** definidas como variáveis CSS no topo de `styles.css` (`:root`), fáceis de ajustar.
- Os arquivos são referenciados por caminho relativo — se renomear `styles.css` ou `main.js`, atualize os links correspondentes no `index.html`.

## Contato

- **GitHub:** [AndreLuisdaSilva](https://github.com/AndreLuisdaSilva)
- **LinkedIn:** [André Luis da Silva](https://www.linkedin.com/in/andr%C3%A9-luis-da-silva-30338a219/)

## Licença

Distribuído sob a licença MIT. Sinta-se à vontade para usar como base para o seu próprio portfólio.
