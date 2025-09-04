/* =========
   Reset & Base
   ========= */
*,
*::before,
*::after { box-sizing: border-box; }

:root {
  --bg: #0b0d10;
  --panel: #13171c;
  --text: #e7ebf0;
  --muted: #9aa4b2;
  --brand: #4f7cff;
  --brand-2: #7aa2ff;
  --accent: #22c55e;
  --border: #1f242c;
  --shadow: 0 8px 24px rgba(0,0,0,.25);
  --radius: 16px;
  --maxw: 860px;
  --space-1: .25rem;
  --space-2: .5rem;
  --space-3: .75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-8: 3rem;
  --lh: 1.6;
  --fs-0: .875rem;
  --fs-1: 1rem;
  --fs-2: 1.125rem;
  --fs-3: 1.375rem;
  --fs-4: 1.75rem;
  --fs-5: 2.25rem;
}

@media (prefers-color-scheme: light) {
  :root {
    --bg: #f7f9fc;
    --panel: #ffffff;
    --text: #0b1220;
    --muted: #5b6472;
    --border: #e6ebf2;
    --shadow: 0 8px 24px rgba(15,23,42,.08);
  }
}

html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif;
  color: var(--text);
  background: radial-gradient(1200px 800px at 10% -10%, rgba(79,124,255,.15), transparent 60%),
              radial-gradient(1000px 700px at 110% 10%, rgba(34,197,94,.12), transparent 55%),
              var(--bg);
  line-height: var(--lh);
  font-size: var(--fs-1);
}

/* =========
   Layout
   ========= */
.container {
  max-width: var(--maxw);
  margin: 0 auto;
  padding: var(--space-6) var(--space-4);
}

header.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(8px);
  background: color-mix(in oklab, var(--bg) 85%, transparent);
  border-bottom: 1px solid var(--border);
}

.header-inner {
  max-width: var(--maxw);
  margin: 0 auto;
  padding: var(--space-3) var(--space-4);
  display: flex;
  align-items: center;
  gap: var(--space-4);
  justify-content: space-between;
}

/* Título principal (h1 da tua página) */
h1, h2, h3 {
  line-height: 1.2;
  margin: var(--space-6) 0 var(--space-3);
}
h1 { font-size: clamp(var(--fs-4), 3.3vw, var(--fs-5)); letter-spacing: -0.02em; }
h2 { font-size: clamp(var(--fs-3), 2.5vw, var(--fs-4)); }
h3 { font-size: clamp(1.1rem, 2vw, var(--fs-3)); }

p, ul, ol, blockquote, pre, table, figure { margin: 0 0 var(--space-5); }

section.panel {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: var(--space-6);
  box-shadow: var(--shadow);
}

/* =========
   Navegação (funciona com listas/links simples)
   ========= */
nav, .nav {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  align-items: center;
}
nav a, .nav a, a.button {
  display: inline-flex;
  align-items: center;
  gap: .5ch;
  padding: .6rem .9rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: color-mix(in oklab, var(--panel) 92%, transparent);
  text-decoration: none;
  color: var(--text);
  font-weight: 600;
  transition: transform .08s ease, background .2s ease, border-color .2s ease;
}
nav a:hover, .nav a:hover, a.button:hover {
  transform: translateY(-1px);
  border-color: color-mix(in oklab, var(--brand) 45%, var(--border));
  background: color-mix(in oklab, var(--panel) 80%, var(--brand) 20%);
}
nav a:focus-visible, .nav a:focus-visible, a.button:focus-visible {
  outline: 3px solid color-mix(in oklab, var(--brand) 65%, white);
  outline-offset: 2px;
}

/* Link primário (bom para LinkedIn) */
a.cta {
  border-color: color-mix(in oklab, var(--brand) 60%, var(--border));
  background: linear-gradient(180deg, color-mix(in oklab, var(--brand) 40%, var(--panel)), var(--panel));
}

/* =========
   Tipografia & Links
   ========= */
a {
  color: var(--brand);
  text-underline-offset: .15em;
  text-decoration-thickness: .08em;
}
a:hover { color: var(--brand-2); }

small, .muted { color: var(--muted); font-size: var(--fs-0); }

blockquote {
  margin: var(--space-6) 0;
  padding: var(--space-5);
  background: color-mix(in oklab, var(--panel) 85%, black 5%);
  border: 1px solid var(--border);
  border-left: 4px solid var(--brand);
  border-radius: calc(var(--radius) - 8px);
}

/* =========
   Listas (os teus links “Python …”) 
   ========= */
ul, ol {
  padding-left: 1.2rem;
}
ul.navlike, ol.navlike {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: var(--space-3);
}
.navlike li a {
  display: block;
  padding: var(--space-5);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--panel);
  text-decoration: none;
  color: var(--text);
  font-weight: 600;
  box-shadow: var(--shadow);
}
.navlike li a:hover {
  transform: translateY(-2px);
  transition: transform .12s ease, box-shadow .2s ease;
}

/* =========
   Imagens
   ========= */
img, svg, video {
  max-width: 100%;
  height: auto;
  border-radius: calc(var(--radius) - 8px);
  display: block;
}

/* =========
   Tabelas & Código (se adicionares no futuro)
   ========= */
pre, code, kbd {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace;
}
pre {
  padding: var(--space-5);
  background: color-mix(in oklab, var(--panel) 85%, black 5%);
  border: 1px solid var(--border);
  border-radius: calc(var(--radius) - 6px);
  overflow: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
}
th, td {
  padding: .75rem 1rem;
  border-bottom: 1px solid var(--border);
}
thead th {
  text-align: left;
  background: color-mix(in oklab, var(--panel) 90%, var(--brand) 6%);
}

/* =========
   Footer (se existir)
   ========= */
footer {
  margin-top: var(--space-8);
  padding: var(--space-6) var(--space-4);
  border-top: 1px solid var(--border);
  color: var(--muted);
  text-align: center;
}

/* =========
   Utilitários leves (opcionais)
   ========= */
.center { text-align: center; }
.grid {
  display: grid;
  gap: var(--space-4);
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}
.card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: var(--space-5);
  box-shadow: var(--shadow);
}

/* =========
   Responsividade fina
   ========= */
@media (max-width: 520px) {
  .header-inner { flex-direction: column; align-items: stretch; }
  nav, .nav { justify-content: center; }
  h1 { margin-top: var(--space-4); }
}

/* =========
   Print
   ========= */
@media print {
  body { background: #fff; color: #000; }
  header.site-header { position: static; backdrop-filter: none; background: #fff; }
  a { color: #000; text-decoration: underline; }
  .card, section.panel, blockquote, pre { box-shadow: none; }
}
