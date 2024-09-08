import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

import firebase from 'firebase/app';
import 'firebase/auth'; // Import the auth module

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
export const firebaseConfig = {
  apiKey: 'AIzaSyAaxP47u4fViixDiwbYq-jtc-ZLBgZFatk',
  authDomain: 'appsenhas-3a81e.firebaseapp.com',
  databaseURL: 'https://project-id.firebaseio.com',
  projectId: 'appsenhas-3a81e',
  storageBucket: 'appsenhas-3a81e.appspot.com',
  messagingSenderId: 'sender-id',
  appId: '1:650466181628:android:2f30286288bf0ce87fb279',
//   measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Função para adicionar dados de teste ao Firestore
export async function addTestData() {
  try {
    const docRef = await addDoc(collection(db, "testCollection"), {
      testField: "testValue"
    });
    console.log("Documento escrito com ID: ", docRef.id);
    return true;
  } catch (e) {
    console.error("Erro ao adicionar documento: ", e);
    return false;
  }
}
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
