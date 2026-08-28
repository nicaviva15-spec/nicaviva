# NicaViva en Firebase

## Publicar en Firebase Hosting

1. Instala Firebase CLI si todavía no está instalado:

   ```powershell
   npm install -g firebase-tools
   ```

2. Inicia sesión y selecciona el proyecto Firebase:

   ```powershell
   firebase login
   firebase use --add
   ```

3. Desde esta carpeta publica la app:

   ```powershell
   firebase deploy --only hosting
   ```

El archivo `firebase.json` ya está configurado para publicar la aplicación estática desde la raíz del proyecto.

## Conectar servicios Firebase

`firebase-config.js` ya contiene la configuración web del proyecto `nicaviva` y activa Firebase Analytics. La app actual conserva el modo demo y guarda el progreso en el navegador.

No cambies `window.ECORALLY_DATA_MODE` a `firebase` todavía: Auth y Firestore aún no están implementados en `game.js`.

La configuración web de Firebase puede estar en el frontend; no incluye claves privadas ni credenciales de administrador.