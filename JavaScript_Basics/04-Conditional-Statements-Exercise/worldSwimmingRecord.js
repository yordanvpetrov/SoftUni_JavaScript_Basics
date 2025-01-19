function worldSwimmingRecord(currentRecord, distance, secondsPer100Meter) {
    let distanceInTime = distance * secondsPer100Meter;
    let slowedTime = Math.floor(distance / 15);
    let extraTime = slowedTime * 12.5;
    let totalTime = distanceInTime + extraTime;

    if (totalTime >= currentRecord) {
        result = totalTime - currentRecord;
        console.log(`No, he failed! He was ${(result).toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
}