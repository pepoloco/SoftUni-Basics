function salary(input) {

    let facebook = 150.00;
    let instagram = 100.00;
    let reddit = 50.00;

    let tabsOpened = Number(input[0]);
    let salary = Number(input[1]);


    for (let i = 1; i <= tabsOpened + 2; i++) {

        switch (input[i]) {
            case ("Facebook"):
                salary -= facebook;
                break;
            case ("Instagram"):
                salary -= instagram;
                break;
            case ("Reddit"):
                salary -= reddit;
                break;
        }
        if (salary <= 0) {
            console.log("You have lost your salary.");
            break;
        }
    }
    if (salary != 0) {
        console.log(`${salary}`);
    }
}
salary(["3",
    "500",
    "Facebook",
    "Stackoverflow.com",
    "softuni.bg"]);
