import { getFirestore, collection, addDoc } from "firebase/firestore";
const db = getFirestore();

// إضافة بيانات إلى Firestore
async function addData() {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: "John Doe",
      email: "johndoe@example.com"
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
