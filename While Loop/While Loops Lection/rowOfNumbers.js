function rowOfNumbers(input) {

    let n = Number(input[0]);
    let index = 1;
    let numbers = index;

    while (numbers <= n) {
        console.log(numbers);
        index++;
        numbers = numbers * 2 + 1;
    }

}
rowOfNumbers(["8"]);