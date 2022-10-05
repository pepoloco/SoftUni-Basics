function password(input) {

    let name = input[0];
    let password = input[1];
    let index = 2;
    let data = input[index];

    while (data != password) {
        data = input[index];
        index++;
    }
    console.log(`Welcome ${name}!`);
}
password(["Gosho",
    "secret",
    "2"]);
