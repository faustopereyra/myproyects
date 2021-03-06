// budget controller

let budgetController = (function() {
	let Expence = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
		this.porsentage = -1;
	};

	let Income = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	Expence.prototype.porsentageSetup = function(c) {
		if (c > 0) {
			this.porsentage = Math.round((this.value / c) * 100);
			return this.porsentage;
		} else {
			return (this.porsentage = -1);
		}
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

		calculatePorsentage: function() {
			data.allItems.exp.forEach(function(cur) {
				cur.porsentageSetup(data.totals.inc);
			});
		},

		getPorsentage: function() {
			let porsentages = data.allItems.exp.map(function(c) {
				return c.porsentage;
			});
			return porsentages;
		},

		getBudget: function() {
			return {
				budgetTotal: data.budget,
				porsentage: data.porsentage,
				income: data.totals.inc,
				expenses: data.totals.exp
			};
		},

		deleteItem: function(type, id) {
			let ids, ind;

			ids = data.allItems[type].map(function(c) {
				return c.id;
			});

			ind = ids.indexOf(id);

			if (ind !== -1) {
				data.allItems[type].splice(ind, 1);
			}
		},

		testing: function() {
			console.log(data);
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
		budgetLabel: ".budget__value",
		incomeLabel: ".budget__income--value",
		expenceLabel: ".budget__expenses--value",
		porsentageLabel: ".budget__expenses--percentage",
		container: ".container",
		expensesPercLabel: ".item__percentage",
		dateLabel: ".budget__title--month"
	};

	let nodeListForEach = function(list, callback) {
		for (var i = 0; i < list.length; i++) {
			callback(list[i], i);
		}
	};

	let formatNumber = function(num, type) {
		num = Math.abs(num);
		num = num.toFixed(2);

		numSplit = num.split(".");

		int = numSplit[0];

		//Rechequear dps de terminar codigo

		if (int.length > 3) {
			int = int.substr(0, int.length - 3) + "," + int.substr(int.length - 3, 3);
		}
		dec = numSplit[1];

		if (type == "exp") {
			num = "-" + " " + int + "." + dec;
		} else num = "+" + " " + int + "." + dec;

		return num;
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
				html = `<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>`;
			} else if (type == "inc") {
				element = DOMstrings.incomeList;
				html = `<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>`;
			}

			//Replase all HTML with the data
			newHtml = html.replace("%id%", obj.id);
			newHtml = newHtml.replace("%description%", obj.description);
			newHtml = newHtml.replace("%value%", formatNumber(obj.value, type));

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
			let type;

			if (budget.budgetTotal > 0) {
				type = "inc";
			} else type = "exp";
			document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(
				budget.budgetTotal,
				type
			);
			document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(
				budget.income,
				"inc"
			);
			document.querySelector(
				DOMstrings.expenceLabel
			).textContent = formatNumber(budget.expenses, "exp");

			if (budget.porsentage > 0) {
				document.querySelector(DOMstrings.porsentageLabel).textContent =
					budget.porsentage + " %";
			} else {
				document.querySelector(DOMstrings.porsentageLabel).textContent = "---";
			}
		},

		deleteItemUI: function(selectorID) {
			let el = document.getElementById(selectorID);
			el.parentNode.removeChild(el);
		},

		displayPercentages: function(percentages) {
			var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);

			nodeListForEach(fields, function(current, index) {
				if (percentages[index] > 0) {
					current.textContent = percentages[index] + "%";
				} else {
					current.textContent = "---";
				}
			});
		},

		displayDate: function() {
			let now, months, month, year;

			now = new Date();

			months = [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December"
			];

			month = now.getMonth();

			year = now.getFullYear();
			document.querySelector(DOMstrings.dateLabel).textContent =
				months[month] + " " + year;
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

		document
			.querySelector(DOM.container)
			.addEventListener("click", ctrlDelItem);
	};

	let updateBudget = function() {
		// 1. Calculate the budget --> budget

		budgetCtrl.calculateBudget();

		// 2. Return the budget

		let budget = budgetCtrl.getBudget();

		// 3. Display the budget on the UI --> UI

		UICtrl.displayBudget(budget);
	};

	let updatePorsentage = function() {
		// 1. Calculate Porsentage

		budgetCtrl.calculatePorsentage();

		// 2. Return the Porsentage

		let porsentages = budgetCtrl.getPorsentage();

		// 3. Update the UI

		UICtrl.displayPercentages(porsentages);
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

			updateBudget();

			// 6. Update Porsentages

			updatePorsentage();
		}
	};

	let ctrlDelItem = function(e) {
		itemID = e.target.parentNode.parentNode.parentNode.parentNode.id;
		if (itemID) {
			splitID = itemID.split("-");
			type = splitID[0];
			ID = parseInt(splitID[1]);
			// 1. Delete item from the data strcture
			budgetCtrl.deleteItem(type, ID);

			// 2. Delete Item From the UI
			UICtrl.deleteItemUI(itemID);

			// 3. Update Budget
			updateBudget();

			// 4. Update Porsentages
			updatePorsentage();
		}
	};

	return {
		init: function() {
			UICtrl.displayDate();
			UICtrl.displayBudget({
				budgetTotal: 0,
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
