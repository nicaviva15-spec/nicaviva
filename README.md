# NicaViva

Aplicación web estática del proyecto NicaViva para el Rally Nicaragua Innova 2026.

## 1. Requisitos

En Windows necesitás:

- Una cuenta de Google.
- Un proyecto creado en [Firebase Console](https://console.firebase.google.com/).
- Node.js instalado desde [nodejs.org](https://nodejs.org/).
- Firebase CLI.

Para confirmar que Node.js está instalado, abrí PowerShell en esta carpeta y ejecutá:

```powershell
node --version
npm --version
```

Si alguno de los comandos no existe, instalá Node.js y reiniciá VS Code.

## 2. Instalar Firebase CLI

Ejecutá una sola vez:

```powershell
npm.cmd install -g firebase-tools
firebase.cmd --version
```

## 3. Iniciar sesión

```powershell
firebase.cmd login
```

Se abrirá el navegador. Iniciá sesión con la cuenta que tiene acceso al proyecto Firebase.

## 4. Asociar esta carpeta con Firebase

Desde la carpeta raíz del proyecto, donde están `index.html` y `firebase.json`, ejecutá:

```powershell
firebase.cmd use --add
```

Elegí el proyecto de Firebase que querés usar y asignale un alias, normalmente `default`.

Este comando creará `.firebaserc` y guardará la asociación local. No necesitás editar `firebase.json`: ya está configurado para publicar la raíz del proyecto.

## 5. Publicar la aplicación

```powershell
firebase.cmd deploy --only hosting
```

Al finalizar, Firebase mostrará una URL parecida a:

```text
https://TU-PROYECTO.web.app
```

Abrí esa URL en el navegador para probar NicaViva desde Firebase Hosting.

## 6. Publicar cambios posteriores

Después de modificar `index.html`, `game.js` o `styles.css`, ejecutá nuevamente:

```powershell
firebase.cmd deploy --only hosting
```

## 7. Probar antes de publicar

Podés abrir `index.html` directamente en el navegador. Para probarlo con un servidor local, ejecutá desde esta carpeta:

```powershell
npx serve .
```

La cámara puede requerir HTTPS o `localhost`; por eso funciona mejor desde Firebase Hosting que usando `file://`.

## 8. Configuración Firebase de la aplicación

El archivo `firebase-config.js` ya contiene la configuración web del proyecto `nicaviva` y se carga antes de `game.js`. La aplicación inicializa Firebase Analytics cuando el navegador lo admite:

```javascript
window.ECORALLY_FIREBASE_CONFIG = {
  apiKey: '...',
  authDomain: 'nicaviva.firebaseapp.com',
  projectId: 'nicaviva',
  storageBucket: 'nicaviva.firebasestorage.app',
  messagingSenderId: '...',
  appId: '...',
  measurementId: 'G-Z7J561SH9M'
};
```

La configuración web de Firebase no contiene claves privadas. Nunca pongas en el frontend una clave de administrador o un archivo de cuenta de servicio.

## 9. Estado actual

- Firebase Hosting: preparado.
- Interfaz y juego: funcionan en modo demo.
- Progreso actual: se guarda en el navegador con `localStorage`.
- Ranking: usa datos de ejemplo.
- Auth anónimo y Realtime Database: conectados para guardar el perfil individual del usuario.

- Los datos se sincronizan en `users/{uid}` en Realtime Database mediante acceso anónimo; la vista de administración se consulta directamente en Firebase Console.

Antes de publicar, activá **Authentication > Sign-in method > Anonymous** y confirmá que Realtime Database esté creada. Publicá las reglas con:

```powershell
firebase.cmd deploy --only database,hosting
```

## Comandos principales

```powershell
firebase.cmd login
firebase.cmd use --add
firebase.cmd deploy --only database,hosting
```
