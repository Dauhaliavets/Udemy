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

// Цикл for
for (let i = 0; i < 2; i++) {
    let expenseItem = prompt("Введите обязательную статью расходов в этом месяце", ""),
        cost = +prompt("Во сколько обойдется", "");
    if ( (typeof(expenseItem)) === 'string' && (typeof(expenseItem)) != null && (typeof(cost)) != null
        && expenseItem != '' && cost != '' && expenseItem.length < 50 ) {
        console.log("done");
        appData.expenses[expenseItem] = cost;
    }
    else {
        alert("Вы ввели некоректные данные. Попробуйте еще раз!!!");
        i--;
    }
}

// ---------- Цикл с предусловием while () {};
// let i = 0;
// while (i < 2) {
//     let expenseItem = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         cost = +prompt("Во сколько обойдется", "");
//     if ( (typeof(expenseItem)) === 'string' && (typeof(expenseItem)) != null && (typeof(cost)) != null
//         && expenseItem != '' && cost != '' && expenseItem.length < 50 ) {
//         console.log("done");
//         appData.expenses[expenseItem] = cost;
//     }
//     else {
//         alert("Вы ввели некоректные данные. Попробуйте еще раз!!!");
//         i--;
//     }
//     i++;
// }

// ---------- Цикл с постусловием do {} while ();
// let i = 0;
// do {
//     let expenseItem = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     cost = +prompt("Во сколько обойдется", "");
//     if ( (typeof(expenseItem)) === 'string' && (typeof(expenseItem)) != null && (typeof(cost)) != null
//         && expenseItem != '' && cost != '' && expenseItem.length < 50 ) {
//         console.log("done");
//         appData.expenses[expenseItem] = cost;
//     }
//     else {
//         alert("Вы ввели некоректные данные. Попробуйте еще раз!!!");
//         i--;
//     }
//     i++;
// }
// while (i < 2);


appData.moneyPerDay = appData.budget / 30;

alert(`Ежедневный бюджет: ${appData.moneyPerDay}`);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}
