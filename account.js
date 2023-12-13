const DB = firebase.database()
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        UID = user.uid;
        initializeGame();
    } else {
        //not logged in
    }
});
firebase.auth().signInAnonymously()
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log('[FIREBASE ERROR]',errorCode,errorMessage)
});