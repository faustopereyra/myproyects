/*
function fausto(){
    this.nombre= "fausto"
    this.apellido= "Pereyra"
    this.edad= "19"
    this.estadoCivil= "soltero"
}

var putoAmo= new fausto()

putoAmo.edad= "20"

console.log(putoAmo)

*/

// Lecture: Functions returning functions
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');


teacherQuestion('John');
designerQuestion('John');
designerQuestion('jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark');*/


/*

function interviewQuestion(job){

    return function(name){
        if (job === 'designer'){
            console.log(name + ', can you please explain what UX design is?');
        }
        else if (job === 'teacher'){
            console.log('What subject do you teach, ' + name + '?');
        }
        else{
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var interviewDesigner= interviewQuestion("designer");

interviewDesigner("juan");

*/

/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

/*

(function(){
    // Build a function constructor 

    function question(question,answer,correctAnswer){
        this.question = question;
        this.answer= answer;
        this.correctAnswer= correctAnswer; 
    }

    question.prototype.showOff= function(){
        for(i=0; i<this.answer.length; i++){
            console.log(i+ ": " + this.answer[i]);
        }
    }

    question.prototype.game= function(){

        this.showOff();
        var chose= prompt(this.question);
        if(chose == this.correctAnswer){
            console.log("correct answer");
        }else{
            console.log("incorrect answer");
        }
    }

    // Create a cuple of questions using the array

    q1= new question("cuanto es 2+2?",[2,4,6], 1);
    q2= new question("cual es el sentido de la vida?", ["42", "morir", "ver netflix"], 0);
    q3= new question("en que año nacio fausto?", ["2001", "2011", "2000"], 2);


    // Store the questions inside of an array

    questions= [q1, q2, q3];

    //Select one random question and log it on the console, together with the possible answers



    questions[Math.floor(Math.random() *questions.length)].game();
})()

*/

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function(){

    
    // Build a function constructor 

    function question(question,answer,correctAnswer){
        this.question = question;
        this.answer= answer;
        this.correctAnswer= correctAnswer; 
    }

    question.prototype.showOff= function(){
        console.log(this.question);
        for(i=0; i<this.answer.length; i++){
            console.log(i+ ": " + this.answer[i]);
        }
    }

    question.prototype.game= function(){

        this.showOff();
        var chose= prompt(this.question);
        
        if(chose == "exit"){
            console.log("your final score is: "+ score)
        }
        else{
            if(chose == this.correctAnswer){
                console.log("correct answer");
                score++ ;
            }
            else{
                console.log("incorrect answer");
            }
            this.display()
            this.repeat()
        }
        
    }

    question.prototype.repeat=function(){
        questions[Math.floor(Math.random() *questions.length)].game();
    }

    question.prototype.display= function(){
        console.log("current score: " + score);
    }

    // Create a cuple of questions using the array

    q1= new question("cuanto es 2+2?",[2,4,6], 1);
    q2= new question("cual es el sentido de la vida?", ["42", "morir", "ver netflix"], 0);
    q3= new question("en que año nacio fausto?", ["2001", "2011", "2000"], 2);

    // Store the questions inside of an array

    questions= [q1, q2, q3];
    var score= 0;

    //Select one random question and log it on the console, together with the possible answers

    questions[Math.floor(Math.random() *questions.length)].game();

})()