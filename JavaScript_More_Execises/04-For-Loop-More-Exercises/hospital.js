function hospital(input) {
    let days = Number(input[0]);
    let index = 1;
    let patients = Number(input[index]);
    index++;

    let doctors = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;

    for (let i = 1; i <= days; i++) {
        if (i % 3 === 0) {
            if (untreatedPatients > treatedPatients) {
                doctors++;
            }
        }

        if (doctors >= patients) {
            treatedPatients += patients;
        } else {
            untreatedPatients += patients - doctors;
            treatedPatients += doctors;
        }
        patients = Number(input[index]);
        index++;
    }
    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}