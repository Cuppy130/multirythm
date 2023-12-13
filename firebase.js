const firebaseConfig = {
    apiKey: "AIzaSyAH0MwepZ3AL8rtm_oceAZwuQcHWfGXWLk",
    authDomain: "multirhythmbeat.firebaseapp.com",
    projectId: "multirhythmbeat",
    storageBucket: "multirhythmbeat.appspot.com",
    messagingSenderId: "1001515123904",
    appId: "1:1001515123904:web:46c0d57e5b42065cf91925",
    measurementId: "G-FCB4XR4JK4"
};

const app = firebase.initializeApp(firebaseConfig);

let UID = "";
let playerRef;
let allPlayersRef;

function initializeGame(){
    console.log(UID)
    playerRef = DB.ref(`/players/${UID}`)
    playerRef.set({
        uid: UID,
        x: 0,
        y: 0,
        username: "GUEST",
    })
    allPlayersRef = DB.ref("/players");
}