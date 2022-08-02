import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCoeLJxRY4x1Er0mpD_fWiDKchSOQ0E1vw',
  authDomain: 'housing-market-app-52acb.firebaseapp.com',
  projectId: 'housing-market-app-52acb',
  storageBucket: 'housing-market-app-52acb.appspot.com',
  messagingSenderId: '24870065025',
  appId: '1:24870065025:web:1f753f4a7cd94862bf8e80',
}
const app = initializeApp(firebaseConfig)

export const db = getFirestore()
