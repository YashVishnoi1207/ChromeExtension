import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyBSiuCZYBaIarReUHWuigHwWtXyvead8JA",
    authDomain: "chromeextension-2adfb.firebaseapp.com",
    databaseURL: "https://chromeextension-2adfb-default-rtdb.firebaseio.com",
    projectId: "chromeextension-2adfb",
    storageBucket: "chromeextension-2adfb.appspot.com",
    messagingSenderId: "500003993423",
    appId: "1:500003993423:web:9ddfd3232f9d505b7d773a"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);