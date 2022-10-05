function balanceAccount(input) {

    let totalBalance = 0;
    let index = 0;
    let money = input[index];

    while (money != "NoMoreMoney") {
        if (money < 0) {
            console.log("Invalid operation!");
            break;
        }
        let paymentC = Number(money);
        index++;
        money = input[index];
        console.log(`Increase : ${paymentC.toFixed(2)}`);
        totalBalance += paymentC;
    }

    console.log(`Total: ${totalBalance.toFixed(2)}`);



}
balanceAccount(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"]);
