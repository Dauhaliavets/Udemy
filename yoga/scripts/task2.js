'use strict'
let ageInput = document.getElementById('age');
function showUser(surname, name) {
    // console.log(`${this} в функции.`);
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

ageInput.addEventListener('input', function(){
    // console.log(`${this} в контексте обработчика.`);
    showUser.call(ageInput, "Dolgolevets", "Dzmitry");
});