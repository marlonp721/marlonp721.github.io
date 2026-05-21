/* ============================================
   PORTFOLIO JS - MARLON PERALTA
   - Typing animation
   - Language toggle (ES / EN)
   - Smooth nav
   ============================================ */

/* ---------- i18n translations ---------- */
const translations = {
  es: {
    'nav.about': './about',
    'nav.experience': './experience',
    'nav.projects': './projects',
    'nav.skills': './skills',
    'nav.contact': './contact',

    'hero.name': 'Marlon Peralta Panduro',
    'hero.role': 'Ingeniero de Software | Full Stack Developer',
    'hero.stack': 'Ruby on Rails · React · Node.js · Python · AWS · React Native',
    'hero.status': 'Disponible para nuevos proyectos',
    'hero.cta.projects': 'Ver proyectos',
    'hero.cta.contact': 'Contáctame',

    'about.p1': 'Bachiller en Ingeniería de Sistemas e Informática por la Universidad Nacional de San Martín. Más de <strong class="accent">6 años</strong> diseñando, construyendo y operando plataformas web, móviles y APIs en producción — desde startups privadas hasta sistemas del Estado Peruano que usan millones de ciudadanos.',
    'about.p2': 'Me apasiona el código limpio, la arquitectura escalable y la automatización. Lideré soporte técnico para plataformas críticas como <strong>Gob.pe</strong>, <strong>Facilita</strong>, <strong>Denuncias</strong> y <strong>Reclamos</strong>, y construí desde cero la app móvil de <strong>Influgo</strong> publicada en App Store y Google Play.',
    'about.fact1': 'Tarapoto, Perú — Disponible remoto',
    'about.fact2': '6+ años en desarrollo full-stack',
    'about.fact3': '7+ plataformas en producción',
    'about.fact4': 'Apps móviles publicadas en stores',

    'exp.influgo.role': 'Ingeniero de Software',
    'exp.influgo.l1': 'Desarrollo de la plataforma Influgo (Ruby on Rails + React) para gestión de campañas e intercambio entre marcas e influencers.',
    'exp.influgo.l2': 'App móvil híbrida iOS/Android con React Native — publicada en App Store y Google Play.',
    'exp.influgo.l3': 'APIs REST y WebSockets en Node.js para chat en tiempo real.',
    'exp.influgo.l4': 'Infraestructura AWS (Elastic Beanstalk, API Gateway), CI/CD con GitHub Actions y Docker.',
    'exp.influgo.l5': 'Integraciones con MercadoPago, TikTok y Meta APIs.',

    'exp.pcm2.role': 'Analista de Desarrollo de Servicios y Plataformas Digitales',
    'exp.pcm2.l1': 'Liderazgo del soporte técnico para Facilita, Denuncias y Libro de Reclamaciones del Estado Peruano.',
    'exp.pcm2.l2': 'Módulos de gestión de usuarios y formularios para Facilita usando APIs de Gob.pe.',
    'exp.pcm2.l3': 'Sistemas de reportería y envío automatizado de reclamos.',
    'exp.pcm2.l4': 'Mejora de CI/CD con GitLab y optimización de Ruby para arquitectura ARM (Apple Silicon).',

    'exp.netzun.role': 'Programador Backend',
    'exp.netzun.l1': 'APIs backend para plataforma B2B con Python (Django).',
    'exp.netzun.l2': 'Reportería empresarial y mejora de procedimientos almacenados.',
    'exp.netzun.l3': 'TDD (Test Driven Development) y revisión de código colaborativa.',

    'exp.waytech.role': 'Programador Full Stack',
    'exp.waytech.l1': 'Backend Node.js (Express) + Frontend Vue.js.',
    'exp.waytech.l2': 'App móvil Flutter para plataforma de atención psicológica remota.',
    'exp.waytech.l3': 'Refactorización del backend y optimización de DB para reportes.',

    'exp.pcm1.role': 'Desarrollador Full Stack',
    'exp.pcm1.l1': 'Desarrollo de funcionalidades del portal Gob.pe con Ruby on Rails.',
    'exp.pcm1.l2': 'Páginas con accesibilidad 100% según auditoría Lighthouse.',
    'exp.pcm1.l3': 'Migración de Google Analytics a Universal Analytics y mejoras en el CMS.',

    'exp.asis.role': 'Programador Python / PHP / Linux',
    'exp.asis.l1': 'Procesos ETL para carga masiva de datos empresariales.',
    'exp.asis.l2': 'Backend PHP (Laravel) + Frontend Angular y Vue.js.',
    'exp.asis.l3': 'Scripts Python de automatización y optimización de consultas SQL.',

    'exp.sfpd.role': 'Analista de TI',
    'exp.sfpd.l1': 'Implementación del ERP multiplataforma System Forestera (Django + Vue.js).',
    'exp.sfpd.l2': 'Bases de datos MySQL y administración de servidores Linux.',
    'exp.sfpd.l3': 'Dashboards de inteligencia empresarial y scripts Bash de automatización.',

    'projects.sub': 'Plataformas en producción donde he contribuido como desarrollador.',
    'proj.influgo': 'Marketplace que conecta marcas con influencers a través de campañas y canjes. App web + móvil con chat en tiempo real, pagos y métricas de redes sociales.',
    'proj.gobpe': 'Portal único oficial del Estado Peruano. Contribuí en funcionalidades del CMS, accesibilidad 100% según Lighthouse y soporte a entidades públicas en su migración al portal.',
    'proj.facilita': 'Plataforma para que entidades públicas creen formularios digitales para trámites ciudadanos. Implementé módulos de gestión de usuarios y formularios usando APIs de Gob.pe.',
    'proj.reclamos': 'Plataforma oficial del Estado Peruano para presentar reclamos ante entidades públicas. Lideré el soporte técnico y desarrollé sistemas de envío automatizado de reclamos.',
    'proj.denuncias': 'Plataforma del Estado Peruano para que los ciudadanos presenten denuncias a entidades públicas. Soporte técnico, diagnóstico de incidentes y mantenimiento continuo.',
    'proj.netzun': 'Plataforma B2B de educación corporativa y desarrollo de habilidades. Desarrollo de APIs backend, reportería empresarial y aplicación de TDD.',
    'proj.sunat': 'Superintendencia Nacional de Aduanas y de Administración Tributaria. Colaboración en integraciones y soporte a sistemas tributarios del Estado Peruano.',

    'footer.built': 'Construido con HTML, CSS y JavaScript — alojado en GitHub Pages'
  },

  en: {
    'nav.about': './about',
    'nav.experience': './experience',
    'nav.projects': './projects',
    'nav.skills': './skills',
    'nav.contact': './contact',

    'hero.name': 'Marlon Peralta Panduro',
    'hero.role': 'Software Engineer | Full Stack Developer',
    'hero.stack': 'Ruby on Rails · React · Node.js · Python · AWS · React Native',
    'hero.status': 'Available for new projects',
    'hero.cta.projects': 'View projects',
    'hero.cta.contact': 'Get in touch',

    'about.p1': 'B.Sc. in Systems Engineering from the National University of San Martín. Over <strong class="accent">6 years</strong> designing, building and operating web, mobile and API platforms in production — from private startups to Peruvian government systems used by millions of citizens.',
    'about.p2': 'I care about clean code, scalable architecture and automation. I led technical support for critical platforms like <strong>Gob.pe</strong>, <strong>Facilita</strong>, <strong>Denuncias</strong> and <strong>Reclamos</strong>, and built the <strong>Influgo</strong> mobile app from scratch, published on the App Store and Google Play.',
    'about.fact1': 'Tarapoto, Peru — Remote friendly',
    'about.fact2': '6+ years in full-stack development',
    'about.fact3': '7+ platforms in production',
    'about.fact4': 'Mobile apps published in stores',

    'exp.influgo.role': 'Software Engineer',
    'exp.influgo.l1': 'Built and maintained the Influgo platform (Ruby on Rails + React) for managing campaigns and trades between brands and influencers.',
    'exp.influgo.l2': 'Hybrid iOS/Android mobile app with React Native — shipped to App Store and Google Play.',
    'exp.influgo.l3': 'REST APIs and WebSockets in Node.js for real-time chat.',
    'exp.influgo.l4': 'AWS infrastructure (Elastic Beanstalk, API Gateway), CI/CD with GitHub Actions and Docker.',
    'exp.influgo.l5': 'Integrations with MercadoPago, TikTok and Meta APIs.',

    'exp.pcm2.role': 'Digital Services & Platforms Development Analyst',
    'exp.pcm2.l1': 'Led technical support for Facilita, Denuncias and the Peruvian Government Complaints Book.',
    'exp.pcm2.l2': 'User management and form modules for Facilita using Gob.pe APIs.',
    'exp.pcm2.l3': 'Reporting systems and automated complaint forwarding.',
    'exp.pcm2.l4': 'Improved CI/CD with GitLab and optimized Ruby for ARM architecture (Apple Silicon).',

    'exp.netzun.role': 'Backend Developer',
    'exp.netzun.l1': 'Backend APIs for B2B platform using Python (Django).',
    'exp.netzun.l2': 'Business reporting and stored procedure improvements.',
    'exp.netzun.l3': 'TDD (Test Driven Development) and collaborative code review.',

    'exp.waytech.role': 'Full Stack Developer',
    'exp.waytech.l1': 'Backend with Node.js (Express) + Frontend with Vue.js.',
    'exp.waytech.l2': 'Flutter mobile app for a remote psychological care platform.',
    'exp.waytech.l3': 'Backend refactoring and DB optimization for reporting.',

    'exp.pcm1.role': 'Full Stack Developer',
    'exp.pcm1.l1': 'Built features for the Gob.pe portal using Ruby on Rails.',
    'exp.pcm1.l2': 'Pages with 100% accessibility per Lighthouse audit.',
    'exp.pcm1.l3': 'Migrated analytics from Google Analytics to Universal Analytics and improved the CMS.',

    'exp.asis.role': 'Python / PHP / Linux Developer',
    'exp.asis.l1': 'ETL processes for bulk loading enterprise data.',
    'exp.asis.l2': 'Backend with PHP (Laravel) + Frontend with Angular and Vue.js.',
    'exp.asis.l3': 'Python automation scripts and SQL query optimization.',

    'exp.sfpd.role': 'IT Analyst',
    'exp.sfpd.l1': 'Implemented the multi-platform ERP System Forestera (Django + Vue.js).',
    'exp.sfpd.l2': 'MySQL databases and Linux server administration.',
    'exp.sfpd.l3': 'Business intelligence dashboards and Bash automation scripts.',

    'projects.sub': 'Production platforms where I have contributed as a developer.',
    'proj.influgo': 'Marketplace connecting brands with influencers through campaigns and trades. Web + mobile app with real-time chat, payments and social media metrics.',
    'proj.gobpe': 'Official single portal of the Peruvian Government. I contributed to CMS features, 100% Lighthouse accessibility and support for public entities migrating to the portal.',
    'proj.facilita': 'Platform for public entities to create digital forms for citizen procedures. I built user management and form modules using Gob.pe APIs.',
    'proj.reclamos': 'Official Peruvian Government platform for filing complaints against public entities. I led technical support and built automated complaint forwarding systems.',
    'proj.denuncias': 'Peruvian Government platform for citizens to file reports against public entities. Technical support, incident diagnosis and continuous maintenance.',
    'proj.netzun': 'B2B platform for corporate education and skill development. Backend API development, business reporting and TDD adoption.',
    'proj.sunat': 'National Superintendence of Customs and Tax Administration. Collaboration on integrations and support for tax systems of the Peruvian Government.',

    'footer.built': 'Built with HTML, CSS and JavaScript — hosted on GitHub Pages'
  }
};

/* ---------- Language toggle ---------- */
const LANG_KEY = 'portfolio-lang';
let currentLang = localStorage.getItem(LANG_KEY) || 'es';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.setAttribute('lang', lang);

  // Update label
  const label = document.getElementById('langLabel');
  if (label) label.textContent = lang.toUpperCase();

  // Replace text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const txt = translations[lang][key];
    if (txt) {
      // Allow inline HTML for richer about texts
      el.innerHTML = txt;
    }
  });

  // Restart typing animation with new name (same in both langs)
  startTyping(translations[lang]['hero.name']);
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
      typingTimer = setTimeout(tick, 60);
    }
  }
  tick();
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Language toggle button
  const btn = document.getElementById('langToggle');
  if (btn) {
    btn.addEventListener('click', () => {
      applyLang(currentLang === 'es' ? 'en' : 'es');
    });
  }

  applyLang(currentLang);

  // Subtle reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.timeline-item, .project-card, .skill-block').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    io.observe(el);
  });
});
