function cinema(type, row, columns) {
    let income = 0;
    if (type === "Premiere") {
        income = (row * columns) * 12;
    } else if (type === "Normal") {
        income = (row * columns) * 7.50;
    } else if (type === "Discount") {
        income = (row * columns) * 5
    }
    console.log(income.toFixed(2));
}