function booksList(qtyPages, pagesPerHour, qtyDays) {
    let hoursNeeded = qtyPages / pagesPerHour;
    let hoursPerDay = hoursNeeded / qtyDays;
    console.log(hoursPerDay);
    
}