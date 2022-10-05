function sumOfNumbers(input) {
    let number = input[0];

    let x = input[1];

    let index = 0;

    let totalSum = 0;

    while (x < number) {
        x = Number(input[index]);
        index++;
        totalSum += x;
    }
    console.log(totalSum);


}
sumOfNumbers(["100",
    "10",
    "20",
    "30",
    "40"]);
