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