let calculateTipPercent = function (billValue) {
    return billValue >= 50 && billValue <= 300 ? 15 : 20;
}

let calculateTip = function (billValue, tipPercent) {
    return billValue * (tipPercent / 100);
}

let printTotalBill = function (billValue) {
    console.log(`Bill value: ${billValue}, ${calculateTipPercent(billValue)}% Tip: ${calculateTip(billValue, calculateTipPercent(billValue))} and the total value: ${billValue + calculateTip(billValue, calculateTipPercent(billValue))}`);
}

printTotalBill(275);
printTotalBill(350);
printTotalBill(15);
printTotalBill(50);