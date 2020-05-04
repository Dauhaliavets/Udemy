let startBtn = document.getElementById('start'),
    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),
	expensesItem = document.getElementsByClassName('expenses-item'),
	arrayBtnAll = document.getElementsByTagName('button'),
    expensesBtn = document.getElementsByTagName('button')[0];
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	chooseIncome = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value');

let money, time;

// Создает объект appData
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

// Функция отключения кнопок
function deActiveBtn() {
	for (let i = 0; i < arrayBtnAll.length-1; i++) {
		arrayBtnAll[i].setAttribute("disabled", "disabled");
		arrayBtnAll[i].style.opacity = '0.3';
		arrayBtnAll[i].style.cursor = 'default';
	};
};
// Вызов функции отключения кнопок
deActiveBtn(arrayBtnAll);

// Функция включения кнопок
function ActiveBtn() {
	for (let i = 0; i < arrayBtnAll.length-1; i++) {
		arrayBtnAll[i].removeAttribute("disabled");
		arrayBtnAll[i].style.opacity = '1';
		arrayBtnAll[i].style.cursor = 'pointer';
	};
};

// Обработчик кнопки "Начать расчет"
startBtn.addEventListener('click', function() {
	time = prompt("Введите дату в формате YYYY-MM-DD", "");
	money = +prompt("Ваш бюджет на месяц?", "");

  // Цикл будет выполняться пока money будет NaN, либо "", либо null
	while(isNaN(money) || money == "" || money == null){
	money = +prompt("Ваш бюджет на месяц?", "");
	}
	appData.budget = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed();

	yearValue.value = new Date(Date.parse(time)).getFullYear();
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDay();

	// Вызов функции включения кнопок
	ActiveBtn(arrayBtnAll);
});

// Обработчик кнопки "Утвердить" обязательных расходов
expensesBtn.addEventListener('click', function() {
	let sum = 0;

	for (let i = 0; i < expensesItem.length; i++) {
		let a = expensesItem[i].value,
			b = expensesItem[++i].value;
		if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
			appData.expenses[a] = b;
			sum += +b;
		}
		else {
			i--;
		}

		expensesValue.textContent = sum;
	}
});

// Обработчик кнопки "Утвердить" необязательных расходов
optionalExpensesBtn.addEventListener('click', function() {
	for (let i = 0; i < optionalExpensesItem.length; i++) {
		let opt = optionalExpensesItem[i].value;
		appData.optionalExpenses[i] = opt;
		optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
	}
});

// Обработчик кнопки "Расчет дневного бюджета"
countBudgetBtn.addEventListener('click', function() {
	if (appData.budget != undefined){
		// Извлекает из объекта appData свойство expenses, которое также является 
		// объектом и перебираем его циклом for in, суммируя значения, приведенные
		// к числовому типу в переменную sumExpenses
		let sumExpenses = 0;
		for(let key in appData.expenses) {
			sumExpenses += +appData.expenses[key];
		}

		appData.moneyPerDay = ((appData.budget - sumExpenses) / 30).toFixed();
		dayBudgetValue.textContent = appData.moneyPerDay;

		if (appData.moneyPerDay < 100) {
			levelValue.textContent = "Минимальный уровень достатка";
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			levelValue.textContent = "Средний уровень достатка";
		} else if (appData.moneyPerDay > 2000) {
			levelValue.textContent = "Высокий уровень достатка";
		} else {
			levelValue.textContent = "Произошла ошибка";
		}
	} else {
		dayBudgetValue.textContent = 'Произошла ошибка';
	}

});

// Событие обрабатывается, когда input выбора возможного дохода изменяется
// и передается в свойство-массив income объекта appData. А затем в блок вывода
chooseIncome.addEventListener('input', function() {
	let items = chooseIncome.value;
	appData.income = items.split(', ');
	incomeValue.textContent = appData.income;
});

// Обработчик события 'click' на checkbox
checkSavings.addEventListener('click', function() {
	if (appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

// Событие обрабатывается, когда input суммы накоплений изменяется,
// при этом checkbox checkSavings должен быть со значением true.
sumValue.addEventListener('input', function() {
	if (appData.savings == true) {
		let sum = +sumValue.value,
			percent = +percentValue.value;

		appData.monthIncome = sum/100/12*percent;
		appData.yearIncome = sum/100*percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

// Событие обрабатывается, когда input процента дохода изменяется,
// при этом checkbox checkSavings должен быть со значением true.
percentValue.addEventListener('input', function() {
	if (appData.savings == true) {
		let sum = +sumValue.value,
			percent = +percentValue.value;

		appData.monthIncome = sum/100/12*percent;
		appData.yearIncome = sum/100*percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});