// src/services/workoutsService.js
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import { auth } from "../firebase/firebase";

// Helper: get user's workouts collection reference
function getUserWorkoutsCollection() {
  const user = auth.currentUser;
  if (!user) {
    throw new Error("User not authenticated");
  }
  // Coleção: 'users/{uid}/workouts'
  return collection(db, "users", user.uid, "workouts");
}

// Fetch all workouts for current user
export async function fetchWorkouts() {
  const workoutsCol = getUserWorkoutsCollection();
  const snapshot = await getDocs(workoutsCol);
  const workouts = [];
  snapshot.forEach((doc) => {
    workouts.push({ id: doc.id, ...doc.data() });
  });
  return workouts;
}

// Add a new workout for current user
/*export async function addWorkout(workoutData) {
  const workoutsCol = getUserWorkoutsCollection();
  const docRef = await addDoc(workoutsCol, workoutData);
  return { id: docRef.id, ...workoutData };
}
export async function addWorkout(userId, treino) {
  const userRef = doc(db, "users", userId);
  const workoutsRef = collection(userRef, "workouts");
  return await addDoc(workoutsRef, treino);
}
*/
export async function addWorkout(userId, treino) {
  const userRef = doc(db, "users", userId);
  const workoutsRef = collection(userRef, "workouts");
  const docRef = await addDoc(workoutsRef, treino);
  return { id: docRef.id, ...treino }; // Retornando no mesmo formato que fetchWorkouts
}
// Update existing workout by ID for current user
export async function updateWorkout(id, updatedData) {
  const user = auth.currentUser;
  if (!user) {
    throw new Error("User not authenticated");
  }
  const workoutDocRef = doc(db, "users", user.uid, "workouts", id);
  await updateDoc(workoutDocRef, updatedData);
}

// Delete workout by ID for current user
export async function deleteWorkout(id) {
  const user = auth.currentUser;
  if (!user) {
    throw new Error("User not authenticated");
  }
  const workoutDocRef = doc(db, "users", user.uid, "workouts", id);
  await deleteDoc(workoutDocRef);
}
