function histogram(input) {

    let n = Number(input[0]);


    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;


    for (let i = 1; i <= n; i++) {

        let currentNum = Number(input[i]);

        if (currentNum < 200) {
            p1Counter++;
        } if (currentNum >= 200 && currentNum <= 399) {
            p2Counter++;
        } if (currentNum >= 400 && currentNum <= 599) {
            p3Counter++;
        } if (currentNum >= 600 && currentNum <= 799) {
            p4Counter++;
        } if (currentNum >= 800) {
            p5Counter++;
        }
    }
    let p1 = (p1Counter / n * 100);
    let p2 = (p2Counter / n * 100);
    let p3 = (p3Counter / n * 100);
    let p4 = (p4Counter / n * 100);
    let p5 = (p5Counter / n * 100);

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}
histogram(["3", "1", "2", "999"]);

