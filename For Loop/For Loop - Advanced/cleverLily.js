function cleverLily(input) {

    let lilysAge = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let toysCounter = 0;
    let moneyCounter = 0;


    for (let n = 1; n <= lilysAge; n++) {
        if (n % 2 != 0) {
            toysCounter++;
        } else {
            moneyCounter += 10 + (2 * 10);
        }
    }
    let toysProfit = toyPrice * toysCounter;
    let totalSum = moneyCounter + toysProfit - toysCounter;
    let difference = Math.abs(totalSum - washingMachinePrice);

    if (difference >= washingMachinePrice) {
        console.log(`Yes! ${difference.toFixed(2)}`);
    } else {
        console.log(`No! ${difference.toFixed(2)}`)
    }
}
cleverLily(["21",
    "1570.98",
    "3"]);
