/* The sum of a range
The introduction of this book alluded to the following as a nice way to compute
the sum of a range of numbers:
console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end, and returns
an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the
sum of these numbers. Run the example program and see whether it does
indeed return 55.
As a bonus assignment, modify your range function to take an optional third
argument that indicates the “step” value used when building the array. If no
step is given, the elements go up by increments of one, corresponding to the
old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7,
9]. Make sure it also works with negative step values so that range(5, 2, -1)
produces [5, 4, 3, 2]. 

function range( start, end, step=1){
    let numbers= []
    i=0
    if (step > 0){
        while (start <= end){
            numbers[i]= start;
            start += step;
            i++;
            
        }
    }else {
        while (start >= end ){
            numbers[i]= start;
            start += step;
            i++;
            
        }
    }
    
    return numbers
}


function sum(n){
    let number= 0
    for (let i = 0; i < n.length; i++){
        number += n[i]
    }
    return number
}

console.log(sum([8,6]));
console.log(range(5,2,-1));

*/

/*
Reversing an array
Arrays have a reverse method that changes the array by inverting the order in
which its elements appear. For this exercise, write two functions, reverseArray
and reverseArrayInPlace. The first, reverseArray, takes an array as argument
and produces a new array that has the same elements in the inverse order. The
second, reverseArrayInPlace, does what the reverse method does: it modifies
the array given as argument by reversing its elements. Neither may use the
standard reverse method.
Thinking back to the notes about side effects and pure functions in the
previous chapter, which variant do you expect to be useful in more situations?
Which one runs faster?



function reverse(array){
    let newArray = []
    for (let i =0; i < array.length; i++){
     newArray.unshift(array[i]) 
    }
    return newArray
}

function reverseinplase(c){
    
    for (let i =0; i < c.length; i++){
      p= c.unshift(c[i]) 
    }
    return p
}

p= [1,2,3,4,5];

console.log(p);
console.log(reverse(p));
console.log(reverseinplase(p));
console.log(p);



function repeat(n, action) {
    for (let i = 0; i < n; i++) {
    action(i);
    }
}

let labels = [];
repeat(5, i => {
labels.push(`Unit ${i + 1}`);
});
console.log(labels);



function noisy(f) {
    return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
    };
}


noisy(Math.min);

noisy= (...args) => {
    console.log("calling with", args);
    let result = (Math.min)(...args);
    console.log("called with", args, ", returned", result);
    return result;
};

noisy(3, 2, 1);

console.log(Object.getPrototypeOf(Math.max) == Function.prototype);

let object = new class { getWord() { return "hello"; } };
console.log(object.getWord());

var isValid = function(s) {
    for(i=0; i< s.length; i++){
        if(s[i]== "("){
            if(s.indexOf(")") == -1) return false;
            else return true;
        }
        else if(s[i]== "{"){
            if(s.indexOf("}") == -1) return false;
            else return true;
        } 
        else if(s[i]== "["){
            if(s.indexOf("]") == -1) return false;
            else return true;
        } 
    }
};

*/


romNum ={
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000,
}

s=9

romnum=[I,V,X,L,C,D,M];
romVal=[1,5,10,50,100,500,1000];

console.log(romNum.keys() )



