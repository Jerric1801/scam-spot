import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Firebase configuration (replace with your actual config)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const usersCollection = collection(db, 'users'); // Collection in Firestore for users

export const registerUser = async ({ name, email }: { name: string, email: string }) => {
  try {
    await addDoc(usersCollection, {
      name: name,
      email: email,
      registrationDate: new Date()
    });
    console.log("User registered successfully!");
  } catch (error: any) {
    console.error("Error registering user:", error);
    throw new Error('Failed to register user.'); // Re-throw to handle in component
  }
};