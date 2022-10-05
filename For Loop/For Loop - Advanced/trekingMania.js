function tekking(input) {

    let numOfGroups = Number(input[0]);
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    let totalPeople = 0;

    for (let i = 1; i <= numOfGroups; i++) {
        let people = Number(input[i]);
        if (people <= 5) {
            musala += people;
        } else if (people >= 6 && people <= 12) {
            monblan += people;
        } else if (people >= 13 && people <= 25) {
            kilimandjaro += people;
        } else if (people >= 26 && people <= 40) {
            k2 += people;
        } else {
            everest += people;
        }
    }
    totalPeople = musala + monblan + k2 + kilimandjaro + everest;


    let percentMusala = musala / totalPeople * 100;
    let percentMonblan = monblan / totalPeople * 100;
    let percentKilimandjaro = kilimandjaro / totalPeople * 100;
    let percentK2 = k2 / totalPeople * 100;
    let percentEverest = everest / totalPeople * 100;





    console.log(`${percentMusala.toFixed(2) + "%"}`);
    console.log(`${percentMonblan.toFixed(2) + "%"}`);
    console.log(`${percentKilimandjaro.toFixed(2) + "%"}`);
    console.log(`${percentK2.toFixed(2) + "%"}`);
    console.log(`${percentEverest.toFixed(2) + "%"}`);

}

trekingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"]);
