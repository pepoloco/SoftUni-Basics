function sumNumbers(input) {

    let n = input[0];
    let sum = 0;

    for (let i = 0; i < n.length; i++) {
        currentNum = Number(n[i])
        sum += currentNum
    }
    console.log(`The sum of the digits is:${sum}`);
}
sumNumbers(['1234']);