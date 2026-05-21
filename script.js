/* ============================================
   PORTFOLIO v2 - SPA
   Marlon Peralta Panduro
   ============================================ */

/* ---------- i18n ---------- */
const translations = {
  es: {
    'sidebar.tag': '~/portfolio',
    'sidebar.role': 'Software Engineer',

    'nav.home': 'home',
    'nav.about': 'about',
    'nav.experience': 'experience',
    'nav.projects': 'projects',
    'nav.skills': 'skills',
    'nav.contact': 'contact',

    'home.role': 'Ingeniero de Software · Full Stack Developer',
    'home.status': 'Disponible para nuevos proyectos',
    'home.stat1': 'años de experiencia',
    'home.stat2': 'plataformas en producción',
    'home.stat3': 'apps en App Store / Google Play',
    'home.stat4': 'tecnologías dominadas',
    'home.cta1': 'Ver proyectos',
    'home.cta2': 'Contáctame',

    'about.p1': 'Bachiller en Ingeniería de Sistemas e Informática por la Universidad Nacional de San Martín. Más de <strong class="accent">6 años</strong> diseñando, construyendo y operando plataformas web, móviles y APIs en producción — desde startups privadas hasta sistemas del Estado Peruano que usan millones de ciudadanos.',
    'about.p2': 'Me apasiona el código limpio, la arquitectura escalable y la automatización. Lideré soporte técnico para plataformas críticas como <strong>Gob.pe</strong>, <strong>Facilita</strong>, <strong>Denuncias</strong> y <strong>Reclamos</strong>, y construí desde cero la app móvil de <strong>Influgo</strong>.',
    'about.fact1': 'Tarapoto, Perú — Disponible remoto',
    'about.fact2': '6+ años en desarrollo full-stack',
    'about.fact3': 'Apps móviles publicadas en stores',
    'about.fact4': 'Trabajo con metodologías ágiles (Scrum/Kanban)',

    'projects.open': 'Abrir ↗',
    'projects.coverHint': 'Clic para abrir el sitio ↗',

    'contact.cta.title': '¿Hablamos?',
    'contact.cta.desc': 'Estoy abierto a oportunidades freelance, full-time o proyectos puntuales. Escríbeme y te respondo en menos de 24h.',
    'contact.cta.btn': 'Enviar email'
  },

  en: {
    'sidebar.tag': '~/portfolio',
    'sidebar.role': 'Software Engineer',

    'nav.home': 'home',
    'nav.about': 'about',
    'nav.experience': 'experience',
    'nav.projects': 'projects',
    'nav.skills': 'skills',
    'nav.contact': 'contact',

    'home.role': 'Software Engineer · Full Stack Developer',
    'home.status': 'Available for new projects',
    'home.stat1': 'years of experience',
    'home.stat2': 'platforms in production',
    'home.stat3': 'apps in App Store / Google Play',
    'home.stat4': 'technologies mastered',
    'home.cta1': 'View projects',
    'home.cta2': 'Contact me',

    'about.p1': 'B.Sc. in Systems Engineering from the National University of San Martín. Over <strong class="accent">6 years</strong> designing, building and operating web, mobile and API platforms in production — from private startups to Peruvian government systems used by millions of citizens.',
    'about.p2': 'I care about clean code, scalable architecture and automation. I led technical support for critical platforms like <strong>Gob.pe</strong>, <strong>Facilita</strong>, <strong>Denuncias</strong> and <strong>Reclamos</strong>, and built the <strong>Influgo</strong> mobile app from scratch.',
    'about.fact1': 'Tarapoto, Peru — Remote friendly',
    'about.fact2': '6+ years in full-stack development',
    'about.fact3': 'Mobile apps published in stores',
    'about.fact4': 'Agile methodologies (Scrum/Kanban)',

    'projects.open': 'Open ↗',
    'projects.coverHint': 'Click to open site ↗',

    'contact.cta.title': "Let's talk",
    'contact.cta.desc': "I'm open to freelance opportunities, full-time roles or one-off projects. Send me an email and I'll reply within 24h.",
    'contact.cta.btn': 'Send email'
  }
};

/* ---------- Experience data ---------- */
const experiences = {
  influgo: {
    company: 'Influgo',
    date: 'Abr 2025 — Mar 2026',
    role: { es: 'Ingeniero de Software', en: 'Software Engineer' },
    bullets: {
      es: [
        'Desarrollo y mantenimiento de la plataforma Influgo (Ruby on Rails + React) para gestión de campañas e intercambio entre marcas e influencers.',
        'App móvil híbrida iOS/Android con React Native — publicada en App Store y Google Play.',
        'APIs REST y WebSockets en Node.js para chat en tiempo real.',
        'Infraestructura AWS (Elastic Beanstalk, API Gateway), CI/CD con GitHub Actions y Docker.',
        'Integraciones con MercadoPago, TikTok y Meta APIs para métricas de influencers.',
        'Administración de PostgreSQL y Redis para almacenamiento y caching.'
      ],
      en: [
        'Built and maintained the Influgo platform (Ruby on Rails + React) for campaign management and trades between brands and influencers.',
        'Hybrid iOS/Android mobile app with React Native — shipped to App Store and Google Play.',
        'REST APIs and WebSockets in Node.js for real-time chat.',
        'AWS infrastructure (Elastic Beanstalk, API Gateway), CI/CD with GitHub Actions and Docker.',
        'Integrations with MercadoPago, TikTok and Meta APIs for influencer metrics.',
        'PostgreSQL and Redis management for storage and caching.'
      ]
    },
    tags: ['Ruby on Rails', 'React', 'React Native', 'Node.js', 'AWS', 'PostgreSQL', 'Redis', 'Docker']
  },
  pcm2: {
    company: 'Presidencia del Consejo de Ministros (PCM)',
    date: 'Jul 2023 — Mar 2025',
    role: { es: 'Analista de Desarrollo de Servicios y Plataformas Digitales', en: 'Digital Services & Platforms Development Analyst' },
    bullets: {
      es: [
        'Liderazgo del soporte técnico para Facilita, Denuncias y Libro de Reclamaciones del Estado Peruano.',
        'Módulos de gestión de usuarios y formularios para Facilita usando APIs de Gob.pe.',
        'Sistemas de reportería y envío automatizado de reclamos.',
        'Mejora de CI/CD con GitLab para el proyecto Guías Gob.pe.',
        'Optimización de Ruby para arquitectura ARM (Apple Silicon).',
        'Diagnóstico de incidentes mediante análisis de logs y administración de AWS.'
      ],
      en: [
        'Led technical support for Facilita, Denuncias and the Peruvian Government Complaints Book.',
        'User management and form modules for Facilita using Gob.pe APIs.',
        'Reporting systems and automated complaint forwarding.',
        'Improved CI/CD with GitLab for Guías Gob.pe.',
        'Optimized Ruby for ARM architecture (Apple Silicon).',
        'Incident diagnosis through log analysis and AWS administration.'
      ]
    },
    tags: ['Ruby on Rails', 'React', 'GitLab CI/CD', 'AWS', 'Linux']
  },
  netzun: {
    company: 'NETZUN S.A.',
    date: 'Feb 2023 — Jul 2023',
    role: { es: 'Programador Backend', en: 'Backend Developer' },
    bullets: {
      es: [
        'APIs backend para plataforma B2B con Python (Django).',
        'Reportería empresarial y mejora de procedimientos almacenados.',
        'TDD (Test Driven Development) y revisión de código colaborativa.',
        'Implementación de CI/CD dentro del equipo de desarrollo.'
      ],
      en: [
        'Backend APIs for B2B platform using Python (Django).',
        'Business reporting and stored procedure improvements.',
        'TDD (Test Driven Development) and collaborative code review.',
        'CI/CD implementation within the development team.'
      ]
    },
    tags: ['Python', 'Django', 'TDD', 'CI/CD', 'PostgreSQL']
  },
  waytech: {
    company: 'Waytech Perú',
    date: 'Dic 2022 — Ene 2023',
    role: { es: 'Programador Full Stack', en: 'Full Stack Developer' },
    bullets: {
      es: [
        'Backend Node.js (Express) + Frontend Vue.js.',
        'App móvil Flutter para plataforma de atención psicológica remota.',
        'Validaciones en formularios clínicos y gestión de respuestas de pacientes.',
        'Refactorización del backend y optimización de DB para reportes.'
      ],
      en: [
        'Backend with Node.js (Express) + Frontend with Vue.js.',
        'Flutter mobile app for a remote psychological care platform.',
        'Clinical form validations and patient response management.',
        'Backend refactoring and DB optimization for reporting.'
      ]
    },
    tags: ['Node.js', 'Vue.js', 'Flutter', 'Express']
  },
  pcm1: {
    company: 'PCM — Secretaría de Gobierno Digital',
    date: 'Feb 2022 — Dic 2022',
    role: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
    bullets: {
      es: [
        'Desarrollo de funcionalidades del portal Gob.pe con Ruby on Rails.',
        'Páginas con accesibilidad 100% según auditoría Lighthouse.',
        'Migración de Google Analytics a Universal Analytics.',
        'Soporte técnico para migración de entidades públicas al portal.',
        'Mejora del CMS en colaboración con equipos de UX/UI.'
      ],
      en: [
        'Built features for the Gob.pe portal using Ruby on Rails.',
        '100% accessibility per Lighthouse audit.',
        'Migrated analytics from Google Analytics to Universal Analytics.',
        'Technical support for public entities migrating to the portal.',
        'CMS improvements in collaboration with UX/UI teams.'
      ]
    },
    tags: ['Ruby on Rails', 'Accessibility', 'CMS', 'UX/UI']
  },
  asis: {
    company: 'ASIS Technology Partners',
    date: 'Nov 2021 — Abr 2022',
    role: { es: 'Programador Python / PHP / Linux', en: 'Python / PHP / Linux Developer' },
    bullets: {
      es: [
        'Procesos ETL para carga masiva de datos empresariales.',
        'Backend PHP (Laravel) + Frontend Angular y Vue.js.',
        'Scripts Python de automatización para extracción y procesamiento de datos.',
        'Optimización de consultas SQL para rendimiento empresarial.'
      ],
      en: [
        'ETL processes for bulk loading enterprise data.',
        'Backend with PHP (Laravel) + Frontend with Angular and Vue.js.',
        'Python automation scripts for data extraction and processing.',
        'SQL query optimization for enterprise performance.'
      ]
    },
    tags: ['Python', 'PHP', 'Laravel', 'Angular', 'Vue.js']
  },
  sfpd: {
    company: 'Sustainable Forest Project Development',
    date: 'Oct 2019 — Sep 2021',
    role: { es: 'Analista de TI', en: 'IT Analyst' },
    bullets: {
      es: [
        'Implementación del ERP multiplataforma System Forestera (Django + Vue.js).',
        'Bases de datos MySQL y administración de servidores Linux.',
        'Dashboards de inteligencia empresarial.',
        'Scripts Bash de automatización de procesos del sistema.'
      ],
      en: [
        'Implemented the multi-platform ERP System Forestera (Django + Vue.js).',
        'MySQL databases and Linux server administration.',
        'Business intelligence dashboards.',
        'Bash automation scripts for system processes.'
      ]
    },
    tags: ['Django', 'Vue.js', 'MySQL', 'Linux', 'Bash']
  }
};

/* ---------- Projects data ---------- */
const projects = {
  influgo: {
    name: 'Influgo',
    url: 'https://www.influgo.co/',
    image: 'assets/projects/influgo.jpg',
    desc: {
      es: 'Marketplace que conecta marcas con influencers a través de campañas y canjes. App web + móvil con chat en tiempo real, pagos y métricas de redes sociales.',
      en: 'Marketplace connecting brands with influencers through campaigns and trades. Web + mobile app with real-time chat, payments and social media metrics.'
    },
    tags: ['Ruby on Rails', 'React', 'React Native', 'AWS', 'WebSockets']
  },
  gobpe: {
    name: 'Gob.pe — Portal del Estado',
    url: 'https://www.gob.pe/',
    image: 'assets/projects/gobpe.jpg',
    desc: {
      es: 'Portal único oficial del Estado Peruano. Contribuí en funcionalidades del CMS, accesibilidad 100% según Lighthouse y soporte a entidades públicas en su migración al portal.',
      en: 'Official single portal of the Peruvian Government. I contributed to CMS features, 100% Lighthouse accessibility and support for public entities migrating to the portal.'
    },
    tags: ['Ruby on Rails', 'CMS', 'A11y']
  },
  facilita: {
    name: 'Facilita Perú',
    url: 'https://facilita.gob.pe/',
    image: 'assets/projects/facilita.jpg',
    desc: {
      es: 'Plataforma para que entidades públicas creen formularios digitales para trámites ciudadanos. Implementé módulos de gestión de usuarios y formularios usando APIs de Gob.pe.',
      en: 'Platform for public entities to create digital forms for citizen procedures. I built user management and form modules using Gob.pe APIs.'
    },
    tags: ['Ruby on Rails', 'React', 'API Gob.pe']
  },
  reclamos: {
    name: 'Libro de Reclamaciones',
    url: 'https://reclamos.servicios.gob.pe/',
    image: 'assets/projects/reclamos.jpg',
    desc: {
      es: 'Plataforma oficial del Estado Peruano para presentar reclamos ante entidades públicas. Lideré el soporte técnico y desarrollé sistemas de envío automatizado de reclamos.',
      en: 'Official Peruvian Government platform for filing complaints against public entities. I led technical support and built automated complaint forwarding systems.'
    },
    tags: ['Ruby on Rails', 'AWS', 'Reportería']
  },
  denuncias: {
    name: 'Denuncias del Estado',
    url: 'https://denuncias.servicios.gob.pe/',
    image: 'assets/projects/denuncias.jpg',
    desc: {
      es: 'Plataforma del Estado Peruano para que los ciudadanos presenten denuncias a entidades públicas. Soporte técnico, diagnóstico de incidentes y mantenimiento continuo.',
      en: 'Peruvian Government platform for citizens to file reports against public entities. Technical support, incident diagnosis and continuous maintenance.'
    },
    tags: ['Ruby on Rails', 'AWS', 'GitLab CI']
  },
  netzun: {
    name: 'NETZUN',
    url: 'https://netzun.com/',
    image: 'assets/projects/netzun.jpg',
    desc: {
      es: 'Plataforma B2B de educación corporativa y desarrollo de habilidades. Desarrollo de APIs backend, reportería empresarial y aplicación de TDD.',
      en: 'B2B platform for corporate education and skill development. Backend API development, business reporting and TDD adoption.'
    },
    tags: ['Python', 'Django', 'TDD']
  },
  sunat: {
    name: 'SUNAT',
    url: 'https://www.sunat.gob.pe/',
    image: 'assets/projects/sunat.jpg',
    desc: {
      es: 'Superintendencia Nacional de Aduanas y de Administración Tributaria del Perú. Colaboración en integraciones y soporte a sistemas tributarios del Estado Peruano.',
      en: 'National Superintendence of Customs and Tax Administration of Peru. Collaboration on integrations and support for tax systems of the Peruvian Government.'
    },
    tags: ['Integraciones', 'APIs', 'Estado']
  }
};

/* ---------- State ---------- */
const LANG_KEY = 'portfolio-lang';
let currentLang = localStorage.getItem(LANG_KEY) || 'es';
let currentSection = 'home';
let currentExp = 'influgo';
let currentProj = 'influgo';

/* ---------- i18n apply ---------- */
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.setAttribute('lang', lang);
  const label = document.getElementById('langLabel');
  if (label) label.textContent = lang.toUpperCase();

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) el.innerHTML = translations[lang][key];
  });

  renderExp(currentExp);
  renderProj(currentProj);
  startTyping('Marlon Peralta Panduro');
}

/* ---------- Typing animation ---------- */
let typingTimer = null;
function startTyping(text) {
  const target = document.getElementById('typed-name');
  if (!target) return;
  if (typingTimer) clearTimeout(typingTimer);
  target.textContent = '';
  let i = 0;
  function tick() {
    if (i <= text.length) {
      target.textContent = text.slice(0, i);
      i++;
      typingTimer = setTimeout(tick, 55);
    }
  }
  tick();
}

/* ---------- Section switching ---------- */
function showSection(name) {
  currentSection = name;
  document.querySelectorAll('.panel').forEach(p => {
    p.classList.toggle('active', p.dataset.panel === name);
  });
  document.querySelectorAll('.nav-item').forEach(b => {
    b.classList.toggle('active', b.dataset.section === name);
  });
  // Scroll panel to top
  const active = document.querySelector('.panel.active');
  if (active) active.scrollTop = 0;

  // If home, replay typing
  if (name === 'home') startTyping('Marlon Peralta Panduro');

  if (name === 'projects') {
    renderProj(currentProj);
  }
}

/* ---------- Render Experience detail ---------- */
function renderExp(key) {
  currentExp = key;
  const exp = experiences[key];
  if (!exp) return;
  const lang = currentLang;
  const detail = document.getElementById('expDetail');
  if (!detail) return;
  detail.innerHTML = `
    <h3>${exp.company}</h3>
    <div class="exp-role">${exp.role[lang]} · <span class="accent">${exp.date}</span></div>
    <ul>
      ${exp.bullets[lang].map(b => `<li>${b}</li>`).join('')}
    </ul>
    <div class="tags">${exp.tags.map(t => `<span>${t}</span>`).join('')}</div>
  `;
  document.querySelectorAll('.exp-item').forEach(it => {
    it.classList.toggle('active', it.dataset.exp === key);
  });
}

/* ---------- Render Project ---------- */
function renderProj(key) {
  currentProj = key;
  const proj = projects[key];
  if (!proj) return;
  const lang = currentLang;

  const info = document.getElementById('projInfo');
  if (info) {
    info.innerHTML = `
      <h3>${proj.name}</h3>
      <div class="proj-domain">${new URL(proj.url).hostname}</div>
      <p>${proj.desc[lang]}</p>
      <div class="tags">${proj.tags.map(t => `<span>${t}</span>`).join('')}</div>
    `;
  }

  const url = document.getElementById('projUrl');
  if (url) url.textContent = proj.url;

  const open = document.getElementById('projOpen');
  if (open) open.href = proj.url;

  const cover = document.getElementById('projCover');
  const coverLink = document.getElementById('projCoverLink');
  if (cover && proj.image) {
    cover.src = proj.image;
    cover.alt = `${proj.name} — preview`;
  }
  if (coverLink) {
    coverLink.href = proj.url;
    coverLink.setAttribute('aria-label', `${proj.name} — ${proj.url}`);
  }

  document.querySelectorAll('.proj-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.proj === key);
  });
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  // Language toggle
  document.getElementById('langToggle')?.addEventListener('click', () => {
    applyLang(currentLang === 'es' ? 'en' : 'es');
  });

  // Sidebar nav
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => showSection(btn.dataset.section));
  });

  // Jump buttons from home
  document.querySelectorAll('.nav-jump').forEach(btn => {
    btn.addEventListener('click', () => showSection(btn.dataset.section));
  });

  // Experience list
  document.querySelectorAll('.exp-item').forEach(it => {
    it.addEventListener('click', () => renderExp(it.dataset.exp));
  });

  // Project tabs
  document.querySelectorAll('.proj-tab').forEach(t => {
    t.addEventListener('click', () => renderProj(t.dataset.proj));
  });

  // Mobile toggle (sidebar collapse)
  const sidebar = document.querySelector('.sidebar');
  document.getElementById('mobileToggle')?.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
  });

  // Auto-collapse sidebar on mobile when clicking nav
  document.querySelectorAll('.nav-item, .nav-jump').forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        sidebar.classList.add('collapsed');
      }
    });
  });

  // Initial render
  applyLang(currentLang);
  renderExp(currentExp);
  showSection('home');
});
