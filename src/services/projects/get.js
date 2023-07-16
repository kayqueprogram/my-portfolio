import { collection,doc,getDocs,getDoc} from 'firebase/firestore';
import { db } from '../firebaseConfig';


async function getProjectPosts (){
    const postsCollectionRef = collection(db,"projects");
    const response = await getDocs(postsCollectionRef);
    const data = await response.docs?.map((doc)=> ({...doc.data(),id:doc.id}))
    return data;
}

async function getProjectPost(id) {
   const postRef = doc(db,'projects',id);
   const postDoc = await getDoc(postRef);
   return postDoc.data()

}



export default {getProjectPosts,getProjectPost};
