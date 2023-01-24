let calculateAverage = function (firstScore, secondScore, thirdScore) {
    let avrg = (firstScore + secondScore + thirdScore) / 3;
    console.log(`Average score: ${avrg}`);
    return avrg;
}

let printWinner = function (firstTeam, secondTeam) {
    if (firstTeam > secondTeam && firstTeam >= 100) {
        console.log('Dolphins win!');
    } else if (secondTeam > firstTeam && secondTeam >= 100) {
        console.log('Koalas win!');
    } else if (firstTeam === secondTeam && firstTeam >= 100) {
        console.log('Draw!');
    } else console.log('No winner!');
}

//TEST 1 
let DolphinsScore = calculateAverage(96, 108, 89);
let KoalasScore = calculateAverage(88, 91, 110);
printWinner(DolphinsScore, KoalasScore);
//TEST2
DolphinsScore = calculateAverage(97, 112, 101);
KoalasScore = calculateAverage(109, 95, 123);
printWinner(DolphinsScore, KoalasScore);

//TEST3
DolphinsScore = calculateAverage(97, 112, 101);
KoalasScore = calculateAverage(109, 95, 106);
printWinner(DolphinsScore, KoalasScore);