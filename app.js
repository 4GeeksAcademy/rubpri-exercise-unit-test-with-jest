const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

const fromEuroToDollar = function(valueInEuro){
    
    let valueInDollar = valueInEuro * 1.2;
    
    return valueInDollar;
}

const fromDollarToYen = function(value){
 
    let valueInYenes = value * 127.9;
    
    return Math.floor(valueInYenes);
}

const fromYenToPound = function(value){
 
    let valueInPound = value * 0.8;
    
    return Math.floor(valueInPound);
}



let oneEuroIs = {
    "JPY": 127.9, 
    "USD": 1.2, 
    "GBP": 0.8, 
}


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };