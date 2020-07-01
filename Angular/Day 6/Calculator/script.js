function GetRandomNo() {
    return Math.floor(Math.random() * 10) + 1
}
function AddTwoNumbers(no1) {
    no2 = GetRandomNo();
    return no1 + no2;
}

console.log("AddTwoNumbers: " + AddTwoNumbers(10, 20));

//Write a program to create a calculator with all arithmetic operations has functions;

class ArithmeticCalculator {
    constructor(no1, no2) {
        console.log("Executing calculator operations:");
        this.no1 = no1;
        this.no2 = no2;
    }
    SumOfTwoNumbers() {
        console.log("SumOfTwoNumbers : " + (this.no1 + this.no2));
    }
    DiffOfTwoNumbers() {
        console.log("DiffOfTwoNumbers : " + (this.no1 - this.no2));
    }
    MulOfTwoNumbers() {
        console.log("MulOfTwoNumbers : " + (this.no1 * this.no2));
    }
    DivOfTwoNumbers() {
        console.log("DivOfTwoNumbers : " + (this.no1 / this.no2));
    }
}

cal = new ArithmeticCalculator(10, 20)
cal.SumOfTwoNumbers()
cal.DiffOfTwoNumbers()
cal.MulOfTwoNumbers()
cal.DivOfTwoNumbers()

