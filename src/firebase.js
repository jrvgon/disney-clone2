import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// import { getStorage } from 'firebase/app'

const firebaseConfig = {
	apiKey: 'AIzaSyBuZoReYv8YTIJRNTXcE6Pe0qUE-AXYBow',
	authDomain: 'disneyplus-clone-84322.firebaseapp.com',
	projectId: 'disneyplus-clone-84322',
	storageBucket: 'disneyplus-clone-84322.appspot.com',
	messagingSenderId: '929096708165',
	appId: '1:929096708165:web:dc303ac2ec0925715cf32c',
	measurementId: 'G-1TFNJ3DDBN',
}

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider()
// const storage = getStorage()

export { auth, provider } //, storage
export default db
