/* Firebase web configuration for the nicaviva project. */
window.ECORALLY_FIREBASE_CONFIG = {
  apiKey: 'AIzaSyDwSptug9oG5cWTVWnRIP2SmsqmR_jUoaQ',
  authDomain: 'nicaviva.firebaseapp.com',
  projectId: 'nicaviva',
  storageBucket: 'nicaviva.firebasestorage.app',
  messagingSenderId: '448218372513',
  appId: '1:448218372513:web:a8c74b5cd84908856e93e0',
  databaseURL: 'https://nicaviva-default-rtdb.firebaseio.com',
  measurementId: 'G-Z7J561SH9M'
};

window.NICAVIVA_FIREBASE_CONFIG = window.ECORALLY_FIREBASE_CONFIG;
window.ECORALLY_DATA_MODE = 'demo';

try {
  if (window.firebase && !window.firebase.apps.length) {
    window.firebase.initializeApp(window.ECORALLY_FIREBASE_CONFIG);
  }
  if (window.firebase && typeof window.firebase.analytics === 'function') {
    window.NICAVIVA_ANALYTICS = window.firebase.analytics();
  }
  if (window.firebase && typeof window.firebase.auth === 'function' && typeof window.firebase.database === 'function') {
    window.NICAVIVA_DB = {
      auth: window.firebase.auth(),
      database: window.firebase.database(),
      user: null
    };
    window.NICAVIVA_DB.auth.signInAnonymously().then(credential => {
      window.NICAVIVA_DB.user = credential.user;
      window.dispatchEvent(new Event('nicaviva-db-ready'));
    }).catch(error => console.warn('Realtime Database no está disponible:', error));
  }
} catch (error) {
  console.warn('Firebase Analytics no está disponible:', error);
}
