function tennisRanklist(arr) {
    let tournaments = Number(arr[0]);
    let points = Number(arr[1]);
    let wonGames = 0;
    for (let i = 2; i < arr.length; i++) {
        let gameResult = arr[i]
        if (gameResult === "W") {
            points += 2000;
            wonGames++;
        } else if (gameResult === "F") {
            points += 1200;
        } else if (gameResult === "SF") {
            points += 720;
        }
     }

     console.log(`Final points: ${points}`);
     console.log(`Average points: ${Math.floor((points - Number(arr[1])) / tournaments)}`);
     console.log(`${(wonGames / tournaments * 100).toFixed(2)}%`);
}