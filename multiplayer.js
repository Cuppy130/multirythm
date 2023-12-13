const DB = firebase().database()

let playerRef;
let playerStats = {
    x: 0,
    y: 0,
    xv: 0,
    yv: 0,
    username: "Guest",
}

playerRef = DB.ref("/players/"+UID)
