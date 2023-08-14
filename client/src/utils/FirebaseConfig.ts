import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD6dV0OmCRMB9IQ66sJ6Ole6Zz-me1EObY',
  authDomain: 'messenger-305d4.firebaseapp.com',
  projectId: 'messenger-305d4',
  storageBucket: 'messenger-305d4.appspot.com',
  messagingSenderId: '868375826368',
  appId: '1:868375826368:web:e2f22d6024f0d8efb1c225',
  measurementId: 'G-JQQ387EWS2',
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
