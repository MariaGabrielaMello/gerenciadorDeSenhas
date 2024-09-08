import { getFirestore, collection, addDoc } from 'firebase/firestore';

const db = getFirestore(app); // Utilize o app inicializado com sua configuração do Firebase

async function addTestData() {
  try {
    const docRef = await addDoc(collection(db, "testCollection"), {
      testField: "testValue"
    });
    console.log("Documento escrito com ID: ", docRef.id);
    return true; // Sucesso na conexão e escrita no Firestore
  } catch (e) {
    console.error("Erro ao adicionar documento: ", e);
    return false; // Falha na conexão ou escrita no Firestore
  }
}

addTestData();