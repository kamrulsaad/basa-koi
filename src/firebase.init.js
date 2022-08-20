import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAj4__pHqgtcvVi4RFaAiCIumpfpKMbs84",
  authDomain: "pathshala-edtech.firebaseapp.com",
  projectId: "pathshala-edtech",
  storageBucket: "pathshala-edtech.appspot.com",
  messagingSenderId: "28648508141",
  appId: "1:28648508141:web:0b97b9a99544902fb59ae4"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth