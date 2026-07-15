import './styles/main.css';
import { defaultLocale, getLocale } from './i18n/index.js';

const STORAGE_KEY = 'cv-lang';
const SECTIONS = ['hero', 'process', 'experience', 'skills', 'education', 'creative', 'contact'];

let currentLocale = defaultLocale;
let content = getLocale(defaultLocale);
let openExperienceId = 'ectool';

const chevronIcon =
  '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5.5L7 9.5L11 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';

function getStoredLocale() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'de' || stored === 'en') return stored;
  } catch {
    /* ignore */
  }
  return defaultLocale;
}

function setLocale(code) {
  currentLocale = code;
  content = getLocale(code);
  document.documentElement.lang = code;
  try {
    localStorage.setItem(STORAGE_KEY, code);
  } catch {
    /* ignore */
  }
  updateLangToggle();
  applyStaticTranslations();
  renderDynamicContent();
  refreshScrollEffects();
  updateMeta();
}

function t(path) {
  return path.split('.').reduce((obj, key) => obj?.[key], content) ?? '';
}

function applyStaticTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = t(key);
    if (value) el.textContent = value;
  });
}

function updateMeta() {
  document.title = content.meta.title;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute('content', content.meta.description);
}

function updateLangToggle() {
  document.querySelectorAll('[data-lang]').forEach((el) => {
    el.classList.toggle('is-active', el.getAttribute('data-lang') === currentLocale);
  });
}

function renderNav() {
  const navItems = [
    { id: 'process', label: content.nav.process },
    { id: 'experience', label: content.nav.experience },
    { id: 'skills', label: content.nav.skills },
    { id: 'education', label: content.nav.education },
    { id: 'creative', label: content.nav.creative },
    { id: 'contact', label: content.nav.contact },
  ];

  const desktopList = document.getElementById('nav-list');
  const mobileList = document.getElementById('mobile-nav-list');

  desktopList.innerHTML = navItems
    .map(({ id, label }) => `<li><a class="site-nav__link" href="#${id}" data-nav="${id}">${label}</a></li>`)
    .join('');

  mobileList.innerHTML = navItems
    .map(({ id, label }) => `<li><a class="mobile-nav__link" href="#${id}" data-nav="${id}">${label}</a></li>`)
    .join('');
}

function renderProcess() {
  const flow = document.getElementById('process-flow');
  const { steps } = content.process;

  flow.innerHTML = `
    <div class="process-steps">
      ${steps
        .map(
          (step, i) => `
        <article class="process-step" style="--step-index: ${i}">
          <div class="process-step__header">
            <span class="process-step__dot" aria-hidden="true"></span>
            <span class="process-step__number">${String(i + 1).padStart(2, '0')}</span>
            <h3 class="process-step__title">${step.title}</h3>
          </div>
          <ul class="process-step__list">
            ${step.items.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </article>`
        )
        .join('')}
    </div>`;
}

function renderExperience() {
  const timeline = document.getElementById('experience-timeline');
  timeline.innerHTML = content.experience.roles
    .map((role, i) => {
      const isOpen = openExperienceId === role.id;
      return `
    <article class="exp-item${isOpen ? ' is-open' : ''}" role="listitem" style="--exp-i: ${i}" data-expand-id="${role.id}">
      <span class="exp-item__marker" aria-hidden="true"></span>
      <div class="exp-item__card">
        <button
          class="exp-item__header expand-trigger"
          type="button"
          aria-expanded="${isOpen}"
          aria-controls="exp-details-${role.id}"
        >
          <div class="exp-item__summary">
            <div class="exp-item__meta">
              <span class="exp-item__period">${role.period}</span>
              <span class="exp-item__location">${role.location}</span>
            </div>
            <h3 class="exp-item__company">${role.company}</h3>
            <p class="exp-item__title">${role.title}</p>
            ${
              role.stack.length
                ? `<div class="exp-item__stack">${role.stack.map((s) => `<span class="exp-item__tag">${s}</span>`).join('')}</div>`
                : ''
            }
          </div>
          <span class="expand-toggle" aria-hidden="true">${chevronIcon}</span>
        </button>
        <div class="expand-body" id="exp-details-${role.id}">
          <div class="expand-body__inner">
            <ul class="exp-item__details">
              ${role.bullets.map((b) => `<li>${b}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    </article>`;
    })
    .join('');
}

function renderSkills() {
  const grid = document.getElementById('skills-grid');
  grid.innerHTML = content.skills.groups
    .map(
      (group, i) => `
    <div class="skill-group reveal" style="--reveal-i: ${i}">
      <h3 class="skill-group__name">${group.name}</h3>
      <ul class="skill-group__list">
        ${group.items.map((item) => `<li class="skill-group__item">${item}</li>`).join('')}
      </ul>
    </div>`
    )
    .join('');
}

function renderEducation() {
  const list = document.getElementById('education-list');
  list.innerHTML = content.education.items
    .map(
      (item, i) => `
    <article class="edu-item reveal" style="--reveal-i: ${i}">
      <time class="edu-item__period">${item.period}</time>
      <div class="edu-item__content">
        <h3 class="edu-item__institution">${item.institution}</h3>
        <p class="edu-item__degree">${item.degree}</p>
        ${item.description ? `<p class="edu-item__description">${item.description}</p>` : ''}
        ${
          item.areas?.length
            ? `<ul class="edu-item__areas">${item.areas.map((a) => `<li>${a}</li>`).join('')}</ul>`
            : ''
        }
      </div>
    </article>`
    )
    .join('');
}

function renderCreative() {
  const grid = document.getElementById('creative-grid');
  const footer = document.getElementById('creative-footer');
  const { items, tools, goal } = content.creative;

  grid.innerHTML = items
    .map(
      (item, i) => `
    <article class="creative-card reveal" style="--reveal-i: ${i}">
      <span class="creative-card__index">${String(i + 1).padStart(2, '0')}</span>
      <h3 class="creative-card__title">${item.title}</h3>
      <p class="creative-card__text">${item.text}</p>
    </article>`
    )
    .join('');

  footer.innerHTML = `
    <div class="creative-tools">
      ${tools.map((tool, i) => `<span class="creative-tools__tag" style="--tag-i: ${i}">${tool}</span>`).join('')}
    </div>
    <p class="creative__goal">${goal}</p>`;
}

function renderContact() {
  const container = document.getElementById('contact-links');
  const c = content.contact;
  const links = [
    { label: 'Email', value: c.email, href: `mailto:${c.email}` },
    { label: currentLocale === 'de' ? 'Telefon' : 'Phone', value: c.phone, href: `tel:${c.phone.replace(/\s/g, '')}` },
    { label: currentLocale === 'de' ? 'Standort' : 'Location', value: c.address, href: null },
  ];

  container.innerHTML = links
    .map(
      (link, i) => `
    ${link.href ? `<a class="contact-link" style="--link-i: ${i}" href="${link.href}"${link.href.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : ''}>` : `<div class="contact-link" style="--link-i: ${i}">`}
      <span class="contact-link__label">${link.label}</span>
      <span class="contact-link__value">${link.value}</span>
    ${link.href ? '</a>' : '</div>'}`
    )
    .join('');
}

function renderDynamicContent() {
  renderNav();
  renderProcess();
  renderExperience();
  renderSkills();
  renderEducation();
  renderCreative();
  renderContact();
}

function initExpandables() {
  document.getElementById('experience-timeline')?.addEventListener('click', (e) => {
    const btn = e.target.closest('.expand-trigger');
    if (!btn) return;
    const id = btn.closest('[data-expand-id]')?.dataset.expandId;
    if (!id) return;
    openExperienceId = openExperienceId === id ? null : id;
    renderExperience();
  });
}

function initLanguageToggle() {
  document.querySelector('[data-lang-toggle]')?.addEventListener('click', () => {
    setLocale(currentLocale === 'de' ? 'en' : 'de');
  });
}

function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  toggle?.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    mobileNav.hidden = expanded;
    document.body.classList.toggle('nav-open', !expanded);
  });

  mobileNav?.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      toggle.setAttribute('aria-expanded', 'false');
      mobileNav.hidden = true;
      document.body.classList.remove('nav-open');
    }
  });
}

function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initNavHighlight() {
  const links = () => document.querySelectorAll('[data-nav]');
  const sections = SECTIONS.filter((id) => id !== 'hero').map((id) => document.getElementById(id));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links().forEach((link) => {
            link.classList.toggle('is-active', link.getAttribute('data-nav') === id);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
  );

  sections.forEach((section) => {
    if (section) observer.observe(section);
  });
}

let sectionObserver;

function initSectionScroll() {
  if (sectionObserver) sectionObserver.disconnect();

  sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const section = entry.target;
        section.classList.add('is-in-view');
        section.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
        sectionObserver.unobserve(section);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
  );

  document.querySelectorAll('.section-scroll').forEach((section) => {
    section.classList.remove('is-in-view');
    sectionObserver.observe(section);

    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.88 && rect.bottom > 0) {
      section.classList.add('is-in-view');
      section.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
      sectionObserver.unobserve(section);
    }
  });
}

function initHeroReveal() {
  const hero = document.getElementById('hero');
  requestAnimationFrame(() => {
    hero?.classList.add('is-loaded');
  });
}

function refreshScrollEffects() {
  initSectionScroll();
  observeReveal();
}

let revealObserver;

function observeReveal() {
  if (revealObserver) revealObserver.disconnect();

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
  );

  document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
    const section = el.closest('.section-scroll');
    if (section?.classList.contains('is-in-view')) {
      el.classList.add('is-visible');
      return;
    }
    revealObserver.observe(el);
  });
}

function initScrollAssistant() {
  const assistant = document.getElementById('scroll-assistant');
  const progress = assistant.querySelector('.scroll-assistant__progress');
  const dot = assistant.querySelector('.scroll-assistant__dot');
  const sectionEls = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean);

  let currentSectionIndex = 0;
  let idleTimer;

  function getScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    return docHeight > 0 ? scrollTop / docHeight : 0;
  }

  function getActiveSectionIndex() {
    const viewportMid = window.scrollY + window.innerHeight * 0.35;
    let active = 0;
    sectionEls.forEach((el, i) => {
      if (el.offsetTop <= viewportMid) active = i;
    });
    return active;
  }

  function markIdle() {
    clearTimeout(idleTimer);
    assistant.classList.remove('is-idle');
    idleTimer = setTimeout(() => {
      if (getActiveSectionIndex() < sectionEls.length - 1) {
        assistant.classList.add('is-idle');
      }
    }, 4000);
  }

  function onScroll() {
    progress.style.height = `${getScrollProgress() * 100}%`;

    const newIndex = getActiveSectionIndex();
    if (newIndex !== currentSectionIndex) {
      currentSectionIndex = newIndex;
      assistant.classList.add('is-section-change');
      setTimeout(() => assistant.classList.remove('is-section-change'), 600);
    }
    markIdle();
  }

  dot.addEventListener('click', () => {
    const nextIndex = Math.min(currentSectionIndex + 1, sectionEls.length - 1);
    sectionEls[nextIndex]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  markIdle();
}

function init() {
  currentLocale = getStoredLocale();
  content = getLocale(currentLocale);
  document.documentElement.lang = currentLocale;

  updateLangToggle();
  applyStaticTranslations();
  renderDynamicContent();
  updateMeta();

  initLanguageToggle();
  initExpandables();
  initMobileNav();
  initHeaderScroll();
  initNavHighlight();
  initScrollAssistant();
  initHeroReveal();
  refreshScrollEffects();
}

init();
