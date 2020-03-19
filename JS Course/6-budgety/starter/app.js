
// UI Module
var uiModule= (function() {
    
    return {
        getData: function() {
            return{
                description: document.querySelector(".add__description").value,
                value: document.querySelector(".add__value").value,
                type: document.querySelector(".add__type").value
            }
        }
        
    }
    
})();

// DATA Module
var dataModule= (function() {

     function expense(type, description, value){
       this.type= type;
       this.description= description;
       this.value= value
    }

    function income(type, description, value){
        this.type= type;
        this.description= description;
        this.value= value
    }  

    

})();

//MAIN CONTROLE  Module

var controleModule= (function(ctrlUI, ctrlData) {

    function addValue(){
        
        //1. Get the field input data

        ctrlUI.getData();

        //2. Add the item to the budget controller
        
        //3. add the item to the UI

        //4. Calculate the budget

        //5. Display the budget on the UI
    }

    document.querySelector(".add__btn").addEventListener("click", addValue);

    document.addEventListener("keypress", function(e){

        if( e.keyCode == 13){
            addValue()
        } 
    });


})(uiModule, dataModule);