let gondola = {quantity: 7, insured: true, operational: true, pricePer: 3800};
let stockCar = {quantity: 1, insured: true, operational: false, pricePer: 6500};
let locomotive = {quantity: 5, insured: false, operational: false, pricePer: 2875};
let cattleCar = {quantity: 6, insured: false, operational: false, pricePer: 7500};
let boxCar = {quantity: 8, insured: true, operational: true, pricePer: 4157};
let tankCar = {quantity: 3, insured: true, operational: true, pricePer: 7200};

let carArray = [gondola, stockCar, locomotive, cattleCar, boxCar, tankCar];

//Task 1: Get list of all cars reported as non operational (operational = false)
var nonOperational = [];

for(let i = 0; i < carArray.length; i++){

   if (carArray[i].operational === false){

    nonOperational.push(carArray[i]); 
    let car = carArray[i];
    console.log(car)// How can i get the name of the object?
//     // nonOperational.push(carArray[i]);

   }
//    console.log('Non-operational cars: ' + nonOperational[i])
}



// //Task 2: Get count of all cars with no Insurance
var unInsuredCount = 0;

for(let i = 0; i < carArray.length; i++){


    if (carArray[i].insured === false){
        
        unInsuredCount += carArray[i].quantity;
       
    }
  
 }
 console.log('Uninsured cars: ' + unInsuredCount);

 // //Task 3: Total dollar amount spent on tankCars, stockCars, boxCars over 6500.00
// // if the dollar amount spent on each ^ > 6500.00 add to total

totalCarAmount = 0;

for(let i = 0; i < carArray.length; i++){

        if (carArray[i].pricePer >= 6500){
            
            totalCarAmount += carArray[i].pricePer * carArray[i].quantity;
        
        }
}
console.log(`Total dollar amount: $${totalCarAmount}`);
