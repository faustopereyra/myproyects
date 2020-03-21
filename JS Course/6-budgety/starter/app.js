// budget controller

let budgetController= ( function(){

    let Expence = function(id, description, value){
        this.id= id;
        this.description= description;
        this.value= value;
    }
    
    let Income = function(id, description, value){
        this.id= id;
        this.description= description;
        this.value= value;
    }

    let data = {
        allItems:{
            exp:[],
            inc:[]
        },
        totals:{
            exp: 0,
            inc: 0
        }
    }

    return{
        addItem: function(type, des, val){

            let newValue, ID;

            // Create new ID
            if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length -1].id + 1;
            } else ID = 0;

            // Create new item base on type 
            if(type == "exp"){ newValue= new Expence(ID, des, val); }
            else if(type == "inc") {newValue= new Income(ID, des, val)};

            // Push value into data Structure
            data.allItems[type].push(newValue);

            //Retur the new element
            return newValue;
        },
        

        
    }
})();


// UI Controller

var UIController = ( function(){

    let DOMstrings = {
        inputType: ".add__type",
        inputValue: ".add__value",
        inputDescription: ".add__description",
        inputBTN: ".add__btn",
        incomeList:".income__list",
        expensesList:".expenses__list"
    };
    
    return {
        inputData: function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                value: document.querySelector(DOMstrings.inputValue).value,
                description: document.querySelector(DOMstrings.inputDescription).value
            }
           
        },

        getDOMstrings: function(){
            return DOMstrings;
        },

        addItemUI: function(obj, type){
            let html,element, newHtml;
            //Create the HTML string
            if(type == "exp"){
                element= DOMstrings.expensesList;
                html= `<div class="item clearfix" id="%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>`
            }else if(type == "inc"){
                element= DOMstrings.incomeList;
                html=`<div class="item clearfix" id="%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>`
            }

            //Replase all HTML with the data
            newHtml= html.replace("%id%", obj.id);
            newHtml= newHtml.replace("%description%", obj.description);
            newHtml= newHtml.replace("%value%", obj.value);

            //Insert HTML into the DOM
            document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
        }
    };
})();


// MAIN  Controller
let controller= (function(budgetCtrl, UICtrl){

    let setupEventListeners = function(){
        let DOM= UIController.getDOMstrings();

        document.querySelector(DOM.inputBTN).addEventListener("click", ctrlAddItem);

        document.addEventListener("keypress", function(event){
            if(event.keyCode == 13 ){
                ctrlAddItem()
            }
        });
    };   

    let ctrlAddItem = function(){

        // 1. Get the field input data --> UI
    
        let input= UICtrl.inputData();

        // 2. Add the item to the controller --> UI
    
        item= budgetCtrl.addItem(input.type, input.description, input.value);
        // 3. Add new item to the UI --> UI
    
        UICtrl.addItemUI(item, input.type );

        // 4. Calculate the budget --> budget
    
        //calculateBudget();

        // 5. Display the budget on the UI --> UI
    
        //displayBudget();
    }

    return{
            init: function(){
                console.log("La app a iniciado");
                setupEventListeners();
            }
    }
    
})(budgetController, UIController);



controller.init();