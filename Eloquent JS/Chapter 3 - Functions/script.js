/*
Consider this puzzle: by starting from the number 1 and repeatedly either
adding 5 or multiplying by 3, an infinite set of numbers can be produced. How
would you write a function that, given a number, tries to find a sequence of
such additions and multiplications that produces that number?
For example, the number 13 could be reached by first multiplying by 3 and
then adding 5 twice, whereas the number 15 cannot be reached at all.
*/


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

calc(1, 13)