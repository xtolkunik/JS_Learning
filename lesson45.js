// BMI = mass / height ** 2 (mass in kg and height in meter)

const compare = (obj1, obj2) => {
    console.log(`${obj1.firstName} weights ${obj1.weight} kg and is ${obj1.height} m tall, BMI is ${obj1.calcBMI()}. ${obj2.firstName} weights ${obj2.weight} kg and is ${obj2.height} m tall, BMI is ${obj2.calcBMI()}.`);
    console.log(`${obj1.bmi > obj2.bmi ? obj1.firstName : obj2.firstName} BMI is higher!`);
}

const mark = {
    firstName: 'Mark',
    secondName: 'Miller',
    weight: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.weight / (this.height ** 2);
        return this.bmi;
    }
};

const john = {
    firstName: 'John',
    secondName: 'Smith',
    weight: 192,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.weight / (this.height ** 2);
        return this.bmi;
    }
};

compare(mark, john);
