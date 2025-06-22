<p><strong>Nombre:</strong> Christian Mora</p>
<p><strong>Enlace Web Github de referencia:</strong> https://github.com/ChristianMora593/mi-portafolio</p>
<p><strong>Enlace Web Github Inclusivo:</strong> https://github.com/ChristianMora593/christian.moral.inclusivo.github.io</p>
<p><strong>Ajustes en Diseño Inclusivo y accesibilidad Web:</strong></p>
<div class="accessibility-report">
  <h2>Resumen de Mejoras Implementadas en el Portafolio para Diseño Inclusivo y Accesibilidad</h2>

  <p><strong>Proyecto:</strong> Portafolio personal responsivo<br>
  <strong>Enlace al prototipo original (Figma):</strong> <a href="https://www.figma.com/design/ILNilCvarr8vmy4dPgj9wJ/Laboratorio-3--Dise%C3%B1o-responsivo-de-portafolio-personal---Christian-Mora" target="_blank">Ver prototipo</a></p>

  <h3>🔍 Objetivo:</h3>
  <p>Transformar el diseño del portafolio en una página web funcional, responsiva y accesible, siguiendo las pautas WCAG 2.1 y principios de diseño inclusivo.</p>

  <hr>

  <h3>🛠 Mejoras Implementadas:</h3>

  <h4>1. Estructura Semántica y Jerarquía</h4>
  <ul>
    <li>Uso de etiquetas HTML5 semánticas (<code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;footer&gt;</code>).</li>
    <li>Jerarquía correcta de encabezados (<code>h1</code> a <code>h3</code>).</li>
    <li>Roles ARIA para mejorar la navegación con lectores de pantalla (<code>aria-label</code>, <code>aria-labelledby</code>).</li>
  </ul>

  <h4>2. Accesibilidad Visual</h4>
  <ul>
    <li><strong>Contraste adecuado</strong> entre texto/fondo (cumple WCAG AA).</li>
    <li>Texto adaptable (tamaños relativos en <code>rem</code> y <code>em</code>).</li>
    <li>Soporte para <code>prefers-reduced-motion</code> (reduce animaciones).</li>
    <li>Modo alto contraste (<code>prefers-contrast: more</code>).</li>
  </ul>

  <h4>3. Navegación y Usabilidad</h4>
  <ul>
    <li><strong>Enfoque visible</strong> para navegación por teclado (<code>:focus-visible</code>).</li>
    <li><strong>"Skip link"</strong> para saltar al contenido principal.</li>
    <li>Botones y enlaces con descripciones claras (evitando "clic aquí").</li>
    <li>Atributos <code>alt</code> descriptivos en imágenes y <code>aria-label</code> en iconos.</li>
  </ul>

  <h4>4. Formulario Accesible</h4>
  <ul>
    <li>Etiquetas (<code>&lt;label&gt;</code>) asociadas a campos.</li>
    <li>Indicadores de campos obligatorios (<code>aria-required</code>).</li>
    <li>Autocompletado (<code>autocomplete</code>) para nombres, correos, etc.</li>
  </ul>

  <h4>5. Diseño Inclusivo</h4>
  <ul>
    <li><strong>Distribución flexible</strong> en secciones (Hero, Sobre mí, Habilidades, Proyectos, Contacto).</li>
    <li><strong>Responsividad</strong> optimizada para móviles, tablets y desktop.</li>
    <li><strong>Feedback táctil</strong> en botones/interacciones (hover, focus).</li>
  </ul>

  <h4>6. Optimizaciones Técnicas</h4>
  <ul>
    <li>Carga diferida de imágenes (<code>loading="lazy"</code>).</li>
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
    <li>Tarjetas con <code>tabindex="0"</code> para navegación por teclado.</li>
    <li>Texto alternativo en imágenes (<code>alt="Captura del proyecto X mostrando..."</code>).</li>
    <li>Botones con igual tamaño y etiquetas ARIA (<code>aria-label="Ver demo de..."</code>).</li>
  </ul>

  <hr>

  <h3>📌 Próximos Pasos (Opcionales):</h3>
  <ul>
    <li>Añadir un <strong>selector de tema</strong> (claro/oscuro).</li>
    <li>Implementar <strong>validación accesible</strong> en formulario.</li>
    <li>Pruebas con usuarios reales (incluyendo personas con discapacidad).</li>
  </ul>

  <p><strong>Herramientas usadas para verificación:</strong><br>
  <a href="https://wave.webaim.org/" target="_blank">WAVE</a><br>
  Lighthouse (Chrome DevTools)<br>
  NVDA / VoiceOver</p>

  <hr>

  <p>✨ <strong>Impacto:</strong><br>
  El portafolio ahora no solo cumple con estándares técnicos, sino que <strong>prioriza la inclusión</strong>, asegurando que todos los usuarios, sin importar sus capacidades, puedan acceder al contenido sin barreras.</p>

  <p><strong>¿Preguntas o sugerencias?</strong> ¡Estoy abierto a feedback para seguir mejorando! 🚀</p>
</div>
