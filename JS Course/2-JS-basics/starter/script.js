/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. 
(Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/




/*var mass, height;

function bmi_calculator(mass,height) {

    BMI = mass / (height * height);
    return BMI   
}

var Mark_BMI, John_BMI;

Mark_BMI= bmi_calculator(80,1.7);
John_BMI= bmi_calculator(60,1.5);

var isHigher= Mark_BMI > John_BMI;

console.log("Is Mark's BMI higher than John's? "+ isHigher)

console.log(John_BMI)
console.log(Mark_BMI)
*/

/*
var Mark_BMI, John_BMI, massMark, heightMark, massJohn, heightJohn;

massMark= 80
heightMark= 1.7
massJohn= 60
heightJohn=1.5

Mark_BMI= massMark / (heightMark * heightMark);
John_BMI= massJohn / (heightJohn * heightJohn);

var isHigher= Mark_BMI > John_BMI;

console.log("Is Mark's BMI higher than John's? "+ isHigher);
*/



/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, 
while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. 
Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. 
Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. 
If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀


var johnTeam, mikeTeam;

johnTeam=[89,120,103]
mikeTeam=[116,94,123]
maryTeam=[97,134,105]


johnAverage=(johnTeam[0]+johnTeam[1]+johnTeam[2])/johnTeam.length
mikeAverage=(mikeTeam[0]+mikeTeam[1]+mikeTeam[2])/mikeTeam.length
maryAverage=(maryTeam[0]+maryTeam[1]+maryTeam[2])/maryTeam.length

if (johnAverage < mikeAverage && maryAverage < mikeAverage){
    console.log("Mike is the winner with "+ mikeAverage + " points")
} else if (johnAverage > maryAverage) {
    console.log(`John is the winner with ${johnAverage} points`)
} else if (johnAverage < maryAverage) {
    console.log(`Mary is the winner with ${maryAverage} points`)
} else{
    console.log("it is a draw!!!")
}
*/


/*
// Modo Pro

var johnTeam, mikeTeam;

johnTeam=[89,120,103]
mikeTeam=[116,94,123]
maryTeam=[97,134,105]


johnAverage=(johnTeam[0]+johnTeam[1]+johnTeam[2])/johnTeam.length
mikeAverage=(mikeTeam[0]+mikeTeam[1]+mikeTeam[2])/mikeTeam.length
maryAverage=(maryTeam[0]+maryTeam[1]+maryTeam[2])/maryTeam.length

for (y in johnTeam){
    var i=0
    i++
    console.log(i)
    
}




if (johnAverage < mikeAverage && maryAverage < mikeAverage){
    console.log("Mike is the winner with "+ mikeAverage + " points")
} else if (johnAverage > maryAverage) {
    console.log(`John is the winner with ${johnAverage} points`)
} else {
    console.log(`Mary is the winner with ${maryAverage} points`)
}
*/


/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). 
He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200,
and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/


/*

function tip_calculator(bill_amount) {
    
    if (bill_amount < 50){
        tip= bill_amount*0.2;
    }else if (bill_amount < 200){
        tip= bill_amount*0.15;
    }else{
        tip=bill_amount*0.1;
    }
    return tip
}


var bill=[124,48,268];
var billTotal=[tip_calculator(bill[0])+bill[0],tip_calculator(bill[1])+bill[1],tip_calculator(bill[2])+bill[2]];

console.log(bill);
console.log(billTotal);
*/

/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

/*
var Mark={
    mass:200,
    height:10,
    ibm: function() {
        ibm=this.mass/(this.height*this.height);
        return ibm
    }
}

var John={
    mass:200,
    height:10,
    ibm: function() {
        ibm=this.mass/(this.height*this.height);
        return ibm
    }
}


console.log(Mark.ibm());
console.log(John.ibm());

*/

/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, 
and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). 
HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300,
and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. 
HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). 
After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

function Average(family) {
    
    family.tipCal()
    var sum=0

    for(i=0; i<family.bill.length; i++){
        sum += family.billTip[i]
    }

    result= sum/family.bill.length

    return result
}


var JohnFamily= {
    bill:[124, 48, 268, 180, 42],
    tipCal:function() {
        this.billTip=[];
        this.billTotal=[];
        for(i=0; i<this.bill.length; i++){
    
            if (this.bill[i] < 50){
                tip= this.bill[i]*0.2;
            }else if (this.bill[i] < 200){
                tip= this.bill[i]*0.15;
            }else{
                tip=this.bill[i]*0.1;
            }
            this.billTip[i]= tip
        }
        for(i=0; i<this.bill.length; i++){
            this.billTotal[i]= this.bill[i] + this.billTip[i];
        }
        return this.billTip, this.billTotal;
    }
    
}

var MarkFamily= {
    bill:[77, 375, 110, 45],
    tipCal:function() {
        this.billTip=[];
        this.billTotal=[];
        for(i=0; i<this.bill.length; i++){
    
            if (this.bill[i] < 100){
                tip= this.bill[i]*0.2;
            }else if (this.bill[i] < 300){
                tip= this.bill[i]*0.1;
            }else{
                tip=this.bill[i]*0.25;
            }
            this.billTip[i]= tip
        }
        for(i=0; i<this.bill.length; i++){
            this.billTotal[i]= this.bill[i] + this.billTip[i];
        }
        return this.billTip, this.billTotal;
    }
    
}

if(Average(JohnFamily) < Average(MarkFamily)){
    console.log("Mark paid the highest tips")
}else{
    console.log("John paid the highest tips")

}
