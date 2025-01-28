function oscars(arr) {
    let actorName = arr[0];
    let actorPoints = Number(arr[1]);
    for (i = 3; i < arr.length; i += 2) {
        let currentJuryName = arr[i];
        let currentJuryPoints = Number(arr[i + 1]);

        let pointsWon = currentJuryName.length * currentJuryPoints / 2;
        actorPoints += pointsWon;

        if (actorPoints >= 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${actorPoints.toFixed(1)}!`);
            break;
        }
    }

    if (actorPoints <= 1250.5) {
        let neededPoints = 1250.5 - actorPoints;
        console.log(`Sorry, ${actorName} you need ${neededPoints.toFixed(1)} more!`);
    }
}