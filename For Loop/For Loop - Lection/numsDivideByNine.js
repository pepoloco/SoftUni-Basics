function numsDivideByNine(input) {

    let n = Number(input[0]);
    let x = Number(input[1]);
    let sum = 0;
    let result = "";

    for (let i = n; i <= x; i++) {
        if (i % 9 === 0) {
            sum += i;
            result += `${sum}\n`
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(result);
}
numsDivideByNine(['100', '200']);