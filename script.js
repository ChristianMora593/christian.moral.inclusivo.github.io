document.addEventListener('DOMContentLoaded', function() {
    // Actualizar año en el footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Menú móvil accesible
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    menuToggle.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        navList.classList.toggle('active');
        
        // Manejar focus después de abrir el menú
        if (!isExpanded) {
            const firstLink = navList.querySelector('a');
            if (firstLink) firstLink.focus();
        }
    });
    
    // Botón de volver arriba accesible
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });
    
    // Cerrar menú al hacer clic en un enlace (para móviles)
    const navLinks = document.querySelectorAll('.nav-list a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navList.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
    
    // Manejar teclado para navegación
    document.addEventListener('keydown', function(e) {
        // Saltar al contenido con teclado
        if (e.key === 'Tab' && document.activeElement === document.body) {
            document.querySelector('.skip-link').focus();
        }
    });
    
    // Mejorar accesibilidad de tarjetas
    const focusableCards = document.querySelectorAll('[tabindex="0"]');
    
    focusableCards.forEach(card => {
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Preferencia de contraste reducido
    if (window.matchMedia('(prefers-contrast: more)').matches) {
        document.documentElement.style.setProperty('--primary-color', '#0044cc');
        document.documentElement.style.setProperty('--secondary-color', '#002266');
    }
    
    // Preferencia de movimiento reducido
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const animatedElements = document.querySelectorAll('*');
        animatedElements.forEach(el => {
            el.style.animationDuration = '0.01ms';
            el.style.animationIterationCount = '1';
            el.style.transitionDuration = '0.01ms';
        });
    }
});