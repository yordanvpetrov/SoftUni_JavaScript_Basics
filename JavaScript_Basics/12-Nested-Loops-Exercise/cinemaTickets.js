function cinemaTickets(input) {
    let index = 0;
    let movieName = input[index];
    index++;

    let students = 0;
    let standards = 0;
    let kids = 0;
    let soldTickets = 0;

    while (movieName !== "Finish") {

        let availableTickets = input[index];
        index++;
        let currentSoldTickets = 0;

        for (let i = 1; i <= availableTickets; i++) {
            let ticketType = input[index];
            index++;

            if (ticketType === "student") {
                students++;
                soldTickets++;
                currentSoldTickets++;
            } else if (ticketType === "standard") {
                standards++;
                soldTickets++;
                currentSoldTickets++;
            } else if (ticketType === "kid") {
                kids++;
                soldTickets++;
                currentSoldTickets++;
            } else if (ticketType === "End") {
                break;
            }

        }
        console.log(`${movieName} - ${((currentSoldTickets / availableTickets) * 100).toFixed(2)}% full.`);
        movieName = input[index];
        index++;
    }
    console.log(`Total tickets: ${soldTickets}`);
    console.log(`${((students / soldTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standards / soldTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kids / soldTickets) * 100).toFixed(2)}% kids tickets.`);
}