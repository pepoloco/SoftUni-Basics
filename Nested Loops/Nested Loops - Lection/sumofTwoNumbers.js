function sumOfTwoNumbers(input) {

    let combinationsCounter = 0;

    let index = 0;
    let start = Number(input[index]);
    index++;
    let end = Number(input[index]);
    index++;
    let magicNumber = Number(input[index]);

    let isFinish = false;

    for (let x = start; x <= end; x++) {
        for (let y = start; y <= end; y++) {
            let result = x + y;
            combinationsCounter++;
            if (result === magicNumber) {
                console.log(`Combination N:${combinationsCounter} (${x} + ${y} = ${magicNumber})`);
                isFinish = true;
                break;
            }
        }
        if (isFinish) {
            break;
        }

    }
    if (!isFinish) {
        console.log(`${combinationsCounter} combinations - neither equals ${magicNumber}`);
    }

}
sumOfTwoNumbers(["23",
    "24",
    "20"]);

