# CV Interactivo - Karen Grissel Vargas Medrano

Proyecto para la Primera Evaluación Práctica de Tecnologías Web I (SIS-214),
Universidad Católica Boliviana.

## Estructura del proyecto

```
Cv-interactivo-Vargas/
├── index.html
├── perfil.html
├── formacion.html
├── habilidades.html
├── proyectos.html
├── experiencia.html
├── contacto.html
├── css/
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   └── pages.css
├── js/
│   ├── theme.js
│   ├── nav.js
│   ├── email.js
│   ├── formation-areas.js
│   ├── reveal.js
│   ├── projects.js
│   └── contact.js
├── assets/
│   └── images/
└── README.md
```

## Organización por bloques

Cada sección del CV vive en su propia página HTML y cada bloque de
funcionalidad tiene su propio archivo CSS o JS:

- `base.css`: variables globales, reset y tipografía
- `layout.css`: encabezado, navegación lateral, pie de página
- `components.css`: botones, tarjetas, modal, formulario, acordeón
- `pages.css`: estilos específicos de páginas y responsividad
- `theme.js`: modo claro y oscuro persistente
- `nav.js`: enlace activo según la página actual y menú móvil
- `email.js`: copia el correo al portapapeles con confirmación visual
- `formation-areas.js`: despliega el detalle de cada área de formación
- `reveal.js`: animaciones al hacer scroll y barras de progreso
- `projects.js`: datos de proyectos, filtro por categoría y modal
- `contact.js`: validación del formulario de contacto

## Funcionalidades

- Navegación multipágina real: cada apartado del menú abre su propio
  archivo HTML en vez de saltar a un ancla dentro de la misma página
- Línea de tiempo de formación académica en la página de inicio
- Barras de habilidades animadas al hacer scroll
- Filtro de proyectos por categoría con modal de detalle
- Panel desplegable con el detalle de cada área de formación cursada
- Formulario de contacto con validación en tiempo real
- Modo claro y oscuro persistente entre páginas, con paleta cálida en modo claro
- Diseño responsivo con menú lateral colapsable en móvil
- Accesibilidad: enlace de salto al contenido, foco de teclado visible,
  aria-live, aria-invalid, aria-expanded, prefers-reduced-motion

## Cómo ejecutarlo localmente

```bash
python3 -m http.server 8000
```

Luego visita `http://localhost:8000`.

## Publicación en GitHub Pages

```bash
git add .
git commit -m "docs: actualizar readme"
git push
```

En GitHub: Settings, Pages, Branch main, carpeta raíz, Save.

## Validación

Antes de entregar, valida cada página en <https://validator.w3.org/>