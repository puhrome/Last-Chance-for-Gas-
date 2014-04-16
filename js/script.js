/**
 * Last Chance for Gas! Created by Phirom Yim on 4/14/14.
 */
//
//gas mileage is var mpg
var mpg = 35;
//gas percentage is var gas
var gas = 25;
//tank capacity is var capacity
var capacity = 15;

//if gas is more than 40 percent which is 210 miles then no gas station stop needed
//if gas is less than 40 percent then stop at gas station

if(capacity * mpg < gas){
//if tank capacity times gas mileage is less than gas percent
    console.log("You can make it without stopping for gas!");

}else{
//if greater than or equal to then get gas
    console.log("You only have");
    console.log(mpg * capacity /gas);
    console.log("gallons of gas in your tank, better get gas while you can!");
}
