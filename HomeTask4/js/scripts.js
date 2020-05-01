'use strict';

let money, time;

function start(){
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  // Цикл будет выполняться пока money будет NaN, либо "", либо null
  while(isNaN(money) || money == "" || money == null){
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}

start();

// Создает объект appData
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function(){
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
    },
    detectDayBudget: function(){
      appData.moneyPerDay = (appData.budget / 30).toFixed();
      alert(`Ваш дневной бюджет составляет: ${appData.moneyPerDay}`);
    },
    detectLevel: function(){
      if (appData.moneyPerDay < 100) {
          console.log("Минимальный уровень достатка");
      } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
          console.log("Средний уровень достатка");
      } else if (appData.moneyPerDay > 2000) {
          console.log("Высокий уровень достатка");
      } else {
          console.log("Произошла ошибка");
      }
    },
    checkSavings: function(){
      if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с Вашего депозипа: " + appData.monthIncome);
      }
    },
    chooseOptExpenses: function(){
      for (let i = 1; i < 4; i++) {
        let answer = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = answer;
      }
    },
    chooseIncome: function(){
      for(let i = 0; i < 1; i++){
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
        if(typeof(items) === "string" && items != "" && typeof(items) != null){
            appData.income = items.split(', ');
            appData.income.push(prompt("Может что-то еще?",""));
            appData.income.sort();
        }
        else {
          alert(`Вы ввели некоректные данные, попробуйте еще раз.
                Можно ввести только строку, не пустую, отменить ввод нельзя`);
          i--;
        }
      }

      let incomeItems = [];
      appData.income.forEach(function(item, index) {
        incomeItems.push(`${index + 1}) ${item}.`);
      });
      alert(`Способы доп. заработка: ${incomeItems}.`);
    },
    output: function(){
      for(let key in appData){
        console.log(`Наша программа включает в себя данные: ${key}: ${appData[key]}`);
      }
    }
};