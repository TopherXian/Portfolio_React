import fs from "fs";
import path from "path";
import { db, storage } from "./firebase_misc.js"; // correct path with .js
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";

// path to local images folder
const imagesFolder = path.join(process.cwd(), "../src/assets/images");

// Map each image to a Firestore document ID
const imageToDocId = {  
  "infiniteCrunch.png": "iovT2IVDI56RWrU1EarB",
  "neuroFighter.png": "RosjSArdNiulaUmLRiVI",
  "roverEKF.jpg": "2MjDMhxsm8sSTgk337ff",
  "wvsuOrbit.png": "W6jbrcoQ6OYUhMDqIlnP"
};

const uploadImages = async () => {
  try {
    for (const [filename, docId] of Object.entries(imageToDocId)) {
      const filePath = path.join(imagesFolder, filename);
      const fileBuffer = fs.readFileSync(filePath);

      const storageRef = ref(storage, `portfolio/${filename}`);
      await uploadBytes(storageRef, fileBuffer);
      const downloadUrl = await getDownloadURL(storageRef);

      const docRef = doc(db, "projects", docId);
      await updateDoc(docRef, { imageUrl: downloadUrl });

      console.log(`Uploaded ${filename} -> document ${docId}`);
    }

    console.log("All images uploaded successfully!");
  } catch (error) {
    console.error("Error uploading images:", error);
  }
};

uploadImages();
