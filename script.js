//mass in kg, height in meteres
let calculateBMI = function (mass, height) {
    return mass / height ** 2;
};

// TEST 1
let markWeight = 90;
let markHeight = 1.79;

let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = calculateBMI(markWeight, markHeight);
let johnBMI = calculateBMI(johnWeight, johnHeight);

markHigherBMI = johnBMI < markBMI;

console.log('TEST1:');
if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}

//TEST 2
markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

markBMI = calculateBMI(markWeight, markHeight);
johnBMI = calculateBMI(johnWeight, johnHeight);

markHigherBMI = johnBMI < markBMI;

console.log('TEST2:');

// CHALLENGE #2
if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}
