function wordReading(input) {

    index = 0;
    let i = input[index];

    while (i != "Stop") {
        console.log(i);
        index++;
        i = input[index];

    }

}
wordReading(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"]);
