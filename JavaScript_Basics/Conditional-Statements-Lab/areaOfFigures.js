function areaOfFigures(arg1, arg2, arg3) {
    let type = arg1;
    let a = Number(arg2);
    let b = Number(arg3);

    if (type === "square") {
        let area = a * a;
        console.log(area.toFixed(3));
        
    } else if (type === "rectangle") {
        let area = a * b;
        console.log(area.toFixed(3));
        
    } else if (type === "circle") {
        let area = Math.PI * Math.pow(a, 2);
        console.log(area.toFixed(3));
        
        
    } else if (type === "triangle") {
        let area = a * b / 2;
        console.log(area.toFixed(3));
        
    }
}