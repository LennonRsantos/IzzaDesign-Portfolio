# Design System — Izza Designer Portfolio

Stack de referência: **React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion**

---

## Fontes

| Papel | Família | Pesos | Uso |
|-------|---------|-------|-----|
| Heading | Anton | 400 (único) | Todos os títulos h1–h6 |
| Body | Public Sans | 300, 400, 500, 600, 700 | Corpo de texto, botões, labels |

**Import no HTML:**
```html
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
```

**Regra CSS global para títulos:**
```css
h1, h2, h3, h4, h5, h6 {
  font-family: 'Anton', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}
```

---

## Paleta de Cores

### Cores base (dark theme)

| Token | HSL | Hex aprox. | Uso |
|-------|-----|-----------|-----|
| `--color-bg` | `hsl(0 0% 10.6%)` | `#1B1B1B` | Fundo principal da página |
| `--color-bg-card` | `hsl(0 0% 13%)` | `#212121` | Cards e popovers |
| `--color-bg-secondary` | `hsl(0 0% 18%)` | `#2E2E2E` | Seções alternadas, inputs |
| `--color-bg-muted` | `hsl(0 0% 16%)` | `#292929` | Hover sutil, muted |

### Cores de texto

| Token | HSL | Hex aprox. | Uso |
|-------|-----|-----------|-----|
| `--color-text` | `hsl(0 0% 92%)` | `#EAEAEA` | Texto padrão |
| `--color-text-light` | `hsl(0 0% 85%)` | `#D9D9D9` | Subtítulos, secondary |
| `--color-text-muted` | `hsl(0 0% 55%)` | `#8C8C8C` | Descrições, placeholders |
| `--color-text-white` | `hsl(0 0% 100%)` | `#FFFFFF` | Sobre fundo primário |

### Cor primária

| Token | HSL | Hex aprox. | Uso |
|-------|-----|-----------|-----|
| `--color-primary` | `hsl(270 91% 68%)` | `#9D5FE8` | Botões, links, destaques |
| `--color-primary-fg` | `hsl(0 0% 100%)` | `#FFFFFF` | Texto sobre primário |

### Bordas e estados

| Token | HSL | Hex aprox. | Uso |
|-------|-----|-----------|-----|
| `--color-border` | `hsl(0 0% 20%)` | `#333333` | Bordas de cards, inputs |
| `--color-ring` | `hsl(270 91% 68%)` | `#9D5FE8` | Foco (focus ring) |
| `--color-destructive` | `hsl(0 84.2% 60.2%)` | `#E74C3C` | Erros, alertas |

---

## Efeitos Especiais

```css
/* Gradiente principal (diagonal 135°) */
--gradient-primary: linear-gradient(135deg, hsl(270 91% 68%), hsl(290 80% 55%));

/* Glow em box-shadow */
--glow-primary: 0 0 40px hsl(270 91% 68% / 0.3);

/* Glow em texto */
--glow-text-primary: 0 0 30px hsl(270 91% 68% / 0.5);
```

**Classes utilitárias:**
```css
.text-gradient  /* texto com gradiente roxo                  */
.glow           /* box-shadow roxa difusa                    */
.glow-text      /* text-shadow roxa difusa                   */
```

---

## Tipografia — Escala

| Classe | rem | px | Uso |
|--------|-----|----|-----|
| `text-xs` | 0.75rem | 12px | Labels, captions |
| `text-sm` | 0.875rem | 14px | Botões, tags |
| `text-base` | 1rem | 16px | Corpo padrão |
| `text-lg` | 1.125rem | 18px | Lead text |
| `text-2xl` | 1.5rem | 24px | h3 |
| `text-4xl` | 2.25rem | 36px | h2 mobile |
| `text-5xl` | 3rem | 48px | h1 mobile / h2 desktop |
| `text-7xl` | 4.5rem | 72px | h1 tablet |
| `text-8xl` | 6rem | 96px | h1 desktop |

**Padrão responsivo do H1:**
```html
<!-- Tailwind: text-5xl md:text-7xl lg:text-8xl -->
<!-- CSS puro: -->
font-size: clamp(3rem, 8vw, 6rem);
```

### Componentes tipográficos

```css
/* Label de seção — "— SOBRE MIM" */
.section-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-primary);
}

/* Título de seção */
.section-title {
  font-family: var(--font-heading);
  font-size: clamp(2.25rem, 5vw, 3.75rem);
  text-transform: uppercase;
  letter-spacing: 0.02em;
}
```

---

## Border Radius

| Token | Valor | Uso |
|-------|-------|-----|
| `--radius-sm` | 6px | Elementos pequenos |
| `--radius-md` | 10px | Inputs, badges |
| `--radius-lg` | 12px | Cards padrão |
| `--radius-xl` | 16px | Cards grandes, modais |
| `--radius-full` | 9999px | Botões pill, avatares |

---

## Espaçamento (escala 4px)

| Token | rem | px |
|-------|-----|----|
| `--space-1` | 0.25 | 4px |
| `--space-2` | 0.5 | 8px |
| `--space-3` | 0.75 | 12px |
| `--space-4` | 1.0 | 16px |
| `--space-5` | 1.25 | 20px |
| `--space-6` | 1.5 | 24px |
| `--space-8` | 2.0 | 32px |
| `--space-10` | 2.5 | 40px |
| `--space-12` | 3.0 | 48px |
| `--space-16` | 4.0 | 64px |
| `--space-24` | 6.0 | 96px — padding seção mobile |
| `--space-32` | 8.0 | 128px — padding seção desktop |

**Padding de seção:**
```css
.section { padding-block: 6rem; }          /* mobile  */
@media (min-width: 768px) {
  .section { padding-block: 8rem; }        /* desktop */
}
```

---

## Componentes

### Botão Primário

```css
background-color: var(--color-primary);
color: var(--color-primary-fg);
padding: 0.75rem 2rem;
border-radius: 9999px;
font-weight: 600;
font-size: 0.875rem;
letter-spacing: 0.05em;
text-transform: uppercase;
/* hover: */
transform: scale(1.05);
box-shadow: var(--glow-primary);
/* active: */
transform: scale(0.98);
```

### Botão Secundário (outline)

```css
background-color: transparent;
border: 1px solid var(--color-border);
border-radius: 9999px;
padding: 0.75rem 2rem;
/* hover: */
border-color: var(--color-primary);
color: var(--color-primary);
```

### Botão Social (circular)

```css
width: 3rem; height: 3rem;
border-radius: 50%;
border: 1px solid var(--color-border);
/* hover: */
transform: scale(1.1) translateY(-2px);
box-shadow: var(--glow-primary);
border-color: var(--color-primary);
```

### Card padrão

```css
background-color: var(--color-bg-secondary);
border: 1px solid var(--color-border);
border-radius: 1rem;
padding: 1.5rem;
/* hover: */
border-color: hsl(270 91% 68% / 0.5);
```

### Card de Projeto (hover com overlay)

```css
/* container */
border-radius: 1rem;
overflow: hidden;
aspect-ratio: 3 / 2;

/* imagem: hover */
transform: scale(1.1);
transition: transform 700ms ease;

/* overlay */
background-color: hsl(0 0% 10.6% / 0.6);
opacity: 0 → 1 no hover
```

### Card de Ferramenta (Tool)

```css
display: flex; flex-direction: column; align-items: center;
gap: 0.75rem; padding: 1.5rem;
border-radius: 1rem;
border: 1px solid var(--color-border);
/* hover: */
transform: scale(1.05) translateY(-8px);
box-shadow: var(--glow-primary);
```

### Badge / Tag

```css
/* neutro */
padding: 0.5rem 1.25rem;
border: 1px solid var(--color-border);
border-radius: 9999px;
font-size: 0.875rem;

/* primário */
border-color: hsl(270 91% 68% / 0.4);
color: var(--color-primary);
background-color: hsl(270 91% 68% / 0.1);
```

### Input / Textarea

```css
background-color: var(--color-bg-secondary);
border: 1px solid var(--color-border);
border-radius: 0.75rem;
padding: 0.75rem 1.25rem;
/* focus: */
border-color: var(--color-primary);
outline: none;
```

### Navbar

```css
position: fixed; top: 0; z-index: 50;
/* estado scrolled: */
background-color: hsl(0 0% 10.6% / 0.9);
backdrop-filter: blur(12px);
```

---

## Grid / Layout

| Grid | Mobile | Tablet (768px) | Desktop (1024px) |
|------|--------|---------------|-----------------|
| Conteúdo 2 cols | 1 col | 2 cols, gap 4rem | 2 cols, gap 4rem |
| Cards 3 cols | 1 col | 2 cols | 3 cols |
| Tools 5 cols | 2 cols | 3 cols | 5 cols |

**Container padrão:**
```css
max-width: 1280px;
margin-inline: auto;
padding-inline: 1.5rem;
/* 2xl breakpoint: 1400px */
```

---

## Animações (Framer Motion — padrões)

### Entrada de elementos (padrão universal)
```js
initial: { opacity: 0, y: 20 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.6 }
```

### Sequência Hero (delays cascata)
| Elemento | Delay |
|----------|-------|
| Label/subtitle | 0s |
| Título principal | 0.15s |
| Descrição | 0.35s |
| Botões CTA | 0.5s |
| Botões sociais | 0.7s |

### Scroll-triggered (IntersectionObserver)
```js
viewport: { once: true, margin: '-100px' }
```

### Entrada lateral
```js
// Da esquerda:
initial: { x: -40, opacity: 0 }
// Da direita:
initial: { x: 40, opacity: 0 }
// Duração: 0.7s, delay coluna direita: 0.2s
```

### Cards em grade (stagger)
```js
// Projetos:
transition: { delay: index * 0.1, duration: 0.5 }
initial: { y: 40, opacity: 0 }

// Tools:
transition: { delay: index * 0.08, duration: 0.4 }
initial: { scale: 0.5, opacity: 0 }
```

### Interações de botão
```js
whileHover: { scale: 1.02 }
whileTap:   { scale: 0.98 }
```

---

## Ícones

| Biblioteca | Uso | Import |
|-----------|-----|--------|
| **Huge Icons** (HGI Stroke Rounded) | Ícones UI gerais | `<link href="https://cdn.hugeicons.com/font/hgi-stroke-rounded.css">` |
| **Devicon** | Logos de ferramentas tech (Figma, Illustrator…) | `npm i devicon` → `import 'devicon/devicon.min.css'` |
| **Lucide React** | Ícones de interface (Menu, X, ExternalLink…) | `import { Menu, X } from 'lucide-react'` |

---

## Assets de imagem

| Arquivo | Uso |
|---------|-----|
| `hero-bg.png` | Background do Hero (desktop, opacity 45%) |
| `hero-cel-bg.png` | Background do Hero (mobile, opacity 45%) |
| `krista.png`, `Dra.AlexandraCousin.png`, etc. | Thumbnails de projetos |

**Padrão de background hero:**
```css
background-image: url('./hero-bg.png');
background-size: cover;
background-position: center;
opacity: 0.45;

/* + overlay gradiente por cima: */
background: linear-gradient(to bottom,
  hsl(0 0% 10.6% / 0.6) 0%,
  hsl(0 0% 10.6% / 0.8) 50%,
  hsl(0 0% 10.6% / 1.0) 100%
);
```

---

## Estrutura de Seções

Cada seção segue o mesmo padrão visual:

```
[label pequeno uppercase + cor primária]
[título grande Anton uppercase]
[linha descritiva em muted]
[conteúdo principal]
```

**Exemplo markup:**
```html
<section class="section">
  <div class="container">
    <span class="section-label">— Projetos</span>
    <h2 class="section-title text-gradient">Meu Portfólio</h2>
    <p style="color: var(--color-text-muted)">Descrição...</p>
    <!-- conteúdo -->
  </div>
</section>
```

---

## Dependências (package.json)

```json
"dependencies": {
  "react": "^18",
  "react-dom": "^18",
  "framer-motion": "latest",
  "lucide-react": "latest",
  "tailwindcss-animate": "latest"
}
"devDependencies": {
  "tailwindcss": "latest",
  "typescript": "latest",
  "vite": "latest"
}
```

---

## Arquivo de uso rápido

Para novo projeto, copie `design-system/tokens.css` e importe no CSS principal:

```css
@import './design-system/tokens.css';
```

Ou copie as variáveis do `:root` direto no seu `index.css`.
