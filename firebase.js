// import { initializeApp } from "firebase/app";
// import { getAuth} from "firebase/auth";
// import { getFirestore,collection, addDoc, onSnapshot} from "firebase/firestore";
// const firebaseConfig = {
//     apiKey: "AIzaSyBEzzZbHeKNA0Iycj616-kCm-aj__9dfGk",
//     authDomain: "chat-7281b.firebaseapp.com",
//     projectId: "chat-7281b",
//     storageBucket: "chat-7281b.appspot.com",
//     messagingSenderId: "1070254669",
//     appId: "1:1070254669:web:0c60151bc077d92e2aea04",
//     measurementId: "G-FTSC605W0R"
//   };
// // const firebaseConfig = {
// //   apiKey: "AIzaSyDLyvs38767fe5dnUYRtI7_xsWV-OdcV3c",
// //   authDomain: "alertappp-57e19.firebaseapp.com",
// //   projectId: "alertappp-57e19",
// //   storageBucket: "alertappp-57e19.appspot.com",
// //   messagingSenderId: "651356350775",
// //   appId: "1:651356350775:web:60391934be3232a11d92b2",
// //   measurementId: "G-F588BYMV0L"
// // };
// // const firebaseConfig = {
// //   apiKey: "AIzaSyDNeYtPiHEQqtbK7MdEU4_7t8O5d4-kp7o",
// //   authDomain: "completesetup-282e9.firebaseapp.com",
// //   projectId: "completesetup-282e9",
// //   storageBucket: "completesetup-282e9.appspot.com",
// //   messagingSenderId: "519608521118",
// //   appId: "1:519608521118:web:1541a70dc4e00a125b868f",
// //   measurementId: "G-X8SQZ3JLJN"
// // };
// const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// const db = getFirestore(app);

// export { app,auth,db, collection, addDoc, onSnapshot };
// // export {app,auth,collection}
// firebase.js
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEzzZbHeKNA0Iycj616-kCm-aj__9dfGk",
  authDomain: "chat-7281b.firebaseapp.com",
  projectId: "chat-7281b",
  storageBucket: "chat-7281b.appspot.com",
  messagingSenderId: "1070254669",
  appId: "1:1070254669:web:0c60151bc077d92e2aea04",
  measurementId: "G-FTSC605W0R"
};
// Initialize Firebase
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
