function fishTank(lenght, width, height, percent) {
    let totalVolume = (lenght * width * height) * 0.001;
    let usedVolume = totalVolume * (percent / 100);
    let availableVolume = totalVolume - usedVolume;
    console.log(availableVolume);
    
}