/* =========================================================
   DATOS: mapa de impacto y beneficios de una ciudad limpia
   ========================================================= */
const DEPARTMENTS = [
  {id:'chinandega', name:'Chinandega', cx:90, cy:200, rx:65, ry:60, fact:'Tierra de volcanes activos: el San Cristóbal, el más alto de Nicaragua, y el Cosigüina.'},
  {id:'leon', name:'León', cx:135, cy:280, rx:70, ry:65, fact:'También gestiona residuos y espacios públicos con participación de su comunidad.'},
  {id:'nuevasegovia', name:'N. Segovia', cx:230, cy:75, rx:65, ry:50, fact:'También gestiona residuos y espacios públicos con participación de su comunidad.'},
  {id:'madriz', name:'Madriz', cx:155, cy:130, rx:50, ry:42, fact:'También gestiona residuos y espacios públicos con participación de su comunidad.'},
  {id:'esteli', name:'Estelí', cx:190, cy:175, rx:52, ry:48, fact:'Nivel ancla: el crecimiento de comercio, fábricas, ferias y visitantes aumenta los residuos; sus salidas y puntos de alta afluencia requieren disposición adecuada. Datos demostrativos del prototipo.'},
  {id:'jinotega', name:'Jinotega', cx:320, cy:120, rx:95, ry:85, fact:'Tierra de nubes y café; sus bosques nubosos son hogar del quetzal.'},
  {id:'matagalpa', name:'Matagalpa', cx:260, cy:230, rx:75, ry:65, fact:'Corazón cafetalero del país, entre montañas y reservas naturales.'},
  {id:'managua', name:'Managua', cx:170, cy:330, rx:55, ry:50, fact:'Capital de Nicaragua, a orillas del lago Xolotlán.'},
  {id:'masaya', name:'Masaya', cx:205, cy:370, rx:32, ry:28, fact:'Cuna de artesanías y del Volcán Masaya, uno de los más activos de Centroamérica.'},
  {id:'granada', name:'Granada', cx:250, cy:365, rx:38, ry:35, fact:'La ciudad colonial más antigua de Centroamérica, junto al Lago Cocibolca.'},
  {id:'carazo', name:'Carazo', cx:170, cy:390, rx:38, ry:32, fact:'Meseta fresca cerca de playas como La Boquita y Casares.'},
  {id:'rivas', name:'Rivas', cx:215, cy:425, rx:48, ry:50, fact:'Puerta a Ometepe, isla formada por dos volcanes en el Lago Cocibolca.'},
  {id:'boaco', name:'Boaco', cx:320, cy:290, rx:52, ry:48, fact:'Tierra de sabanas y ganadería, "la ciudad de las dos cuestas".'},
  {id:'chontales', name:'Chontales', cx:390, cy:320, rx:65, ry:60, fact:'Región ganadera de sabanas y colinas en el centro del país.'},
  {id:'riosanjuan', name:'Río San Juan', cx:410, cy:435, rx:85, ry:65, fact:'Selva tropical del Río San Juan, que une el Cocibolca con el Caribe.'},
  {id:'raan', name:'RAAN', cx:460, cy:110, rx:135, ry:100, fact:'Región Autónoma del Atlántico Norte; incluye la Reserva de Biosfera Bosawás.'},
  {id:'raas', name:'RAAS', cx:475, cy:300, rx:125, ry:105, fact:'Región Autónoma del Atlántico Sur; costa caribeña con Bluefields y cayos coralinos.'},
];

const WASTE_TYPES = [
  {id:'organico', name:'Orgánico', example:'Restos de comida, feria o mercado', object:'restos de comida de mercado', bin:'Cubo orgánico', avoid:'No lo dejés en cunetas ni junto a un botadero.', problem:'Los restos mal dispuestos afectan la limpieza y la salud en espacios públicos.', points:25},
  {id:'plastico', name:'Plástico / uso y descarte', example:'Vasos, bolsas y empaques de eventos', object:'vaso plástico de uso descartable', bin:'Cubo de reciclaje', avoid:'No lo quemés ni lo tirés en la salida del municipio.', problem:'El plástico de eventos y comercios aumenta la disposición inadecuada.', points:25},
  {id:'papel', name:'Papel y cartón', example:'Cajas, afiches y envases limpios', object:'caja de cartón limpia', bin:'Cubo de reciclaje', avoid:'No lo mezcles con restos de comida o residuos sanitarios.', problem:'Separarlo evita acumulación y facilita el manejo adecuado.', points:20},
  {id:'vidrio', name:'Vidrio', example:'Botellas y frascos', object:'botella de vidrio descartada', bin:'Cubo de vidrio', avoid:'No lo dejés suelto: puede causar heridas.', problem:'El vidrio suelto pone en riesgo a personas y visitantes en espacios públicos.', points:25},
  {id:'metal', name:'Metal', example:'Latas y piezas metálicas', object:'lata metálica de bebida usada', bin:'Cubo de reciclaje', avoid:'No lo arrojés en cauces ni espacios públicos.', problem:'Separarlo reduce residuos dispersos en calles y puntos de alta afluencia.', points:20},
  {id:'peligroso', name:'Peligroso / sanitario', example:'Pilas, jeringas o material sanitario', object:'residuo sanitario o pila usada', bin:'Punto especial autorizado', avoid:'No lo mezcles con reciclables ni residuos orgánicos.', problem:'La disposición incorrecta puede afectar la salud de la comunidad.', points:35},
  {id:'voluminoso', name:'Voluminoso / escombro', example:'Muebles, ramas o restos de obra', object:'escombro o mueble abandonado', bin:'Recolección especial', avoid:'No lo uses para crear botaderos en las salidas.', problem:'Abandonarlo favorece botaderos no autorizados y deteriora la imagen urbana.', points:35}
];

const REPORT_PROBLEMS = [
  {id:'acumulacion', label:'Acumulación'},
  {id:'botadero', label:'Botadero no autorizado'},
  {id:'contenedor_lleno', label:'Contenedor lleno'},
  {id:'deposito_mal_usado', label:'Depósito mal usado'},
  {id:'quema', label:'Quema de residuos'},
  {id:'otro', label:'Otro problema'}
];

const REPORT_ZONES = ['centro','mercado','salida_norte','salida_sur','barrio','comercio','fabrica','no_clara'];

const SPECIES = [
  {id:'iguana', name:'Iguana verde', sci:'Iguana iguana', type:'animal', dept:'chinandega', pts:8, emoji:'🦎', blurb:'Reptil arborícola muy común en las zonas secas del Pacífico nicaragüense.'},
  {id:'jicaro', name:'Jícaro', sci:'Crescentia cujete', type:'planta', dept:'chinandega', pts:8, emoji:'🌰', blurb:'Árbol de frutos redondos usados tradicionalmente para hacer güirises y utensilios.'},
  {id:'cusuco', name:'Cusuco', sci:'Dasypus novemcinctus', type:'animal', dept:'leon', pts:8, emoji:'🦔', blurb:'Armadillo nocturno de hábitos excavadores, común en bosques secos.'},
  {id:'genizaro', name:'Genízaro', sci:'Samanea saman', pts:8, type:'planta', dept:'leon', emoji:'🌳', blurb:'Árbol de copa ancha muy usado como sombra en parques y potreros.'},
  {id:'gavilan', name:'Gavilán colilargo', sci:'Buteo albicaudatus', type:'animal', dept:'nuevasegovia', pts:10, emoji:'🦅', blurb:'Ave rapaz de las zonas montañosas del norte, caza desde perchas altas.'},
  {id:'pino', name:'Pino de ocote', sci:'Pinus oocarpa', type:'planta', dept:'nuevasegovia', pts:8, emoji:'🌲', blurb:'Conífera dominante en los bosques de pino-encino del norte del país.'},
  {id:'orquidea', name:'Orquídea de montaña', sci:'Epidendrum spp.', type:'planta', dept:'madriz', pts:12, emoji:'🌸', blurb:'Epífita que crece sobre troncos en las zonas frescas de Madriz.'},
  {id:'ardilla', name:'Ardilla centroamericana', sci:'Sciurus variegatoides', type:'animal', dept:'madriz', pts:8, emoji:'🐿️', blurb:'Roedor arborícola muy activo durante el día en bosques secos y de pino.'},
  {id:'tabaco', name:'Tabaco', sci:'Nicotiana tabacum', type:'planta', dept:'esteli', pts:8, emoji:'🍃', blurb:'Cultivo emblemático del valle de Estelí, base de la tradición puchera.'},
  {id:'chachalaca', name:'Chachalaca', sci:'Ortalis vetula', type:'animal', dept:'esteli', pts:10, emoji:'🐔', blurb:'Ave ruidosa que anuncia el amanecer en los bosques secos del norte.'},
  {id:'quetzal', name:'Quetzal', sci:'Pharomachrus mocinno', type:'animal', dept:'jinotega', pts:20, emoji:'🦜', blurb:'Ave de plumaje esmeralda que habita los bosques nubosos de Jinotega. ¡Especie rara!'},
  {id:'cafe', name:'Cafeto', sci:'Coffea arabica', type:'planta', dept:'jinotega', pts:10, emoji:'☕', blurb:'Arbusto que sostiene la economía cafetalera de las montañas del norte.'},
  {id:'tucan', name:'Tucán pico iris', sci:'Ramphastos sulfuratus', type:'animal', dept:'matagalpa', pts:15, emoji:'🦤', blurb:'Reconocible por su pico multicolor, habita bosques húmedos de altura.'},
  {id:'helecho', name:'Helecho arborescente', sci:'Cyathea spp.', type:'planta', dept:'matagalpa', pts:10, emoji:'🌿', blurb:'Helecho gigante propio de las zonas húmedas y sombreadas de montaña.'},
  {id:'guardabarranco', name:'Guardabarranco', sci:'Eumomota superciliosa', type:'animal', dept:'managua', pts:15, emoji:'🐦', blurb:'Ave nacional de Nicaragua, reconocible por su cola en forma de péndulo.'},
  {id:'sacuanjoche', name:'Sacuanjoche', sci:'Plumeria rubra', type:'planta', dept:'managua', pts:15, emoji:'🌺', blurb:'Flor nacional de Nicaragua, de aroma dulce y pétalos blancos y amarillos.'},
  {id:'chocoyo', name:'Chocoyo', sci:'Aratinga spp.', type:'animal', dept:'masaya', pts:10, emoji:'🦜', blurb:'Perico verde que anida en las paredes del cráter del Volcán Masaya.'},
  {id:'ceibo', name:'Ceibo', sci:'Ceiba pentandra', type:'planta', dept:'masaya', pts:10, emoji:'🌳', blurb:'Árbol sagrado prehispánico, uno de los más altos de los bosques nicaragüenses.'},
  {id:'monocara', name:'Mono cara blanca', sci:'Cebus capucinus', type:'animal', dept:'granada', pts:12, emoji:'🐒', blurb:'Primate inteligente y social, común en las Isletas de Granada.'},
  {id:'palmera', name:'Palmera real', sci:'Roystonea regia', type:'planta', dept:'granada', pts:8, emoji:'🌴', blurb:'Palmera esbelta típica de los paisajes costeros y urbanos coloniales.'},
  {id:'pizote', name:'Pizote', sci:'Nasua narica', type:'animal', dept:'carazo', pts:10, emoji:'🦝', blurb:'Pariente del mapache, anda en grupos buscando frutas e insectos.'},
  {id:'madrono', name:'Madroño', sci:'Calycophyllum candidissimum', type:'planta', dept:'carazo', pts:12, emoji:'🌳', blurb:'Árbol nacional de Nicaragua, de corteza que se desprende en placas.'},
  {id:'tiburontoro', name:'Tiburón toro del Cocibolca', sci:'Carcharhinus leucas', type:'animal', dept:'rivas', pts:20, emoji:'🦈', blurb:'Uno de los pocos tiburones del mundo que vive en agua dulce. ¡Especie rara!'},
  {id:'ceibaometepe', name:'Ceiba de Ometepe', sci:'Ceiba pentandra', type:'planta', dept:'rivas', pts:10, emoji:'🌴', blurb:'Ejemplares centenarios que crecen entre los volcanes Concepción y Maderas.'},
  {id:'gavilancola', name:'Gavilán colirrojo', sci:'Buteo jamaicensis', type:'animal', dept:'boaco', pts:10, emoji:'🦅', blurb:'Rapaz de las sabanas ganaderas del centro del país.'},
  {id:'robesabana', name:'Roble sabana', sci:'Tabebuia rosea', type:'planta', dept:'boaco', pts:8, emoji:'🌸', blurb:'Árbol de flores rosadas que cubre las colinas de Boaco en primavera.'},
  {id:'venado', name:'Venado cola blanca', sci:'Odocoileus virginianus', type:'animal', dept:'chontales', pts:12, emoji:'🦌', blurb:'Mamífero herbívoro típico de las sabanas y bosques de Chontales.'},
  {id:'jicarosab', name:'Jícaro sabanero', sci:'Crescentia alata', type:'planta', dept:'chontales', pts:8, emoji:'🌰', blurb:'Árbol de hojas trifoliadas, resistente a la sequía de las sabanas ganaderas.'},
  {id:'jaguar', name:'Jaguar', sci:'Panthera onca', type:'animal', dept:'riosanjuan', pts:25, emoji:'🐆', blurb:'El felino más grande de América, habita la selva del Indio Maíz. ¡Especie muy rara!'},
  {id:'danto', name:'Danto (tapir)', sci:'Tapirus bairdii', type:'animal', dept:'riosanjuan', pts:20, emoji:'🐘', blurb:'El mamífero terrestre más grande de Centroamérica, jardinero de la selva.'},
  {id:'caoba', name:'Caoba', sci:'Swietenia macrophylla', type:'planta', dept:'riosanjuan', pts:12, emoji:'🌳', blurb:'Árbol maderable de gran valor ecológico, protegido en la reserva.'},
  {id:'aguilaharpia', name:'Águila harpía', sci:'Harpia harpyja', type:'animal', dept:'raan', pts:25, emoji:'🦅', blurb:'Una de las águilas más poderosas del mundo, símbolo de Bosawás. ¡Especie muy rara!'},
  {id:'cedroreal', name:'Cedro real', sci:'Cedrela odorata', type:'planta', dept:'raan', pts:12, emoji:'🌲', blurb:'Árbol maderable aromático propio de la selva tropical de Bosawás.'},
  {id:'manati', name:'Manatí antillano', sci:'Trichechus manatus', type:'animal', dept:'raas', pts:25, emoji:'🐋', blurb:'Mamífero acuático en peligro que habita los ríos y lagunas del Caribe sur. ¡Especie muy rara!'},
  {id:'cocotero', name:'Cocotero', sci:'Cocos nucifera', type:'planta', dept:'raas', pts:8, emoji:'🥥', blurb:'Palmera costera esencial en la vida y gastronomía del Caribe nicaragüense.'},
];

const RANKING_OTHERS = [
  {name:'María José R.', zone:'Barrio El Rosario', school:'Centro Estelí', dept:'Estelí', score:1860, species:4, reports:18, objectives:9},
  {name:'Comercio La Perla', zone:'Centro de Estelí', school:'Comercio local', dept:'Estelí', score:1510, species:2, reports:12, objectives:7},
  {name:'Diego C.', zone:'Salida Norte', school:'Brigada juvenil', dept:'Estelí', score:1080, species:3, reports:9, objectives:6},
  {name:'Visitante Nica', zone:'Mercado Alfredo Lazo', school:'Visitante', dept:'Estelí', score:960, species:1, reports:6, objectives:5},
];

/* =========================================================
   AVATAR DEL EXPLORADOR (capas simples, sin librerías)
   ========================================================= */
const AVATAR_OPTIONS = {
  skin:   ['#F2D0A9', '#E8B382', '#C68A5D', '#8D5A3B', '#5C3A24'],
  hair:   ['#1C1208', '#3B2417', '#6B3E1E', '#A85C2A', '#D6B370', '#1a1a1a'],
  shirt:  ['#2E7D4F', '#C8FF3D', '#FF6A47', '#2B3A67', '#F2C245', '#8E44AD'],
  pants:  ['#2B3A67', '#3F5647', '#12241A', '#5C3A24', '#7E9585'],
  shoes:  ['#1a1a1a', '#F3EEDC', '#8E44AD', '#FF6A47'],
};

let player = {
  alias: '',
  avatar: { skin: AVATAR_OPTIONS.skin[0], hair: AVATAR_OPTIONS.hair[0], shirt: AVATAR_OPTIONS.shirt[0], pants: AVATAR_OPTIONS.pants[0], shoes: AVATAR_OPTIONS.shoes[0] },
};

// avatar 2D por capas — nada de sprites/3D, solo formas SVG coloreadas
function avatarSVG(a){
  return `
  <svg class="avatar-art" viewBox="0 0 100 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Avatar ciudadano NicaViva">
    <g class="av-shadow"><ellipse cx="50" cy="122" rx="27" ry="6" fill="rgba(0,0,0,0.18)"/></g>
    <g class="av-legs">
      <rect x="30" y="88" width="16" height="30" rx="5" fill="${a.pants}"/>
      <rect x="54" y="88" width="16" height="30" rx="5" fill="${a.pants}"/>
      <rect x="25" y="112" width="23" height="10" rx="5" fill="${a.shoes}"/>
      <rect x="52" y="112" width="23" height="10" rx="5" fill="${a.shoes}"/>
    </g>
    <g class="av-body">
      <rect x="26" y="52" width="48" height="42" rx="14" fill="${a.shirt}"/>
      <path d="M52 54h20v34c-5 3-11 5-20 5z" fill="#12241A" opacity=".14"/>
    </g>
    <g class="av-head">
      <circle class="av-face" cx="50" cy="34" r="24" fill="${a.skin}"/>
      <circle cx="42" cy="26" r="10" fill="#fff" opacity=".18"/>
      <path class="av-hair" d="M25 31c1-16 11-25 25-25 14 0 24 9 25 25-8-7-15-10-24-9-10 1-17 5-26 9z" fill="${a.hair}"/>
      <path d="M31 23q8-12 19-12q11 0 19 12" stroke="#fff" stroke-width="2" opacity=".1" fill="none"/>
      <g class="av-eyes">
        <circle cx="41" cy="35" r="3" fill="#fff"/>
        <circle cx="59" cy="35" r="3" fill="#fff"/>
        <circle cx="41" cy="35" r="1.5" fill="#12241A"/>
        <circle cx="59" cy="35" r="1.5" fill="#12241A"/>
        <circle cx="40.5" cy="34.5" r=".6" fill="#fff"/>
        <circle cx="58.5" cy="34.5" r=".6" fill="#fff"/>
      </g>
      <path class="av-mouth" d="M43 44q7 5 14 0" stroke="#12241A" stroke-width="2" fill="none" stroke-linecap="round"/>
    </g>
  </svg>`;
}
function renderAvatarEverywhere(){
  document.querySelectorAll('.avatar-badge, .avatar-preview, .profile-avatar-big').forEach(el => {
    el.innerHTML = avatarSVG(player.avatar);
  });
}

function renderAvatarPicker(){
  const wrap = document.getElementById('avatarPicker');
  const rows = [
    {key:'skin', label:'Piel'}, {key:'hair', label:'Cabello'}, {key:'shirt', label:'Camisa'},
    {key:'pants', label:'Pantalón'}, {key:'shoes', label:'Zapatos'},
  ];
  wrap.innerHTML = rows.map(r => `
    <div class="picker-row">
      <div class="picker-label">${r.label}</div>
      <div class="picker-swatches">
        ${AVATAR_OPTIONS[r.key].map(color => `<div class="swatch" data-key="${r.key}" data-value="${color}" style="background:${color}"></div>`).join('')}
      </div>
    </div>`).join('');

  function refreshSelected(){
    wrap.querySelectorAll('.swatch').forEach(s => {
      s.classList.toggle('selected', player.avatar[s.dataset.key] === s.dataset.value);
    });
  }
  wrap.querySelectorAll('.swatch').forEach(s => {
    s.addEventListener('click', () => {
      player.avatar[s.dataset.key] = s.dataset.value;
      refreshSelected();
      renderAvatarEverywhere();
      saveDemoState();
    });
  });
  refreshSelected();
}

/* =========================================================
   SISTEMA DE NIVELES (los 17 departamentos = 17 niveles)
   El GPS/departamento de origen de la especie ya NO bloquea
   el avance — es narrativa. Lo que avanza el nivel son los
   objetivos (plantas/animales/reportes) cumplidos desde
   cualquier lugar donde esté el jugador.
   ========================================================= */
const LEVEL_ORDER = [
  'esteli','nuevasegovia','madriz','jinotega','matagalpa','leon','chinandega',
  'managua','masaya','carazo','granada','rivas','boaco','chontales',
  'riosanjuan','raan','raas',
];
const LEVEL_DISPLAY_NAME = { raan:'Caribe Norte', raas:'Caribe Sur' };

function levelObjectivesFor(index){
  // La misión cívica manda; biodiversidad queda como bonus opcional.
  if(index < 5)  return { plantas:0, animales:0, clasificaciones:2, reportes:1 };
  if(index < 11) return { plantas:0, animales:0, clasificaciones:3, reportes:2 };
  return { plantas:0, animales:0, clasificaciones:4, reportes:2 };
}

let currentLevelIndex = 0;
let completedLevels = new Set();
let levelProgress = { plantas:0, animales:0, clasificaciones:0, reportes:0 };
let reportsCount = 0;
let classificationsCount = 0;
let objectivesCompletedTotal = 0;

function levelIndexOfDept(deptId){ return LEVEL_ORDER.indexOf(deptId); }
function levelDisplayName(deptId){
  const dept = DEPARTMENTS.find(d => d.id === deptId);
  return LEVEL_DISPLAY_NAME[deptId] || (dept ? dept.name : deptId);
}

function checkLevelObjectives(){
  const goal = levelObjectivesFor(currentLevelIndex);
  if(levelProgress.clasificaciones >= goal.clasificaciones && levelProgress.reportes >= goal.reportes){
    const deptId = LEVEL_ORDER[currentLevelIndex];
    if(completedLevels.has(deptId)) return;
    completedLevels.add(deptId);
    updatePoints(300);
    showToast(`🏆 ¡Nivel completado: ${levelDisplayName(deptId)}!`);
    if(currentLevelIndex < LEVEL_ORDER.length - 1){
      currentLevelIndex++;
      levelProgress = { plantas:0, animales:0, clasificaciones:0, reportes:0 };
      showToast(`🟢 Nuevo nivel NicaViva: ${levelDisplayName(LEVEL_ORDER[currentLevelIndex])}`);
    } else {
      showToast('🇳🇮 ¡Completaste los 17 niveles de NicaViva!');
    }
    updateBrandSub();
    renderMap();
  }
}
function updateBrandSub(){
  const sub = document.getElementById('brandSub');
  if(sub) sub.textContent = `Nivel ${currentLevelIndex+1}/17 · ${levelDisplayName(LEVEL_ORDER[currentLevelIndex])}`;
}


/* =========================================================
   ESTADO
   ========================================================= */
let totalPts = 0;
let discovered = new Set();
let unlockedDepts = new Set();
let litterReports = {};
DEPARTMENTS.forEach(d => litterReports[d.id] = 0);
let currentMode = 'clasificar';
let catalogFilter = 'todas';
let activityLog = [];

const STORAGE_KEY = 'nicaviva-demo-state-v1';
function databaseRecord(){
  return {
    profile: { alias: player.alias || 'Ciudadano NicaViva', avatar: player.avatar },
    progress: {
      totalPoints: totalPts,
      currentLevel: currentLevelIndex + 1,
      currentDepartment: levelDisplayName(LEVEL_ORDER[currentLevelIndex]),
      completedLevels: [...completedLevels],
      levelProgress,
    },
    activity: { classifications: classificationsCount, reports: reportsCount, objectivesCompleted: objectivesCompletedTotal },
    litterReports,
    activityLog: activityLog.slice(-30),
    updatedAt: new Date().toISOString(),
  };
}
function syncDatabase(){
  const dbState = window.NICAVIVA_DB;
  if(!dbState || !dbState.user || !dbState.database) return;
  dbState.database.ref(`users/${dbState.user.uid}`).set(databaseRecord()).catch(error => {
    console.warn('No se pudo sincronizar el progreso:', error);
  });
}
function recordActivity(type, data){
  activityLog.push({type, ...data, createdAt: new Date().toISOString()});
  if(activityLog.length > 30) activityLog = activityLog.slice(-30);
  syncDatabase();
}
function saveDemoState(){
  const state = {
    player,
    totalPts,
    discovered: [...discovered],
    litterReports,
    currentLevelIndex,
    completedLevels: [...completedLevels],
    levelProgress,
    reportsCount,
    classificationsCount,
    objectivesCompletedTotal,
    activityLog
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  syncDatabase();
}

function loadDemoState(){
  const raw = localStorage.getItem(STORAGE_KEY);
  if(!raw) return;
  const saved = JSON.parse(raw);
  if(saved.player && typeof saved.player === 'object'){
    player = {
      ...player,
      ...saved.player,
      avatar: {...player.avatar, ...(saved.player.avatar || {})}
    };
  }
  if(Number.isFinite(saved.totalPts)) totalPts = saved.totalPts;
  if(Array.isArray(saved.discovered)) discovered = new Set(saved.discovered);
  if(saved.litterReports && typeof saved.litterReports === 'object'){
    litterReports = {...litterReports, ...saved.litterReports};
  }
  if(Number.isInteger(saved.currentLevelIndex)){
    currentLevelIndex = Math.max(0, Math.min(saved.currentLevelIndex, LEVEL_ORDER.length - 1));
  }
  if(Array.isArray(saved.completedLevels)) completedLevels = new Set(saved.completedLevels);
  if(saved.levelProgress && typeof saved.levelProgress === 'object'){
    levelProgress = {...levelProgress, ...saved.levelProgress};
  }
  if(Number.isFinite(saved.reportsCount)) reportsCount = saved.reportsCount;
  if(Number.isFinite(saved.classificationsCount)) classificationsCount = saved.classificationsCount;
  if(Number.isFinite(saved.objectivesCompletedTotal)) objectivesCompletedTotal = saved.objectivesCompletedTotal;
  if(Array.isArray(saved.activityLog)) activityLog = saved.activityLog.slice(-30);
}

/* =========================================================
   CONTORNO DE NICARAGUA + TESELADO DE DEPARTAMENTOS
   (diagrama de Voronoi con pesos, recortado a la silueta real
   del país, para que los territorios encajen sin huecos ni
   superposiciones — igual que un mapa político real)
   ========================================================= */
const COUNTRY_OUTLINE = [
  [25,175],[55,135],[90,95],[140,65],[200,45],[270,30],[340,20],
  [420,15],[490,25],[540,55],[575,100],[595,150],[580,200],
  [565,260],[545,320],[515,375],[480,420],[440,455],[405,475],
  [360,478],[310,472],[265,462],[225,448],[195,420],[165,390],
  [140,355],[110,315],[80,265],[55,210]
];

function clipHalfPlane(poly, nx, ny, c){
  // conserva los puntos del polígono donde nx*x + ny*y <= c
  const out = [];
  for(let i=0;i<poly.length;i++){
    const curr = poly[i], prev = poly[(i-1+poly.length)%poly.length];
    const dCurr = nx*curr[0]+ny*curr[1]-c, dPrev = nx*prev[0]+ny*prev[1]-c;
    const currIn = dCurr <= 0, prevIn = dPrev <= 0;
    if(currIn){
      if(!prevIn){ const t = dPrev/(dPrev-dCurr); out.push([prev[0]+t*(curr[0]-prev[0]), prev[1]+t*(curr[1]-prev[1])]); }
      out.push(curr);
    } else if(prevIn){
      const t = dPrev/(dPrev-dCurr); out.push([prev[0]+t*(curr[0]-prev[0]), prev[1]+t*(curr[1]-prev[1])]);
    }
  }
  return out;
}

// diagrama de potencias (Voronoi con pesos): los departamentos más
// grandes (mayor "peso", tomado de su rx/ry) ganan más territorio,
// igual que Jinotega o la RAAN en el mapa real
function powerCell(site, allSites, outline){
  let poly = outline.slice();
  const ri = (site.rx + site.ry) / 2;
  for(const other of allSites){
    if(other === site) continue;
    const rj = (other.rx + other.ry) / 2;
    const nx = other.cx - site.cx, ny = other.cy - site.cy;
    const c = (other.cx*other.cx + other.cy*other.cy - rj*rj - site.cx*site.cx - site.cy*site.cy + ri*ri) / 2;
    poly = clipHalfPlane(poly, nx, ny, c);
    if(poly.length === 0) break;
  }
  return poly;
}

function polygonToPath(poly){
  if(!poly.length) return '';
  return 'M ' + poly.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' L ') + ' Z';
}

/* =========================================================
   RENDER: MAPA
   ========================================================= */
const mapSvg = document.getElementById('mapSvg');
function speciesOfDept(deptId){ return SPECIES.filter(s => s.dept === deptId); }
function deptState(deptId){
  const idx = levelIndexOfDept(deptId);
  if(completedLevels.has(deptId)) return 'completed';
  if(idx === currentLevelIndex) return 'unlocked'; // "unlocked" = nivel actual (verde) — se mantiene el nombre para no tocar el CSS/render existentes
  return 'locked';
}
function renderMap(){
  const customEls = mapSvg.querySelectorAll('[data-dept]');
  if(customEls.length > 0){
    renderCustomMap(customEls);
  } else {
    renderGeneratedMap();
  }
  updateMapStats();
}

/* ---- Opción A: mapa generado automáticamente (respaldo, sin SVG propio) ---- */
function renderGeneratedMap(){
  mapSvg.innerHTML = '';

  const outline = document.createElementNS('http://www.w3.org/2000/svg','path');
  outline.setAttribute('d', polygonToPath(COUNTRY_OUTLINE));
  outline.setAttribute('class', 'country-outline');
  mapSvg.appendChild(outline);

  DEPARTMENTS.forEach(dept => {
    const state = deptState(dept.id);
    const cell = powerCell(dept, DEPARTMENTS, COUNTRY_OUTLINE);
    if(cell.length < 3) return;

    const path = document.createElementNS('http://www.w3.org/2000/svg','path');
    path.setAttribute('d', polygonToPath(cell));
    path.setAttribute('class', 'dept-shape ' + state);
    path.addEventListener('click', () => openDeptSheet(dept.id));
    mapSvg.appendChild(path);

    let cx = 0, cy = 0;
    cell.forEach(p => { cx += p[0]; cy += p[1]; });
    cx /= cell.length; cy /= cell.length;
    appendDeptLabel(dept, state, cx, cy);
  });

  // lagos Xolotlán y Cocibolca + isla de Ometepe, para que el croquis
  // se reconozca de inmediato como el de Nicaragua
  function drawLake(cx, cy, rx, ry, rot){
    const el = document.createElementNS('http://www.w3.org/2000/svg','ellipse');
    el.setAttribute('cx', cx); el.setAttribute('cy', cy);
    el.setAttribute('rx', rx); el.setAttribute('ry', ry);
    el.setAttribute('transform', `rotate(${rot} ${cx} ${cy})`);
    el.setAttribute('class', 'lake');
    mapSvg.appendChild(el);
  }
  drawLake(190, 300, 55, 16, -12); // Lago Xolotlán (Managua)
  drawLake(310, 410, 80, 32, 38);  // Lago Cocibolca (Nicaragua)
  [[280,388,7],[320,420,5.5]].forEach(([x,y,r]) => {
    const isl = document.createElementNS('http://www.w3.org/2000/svg','circle');
    isl.setAttribute('cx', x); isl.setAttribute('cy', y); isl.setAttribute('r', r);
    isl.setAttribute('class', 'ometepe');
    mapSvg.appendChild(isl);
  });
}

/* ---- Opción B: tu propio SVG (elementos con data-dept="id") ---- */
function renderCustomMap(customEls){
  mapSvg.querySelectorAll('.auto-label').forEach(l => l.remove());
  mapSvg.setAttribute('aria-label', 'Mapa interactivo de impacto de Nicaragua. Estelí es el nivel ancla.');
  customEls.forEach(el => {
    const deptId = el.getAttribute('data-dept');
    const dept = DEPARTMENTS.find(d => d.id === deptId);
    if(!dept) return;
    const state = deptState(deptId);

    el.classList.remove('locked','unlocked','completed');
    el.classList.add('dept-shape', state);
    el.style.cursor = 'pointer';
    el.setAttribute('tabindex', '0');
    el.setAttribute('role', 'button');
    el.setAttribute('aria-label', `${dept.name}, ${state === 'locked' ? 'bloqueado' : state === 'completed' ? 'completado' : 'nivel actual'}`);
    el.onclick = () => {
      mapSvg.querySelectorAll('.dept-shape.selected').forEach(path => path.classList.remove('selected'));
      el.classList.add('selected');
      openDeptSheet(deptId);
    };
    el.onkeydown = event => {
      if(event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        el.click();
      }
    };

    let lx = el.getAttribute('data-label-x');
    let ly = el.getAttribute('data-label-y');
    if(lx === null || ly === null){
      const bbox = el.getBBox();
      lx = bbox.x + bbox.width / 2;
      ly = bbox.y + bbox.height / 2;
    }
    appendDeptLabel(dept, state, parseFloat(lx), parseFloat(ly));
  });
}

function appendDeptLabel(dept, state, x, y){
  const label = document.createElementNS('http://www.w3.org/2000/svg','text');
  label.setAttribute('x', x);
  label.setAttribute('y', y + 3);
  label.setAttribute('class', 'dept-label auto-label' + (state === 'locked' ? ' locked-label' : ''));
  const prefix = state === 'locked' ? '🔒' : (state === 'completed' ? '✅ ' : '🟢 ');
  label.textContent = state === 'locked' ? '🔒' : prefix + levelDisplayName(dept.id);
  label.style.pointerEvents = 'none';
  mapSvg.appendChild(label);
}

function updateMapStats(){
  const unlockedCount = completedLevels.size + 1; // niveles ya jugables: completados + el actual
  document.getElementById('deptUnlockedCount').textContent = Math.min(unlockedCount, DEPARTMENTS.length);
  document.getElementById('mapBarFill').style.width = (completedLevels.size / LEVEL_ORDER.length * 100) + '%';
}

function openDeptSheet(deptId){
  const dept = DEPARTMENTS.find(d => d.id === deptId);
  const state = deptState(deptId);
  const idx = levelIndexOfDept(deptId);

  document.getElementById('deptTag').textContent = `Nivel ${idx+1}/17 · ` + (state === 'locked' ? '🔒 Bloqueado' : (state === 'completed' ? '✅ Completado' : '🟢 Nivel actual'));
  document.getElementById('deptName').textContent = levelDisplayName(deptId);
  document.getElementById('deptFact').textContent = state === 'locked'
    ? 'Este nivel todavía está bloqueado. Completá los objetivos del nivel actual (pestaña Escanear) para desbloquearlo — podés hacerlo desde donde estés, no hace falta viajar hasta acá.'
    : dept.fact;
  document.getElementById('deptFoundCount').textContent = `${litterReports[deptId]} reportes`;
  document.getElementById('deptLitterCount').textContent = litterReports[deptId];

  const objEl = document.getElementById('levelObjectives');
  if(state === 'locked'){
    objEl.innerHTML = '';
  } else if(state === 'completed'){
    objEl.innerHTML = `<div class="obj-row"><span>🏆 Objetivos del nivel</span><span class="done">✅ Completados</span></div>`;
  } else {
    const goal = levelObjectivesFor(idx);
    objEl.innerHTML = `
      <div class="obj-row"><span>♻️ Clasificaciones</span><span class="${levelProgress.clasificaciones>=goal.clasificaciones?'done':''}">${levelProgress.clasificaciones}/${goal.clasificaciones}</span></div>
      <div class="obj-row"><span>📍 Puntos críticos</span><span class="${levelProgress.reportes>=goal.reportes?'done':''}">${levelProgress.reportes}/${goal.reportes}</span></div>
      <div class="obj-row"><span>🧹 Limpieza del territorio</span><span>activa</span></div>`;
  }

  const wasteList = document.getElementById('deptWasteSummary');
  wasteList.innerHTML = WASTE_TYPES.map(waste => `
    <div class="dept-species-item">
      <div class="emo">♻️</div>
      <div class="info"><div class="n">${waste.name}</div><div class="s">${waste.bin} · +${waste.points} puntos</div></div>
      <div class="chk">${litterReports[deptId] > 0 ? '✅' : '○'}</div>
    </div>`).join('');
  openSheet('deptSheet');
}

/* =========================================================
   RENDER: RANKING (dinámico, se reordena con los puntos)
   ========================================================= */
let rankScope = 'centro';
let rankCategory = 'general';

function myObjectivesCompleted(){
  // cuenta objetivos individuales alcanzados (no solo niveles completos)
  let n = completedLevels.size * 2;
  const goal = levelObjectivesFor(currentLevelIndex);
  if(levelProgress.clasificaciones >= goal.clasificaciones) n++;
  if(levelProgress.reportes >= goal.reportes) n++;
  return n;
}

function renderRanking(){
  const me = {
    name: player.alias || 'Vos ahora', zone: 'Estelí · tu barrio', school:'Tu centro / barrio', dept:'Estelí',
    score: totalPts, species: classificationsCount, reports: reportsCount, objectives: myObjectivesCompleted(), me: true,
  };
  // "centro"/"depto"/"nacional" reutilizan el mismo set de ejemplo — la
  // segmentación real por escuela llega con Firestore en la Fase 4
  let all = [...RANKING_OTHERS, me];
  if(rankScope === 'centro') all = all.filter(p => p.me || p.school === me.school);
  if(rankScope === 'depto') all = all.filter(p => p.me || p.dept === me.dept);

  const metricKey = { general:'score', investigador:'species', guardian:'reports', explorador:'objectives' }[rankCategory];
  const metricLabel = { general:'pts', investigador:'clasif.', guardian:'reportes', explorador:'metas' }[rankCategory];
  all = all.slice().sort((a,b) => b[metricKey] - a[metricKey]);

  const list = document.getElementById('rankList');
  list.innerHTML = '';
  all.forEach((p, i) => {
    const item = document.createElement('div');
    item.className = 'rank-item' + (p.me ? ' me' : '');
    const avatarHtml = p.me ? `<div class="rank-avatar-img">${avatarSVG(player.avatar)}</div>` : `<div class="rank-avatar">${p.name.split(' ').map(w=>w[0]).slice(0,2).join('').toUpperCase()}</div>`;
    item.innerHTML = `
      ${i === 0 ? '<div class="crown">👑</div>' : ''}
      <div class="rank-num">${i+1}</div>
      ${avatarHtml}
      <div class="rank-info"><div class="name">${p.name}</div><div class="zone">${p.zone}</div></div>
      <div class="rank-score">${p[metricKey].toLocaleString('es-NI')} ${metricLabel}</div>`;
    list.appendChild(item);
  });
  const myPos = all.findIndex(p => p.me) + 1;
  document.getElementById('rankMyPosition').textContent = `Tu posición: #${myPos}`;
}

document.querySelectorAll('#rankScopeFilters .rank-filter-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('#rankScopeFilters .rank-filter-chip').forEach(c => c.classList.remove('selected'));
    chip.classList.add('selected');
    rankScope = chip.dataset.scope;
    renderRanking();
  });
});
document.querySelectorAll('#rankCategoryFilters .rank-filter-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('#rankCategoryFilters .rank-filter-chip').forEach(c => c.classList.remove('selected'));
    chip.classList.add('selected');
    rankCategory = chip.dataset.cat;
    renderRanking();
  });
});


/* =========================================================
   SHEETS / TOAST
   ========================================================= */
function openSheet(id){
  document.getElementById('sheetBackdrop').classList.add('show');
  document.getElementById(id).classList.add('show');
}
function closeSheets(){
  document.getElementById('sheetBackdrop').classList.remove('show');
  document.querySelectorAll('.sheet').forEach(s => s.classList.remove('show'));
}
document.getElementById('sheetBackdrop').addEventListener('click', closeSheets);
document.querySelectorAll('[data-close]').forEach(btn => btn.addEventListener('click', closeSheets));

let toastTimer;
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}

/* =========================================================
   CÁMARA REAL DEL DISPOSITIVO
   ========================================================= */
const cameraFeed = document.getElementById('cameraFeed');
const captureCanvas = document.getElementById('captureCanvas');
let cameraStream = null;
let cameraReady = false;

async function startCamera(){
  const statusEl = document.getElementById('cameraStatus');
  if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){
    if(statusEl) statusEl.textContent = 'Este navegador no soporta cámara — usando modo simulado';
    return;
  }
  try{
    if(statusEl) statusEl.textContent = 'Solicitando acceso a la cámara…';
    cameraStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: 'environment' } },
      audio: false
    });
    cameraFeed.srcObject = cameraStream;
    await cameraFeed.play();
    cameraReady = true;
    viewfinder.classList.add('camera-on');
    if(statusEl) statusEl.textContent = '17 niveles de impacto · Estelí es el ancla';
  } catch(err){
    // permiso denegado, sin cámara, o contexto no seguro (http/file://) —
    // seguimos en modo simulado con los íconos, sin romper la app
    cameraReady = false;
    if(statusEl) statusEl.textContent = 'Sin acceso a la cámara — modo simulado activo';
  }
}

// toma una foto real del frame actual (queda lista para mandarla a un
// preparado para conectar una futura API de visión, sin afirmar reconocimiento real
function capturePhoto(){
  if(!cameraReady) return null;
  captureCanvas.width = cameraFeed.videoWidth || 640;
  captureCanvas.height = cameraFeed.videoHeight || 480;
  const ctx = captureCanvas.getContext('2d');
  ctx.drawImage(cameraFeed, 0, 0, captureCanvas.width, captureCanvas.height);
  const flash = document.getElementById('cameraFlash');
  flash.classList.add('show');
  setTimeout(() => flash.classList.remove('show'), 120);
  return captureCanvas.toDataURL('image/jpeg', 0.8);
}

/* =========================================================
   NAVEGACIÓN: AVATAR + INTRO + TABS
   ========================================================= */
let appStarted = false;
document.getElementById('avatarSaveBtn').addEventListener('click', () => {
  const alias = document.getElementById('aliasInput').value.trim();
  player.alias = alias || 'Ciudadano NicaViva';
  document.getElementById('avatarScreen').classList.add('hidden');
  if(!appStarted){
    document.getElementById('introScreen').classList.remove('hidden');
  }
  renderAvatarEverywhere();
  saveDemoState();
});
document.getElementById('startBtn').addEventListener('click', () => {
  appStarted = true;
  document.getElementById('introScreen').classList.add('hidden');
  startCamera();
});
document.getElementById('infoBtn').addEventListener('click', () => {
  document.getElementById('introScreen').classList.remove('hidden');
});
document.getElementById('brandBtn').addEventListener('click', () => {
  document.getElementById('profileAliasName').textContent = player.alias || 'Ciudadano NicaViva';
  document.getElementById('profileLevelNum').textContent = currentLevelIndex + 1;
  document.getElementById('profilePtsNum').textContent = totalPts.toLocaleString('es-NI');
  document.getElementById('profileSpeciesNum').textContent = classificationsCount;
  renderAvatarEverywhere();
  openSheet('profileSheet');
});
document.getElementById('editAvatarBtn').addEventListener('click', () => {
  closeSheets();
  document.getElementById('avatarScreen').classList.remove('hidden');
});

const tabs = document.querySelectorAll('.tab');
const panels = { scan: document.getElementById('panel-scan'), map: document.getElementById('panel-map'), rank: document.getElementById('panel-rank') };
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    Object.values(panels).forEach(p => p.classList.remove('active'));
    panels[tab.dataset.panel].classList.add('active');
    closeSheets();
    if(tab.dataset.panel === 'map') renderMap();
    if(tab.dataset.panel === 'rank') renderRanking();
  });
});

/* =========================================================
   MODOS: clasificar residuos / reportar puntos críticos / bonus natural
   ========================================================= */
const modeBtns = document.querySelectorAll('.mode-btn');
const viewfinder = document.getElementById('viewfinder');
const scanHint = document.getElementById('scanHint');
viewfinder.classList.add('mode-basura');
modeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modeBtns.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    currentMode = btn.dataset.mode;
    viewfinder.classList.toggle('mode-basura', currentMode === 'basura');
    scanHint.textContent = currentMode === 'clasificar'
      ? 'Fotografiá un residuo para clasificarlo'
      : 'Registrá acumulación o un botadero';
  });
});

function updateScanProgress(){
  document.getElementById('scanProgress').innerHTML = `${classificationsCount}<br>clasificaciones`;
  const totalLitter = Object.values(litterReports).reduce((a,b)=>a+b,0);
  document.getElementById('scanProgress2').innerHTML = `${totalLitter}<br>reportes`;
}

function classifyWasteDemo(input = {}){
  if(input.isResidue === false){
    return {
      id: 'ninguno',
      confidence: 0.99,
      object: 'no se observa ningún residuo',
      bin: 'No aplica',
      avoid: 'No registrés una clasificación si la foto no muestra un residuo.',
      problem: 'Una imagen sin residuo no permite evaluar disposición incorrecta ni espacios públicos.'
    };
  }
  const waste = WASTE_TYPES[classificationsCount % WASTE_TYPES.length];
  return {
    id: waste.id,
    confidence: 0.94,
    object: waste.object,
    bin: waste.bin,
    avoid: waste.avoid,
    problem: waste.problem
  };
}

function createReportDemo(){
  const index = reportsCount % REPORT_ZONES.length;
  const zone = REPORT_ZONES[index];
  const problem = zone === 'salida_norte' || zone === 'salida_sur' ? 'botadero' : 'acumulacion';
  return {
    problem,
    zone,
    severity: problem === 'botadero' ? 'alta' : 'media',
    summary: `Punto de ${problem === 'botadero' ? 'botadero no autorizado' : 'acumulación'} registrado en ${zone.replace('_', ' ')} de Estelí.`
  };
}

window.NICAVIVA_CLASSIFIER = {
  classify: classifyWasteDemo,
  report: createReportDemo,
  wasteTypes: WASTE_TYPES,
  reportProblems: REPORT_PROBLEMS,
  reportZones: REPORT_ZONES
};

function classifyWaste(){
  const result = classifyWasteDemo();
  const waste = WASTE_TYPES.find(item => item.id === result.id);
  classificationsCount++;
  recordActivity('classification', {wasteType: waste.id, points: waste.points});
  const earned = waste.points;
  updatePoints(earned);
  if(!completedLevels.has(LEVEL_ORDER[currentLevelIndex])) levelProgress.clasificaciones++;
  document.getElementById('resultTag').textContent = 'Clasificación confirmada · modo demo';
  document.getElementById('resultName').textContent = waste.name;
  document.getElementById('resultSci').textContent = `Objeto: ${result.object}`;
  document.getElementById('resultDesc').textContent = `Va en: ${result.bin}. ${result.avoid} ${result.problem}`;
  document.getElementById('resultPts').textContent = `+${earned} puntos`;
  const goal = levelObjectivesFor(currentLevelIndex);
  const badge = document.getElementById('resultUnlock');
  badge.style.display = 'flex';
  document.getElementById('resultUnlockText').textContent = `Meta ${levelProgress.clasificaciones}/${goal.clasificaciones} clasificaciones · ${levelProgress.reportes}/${goal.reportes} reportes`;
  checkLevelObjectives();
  updateScanProgress();
  saveDemoState();
  openSheet('resultSheet');
}

function updatePoints(delta){
  totalPts += delta;
  document.getElementById('ptsCounter').textContent = totalPts.toLocaleString('es-NI');
  saveDemoState();
}

function discoverSpecies(){
  // modo "especie" incluye tanto plantas como animales — el filtro
  // por s.type (planta/animal) es el del catálogo, no el del escáner
  const pool = SPECIES;
  const undiscovered = pool.filter(s => !discovered.has(s.id));
  let picked, isNew, isReencuentro = false;

  if(undiscovered.length > 0){
    picked = undiscovered[Math.floor(Math.random() * undiscovered.length)];
    isNew = true;
  } else {
    picked = pool[Math.floor(Math.random() * pool.length)];
    isNew = false; isReencuentro = true;
  }

  const dept = DEPARTMENTS.find(d => d.id === picked.dept);
  const earned = isNew ? picked.pts : Math.ceil(picked.pts / 3); // reencuentro NUNCA da la recompensa completa
  if(isNew) discovered.add(picked.id);
  recordActivity('species', {speciesId: picked.id, isNew, points: earned});
  updatePoints(earned);

  // el descubrimiento suma al objetivo del NIVEL ACTUAL, sin importar
  // en qué departamento "vive" narrativamente la especie — el jugador
  // no necesita viajar hasta ahí (ver sección GPS)
  if(isNew && !completedLevels.has(LEVEL_ORDER[currentLevelIndex])){
    if(picked.type === 'planta') levelProgress.plantas++;
    else levelProgress.animales++;
  }

  document.getElementById('resultTag').textContent = isNew ? 'Especie identificada (modo demo)' : 'Reencuentro confirmado';
  document.getElementById('resultName').textContent = picked.name;
  document.getElementById('resultSci').textContent = picked.sci;
  document.getElementById('resultDesc').textContent = isNew
    ? `${picked.blurb} Nativa de ${dept.name} — pero tu registro cuenta para el nivel ${currentLevelIndex+1} (${levelDisplayName(LEVEL_ORDER[currentLevelIndex])}), estés donde estés.`
    : `Ya tenías esta especie registrada en tu catálogo. Los reencuentros no vuelven a otorgar la recompensa completa.`;
  document.getElementById('resultPts').textContent = `+${earned} puntos`;

  const goal = levelObjectivesFor(currentLevelIndex);
  const badge = document.getElementById('resultUnlock');
  if(isNew && !completedLevels.has(LEVEL_ORDER[currentLevelIndex])){
    badge.style.display = 'flex';
    document.getElementById('resultUnlockText').textContent = `Nivel ${currentLevelIndex+1}: 🌱${levelProgress.plantas}/${goal.plantas} · 🐦${levelProgress.animales}/${goal.animales} · 🗑️${levelProgress.reportes}/${goal.reportes}`;
  } else {
    badge.style.display = 'none';
  }

  checkLevelObjectives();
  updateScanProgress();
  saveDemoState();
  openSheet('resultSheet');
}

function reportLitter(){
  const result = createReportDemo();
  const dept = DEPARTMENTS.find(d => d.id === 'esteli');
  litterReports[dept.id]++;
  reportsCount++;
  recordActivity('report', {problem: result.problem, zone: result.zone, points: 35});
  const earned = 35;
  updatePoints(earned);

  if(!completedLevels.has(LEVEL_ORDER[currentLevelIndex])){
    levelProgress.reportes++;
  }

  document.getElementById('resultTag').textContent = 'Punto crítico registrado · modo demo';
  document.getElementById('resultName').textContent = `📍 ${result.zone.replace('_', ' ')}`;
  document.getElementById('resultSci').textContent = `${result.problem} · prioridad ${result.severity}`;
  document.getElementById('resultDesc').textContent = `${result.summary} Tu reporte ayuda a visibilizar el problema en Estelí y su impacto en imagen urbana, salud y espacio público. No es GPS real; es un registro demostrativo.`;
  document.getElementById('resultPts').textContent = `+${earned} puntos`;

  const goal = levelObjectivesFor(currentLevelIndex);
  const badge = document.getElementById('resultUnlock');
  if(!completedLevels.has(LEVEL_ORDER[currentLevelIndex])){
    badge.style.display = 'flex';
    document.getElementById('resultUnlockText').textContent = `Meta ${levelProgress.clasificaciones}/${goal.clasificaciones} clasificaciones · ${levelProgress.reportes}/${goal.reportes} reportes`;
  } else {
    badge.style.display = 'none';
  }

  checkLevelObjectives();
  updateScanProgress();
  saveDemoState();
  openSheet('resultSheet');
}


const scanBtn = document.getElementById('scanBtn');
scanBtn.addEventListener('click', () => {
  if(viewfinder.classList.contains('scanning')) return;
  viewfinder.classList.add('scanning');
  scanHint.style.opacity = 0;
  capturePhoto(); // toma la foto real de la cámara (efecto flash); la
                   // identificación sigue siendo simulada — ver nota abajo
  setTimeout(() => {
    viewfinder.classList.remove('scanning');
    scanHint.style.opacity = 0.85;
    if(currentMode === 'clasificar') classifyWaste();
    else reportLitter();
  }, 1400);
});

/* =========================================================
   FILTROS DEL CATÁLOGO
   ========================================================= */
/* =========================================================
   INICIALIZACIÓN
   ========================================================= */
loadDemoState();
document.getElementById('ptsCounter').textContent = totalPts.toLocaleString('es-NI');
if(player.alias){
  document.getElementById('aliasInput').value = player.alias;
  document.getElementById('avatarScreen').classList.add('hidden');
}
renderAvatarPicker();
renderAvatarEverywhere();
updateBrandSub();
updateScanProgress();
renderMap();
renderRanking();
