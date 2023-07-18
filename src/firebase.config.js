import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDDNMjTPz-1qXAmeB367-htbeHfDHwdORQ",
    authDomain: "reastaurantapp-52f71.firebaseapp.com",
    databaseURL: "https://reastaurantapp-52f71-default-rtdb.firebaseio.com",
    projectId: "reastaurantapp-52f71",
    storageBucket: "reastaurantapp-52f71.appspot.com",
    messagingSenderId: "357994182730",
    appId: "1:357994182730:web:52610a657fb035c4960eb3"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };