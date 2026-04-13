import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import { db, auth } from "../firebase/firebase";

// Helper: retorna a coleção de treinos do usuário autenticado
function getUserWorkoutsCollection() {
  const user = auth.currentUser;
  if (!user) throw new Error("Usuário não autenticado");
  return collection(db, "users", user.uid, "workouts");
}

// Helper: valida que o documento pertence ao usuário atual
async function assertOwnership(id) {
  const user = auth.currentUser;
  if (!user) throw new Error("Usuário não autenticado");
  const ref = doc(db, "users", user.uid, "workouts", id);
  const snap = await getDoc(ref);
  if (!snap.exists()) throw new Error("Treino não encontrado ou sem permissão");
  return ref;
}

// Busca todos os treinos do usuário
export async function fetchWorkouts() {
  const workoutsCol = getUserWorkoutsCollection();
  const snapshot = await getDocs(workoutsCol);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
}

// Adiciona novo treino para o usuário atual
export async function addWorkout(userId, treino) {
  const user = auth.currentUser;
  if (!user || user.uid !== userId) throw new Error("Usuário não autenticado");
  const workoutsRef = collection(db, "users", userId, "workouts");
  const docRef = await addDoc(workoutsRef, treino);
  return { id: docRef.id, ...treino };
}

// Atualiza treino — valida ownership antes
export async function updateWorkout(id, updatedData) {
  const ref = await assertOwnership(id);
  await updateDoc(ref, updatedData);
}

// Deleta treino — valida ownership antes
export async function deleteWorkout(id) {
  const ref = await assertOwnership(id);
  await deleteDoc(ref);
}
