<p><strong>Nombre:</strong> Christian Mora</p>
<p><strong>Enlace Web Github de referencia:</strong> https://github.com/ChristianMora593/mi-portafolio</p>
<p><strong>Enlace Web Github Inclusivo:</strong> https://github.com/ChristianMora593/christian.moral.inclusivo.github.io</p>
<p><strong>Ajustes en Diseño Inclusivo y accesibilidad Web:</strong></p>
<div class="accessibility-report">
  <h2>Resumen de Mejoras Implementadas en el Portafolio para Diseño Inclusivo y Accesibilidad</h2>
  <h3>🔍 Objetivo:</h3>
  <p>Transformar el diseño del portafolio en una página web funcional, responsiva y accesible, siguiendo las pautas WCAG 2.1 y principios de diseño inclusivo.</p>

  <hr>

  <h3>🛠 Mejoras Implementadas:</h3>

  <h4>1. Estructura Semántica y Jerarquía</h4>
  <ul>
    <li>Uso de etiquetas HTML5 semánticas (header, nav, section, main, footer).</li>
    <li>Jerarquía correcta de encabezados (h1, a h3).</li>
    <li>Roles ARIA para mejorar la navegación con lectores de pantalla (aria-label, aria-labelledby).</li>
  </ul>

  <h4>2. Accesibilidad Visual</h4>
  <ul>
    <li><strong>Contraste adecuado</strong> entre texto/fondo (cumple WCAG AA).</li>
    <li>Texto adaptable (tamaños relativos en rem y em).</li>
    <li>Soporte para prefers-reduced-motion (reduce animaciones).</li>
    <li>Modo alto contraste (prefers-contrast: more).</li>
  </ul>

  <h4>3. Navegación y Usabilidad</h4>
  <ul>
    <li><strong>Enfoque visible</strong> para navegación por teclado (:focus-visible).</li>
    <li><strong>"Skip link"</strong> para saltar al contenido principal.</li>
    <li>Botones y enlaces con descripciones claras (evitando "clic aquí").</li>
    <li>Atributos alt descriptivos en imágenes y aria-label en iconos.</li>
  </ul>

  <h4>4. Formulario Accesible</h4>
  <ul>
    <li>Etiquetas (&lt;label&gt;) asociadas a campos.</li>
    <li>Indicadores de campos obligatorios (aria-required).</li>
    <li>Autocompletado (autocomplete) para nombres, correos, etc.</li>
  </ul>

  <h4>5. Diseño Inclusivo</h4>
  <ul>
    <li><strong>Distribución flexible</strong> en secciones (Hero, Sobre mí, Habilidades, Proyectos, Contacto).</li>
    <li><strong>Responsividad</strong> optimizada para móviles, tablets y desktop.</li>
    <li><strong>Feedback táctil</strong> en botones/interacciones (hover, focus).</li>
  </ul>

  <h4>6. Optimizaciones Técnicas</h4>
  <ul>
    <li>Carga diferida de imágenes (loading="lazy").</li>
    <li>Fuentes de Google accesibles (legibles en todos los tamaños).</li>
    <li>Compatibilidad con lectores de pantalla (NVDA, VoiceOver).</li>
  </ul>

  <hr>

  <h3>🎯 Resultado:</h3>
  <p>Un portafolio <strong>100% accesible</strong>, <strong>responsivo</strong> y <strong>fácil de usar</strong> para personas con diversas capacidades, incluyendo:</p>
  <ul>
    <li>Usuarios con discapacidad visual (lectores de pantalla, alto contraste).</li>
    <li>Navegación por teclado o voz.</li>
    <li>Adaptable a preferencias de movimiento reducido.</li>
  </ul>

  <p><strong>Ejemplo de mejora clave:</strong><br>
  <strong>Sección "Proyectos":</strong></p>
  <ul>
    <li>Tarjetas con tabindex="0" para navegación por teclado.</li>
    <li>Texto alternativo en imágenes (alt="Captura del proyecto X mostrando...").</li>

  </ul>

  <hr>

  <p>✨ <strong>Impacto:</strong><br>
  El portafolio ahora no solo cumple con estándares técnicos, sino que <strong>prioriza la inclusión</strong>, asegurando que todos los usuarios, sin importar sus capacidades, puedan acceder al contenido sin barreras.</p>
