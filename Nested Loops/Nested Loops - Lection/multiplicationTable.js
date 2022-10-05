function multiplicationTable(){
    let result = 0;
for (x = 1; x <= 10; x++){
    for (y = 1; y <= 10; y ++){
        result = x * y;
        console.log(`${x} * ${y} = ${result} `);
    }
}

}
multiplicationTable();