import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, query, where, getDocs, updateDoc, arrayUnion, arrayRemove, deleteDoc, increment } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User, UserCredential } from 'firebase/auth';

// Firebase configuration (replace with your actual config)
const firebaseConfig = {
  apiKey: process.env.YOUR_API_KEY,
  authDomain: process.env.YOUR_AUTH_DOMAIN,
  projectId: process.env.YOUR_PROJECT_ID,
  storageBucket: process.env.YOUR_STORAGE_BUCKET,
  messagingSenderId: process.env.YOUR_MESSAGING_SENDER_ID,
  appId: process.env.YOUR_APP_ID,
  //measurementId: "YOUR_MEASUREMENT_ID"
};

const collectionName = "posts";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const usersCollection = collection(db, 'users'); // Collection in Firestore for users

export const registerUser = async ({ email, password }: { name: string, email: string, password: string }) => {
  try {
    let newUser = createUserWithEmailAndPassword(auth, email, password);
    await addDoc(usersCollection, newUser); // Add user to Firestore
    console.log("User registered successfully!");
  } catch (error: any) {
    console.error("Error registering user:", error);
    throw new Error('Failed to register user.'); // Re-throw to handle in component
  }
};

export const loginUser = async ({ email, password }: { email: string, password: string }) => {
  try {
    const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in successfully!");
    return userCredential.user;
  } catch (error: any) {
    console.error("Error logging in user:", error);
    throw new Error('Failed to login user.'); // Re-throw to handle in component
  }
};

export const logoutUser = async () => {
  try {
    signOut(auth);
    console.log("User logged out successfully!");
  } catch (error: any) {
    console.error("Error logging out user:", error);
    throw new Error('Failed to logout user.'); // Re-throw to handle in component
  }
};

export const addPost = async (data: any) => {
  try {
    await addDoc(collection(db, collectionName), data);
    console.log("Post added successfully!");
  } catch (error: any) {
    console.error("Error adding post:", error);
    throw new Error('Failed to add post.'); // Re-throw to handle in component
  }
};

async function getDoc(url: string) {
  const docRef = query(collection(db, collectionName), where("url", "==", url));
  const querySnapshot = await getDocs(docRef);
  const doc = querySnapshot.docs[0];
}

export const addComment = async (url: string, comment: string) => {
  try {
    const docRef = query(collection(db, collectionName), where("url", "==", url));
    const querySnapshot = await getDocs(docRef);
    const doc = querySnapshot.docs[0];
    await updateDoc(doc.ref, {
      comments: arrayUnion(comment)
    });
    console.log("Comment added successfully!");
  } catch (error: any) {
    console.error("Error adding comment:", error);
    throw new Error('Failed to add comment.'); // Re-throw to handle in component
  }
};

export const deletePost = async (url: string) => {
  try {
    const docRef = query(collection(db, collectionName), where("url", "==", url));
    const querySnapshot = await getDocs(docRef);
    const doc = querySnapshot.docs[0];
    await deleteDoc(doc.ref);
    console.log("Post deleted successfully!");
  } catch (error: any) {
    console.error("Error deleting post:", error);
    throw new Error('Failed to delete post.'); // Re-throw to handle in component
  }
};

export const deleteComment = async (url: string, comment: string) => {
  try {
    const docRef = query(collection(db, collectionName), where("url", "==", url));
    const querySnapshot = await getDocs(docRef);
    const doc = querySnapshot.docs[0];
    await updateDoc(doc.ref, {
      comments: arrayRemove(comment)
    });
    console.log("Comment added successfully!");
  } catch (error: any) {
    console.error("Error adding comment:", error);
    throw new Error('Failed to add comment.'); // Re-throw to handle in component
  }
};

export const addLike = async (url: string) => {
  try {
    const docRef = query(collection(db, collectionName), where("url", "==", url));
    const querySnapshot = await getDocs(docRef);
    const doc = querySnapshot.docs[0];
    await updateDoc(doc.ref, {
      num_likes: increment(1)
    });
    console.log("Like added successfully!");
  } catch (error: any) {
    console.error("Error adding like:", error);
    throw new Error('Failed to add like.'); // Re-throw to handle in component
  }
};

export const addDislike = async (url: string) => {
  try {
    const docRef = query(collection(db, collectionName), where("url", "==", url));
    const querySnapshot = await getDocs(docRef);
    const doc = querySnapshot.docs[0];
    await updateDoc(doc.ref, {
      num_dislikes: increment(1)
    });
    console.log("Like added successfully!");
  } catch (error: any) {
    console.error("Error adding like:", error);
    throw new Error('Failed to add like.'); // Re-throw to handle in component
  }
};

export const deleteLike = async (url: string) => {
  try {
    const docRef = query(collection(db, collectionName), where("url", "==", url));
    const querySnapshot = await getDocs(docRef);
    const doc = querySnapshot.docs[0];
    await updateDoc(doc.ref, {
      num_likes: increment(-1)
    });
    console.log("Like removed successfully!");
  } catch (error: any) {
    console.error("Error removing like:", error);
    throw new Error('Failed to remove like.'); // Re-throw to handle in component
  }
};

export const deleteDislike = async (url: string) => {
  try {
    const docRef = query(collection(db, collectionName), where("url", "==", url));
    const querySnapshot = await getDocs(docRef);
    const doc = querySnapshot.docs[0];
    await updateDoc(doc.ref, {
      num_dislikes: increment(-1)
    });
    console.log("Like added successfully!");
  } catch (error: any) {
    console.error("Error removing dislike:", error);
    throw new Error('Failed to remove dislike.'); // Re-throw to handle in component
  }
};

export const updateStatus = async (url: string, status: string) => {
  try {
    const docRef = query(collection(db, collectionName), where("url", "==", url));
    const querySnapshot = await getDocs(docRef);
    const doc = querySnapshot.docs[0];
    await updateDoc(doc.ref, {
      status: status
    });
    console.log("Status updated successfully!");
  } catch (error: any) {
    console.error("Error updating status:", error);
    throw new Error('Failed to update status.'); // Re-throw to handle in component
  }
};