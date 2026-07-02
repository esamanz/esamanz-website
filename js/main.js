// =========================================================
// ESAMANZ — main.js
// =========================================================

// --- Menú móvil ---
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var mobileNav = document.querySelector('.mobile-nav');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Cierra el menú al hacer click en un enlace
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Reveal on scroll ---
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // --- Formulario de contacto ---
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = form.querySelector('#name').value.trim();
      var email = form.querySelector('#email').value.trim();
      var message = form.querySelector('#message').value.trim();
      var status = document.getElementById('form-status');

      if (!name || !email || !message) {
        status.textContent = 'Por favor completa todos los campos.';
        status.style.color = '#C8102E';
        return;
      }

      // Fallback sin backend: abre el cliente de correo con los datos precargados.
      // Para recibir los mensajes directo en un formulario (sin abrir el correo del
      // usuario), conecta este formulario a un servicio como Formspree o Web3Forms
      // y reemplaza este bloque por un fetch() a su endpoint.
      var subject = encodeURIComponent('Contacto desde el sitio web — ' + name);
      var body = encodeURIComponent(message + '\n\n— ' + name + ' (' + email + ')');
      window.location.href = 'mailto:contacto@esamanz.com?subject=' + subject + '&body=' + body;

      status.textContent = 'Abriendo tu cliente de correo para enviar el mensaje…';
      status.style.color = '#445066';
      form.reset();
    });
  }
});
