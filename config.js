import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDDB3NH_cTGyBHoaCteqKX55p_4L85IKgo",
  authDomain: "ciclistaeletronico-acbee.firebaseapp.com",
  databaseURL: "https://ciclistaeletronico-acbee-default-rtdb.firebaseio.com",
  projectId: "ciclistaeletronico-acbee",
  storageBucket: "ciclistaeletronico-acbee.appspot.com",
  messagingSenderId: "134391672605",
  appId: "1:134391672605:web:7367f1bbee7736d7ba3bf4"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
