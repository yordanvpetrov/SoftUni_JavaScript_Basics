function sumSeconds(arg1, arg2, arg3) {
    let totalTime = Number(arg1 + arg2 + arg3)
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);

    } else {
        console.log(`${minutes}:${seconds}`);

    }
}