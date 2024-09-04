/**
 *  decitions making topic if else
 * 
 * if(conditions){
 * if true
 * }
 * else{
 * if false
 * 
 * }
 * 
 * 
 */

// var isRaining = true;

// if(isRaining === true){
//     console.log("Will not go outside");
// }
// else{
//     console.log("Will go Outsides");
// }

// if(!isRaining){
//     console.log("Will not go outside");
// }
// else{
//     console.log("Will go Outsides");
// }


// ternary syntax

// condition ? if true : if false

// isRaining === true ? console.log("Will not go outside") : console.log("Will go Outsides");



// var money = 10;
// var isRaining = false;
// var taxi = 15;


// if(isRaining === true && money >= taxi ){
//     console.log("will go to market");
// }
// else{
//     console.log("Will not go to market");
// }

// if(isRaining === false || money >= taxi ){
//     console.log("will go to market");
// }
// else{
//     console.log("Will not go to market");
// }


// var money = 10;

// if(money >= 100){
//     console.log("biriyani khabo");
// }
// else if(money >= 50){
//     console.log("nodoles khabo");
// }
// else if(money >= 20){
//     console.log("singara khabo");
// }
// else{
//     console.log("na kheye auto chore bari ferot");
// }


// nested if else 

var isRaining = true;
var haveUmbrella = true;

if(isRaining === true ){
    if(haveUmbrella === true){
        console.log("Will got outside, i a have my cata")
    }
    else{
        console.log("Will not go Outside, cata nai")
    }
}
else{
    console.log("Will got outside.. its a sunny day");
}