// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLQVfl-r_sh7yAwYVaDdb0k20RulRCrgQ",
    authDomain: "the-news-dragon-383f4.firebaseapp.com",
    projectId: "the-news-dragon-383f4",
    storageBucket: "the-news-dragon-383f4.appspot.com",
    messagingSenderId: "585399119184",
    appId: "1:585399119184:web:42feb70296117c179fd055"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app