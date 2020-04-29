'use strict';

let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

let expenseItem1 = prompt("Введите обязательную статью расходов в этом месяце", "");
let cost1 = +prompt("Во сколько обойдется", "");
let expenseItem2 = prompt("Введите обязательную статью расходов в этом месяце", "");
let cos2t = +prompt("Во сколько обойдется", "");

appData.expenses[expenseItem1] = cost1;
appData.expenses[expenseItem2] = cost2;

alert(`Ваш бюджет на 1 день: ${appData.budget / 30}`);
