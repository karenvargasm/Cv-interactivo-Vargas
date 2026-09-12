(function () {
  const grid = document.getElementById('projects_grid');
  if (!grid) return;

  const projects = [
    {
      id: 'mercería',
      title: 'Portal Web Mercería Express',
      category: 'Desarrollo Web',
      summary: 'Interfaz web para presentar productos y servicios con diseño responsivo.',
      details: [
        'Desarrollo de una interfaz web para presentar productos y servicios',
        'diseño de paginas de inicio, catalogo, categorias y productos',
        'Aplicacion de HTML5, CSS3 y JavaScript',
        'Implementacion de diseño responsivo',
        'Trabajo colaborativo mediante control de versiones'
      ]
    },
    {
      id: 'kanbas',
      title: 'Sistema de gestión de tareas Kanbas',
      category: 'Análisis y diseño',
      summary: 'Análisis y diseño de un sistema de gestión de tareas tipo kanban.',
      details: [
        'Modelado de entidades como Usuario, Tarea, Estado, Sprint y Comentario',
        'Diseño de la estructura funcional del sistema',
        'Aplicacion de conceptos de análisis y diseño de sistemas'
      ]
    },
    {
      id: 'programacion',
      title: 'Proyectos de programacion',
      category: 'Programacion',
      summary: 'Ejercicios y aplicaciones academicas con distintas estructuras de datos.',
      details: [
        'Programacion en Java y C++',
        'Uso de funciones, estructuras de control, ciclos y recursividad',
        'Implementacion de estructuras de datos',
        'Desarrollo de algoritmos para resolucion de problemas'
      ]
    },
    {
      id: 'inmuebles',
      title: 'Base de datos para gestión de inmuebles',
      category: 'Bases de Datos',
      summary: 'Diseño de una base de datos relacional para gestión de inmuebles.',
      details: [
        'Modelado de una base de datos para la gestión de inmuebles y usuarios',
        'Utilización de PostgreSQL y SQL',
        'Diseño de tablas, relaciones y restricciones',
        'Aplicacion de conceptos de normalización y organización de datos'
      ]
    },
    {
      id: 'redes',
      title: 'Proyecto de redes con Cisco Packet Tracer',
      category: 'Redes',
      summary: 'Configuracion y simulacion de una red con varios servicios activos.',
      details: [
        'Configuracion de VLAN',
        'Configuracion basica de dispositivos de red',
        'Implementacion y comprobación de conectividad',
        'Configuracion de servicios como DNS, HTTP, FTP y correo electrónico',
        'Uso de Cisco Packet Tracer'
      ]
    },
    {
      id: 'flutter',
      title: 'Aplicaciones con Flutter',
      category: 'Desarrollo Móvil',
      summary: 'Interfaces y aplicaciones móviles construidas con Flutter.',
      details: [
        'Creacion de interfaces utilizando Flutter',
        'Implementacion de componentes y estructuras basicas de aplicaciones',
        'Trabajo con Visual Studio Code'
      ]
    }
  ];

  const filterBar = document.getElementById('filter_bar');
  const modalOverlay = document.getElementById('project_modal');
  const modalTitle = document.getElementById('modal_title');
  const modalCategory = document.getElementById('modal_category');
  const modalSummary = document.getElementById('modal_summary');
  const modalList = document.getElementById('modal_list');
  const modalClose = document.getElementById('modal_close');

  const categories = ['Todos'].concat(
    projects.map(function (p) { return p.category; }).filter(function (value, index, self) {
      return self.indexOf(value) === index;
    })
  );

  function renderFilters() {
    categories.forEach(function (category, index) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'filter_btn' + (index === 0 ? ' is_active' : '');
      button.textContent = category;
      button.dataset.category = category;
      button.addEventListener('click', function () {
        document.querySelectorAll('.filter_btn').forEach(function (btn) {
          btn.classList.remove('is_active');
        });
        button.classList.add('is_active');
        renderProjects(category);
      });
      filterBar.appendChild(button);
    });
  }

  function renderProjects(activeCategory) {
    grid.innerHTML = '';
    const filtered = activeCategory === 'Todos'
      ? projects
      : projects.filter(function (p) { return p.category === activeCategory; });

    filtered.forEach(function (project) {
      const card = document.createElement('article');
      card.className = 'project_card reveal_on_scroll';

      const category = document.createElement('p');
      category.className = 'project_category';
      category.textContent = project.category;

      const title = document.createElement('h3');
      title.textContent = project.title;

      const summary = document.createElement('p');
      summary.className = 'project_summary';
      summary.textContent = project.summary;

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'project_detail_btn';
      button.textContent = 'Ver detalle';
      button.addEventListener('click', function () { openModal(project); });

      card.appendChild(category);
      card.appendChild(title);
      card.appendChild(summary);
      card.appendChild(button);
      grid.appendChild(card);
    });

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is_visible');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      grid.querySelectorAll('.reveal_on_scroll').forEach(function (item) {
        observer.observe(item);
      });
    } else {
      grid.querySelectorAll('.reveal_on_scroll').forEach(function (item) {
        item.classList.add('is_visible');
      });
    }
  }

  function openModal(project) {
    modalTitle.textContent = project.title;
    modalCategory.textContent = project.category;
    modalSummary.textContent = project.summary;
    modalList.innerHTML = '';
    project.details.forEach(function (detail) {
      const item = document.createElement('li');
      item.textContent = detail;
      modalList.appendChild(item);
    });
    modalOverlay.classList.add('is_open');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }

  function closeModal() {
    modalOverlay.classList.remove('is_open');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', function (event) {
    if (event.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && modalOverlay.classList.contains('is_open')) {
      closeModal();
    }
  });

  renderFilters();
  renderProjects('Todos');
})();
