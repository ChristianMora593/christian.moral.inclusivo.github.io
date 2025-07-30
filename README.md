<p><strong>Nombre:</strong> Christian Mora con Eye Tracking</p>
<p><strong>Enlace Web Github Pages:</strong> https://christianmora593.github.io/christian.moral.inclusivo.github.io/</p>
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
    <li>Usuarios con discapacidad visual (lectores de pantalla, alto contraste).</li>
    <li>Navegación por teclado o voz.</li>
    <li>Adaptable a preferencias de movimiento reducido.</li>
  </ul>

  <hr>
  
  <h3>👁️ Implementación Eye Tracking:</h3>
  <p>1.   Sobre el prototipo creados en el laboratorio 8 agregar las siguientes acciones:
    <li>Utilice WebGazer.js para capturar la mirada del usuario desde la cámara.</li>
    <li>Integre Heatmap.js para representar los datos como mapa de calor.</li>
    <li>Registre la posición estimada de la mirada durante la navegación.</li>
    <li>Permita detener el seguimiento mediante un botón.</li>
    <li>Al detener el seguimiento, muestre el mapa de calor generado con los datos recolectados.</p></li>
  </p>2.  El estudiante deberá desplegar el mapa de calor donde crea conveniente; siempre y cuando esto se documente en el archivo README.md.</p>

  <h3>👁️ Descarga de librerias necesarias:</h3>
  <p>Descargué dos archivos JavaScript:
    <strong>Descargar WebGazer.js</strong>
    <li>Fui a: https://webgazer.cs.brown.edu/</li>
    <li>Me dirigí hasta el botón "Download" lo que me llevó a: https://webgazer.cs.brown.edu/webgazer.js</li>
    <li>Hice clic derecho en la pagina copn el código y seleccioné "Guardar como..."</li>
    <li>Guardé el archivo como webgazer.js en una nueva carpeta que la creé en el directorio de mi proyecto llamada <strong>js</strong></p></li>
  <p><strong>Descargar Heatmap.js</strong>
    <li>Fui a: https://www.patrick-wied.at/static/heatmapjs/</li>
    <li>Me dirigí hasta el botón "Download" lo que me llevó a:: https://cdn.jsdelivr.net/npm/heatmap.js@2.0.5/build/heatmap.min.js</li>
     <li>Hice clic derecho en la pagina copn el código y seleccioné "Guardar como..."</li>
    <li>Guardé el archivo como heatmap.min.js en una nueva carpeta que la creé en el directorio de mi proyecto llamada <strong>js</strong></p></li>
  </p>
  <p><strong>Creación del archivo eye-tracking.js</strong><br>
    Creé un nuevo archivo llamado eye-tracking.js en la carpeta <strong>js</strong> y copia este código:</p>
    <pre>
<code>
// Variables globales
let heatmapInstance = null;
let gazeData = [];
let isTracking = false;

// Configuración del mapa de calor
function initHeatmap() {
    // Crear contenedor para el mapa de calor
    const heatmapContainer = document.createElement('div');
    heatmapContainer.id = 'heatmapContainer';
    heatmapContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
        display: none;
    `;
    document.body.appendChild(heatmapContainer);

    // Inicializar heatmap
    heatmapInstance = h337.create({
        container: heatmapContainer,
        radius: 40,
        maxOpacity: 0.6,
        minOpacity: 0,
        blur: 0.75
    });
}

// Inicializar WebGazer
function initWebGazer() {
    webgazer.setRegression('ridge')
        .setGazeListener(function(data, timestamp) {
            if (data == null || !isTracking) return;
            
            // Guardar datos de mirada
            gazeData.push({
                x: data.x,
                y: data.y,
                value: 1
            });
        })
        .begin();

    // Ocultar el video de predicción
    webgazer.showVideoPreview(true)
        .showPredictionPoints(true)
        .applyKalmanFilter(true);

    // Ajustar el estilo del video
    setTimeout(() => {
        const video = document.getElementById('webgazerVideoFeed');
        if (video) {
            video.style.cssText = `
                position: fixed !important;
                top: 10px !important;
                right: 10px !important;
                width: 200px !important;
                height: 150px !important;
                z-index: 10000 !important;
                border: 2px solid #007bff !important;
                border-radius: 10px !important;
            `;
        }
    }, 1000);
}

// Iniciar seguimiento
function startTracking() {
    if (isTracking) return;
    
    isTracking = true;
    gazeData = []; // Limpiar datos anteriores
    
    // Actualizar UI
    document.getElementById('startBtn').disabled = true;
    document.getElementById('stopBtn').disabled = false;
    document.getElementById('status').textContent = 'Seguimiento activo...';
    document.getElementById('status').style.color = '#28a745';
    
    // Ocultar mapa de calor si estaba visible
    document.getElementById('heatmapContainer').style.display = 'none';
}

// Detener seguimiento
function stopTracking() {
    if (!isTracking) return;
    
    isTracking = false;
    
    // Actualizar UI
    document.getElementById('startBtn').disabled = false;
    document.getElementById('stopBtn').disabled = true;
    document.getElementById('status').textContent = 'Seguimiento detenido';
    document.getElementById('status').style.color = '#dc3545';
    
    // Mostrar mapa de calor
    showHeatmap();
}

// Mostrar mapa de calor
function showHeatmap() {
    if (gazeData.length === 0) {
        alert('No hay datos de seguimiento para mostrar');
        return;
    }
    
    // Mostrar contenedor
    document.getElementById('heatmapContainer').style.display = 'block';
    
    // Actualizar datos del mapa de calor
    heatmapInstance.setData({
        max: 5,
        data: gazeData
    });
    
    // Agregar botón para cerrar
    if (!document.getElementById('closeHeatmapBtn')) {
        const closeBtn = document.createElement('button');
        closeBtn.id = 'closeHeatmapBtn';
        closeBtn.textContent = 'Cerrar Mapa de Calor';
        closeBtn.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 10001;
            padding: 10px 20px;
            background-color: #dc3545;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        `;
        closeBtn.onclick = () => {
            document.getElementById('heatmapContainer').style.display = 'none';
        };
        document.body.appendChild(closeBtn);
    }
}

// Inicializar cuando la página cargue
window.addEventListener('load', function() {
    // Crear controles UI
    createControls();
    
    // Inicializar heatmap
    initHeatmap();
    
    // Inicializar WebGazer
    initWebGazer();
});

// Crear controles de UI
function createControls() {
    const controlPanel = document.createElement('div');
    controlPanel.id = 'eyeTrackingControls';
    controlPanel.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 10000;
    `;
    
    controlPanel.innerHTML = `
        <h3 style="margin-top: 0;">Control de Seguimiento Ocular</h3>
        <p id="status" style="font-weight: bold;">Listo para iniciar</p>
        <button id="startBtn" style="
            padding: 10px 20px;
            margin: 5px;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        ">Iniciar Seguimiento</button>
        <button id="stopBtn" style="
            padding: 10px 20px;
            margin: 5px;
            background-color: #dc3545;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        " disabled>Detener y Ver Mapa</button>
        <div style="margin-top: 10px; font-size: 12px; color: #666;">
            <p>Instrucciones:</p>
            <ul style="margin: 5px 0; padding-left: 20px;">
                <li>Permite el acceso a la cámara</li>
                <li>Mira los puntos rojos para calibrar</li>
                <li>Haz clic en "Iniciar Seguimiento"</li>
                <li>Navega normalmente por la página</li>
                <li>Haz clic en "Detener" para ver el mapa de calor</li>
            </ul>
        </div>
    `;
    
    document.body.appendChild(controlPanel);
    
    // Agregar event listeners
    document.getElementById('startBtn').addEventListener('click', startTracking);
    document.getElementById('stopBtn').addEventListener('click', stopTracking);
}
</code>
    </pre>
      
  <p><strong>Modifiqué archivo HTML:</strong><br>
    Agregué las referencias a estos scripts en mi archivo index.html modificando las lineas antes de la etiqueta <strong>/body</strong>
    <pre>
      <code>
        <!-- Scripts para seguimiento ocular -->
        <script src="js/webgazer.js"></script>
        <script src="js/heatmap.min.js"></script>
        <script src="js/eye-tracking.js"></script>
      </code>
    </pre>
    
  <hr>

  <h3>👁️ Descarga de librerias necesarias:</h3>
  <p>Descargué dos archivos JavaScript:
    <strong>Descargar WebGazer.js</strong>
    <li>Fui a: https://webgazer.cs.brown.edu/</li>
    <li>Me dirigí hasta el botón "Download" lo que me llevó a: https://webgazer.cs.brown.edu/webgazer.js</li>
    <li>Hice clic derecho en la pagina copn el código y seleccioné "Guardar como..."</li>
    <li>Guardé el archivo como webgazer.js en una nueva carpeta que la creé en el directorio de mi proyecto llamada <strong>js</strong></p></li>

  <hr>
  
  <p>Subi los cambios a Github:<br>
    <li>Arrastre los archivos nuevos con sus carpetas respectivas:</li>
    <li>js/webgazer.js</li>
    <li>js/heatmap.min.js</li>
    <li>js/eye-tracking.js</li></p>
    <li>Actualicé el archivo index.html directamente en GitHub</li>
    <strong>Descargar WebGazer.js</strong>
    <li>Fui a: https://webgazer.cs.brown.edu/</li>
    <li>Me dirigí hasta el botón "Download" lo que me llevó a: https://webgazer.cs.brown.edu/webgazer.js</li>
    <li>Hice clic derecho en la pagina copn el código y seleccioné "Guardar como..."</li>
    <li>Guardé el archivo como webgazer.js en una nueva carpeta que la creé en el directorio de mi proyecto llamada <strong>js</strong></p></li>

  <hr>

  <h3>Probar funcionalidad:</h3>
    <p>Descargué dos archivos JavaScript:
    <strong>Descargar WebGazer.js</strong>
    <li>Fui a mi sitio web Github Pages: https://christianmora593.github.io/christian.moral.inclusivo.github.io</li>
    Al cargar la página:<br>
    <li>Aparece un panel de control en la esquina inferior derecha</li>
    <li>Se te pedirá permiso para usar la cámara (acepta)</li>
    <li>Verás un pequeño video de tu cámara en la esquina superior izquierda</li>
    Para calibrar:<br>
    <li>Mira los puntos rojos que aparecen en la pantalla</li>
    <li>Se debe hacer clic en cada punto mientras lo miras</li>
    Para usar:<br>    
    <li>Haz clic en "Iniciar Seguimiento"</li>
    <li>Navegar normalmente por tu página</li>
    <li>Hacer clic en "Detener y Ver Mapa"</li>
    <li>Aparecerá el mapa de calor mostrando dónde miraste más</li>
        
  <hr>
<h4>Calibración</h4>
  <img width="1914" height="1016" alt="img3" src="https://github.com/user-attachments/assets/9c2db8b4-e49b-4f30-84f8-3d8c34ecfb85" />

<h4>Uso de mejora de Eye-Tracking</h4>
  <img width="1918" height="1020" alt="img1" src="https://github.com/user-attachments/assets/28eeb6d6-b501-4c5f-894a-26e82beabe4a" />

  
  <p>✨ <strong>Impacto:</strong><br>
  El portafolio ahora no solo cumple con estándares técnicos, sino que <strong>prioriza la inclusión</strong>, asegurando que todos los usuarios, sin importar sus capacidades, puedan acceder al contenido sin barreras.</p>
