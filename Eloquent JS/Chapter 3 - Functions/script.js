/*
Consider this puzzle: by starting from the number 1 and repeatedly either
adding 5 or multiplying by 3, an infinite set of numbers can be produced. How
would you write a function that, given a number, tries to find a sequence of
such additions and multiplications that produces that number?
For example, the number 13 could be reached by first multiplying by 3 and
then adding 5 twice, whereas the number 15 cannot be reached at all.


// 1 es multiplo de tres? si lo es solo multiplica

// 2 sumar 5 es multiplo de 3? repetir hasta quew sea multiplo o repita tres veces.


let n= 1
let i= 0
let counter3= 0
let counter5= 0

function multiply3(){
    while(num !== input){
        num *=3
        counter3++
    }
    Console.log("Se llego usando...")
}

function add5(){
    num+=5
    counter5++
    calc(num)
}

function calc(num=1, input){

    if(input==num){ console.log("Se llego usando...")}
    else if(input%3==0){
        multiply3()

    }else if (i !== 3){
        i++
        add5()
    }
    else{ console.log("no se puede llegar al numero")}
}

calc(1, 13);

console.log("chequear funcionalidad");

*/

/*Minimum

The previous chapter introduced the standard function Math.min that returns
its smallest argument. We can build something like that now. Write a function
min that takes two arguments and returns their minimum.

function min (num1, num2){
    if(num1<= num2){
        return num1;
    }else{
        return num2;
    }
}

let num = min(21,45)

console.log(num)
*/

/*Recursion

We’ve seen that % (the remainder operator) can be used to test whether a
number is even or odd by using % 2 to see whether it’s divisible by two. Here’s
another way to define whether a positive whole number is even or odd:
• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. The
function should accept a single parameter (a positive, whole number) and return
a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a
way to fix this? 

isEven= function(num){
    if(num == 0) return true;
    
    else if(num == 1) return false;
   
    else return isEven(num - 2);
}

console.log(isEven(101));
console.log(isEven(10));

*/

/*Bean counting

You can get the Nth character, or letter, from a string by writing "string"[N].
The returned value will be a string containing only one character (for example,
"b"). The first character has position 0, which causes the last one to be found at
position string.length - 1. In other words, a two-character string has length
2, and its characters have positions 0 and 1.
Write a function countBs that takes a string as its only argument and returns
a number that indicates how many uppercase “B” characters there are in the
string.

Next, write a function called countChar that behaves like countBs, except
it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). Rewrite countBs to
make use of this new function. 


function countChar(str, char){
    let c=0;
    for( let n= 0; n < str.length; n++ ){
        if (str[n] === char){
            c++
        }
    }
    return c
}

function countBs(str){
    return countChar(str, "B")
}


console.log(countChar("Fausto", "F"))
console.log(countBs("BauBBtista"))
*/