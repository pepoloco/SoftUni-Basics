function biggestNum(input) {

    let bigNum = Number.MIN_SAFE_INTEGER;
    let index = 0;
    let n = input[index];


    while (n !== "Stop") {
        n = input[index];
        index++;
        let biggerNum = Number(n);

        if (biggerNum >= bigNum) {
            bigNum = biggerNum;
        }
    }
    console.log(bigNum);

}
biggestNum(["45",
    "-20",
    "7",
    "99",
    "Stop"]);
