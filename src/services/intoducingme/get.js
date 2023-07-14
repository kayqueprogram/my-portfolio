import { collection, doc, getDocs, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';


async function getIntro() {
  try {
    const IntroRef = doc(db,'introducingme','introducingme');
    const IntroDoc = await getDoc(IntroRef);
    return IntroDoc.data()
  } catch (error) {
    console.error('Erro ao buscar :', error);
    return [];
  }
}

// Função para buscar um post específico
async function getIntroContent(id) {
  try {
    const IntroRef = doc(db, 'introducingme', id);
    const IntroDoc = await getDoc(IntroRef);
    
    if (IntroDoc.exists()) {
      // Documento encontrado, você pode acessar os dados usando postDoc.data()
      const data = IntroDoc.data();
      return data;
    } else {
      console.log('Documento não encontrado');
      return null;
    }
  } catch (error) {
    console.error('Erro ao buscar o conteudo:', error);
    return null;
  }
}

export default { getIntro, getIntroContent };