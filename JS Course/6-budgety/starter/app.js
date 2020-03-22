// budget controller

let budgetController = (function() {
	let Expence = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	let Income = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	let data = {
		allItems: {
			exp: [],
			inc: []
		},
		totals: {
			exp: 0,
			inc: 0
		},
		budget: 0,
		porsentage: -1
	};

	let budgetSetup = function(type) {
		let sum = 0;

		data.allItems[type].forEach(cur => {
			sum += cur.value;
		});

		data.totals[type] = sum;
	};

	return {
		addItem: function(type, des, val) {
			let newValue, ID;

			// Create new ID
			if (data.allItems[type].length > 0) {
				ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
			} else ID = 0;

			// Create new item base on type
			if (type == "exp") {
				newValue = new Expence(ID, des, val);
			} else if (type == "inc") {
				newValue = new Income(ID, des, val);
			}

			// Push value into data Structure
			data.allItems[type].push(newValue);

			//Retur the new element
			return newValue;
		},

		calculateBudget: function(type, value) {
			budgetSetup("inc");
			budgetSetup("exp");

			data.budget = data.totals.inc - data.totals.exp;

			if (data.totals.inc !== 0) {
				data.porsentage = Math.round((data.totals.exp / data.totals.inc) * 100);
			} else data.porsentage = -1;
		},

		getBudget: function() {
			return {
				bubgetTotal: data.budget,
				porsentage: data.porsentage,
				income: data.totals.inc,
				expenses: data.totals.exp
			};
		}
	};
})();

// UI Controller

var UIController = (function() {
	let DOMstrings = {
		inputType: ".add__type",
		inputValue: ".add__value",
		inputDescription: ".add__description",
		inputBTN: ".add__btn",
		incomeList: ".income__list",
		expensesList: ".expenses__list",
		bubgetLabel: ".budget__value",
		incomeLabel: ".budget__income--value",
		expenceLabel: ".budget__expenses--value",
		porsentageLabel: ".budget__expenses--percentage"
	};

	return {
		inputData: function() {
			return {
				type: document.querySelector(DOMstrings.inputType).value,
				value: parseFloat(document.querySelector(DOMstrings.inputValue).value),
				description: document.querySelector(DOMstrings.inputDescription).value
			};
		},

		getDOMstrings: function() {
			return DOMstrings;
		},

		addItemUI: function(obj, type) {
			let html, element, newHtml;
			//Create the HTML string
			if (type == "exp") {
				element = DOMstrings.expensesList;
				html = `<div class="item clearfix" id="%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>`;
			} else if (type == "inc") {
				element = DOMstrings.incomeList;
				html = `<div class="item clearfix" id="%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>`;
			}

			//Replase all HTML with the data
			newHtml = html.replace("%id%", obj.id);
			newHtml = newHtml.replace("%description%", obj.description);
			newHtml = newHtml.replace("%value%", obj.value);

			//Insert HTML into the DOM
			document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
		},

		clearFields: function() {
			let fields, fieldsArr;

			fields = document.querySelectorAll(
				DOMstrings.inputDescription + ", " + DOMstrings.inputValue
			);
			fieldsArr = Array.prototype.slice.call(fields);
			fieldsArr.forEach(function(current, index, array) {
				current.value = "";
			});

			fieldsArr[0].focus();
		},

		displayBudget: function(budget) {
			document.querySelector(DOMstrings.bubgetLabel).textContent =
				budget.bubgetTotal;
			document.querySelector(DOMstrings.incomeLabel).textContent =
				budget.income;
			document.querySelector(DOMstrings.expenceLabel).textContent =
				budget.expenses;

			if (budget.porsentage > 0) {
				document.querySelector(DOMstrings.porsentageLabel).textContent =
					budget.porsentage + " %";
			} else {
				document.querySelector(DOMstrings.porsentageLabel).textContent = "---";
			}
		}
	};
})();

// MAIN  Controller
let controller = (function(budgetCtrl, UICtrl) {
	let setupEventListeners = function() {
		let DOM = UIController.getDOMstrings();

		document.querySelector(DOM.inputBTN).addEventListener("click", ctrlAddItem);

		document.addEventListener("keypress", function(event) {
			if (event.keyCode == 13) {
				ctrlAddItem();
			}
		});
	};

	let updateBubget = function() {
		// 1. Calculate the budget --> budget

		budgetCtrl.calculateBudget();

		// 2. Return the bubget

		let budget = budgetCtrl.getBudget();

		// 3. Display the budget on the UI --> UI

		UICtrl.displayBudget(budget);
	};

	let ctrlAddItem = function() {
		// 1. Get the field input data --> UI

		let input = UICtrl.inputData();

		if (input.description !== "" && input.value > 0 && !isNaN(input.value)) {
			// 2. Add the item to the controller --> UI

			item = budgetCtrl.addItem(input.type, input.description, input.value);

			// 3. Add new item to the UI --> UI

			UICtrl.addItemUI(item, input.type);

			//4. Clear Field

			UICtrl.clearFields();

			//5. Update Budget

			updateBubget();
		}
	};

	return {
		init: function() {
			UICtrl.displayBudget({
				bubgetTotal: 0,
				porsentage: -1,
				income: 0,
				expenses: 0
			});
			console.log("La app a iniciado");
			setupEventListeners();
		}
	};
})(budgetController, UIController);

controller.init();
