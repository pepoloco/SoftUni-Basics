function traveling(input) {
    let index = 0;
    let unknown = input[index]; 
    index++
    
    while (unknown !== "End"){
        let destination = unknown;
        let budget = Number(input[index]); 
        index++;
        let saving = 0;
        while (saving < budget){
            let money = Number(input[index]);
            index++
            saving += money;
        }
        console.log(`Going to ${destination}!`);
        unknown = input[index];
        index++
        
    }
    
    
    }
traveling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"]);
