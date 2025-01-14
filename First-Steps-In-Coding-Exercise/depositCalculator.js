function calcualtor(deposit, term, annualInterest) {
    let interest = annualInterest / 100;
    let totalSum = deposit + term * ((deposit * interest) / 12);
    console.log(totalSum);
    
}