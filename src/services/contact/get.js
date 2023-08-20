import { collection, doc, getDocs, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';


async function getContact() {
  try {
    const ContactRef = doc(db,'contact','DBnJA2PGO7Kygn1sysFM');
    const ContactDoc = await getDoc(ContactRef);
    return ContactDoc.data()
  } catch (error) {
    console.error('Erro ao buscar :', error);
    return [];
  }
}

// Função para buscar um post específico
async function getContactContent(id) {
  try {
    const ContactRef = doc(db, 'contact', id);
    const ContactDoc = await getDoc(ContactRef);
    
    if (ContactDoc.exists()) {
      // Documento encontrado, você pode acessar os dados usando postDoc.data()
      const data = ContactDoc.data();
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

export default { getContact, getContactContent };