function smallestNum(input) {

    let smallerNum = Number.MAX_SAFE_INTEGER;
    let index = 0;

    let number = input[index];

    while (number !== "Stop") {
        number = input[index];
        index++;
        let smallNum = Number(number);

        if (smallNum <= smallerNum) {
            smallerNum = smallNum;
        }
    }
    console.log(smallerNum);

}
smallestNum(["100",
    "99",
    "80",
    "70",
    "Stop"]);