# Portafolio Web — Marlon Peralta Panduro

Portafolio personal con estilo **terminal/hacker** tipo **SPA** (single page app), bilingüe (Español / Inglés), construido con HTML, CSS y JavaScript vanilla. Listo para desplegar en **GitHub Pages**.

**Características:**

- Layout tipo aplicación: sidebar fijo + panel principal que cambia (sin scroll largo).
- **Previews en vivo de proyectos con iframes** + fallback automático para sitios que bloquean embedding.
- Toggle ES/EN persistente (localStorage).
- Diseño 100% responsive con vista móvil colapsable.
- Animación de typing en el hero, scanlines CRT sutiles.

🔗 **Live:** https://marlonp721.github.io/ (después del deploy)

---

## 📦 Estructura del proyecto

```
portfolio/
├── index.html          # Estructura principal
├── styles.css          # Estilos (tema terminal/hacker)
├── script.js           # Toggle ES/EN, typing animation, scroll reveal
├── assets/
│   └── profile.png     # Foto de perfil (extraída del CV)
└── README.md           # Este archivo
```

---

## 🚀 Cómo subir a GitHub Pages

### Opción A — Usuario page (recomendado)

Tu portafolio quedará disponible en `https://marlonp721.github.io/`

1. **Crea un repositorio nuevo en GitHub:**
   - Ve a https://github.com/new
   - Nombre del repo: **`marlonp721.github.io`** (debe coincidir exactamente con tu usuario)
   - Marca como **Public**
   - No agregues README ni .gitignore (déjalo vacío)
   - Click **Create repository**

2. **Sube los archivos desde tu terminal:**
   ```bash
   cd ruta/al/portfolio
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/marlonp721/marlonp721.github.io.git
   git push -u origin main
   ```

3. **Activa GitHub Pages:**
   - En el repo, ve a `Settings → Pages`
   - En **Source**, elige la rama `main` y carpeta `/ (root)`
   - Click **Save**
   - Espera 1-2 minutos y entra a https://marlonp721.github.io/

### Opción B — Project page

Si prefieres tener varios sitios, puedes crear un repo con cualquier nombre (ej: `portfolio`):

1. Crea repo `portfolio` en GitHub
2. Sube los archivos (mismo proceso que arriba pero cambiando el `remote add`)
3. En `Settings → Pages`, activa la rama `main`
4. Estará disponible en `https://marlonp721.github.io/portfolio/`

---

## ✏️ Cómo personalizar

### Cambiar la foto
Reemplaza `assets/profile.png` con tu foto preferida (mejor si es cuadrada o vertical 4:5, mínimo 400x500px).

### Editar textos
Todos los textos están en **dos lugares**:
- `index.html` — texto por defecto en español
- `script.js` — objeto `translations` con versiones ES y EN

Para cambiar un texto:
1. Busca el atributo `data-i18n="clave"` en el HTML
2. Edita el texto en el HTML y también en `script.js → translations.es[clave]` y `translations.en[clave]`

### Cambiar colores
Edita las variables CSS al inicio de `styles.css`:
```css
:root {
  --green:  #00ff88;   /* color principal */
  --cyan:   #00d4ff;   /* acentos secundarios */
  --bg:     #0a0e0d;   /* fondo */
}
```

### Agregar / quitar proyectos
En `index.html`, busca la sección `<!-- PROJECTS -->` y duplica/elimina los bloques `<a class="project-card">`.

---

## 🛠 Tecnologías

- HTML5 semántico
- CSS3 con variables y grid/flexbox
- JavaScript vanilla (sin frameworks)
- Google Fonts: JetBrains Mono + Fira Code
- Diseño responsive (mobile-first)
- Efectos: typing animation, CRT scanlines, scroll reveal

---

## 📝 Vista previa local

Para probarlo en tu Mac antes de subirlo:

```bash
cd ruta/al/portfolio
python3 -m http.server 8080
```

Luego abre http://localhost:8080 en tu navegador.

---

## 📧 Contacto

- **Email:** marlonp721@gmail.com
- **GitHub:** [@marlonp721](https://github.com/marlonp721)
- **LinkedIn:** [marlonp721](https://www.linkedin.com/in/marlonp721/)
