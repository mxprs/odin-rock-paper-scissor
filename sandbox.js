function limesToCut(wedgesNeeded, limes) {
    let neededLimes = 0;
    let nbrLimes = 0;
    
    for (let index = 0; index < limes.length; index++) {
        if (neededLimes < wedgesNeeded) {
            switch(limes[index]){
                case "small":
                    nbrLimes++;
                    neededLimes += 6;
                    console.log(nbrLimes);
                    break;
                case "medium":
                    nbrLimes++;
                    neededLimes += 8;
                    console.log(nbrLimes);
                    break;
                case "large":
                    nbrLimes++;
                    neededLimes += 10;
                    console.log(nbrLimes);
                    break;
            }
        } else {
            console.log(nbrLimes);
        }
    }
}

const limes = [
    'small',
    'large',
    'large',
    'medium',
    'small',
    'large',
    'large',
    'medium',
];

limesToCut(42, limes);