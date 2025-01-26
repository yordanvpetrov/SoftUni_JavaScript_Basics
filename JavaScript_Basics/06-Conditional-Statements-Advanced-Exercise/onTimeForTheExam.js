function onTimeForTheExam(examHour, examMinute, arrivalHour, arrivalMinute) {
    let examTimeInMinutes = examHour * 60 + examMinute;
    let arrivalTimeInMinutes = arrivalHour * 60 + arrivalMinute;
    let difference = Math.abs(arrivalTimeInMinutes - examTimeInMinutes);

    if (examTimeInMinutes > arrivalTimeInMinutes) {
        if (difference < 60) {
            if (difference <= 30) {
                console.log(`On Time`);
                console.log(`${difference} minutes before the start`);
            } else {
                console.log(`Early`);
                console.log(`${difference} minutes before the start`);
            }
        } else if (difference === 60) {
            let hour = Math.floor(difference / 60);
            let minutes = difference % 60
            console.log("Early");
            console.log(`${hour}:0${minutes} hours before the start`);
        } else {
            let hour = Math.floor(difference / 60);
            let minutes = difference % 60
            if (minutes < 10) {
                console.log("Early");
                console.log(`${hour}:0${minutes} hours before the start`);
            } else {
                console.log("Early");
                console.log(`${hour}:${minutes} hours before the start`);
            }
        }
    } else if (examTimeInMinutes < arrivalTimeInMinutes) {
        if (difference < 60) {
            console.log("Late");
            console.log(`${difference} minutes after the start`);
        } else if (difference === 60) {
            let hour = Math.floor(difference / 60);
            let minutes = difference % 60
            console.log("Late");
            console.log(`${hour}:0${minutes} hours after the start`);
        } else {
            let hour = Math.floor(difference / 60);
            let minutes = difference % 60
            if (minutes < 10) {
                console.log("Late");
                console.log(`${hour}:0${minutes} hours after the start`);
            } else {
                console.log("Late");
                console.log(`${hour}:${minutes} hours after the start`);
            }
        }
    } else {
        console.log("On Time");
    }
}