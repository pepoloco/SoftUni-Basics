function sumOfVowels(input) {

    let n = input[0];
    let sum = 0;


    for (let index = 0; index < n.length; index++) {

        if (n[index] == "a") {
            sum += 1;
        } else if (n[index] == "e") {
            sum += 2;
        } else if (n[index] == "i") {
            sum += 3;
        } else if (n[index] == "o") {
            sum += 4;
        } else if (n[index] == "u") {
            sum += 5;
        }
    }
    console.log(`The sum of the the vowels is:${sum}`);
}
sumOfVowels(['hello']);