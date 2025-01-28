function histogram(array) {
    let numbsCount = array[0];
    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let group4 = 0;
    let group5 = 0;
    for (i = 1; i <= numbsCount; i++) {
        let currentNumber = array[i];

        if (currentNumber < 200) {
            group1++;
        } else if (currentNumber <= 399) {
            group2++;
        } else if (currentNumber <= 599) {
            group3++;
        } else if (currentNumber <= 799) {
            group4++;
        } else {
            group5++;
        }
    }
    console.log((group1 / numbsCount * 100).toFixed(2) + "%");
    console.log((group2 / numbsCount * 100).toFixed(2) + "%");
    console.log((group3 / numbsCount * 100).toFixed(2) + "%");
    console.log((group4 / numbsCount * 100).toFixed(2) + "%");
    console.log((group5 / numbsCount * 100).toFixed(2) + "%");
}