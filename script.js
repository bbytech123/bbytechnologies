const menuButton = document.querySelector('.menu-button');
const siteNav = document.querySelector('.site-nav');
const serviceDropdown = document.querySelector('.nav-dropdown');
const serviceToggle = document.querySelector('.nav-dropdown-toggle');
const serviceSubmenus = document.querySelectorAll('.nav-submenu');

menuButton?.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

serviceToggle?.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  const isOpen = serviceDropdown.classList.toggle('open');
  serviceToggle.setAttribute('aria-expanded', String(isOpen));
});

serviceSubmenus.forEach((submenu) => {
  const toggle = submenu.querySelector('.nav-submenu-label');

  toggle?.addEventListener('click', (event) => {
    if (window.matchMedia('(max-width: 860px)').matches) {
      event.preventDefault();
      event.stopPropagation();

      serviceSubmenus.forEach((otherSubmenu) => {
        if (otherSubmenu !== submenu) {
          otherSubmenu.classList.remove('open');
        }
      });

      submenu.classList.toggle('open');
    }
  });
});

document.addEventListener('click', (event) => {
  if (!serviceDropdown?.contains(event.target)) {
    serviceDropdown?.classList.remove('open');
    serviceSubmenus.forEach((submenu) => submenu.classList.remove('open'));
    serviceToggle?.setAttribute('aria-expanded', 'false');
  }
});

siteNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    if (!window.matchMedia('(max-width: 860px)').matches || !link.classList.contains('nav-submenu-label')) {
      siteNav.classList.remove('open');
      menuButton?.setAttribute('aria-expanded', 'false');
    }
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelectorAll('#year').forEach((element) => {
  element.textContent = new Date().getFullYear();
});
