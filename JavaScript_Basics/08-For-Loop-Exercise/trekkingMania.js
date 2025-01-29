function trekkingMania(arr) {
    let groupSize = Number(arr[0]);
    let totalPeople = 0;
    let musala = 0;
    let monblan = 0;
    let kalimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    for (let i = 1; i <= groupSize; i++) {
        totalPeople += Number(arr[i])

        if (arr[i] <= 5) {
            musala += Number(arr[i]);
        } else if (arr[i] <= 12) {
            monblan += Number(arr[i]);
        } else if (arr[i] <= 25) {
            kalimanjaro += Number(arr[i]);
        } else if (arr[i] <= 40) {
            k2 += Number(arr[i]);
        } else {
            everest += Number(arr[i]);
        }
    }
    console.log(`${(musala / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(monblan / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(kalimanjaro / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(k2 / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(everest / totalPeople * 100).toFixed(2)}%`);
}