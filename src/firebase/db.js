import { getFirestore, collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore'
import { app } from './config'

const db = getFirestore(app);

export const getProducts = async() => {
	const querySnapchot = await getDocs(collection(db, "products"))
	const products = []
	
	querySnapchot.forEach((doc) => {
		products.push({...doc.data(), id: doc.id})
	})
	return products
}

export const getCategories = async() => {
	const querySnapchot = await getDocs(collection(db, "categories"))
	const categories = []
	
	querySnapchot.forEach((doc) => {
		categories.push({...doc.data(), id: doc.id})
	})
	return categories
}

export const getProductsByCategory = async(category) =>{
	const q = query(collection(db, "products"), where("category", "array-contains", category));
	const productsFil = []
	
	const querySnapshot = await getDocs(q);
	
	querySnapshot.forEach((doc) => {
		productsFil.push({...doc.data(), id: doc.id})
	})
	return productsFil
}

export const getProduct = async(id) => {
	const docRef = doc(db, 'products', id)
	const docSnap = await getDoc(docRef)
	if(docSnap.exists())
		return {...docSnap.data(), id: docSnap.id}
	else
		return null
}
export const saveOrder = async (order) => {
  //NO BORRA LOS PRODUCTOS DE LA BASE PARA PODER REUTILIZARLOS Y HACER PRUEBAS
  const { addDoc, collection: col, serverTimestamp } = await import('firebase/firestore');
  const docRef = await addDoc(col(db, 'orders'), {
    ...order,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
};
