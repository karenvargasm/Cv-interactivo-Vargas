# CV Interactivo - Karen Grissel Vargas Medrano

Proyecto para la Primera Evaluacion Practica de Tecnologias Web I (SIS-214),
Universidad Catolica Boliviana.

## Estructura del proyecto

```
cv-final/
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
│   ├── terminal.js
│   ├── reveal.js
│   ├── projects.js
│   └── contact.js
├── assets/
│   └── images/
└── README.md
```

## Organizacion por bloques

Cada seccion del CV vive en su propia pagina HTML y cada bloque de
funcionalidad tiene su propio archivo CSS o JS:

- `base.css`: variables globales, reset y tipografia
- `layout.css`: encabezado, navegacion lateral, pie de pagina
- `components.css`: botones, tarjetas, terminal, modal, formulario
- `pages.css`: estilos especificos de paginas y responsividad
- `theme.js`: modo claro y oscuro persistente
- `nav.js`: enlace activo segun la pagina actual y menu movil
- `terminal.js`: animacion de escritura en la pagina de inicio
- `reveal.js`: animaciones al hacer scroll y barras de progreso
- `projects.js`: datos de proyectos, filtro por categoria y modal
- `contact.js`: validacion del formulario de contacto

## Funcionalidades

- Navegacion multipagina real: cada subtitulo del menu abre su propio
  archivo HTML en vez de saltar a un ancla dentro de la misma pagina
- Terminal animada en la pagina de inicio
- Barras de habilidades animadas al hacer scroll
- Filtro de proyectos por categoria con modal de detalle
- Formulario de contacto con validacion en tiempo real
- Modo claro y oscuro persistente entre paginas
- Diseno responsivo con menu lateral colapsable en movil
- Accesibilidad: enlace de salto al contenido, foco de teclado visible,
  aria-live, aria-invalid, prefers-reduced-motion

## Como ejecutarlo localmente

```bash
python3 -m http.server 8000
```

Luego visita `http://localhost:8000`.

## Publicacion en GitHub Pages

```bash
git add .
git commit -m "refactor: paginas independientes por seccion del cv"
git push
```

En GitHub: Settings, Pages, Branch main, carpeta raiz, Save.

## Validacion

Antes de entregar, valida cada pagina en https://validator.w3.org/
