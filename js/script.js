/**
 * Last Chance for Gas! Created by Phirom Yim on 4/14/14.
 */
//

var mpg = 35;//declared and defined miles per gallon
var capacity = 15;//declared and defined tank capacity
//miles per gallon times capacity gives mileage of a full tank
var fullTank = mpg * capacity;
//200 divided by full tank multiply by 100 gives the percentage of min gas required to make it
var percentage = 200/fullTank * 100;
//user input of gas percentage has to be greater than variable percentage
var gasPercentage = Number (prompt("Enter Your Gas Percentage"));
gasPercentage > percentage;
//code performed if true
if(gasPercentage > percentage){
    //if tank capacity times gas mileage is less than gas percent
    console.log("You can make it without stopping for gas!");

}else{
    //code performed if statement is false
    console.log("You only have" + " " + gasPercentage + " " + "gallons of gas in your tank, better get gas while you can!");

}
