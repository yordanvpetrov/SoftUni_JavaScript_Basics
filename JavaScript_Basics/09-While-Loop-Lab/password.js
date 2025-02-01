function password(arr) {
    index = 0;
    let username = arr[index];
    index++;
    let password = arr[index];
    index++;
    let check = arr[index];
    index++;

    while (check !== password) {
        check = arr[index];
        index++;
    }
    console.log(`Welcome ${username}!`);
}