import { initializeApp } from 'firebase/app';
import { config } from './config';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = config.firebaseConfigKey;
const app = initializeApp(firebaseConfig);
const fireStore = getFirestore(app);
const auth = getAuth(app);
export { auth, fireStore };
