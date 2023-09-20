import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { auth } from 'firebase.js';

const firebaseConfig = {
    apiKey: 'AIzaSyBfHYNkgpvzzyZ34-2mAD7okW_b4LQ2EyY',
    authDomain: 'seu-projeto.firebaseapp.com',
    projectId: 'jornalti-fc911',
    storageBucket: 'seu-projeto.appspot.com',
    messagingSenderId: '904978903766',
    appId: 'seu-app-id',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
