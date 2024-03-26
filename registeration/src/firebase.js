import { initializeApp } from "firebase/app";

import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyArKfhusCfrNAEVcrIxebxe5Kbd2ajBOlo",
  authDomain: "app-7060d.firebaseapp.com",
  projectId: "app-7060d",
  storageBucket: "app-7060d.appspot.com",
  messagingSenderId: "82193036021",
  appId: "1:82193036021:web:ebed8b92c327bb48448bbc",
  databaseURL:'https://app-7060d-default-rtdb.firebaseio.com'
  
};
 const app = initializeApp(firebaseConfig);
 export const storage = getStorage(app);