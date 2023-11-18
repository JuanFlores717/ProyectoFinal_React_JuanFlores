import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBp91AJul9t0-hYCOhy-DWBaRii24oD92k",
    authDomain: "pr-final-react-juanflores.firebaseapp.com",
    projectId: "pr-final-react-juanflores",
    storageBucket: "pr-final-react-juanflores.appspot.com",
    messagingSenderId: "590716627546",
    appId: "1:590716627546:web:cd440e1308201022a34663"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);