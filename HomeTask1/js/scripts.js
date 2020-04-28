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

let expenseItem = prompt("Введите обязательную статью расходов в этом месяце", "");
let cost = +prompt("Во сколько обойдется", "");

appData.expenses[expenseItem] = cost;

alert(`Ваш бюджет на 1 день: ${appData.budget / 30}`);
