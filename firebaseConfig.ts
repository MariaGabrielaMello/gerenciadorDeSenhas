import { initializeApp } from 'firebase/app';
import {getFirestore, collection, addDoc, getDocs} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import firebase from 'firebase/app';
import 'firebase/auth'; // Import the auth module

// Optionally import the services that you want to use

// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAaxP47u4fViixDiwbYq-jtc-ZLBgZFatk',
  authDomain: 'appsenhas-3a81e.firebaseapp.com',
  databaseURL: 'https://appsenhas-3a81e.firebaseio.com',
  projectId: 'appsenhas-3a81e',
  storageBucket: 'appsenhas-3a81e.appspot.com',
  messagingSenderId: 'sender-id',
  appId: '1:650466181628:android:2f30286288bf0ce87fb279',
//   measurementId: 'G-measurement-id',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

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

export async function fetchData() {
  const querySnapshot = await getDocs(collection(db, 'testCollection'));
  return querySnapshot.docs.map(doc => doc.data());
}
