import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDO162lQ_QqKKhlov1S9jtGApVqY6rJWok",
  authDomain: "mont-1ccf4.firebaseapp.com",
  projectId: "mont-1ccf4",
  storageBucket: "mont-1ccf4.firebasestorage.app",
  messagingSenderId: "844313679592",
  appId: "1:844313679592:web:7b388f5927ee756729db5d",
  measurementId: "G-H6MW1E5X7W",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const uploadImage = async (file: File): Promise<string> => {
  try {
    const storageRef = ref(storage, `campaigns/${Date.now()}-${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};
