# Esamanz — Sitio web

Sitio institucional de Esamanz. HTML/CSS/JS puro, sin frameworks ni proceso de build — lo que ves en el repositorio es exactamente lo que se publica.

## Estructura

```
esamanz-website/
├── index.html          # Inicio
├── nosotros.html        # Misión, visión, objetivos, principios
├── contacto.html         # Formulario y datos de contacto
├── css/
│   └── style.css         # Todos los estilos (tokens de marca al inicio del archivo)
├── js/
│   └── main.js           # Menú móvil, animaciones y formulario de contacto
└── assets/
    └── img/
        ├── logo.svg       # ⚠️ Sube aquí tu logo final (ver abajo)
        └── favicon.svg     # Ícono de respaldo, ya incluido
```

## 1. Subir tu logo

El sitio busca el archivo `assets/img/logo.svg`. Si no existe, automáticamente
se muestra un logo de respaldo (círculo azul marino con "e" y punto rojo) para
que el sitio nunca se vea roto mientras decides el logo final.

Para activar tu logo:
1. Exporta tu logo final como `logo.svg` (ideal) o `logo.png`.
2. Colócalo en `assets/img/logo.svg`. Si usas PNG, cambia la referencia
   `assets/img/logo.svg` por `assets/img/logo.png` en las 3 páginas HTML
   (busca `<img src="assets/img/logo.svg"` en cada archivo).
3. Recomendado: que el logo tenga fondo transparente y funcione bien en un
   contenedor de ~34px de alto (así se usa en el header).

## 2. Editar contenido

- **Colores de marca**: todos están definidos como variables al inicio de
  `css/style.css`, dentro de `:root { ... }`. Cambia un valor ahí y se
  actualiza en todo el sitio.
- **Textos**: cada página es HTML plano, editable directamente.
- **Correo / teléfono de contacto**: aparecen en el footer de las 3 páginas y
  en `contacto.html`. Busca `contacto@esamanz.com` y `+1 (809) 000-0000` y
  reemplázalos por los datos reales.

## 3. Formulario de contacto

Por defecto, el formulario de `contacto.html` abre el cliente de correo del
visitante con el mensaje precargado (no requiere backend ni configuración).

Si prefieres que los mensajes lleguen directo sin abrir el correo del
usuario, conecta el formulario a un servicio gratuito como
[Formspree](https://formspree.io) o [Web3Forms](https://web3forms.com):

1. Crea una cuenta y obtén tu endpoint / access key.
2. En `js/main.js`, reemplaza el bloque marcado con el comentario
   `// Fallback sin backend...` por un `fetch()` hacia ese endpoint.

## 4. Subir a GitHub

```bash
cd esamanz-website
git init
git add .
git commit -m "Sitio web Esamanz"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/esamanz-website.git
git push -u origin main
```

(Reemplaza `TU-USUARIO` por tu usuario de GitHub. Si ya creaste el repo vacío
en GitHub, copia la URL exacta que te da GitHub en vez de la de arriba.)

## 5. Publicar en Cloudflare Pages

1. Entra a [Cloudflare Pages](https://pages.cloudflare.com) → **Create a
   project** → **Connect to Git**.
2. Selecciona el repositorio `esamanz-website`.
3. En la configuración de build:
   - **Framework preset**: `None`
   - **Build command**: (déjalo vacío)
   - **Build output directory**: `/`
4. Click en **Save and Deploy**.

Cloudflare te dará una URL tipo `esamanz-website.pages.dev` de inmediato.
Cada vez que hagas `git push` a `main`, el sitio se vuelve a publicar solo.

### Dominio propio (opcional)
Si tienes un dominio (por ejemplo `esamanz.com`) ya en Cloudflare, ve a tu
proyecto de Pages → **Custom domains** → **Set up a custom domain**, y sigue
el asistente. No necesitas ningún archivo adicional en el repositorio para
esto.

## Notas técnicas

- Tipografías: Space Grotesk (títulos), Inter (texto), IBM Plex Mono
  (etiquetas) — cargadas desde Google Fonts vía CDN.
- El sitio es responsive (se prueba bien desde 320px de ancho) y respeta
  `prefers-reduced-motion` para quienes desactivan animaciones.
- No hay dependencias ni `npm install` — es 100% estático.
